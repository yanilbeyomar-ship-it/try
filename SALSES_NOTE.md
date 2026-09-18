# Salses-le-Château — plaquette de commercialisation

Opération ACTI BATI au lieu-dit Pla de Salses, avenue Clément Ader,
66600 Salses-le-Château. Plaquette construite sur le gabarit des Ateliers
Ferroviaires / Acti-Sud Nîmes (`index.html`).

## Fichiers

| Fichier | Rôle |
|---|---|
| `salses_source.html` | Source à modifier. Images en chemins relatifs. |
| `salses_le_chateau.html` | Version autonome générée, transférable par email. **Ne pas éditer à la main.** |
| `salses_artifact.html` | Version générée pour la publication en ligne. **Ne pas éditer à la main.** |
| `build_salses.py` | Regénère les deux versions : `python3 build_salses.py` |
| `salses_assets/` | Logos ACTI BATI, perspectives et plans |

## Visuels intégrés

Toutes les perspectives et les deux plans sont en place. Pour remplacer un
visuel, écraser le fichier dans `salses_assets/` en gardant le même nom, puis
relancer `build_salses.py`.

- `visuel_01_aerienne.jpg` — fond du bandeau d'accueil (vue large, A9 au premier plan)
- `visuel_02_ensemble.jpg` — cœur du parc (section « Le parc »)
- `visuel_03_logistique.jpg` — lot A4, entrepôt et bureaux
- `visuel_04_messagerie.jpg` — lot A3, quais et cour PL
- `visuel_05_insertion.jpg` — insertion dans le site (section Localisation)
- `plan_masse.jpg` — plan de masse PA9.1, rendu depuis le PDF du permis d'aménager
- `plan_messagerie.jpg` — plan du lot A3, rendu depuis le PDF au 1:400

## Changer le nom du parc

Dans `salses_source.html`, modifier la constante `PARK_ACTIF` (bloc script en
bas de page). Les six candidats sont déclarés juste au-dessus dans `NOMS`.

Pour comparer les noms en direct devant le client, ouvrir la page avec
`?noms=1` : un sélecteur apparaît en haut à droite. Il reste invisible en
navigation normale et sur mobile. La version publiée en ligne l'affiche
d'office.

## Données du programme

Source : tableau de surfaces STONE MACRO « SDP PA Variante Logistique » du
15.09.2026. Les totaux du tableau ont été recalculés lot par lot et se
recoupent exactement.

| Lot | SDP | dont RDC | dont mezzanine |
|---|---|---|---|
| A4 — entrepôt logistique | 15 245 m² | 14 825 | 420 |
| A3 — messagerie | 4 026 m² | 3 846 | 180 |
| A2 — activités | 4 700 m² | 4 000 | 700 |
| A1 — activités | 4 700 m² | 4 000 | 700 |
| B1 — activités | 3 116 m² | 2 640 | 476 |
| B2 — activités | 3 116 m² | 2 640 | 476 |
| **Total** | **34 903 m²** | **31 951** | **2 952** |

Foncier total 97 860,61 m², emprise au sol 35,67 %. Le lot A4' (6 483,17 m²
de terrain) est compté dans le foncier global mais reste hors du calcul
d'emprise du lot A4 dans le tableau d'origine — présenté en plaquette comme
réserve foncière, sans l'agréger.

Découpage des cellules : A1 et A2 en 1 300 / 1 050 / 1 050 / 1 300 m²,
B1 et B2 en quatre cellules de 779 m². Messagerie A3 : 25 + 24 portes à quai,
8 places d'attente PL, station de lavage PL. Rétention : bassin 1 de 5 214 m³
et bassin 2 de 1 138 m³.

## Reste à compléter avant diffusion

Les valeurs manquantes sont surlignées en jaune dans la page (classe `.tbc`) :

1. Loyers, ou confirmation du « nous consulter » sur toute la grille.
2. Date de livraison prévisionnelle.
3. Téléphone, email et nom du contact commercial.
4. Numéro de l'échangeur A9 de raccordement et distance au diffuseur.
5. Hauteur libre sous poutre et charge d'exploitation du dallage.
6. Démarche de certification environnementale visée, le cas échéant.

Puis : vérifier les distances routières de la section Localisation, et
supprimer le bloc `<div id="draft">` (bandeau doré en bas de page).

## Intervenants (relevés sur le cartouche du permis d'aménager)

Maître d'ouvrage ACTI BATI, 7 rue Auguste, 30000 Nîmes. Architectes STONE
ARCHITECTES. Paysagiste CMO Paysages. BE VRD VERTICALSEA, BE hydraulique
TECTA. Permis d'aménager indice A du 06/07/2026, dossier 223 1367.

## Données de localisation

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
