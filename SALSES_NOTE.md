# Salses-le-Château — plaquette de commercialisation

Opération ACTI BATI à Salses-le-Château (66600). Plaquette construite sur le
gabarit des Ateliers Ferroviaires / Acti-Sud Nîmes (`index.html`).

## Fichiers

| Fichier | Rôle |
|---|---|
| `salses_source.html` | Source à modifier. Images en chemins relatifs. |
| `salses_le_chateau.html` | Version autonome générée, transférable par email. **Ne pas éditer à la main.** |
| `build_salses.py` | Regénère la version autonome : `python3 build_salses.py` |
| `salses_assets/` | Logos ACTI BATI + visuels du projet |

## Déposer les visuels

Les perspectives ne sont pas encore intégrées. Déposer les fichiers dans
`salses_assets/` sous ces noms exacts, puis relancer `build_salses.py` :

- `visuel_01_aerienne.jpg` — fond du bandeau d'accueil
- `visuel_02_aerienne.jpg` — vue aérienne d'ensemble (section « Le parc »)
- `visuel_03_facade.jpg` — détail de façade
- `visuel_04_voirie.jpg` — vue depuis la voirie interne
- `plan_situation.jpg` — plan de situation A9 / RD 900

Tant qu'un fichier est absent, la page affiche un cadre pointillé rappelant le
nom attendu. Aucune modification de code n'est nécessaire.

## Changer le nom du parc

Dans `salses_source.html`, modifier la constante `PARK_ACTIF` (bloc script en
bas de page). Les cinq candidats sont déclarés juste au-dessus dans `NOMS`.

Pour comparer les noms en direct devant le client, ouvrir la page avec
`?noms=1` : un sélecteur apparaît en haut à droite. Il reste invisible en
navigation normale et sur mobile.

## Avant diffusion

1. Renseigner toutes les valeurs surlignées en jaune (classe `.tbc`) —
   surfaces, nombre de bâtiments, hauteur libre, date de livraison,
   coordonnées commerciales.
2. Vérifier les distances routières de la section Localisation.
3. Confirmer le numéro d'échangeur A9 et la distance au diffuseur.
4. Supprimer le bloc `<div id="draft">` (bandeau doré en bas de page).
5. Créditer l'agence d'architecture dans le pied de page.

## Données de localisation utilisées

Sourcées et à revalider avant diffusion :

- Salses-le-Château se situe à environ 17 km au nord de Perpignan.
- Aéroport de Perpignan-Rivesaltes à environ 15 km.
- Saint-Charles International (Perpignan) : premier centre européen de
  commercialisation, transport et logistique de fruits et légumes frais,
  environ 80 ha et plus de 150 entreprises.
- L'A9 fait partie de la route européenne E15, corridor de fret entre la
  péninsule ibérique et l'Europe du Nord.
- La forteresse de Salses (1497-1503) gardait l'ancienne frontière entre la
  France et le Roussillon — origine de l'angle « porte du Pays Catalan ».
