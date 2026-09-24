# YAKA — Présentation partenaires

Présentation interactive (14 écrans) + export PDF 16:9.

## Livrables
- `dist/YAKA_presentation.html` : fichier unique et autonome (images et polices incluses), fonctionne hors ligne.
- `dist/YAKA_presentation.pdf` : version imprimable, 1 page par écran, format 16:9.

## Modifier le contenu
Tout se trouve dans **`content.js`** : textes, prix, chiffres terrain, café, association, contacts, images.
- `[[texte]]` → s'affiche comme élément à compléter (souligné pointillé doré).
- `image: null` → un emplacement photo s'affiche à la place.
- Contacts : renseigner `phone` / `email` dans `founders`, et `ctaEmail` pour le bouton final.
- Association : renseigner `cause.partnerName` quand le partenariat est officiel.

Puis reconstruire :

```bash
node build.mjs          # HTML autonome + PDF
node build.mjs --no-pdf # HTML seulement
```

## Structure
- `index.html` : squelette
- `content.js` : données et textes
- `app.js` : composants, écrans, interactions (navigation, compteurs, cercle, plein écran, PDF)
- `styles.css` : système graphique, responsive et mode impression
- `assets/` : photos et polices

## Présenter
Flèches ← → / ↑ ↓ ou espace pour naviguer · `F` plein écran · `P` export PDF.
