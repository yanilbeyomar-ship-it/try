#!/usr/bin/env python3
"""Assemble la version autonome de la plaquette de Salses-le-Chateau.

Lit salses_source.html et encode en base64 tous les fichiers de salses_assets/
reellement presents, pour produire salses_le_chateau.html : un fichier unique,
transferable par email et ouvrable sans le dossier d'images.

Les visuels absents restent references en chemin relatif : la page affiche alors
l'emplacement reserve correspondant, et il suffit de deposer le fichier au bon
nom dans salses_assets/ puis de relancer ce script.

Usage : python3 build_salses.py
"""
import base64
import mimetypes
import pathlib
import re

RACINE = pathlib.Path(__file__).parent
ASSETS = RACINE / "salses_assets"

# (source, version autonome, version en ligne). La version en ligne est
# optionnelle : la plaquette imprimee n'a pas de selecteur a forcer.
DOCUMENTS = [
    ("salses_source.html", "salses_le_chateau.html", "salses_artifact.html"),
    ("roussillon41_source.html", "roussillon41.html", "roussillon41_artifact.html"),
]

# L'hebergeur d'artifacts enveloppe lui-meme le fichier dans un squelette
# <!doctype>...<head>...<body>, donc ces balises doivent disparaitre.
ENVELOPPE = re.compile(
    r"<!DOCTYPE html>\s*|</?html[^>]*>\s*|</?head>\s*|</?body>\s*|<meta[^>]*>\s*",
    re.IGNORECASE,
)


def encode(chemin: pathlib.Path) -> str:
    mime = mimetypes.guess_type(chemin.name)[0] or "application/octet-stream"
    return f"data:{mime};base64,{base64.b64encode(chemin.read_bytes()).decode()}"


def version_artifact(html: str) -> str:
    """Adapte la version autonome a une publication en ligne.

    Le selecteur de noms devient visible d'office : sur le lien partage, c'est
    l'arbitrage attendu du client, pas un outil interne.
    """
    html = html.replace(
        "const AFFICHER_SELECTEUR = new URLSearchParams(location.search).has('noms');",
        "const AFFICHER_SELECTEUR = true;",
    )
    # <html class="js"> n'existe plus une fois l'enveloppe retiree.
    html = html.replace(
        "<script>document.documentElement.className += ' js';</script>", ""
    )
    return ENVELOPPE.sub("", html)


def construire(nom_source: str, nom_sortie: str, nom_artifact: str) -> None:
    html = (RACINE / nom_source).read_text(encoding="utf-8")
    inlines, manquants = [], []

    for ref in sorted(set(re.findall(r'(?:src|data-img)="(salses_assets/[^"]+)"', html))):
        fichier = RACINE / ref
        if fichier.exists():
            html = html.replace(f'"{ref}"', f'"{encode(fichier)}"')
            inlines.append(ref)
        else:
            manquants.append(ref)

    sortie = RACINE / nom_sortie
    sortie.write_text(html, encoding="utf-8")
    artifact = RACINE / nom_artifact
    artifact.write_text(version_artifact(html), encoding="utf-8")

    print(f"\n{nom_source}")
    for fichier in (sortie, artifact):
        print(f"  {fichier.name} — {fichier.stat().st_size / 1_048_576:.2f} Mo")
    for ref in inlines:
        print(f"    integre   {ref}")
    for ref in manquants:
        print(f"    a fournir {ref}")


def main() -> None:
    for document in DOCUMENTS:
        construire(*document)


if __name__ == "__main__":
    main()
