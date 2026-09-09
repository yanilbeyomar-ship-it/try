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
SOURCE = RACINE / "salses_source.html"
SORTIE = RACINE / "salses_le_chateau.html"
ASSETS = RACINE / "salses_assets"


def encode(chemin: pathlib.Path) -> str:
    mime = mimetypes.guess_type(chemin.name)[0] or "application/octet-stream"
    return f"data:{mime};base64,{base64.b64encode(chemin.read_bytes()).decode()}"


def main() -> None:
    html = SOURCE.read_text(encoding="utf-8")
    inlines, manquants = [], []

    for ref in sorted(set(re.findall(r'(?:src|data-img)="(salses_assets/[^"]+)"', html))):
        fichier = RACINE / ref
        if fichier.exists():
            html = html.replace(f'"{ref}"', f'"{encode(fichier)}"')
            inlines.append(ref)
        else:
            manquants.append(ref)

    SORTIE.write_text(html, encoding="utf-8")

    print(f"{SORTIE.name} — {SORTIE.stat().st_size / 1_048_576:.2f} Mo")
    for ref in inlines:
        print(f"  integre   {ref}")
    for ref in manquants:
        print(f"  a fournir {ref}")


if __name__ == "__main__":
    main()
