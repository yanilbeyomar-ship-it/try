Crée un site web one-page premium pour **YAKA**, une marque française de café en grain qui propose aux magasins (grandes surfaces) une **animation café solidaire, clé en main, chaque samedi**. Le site s'adresse aux **directeurs de magasins** : il doit leur montrer ce que YAKA apporte à leur magasin, puis la cause, puis le concret, et seulement à la fin qui sont les fondateurs.

Stack : React + TypeScript + Tailwind + Framer Motion. Mobile-first, parfaitement responsive. Tous les textes et chiffres dans un seul fichier `content.ts` pour pouvoir les modifier sans toucher au design.

---

## Direction artistique

- Ambiance : marque premium européenne, sobre, éditoriale (références d'ambiance : Aesop, horlogerie suisse, magazines haut de gamme). Pas un site startup générique, pas de cartes identiques avec icônes, pas de gradients violets, pas de gros boutons arrondis partout.
- Beaucoup d'espace négatif, titres très grands, textes courts.
- **Palette** :
  - Noir chaud `#100F0C` (sections produit / hero)
  - Vert kaki très foncé `#1C2418`
  - Ivoire `#F2F0E8` et lin `#E8E1D2` (sections claires)
  - Texte sur fond clair : vert mousse `#1C2418`
  - Or / champagne `#E6C49B` (accents, chiffres, mots en italique)
- **Typographie** :
  - Titres : **Cormorant Garamond** (serif fine, weight 300), avec la 2ᵉ ligne des titres souvent en *italique dorée*.
  - Texte et labels : **Inter Tight** (300–500). Petits labels en MAJUSCULES espacées (letter-spacing .3em, 10–11 px), ex. « 03 — L'ASSOCIATION ».
  - Chiffres en chiffres alignés (lining numerals).
- Alternance de fonds entre sections : noir → ivoire → kaki → lin… pour créer du rythme.
- Grain photo très léger en overlay sur tout le site.
- Animations : apparition progressive et discrète des textes au scroll (fade + léger translateY, ligne par ligne pour les titres), compteurs animés pour les chiffres. Rien de gadget.

## Header

Barre fixe fine : logo YAKA (image fournie, doré) à gauche, à droite liens d'ancre discrets (L'association · Clé en main · Le café · Contact) + bouton contour « Nous contacter ». Masquer le logo du header tant que le hero est visible (le paquet de la photo porte déjà le logo). Menu burger sur mobile.

---

## Sections (dans cet ordre)

### 1. Hero (plein écran, fond noir)
- Image de fond plein cadre : **photo du paquet YAKA noir mat posé sur des rochers sombres avec des grains de café** (paquet à droite, zone vide à gauche). Sur mobile : version verticale de la même photo, texte en dessous.
- À l'ouverture : l'image sort du noir avec un lent dézoom (scale 1.1 → 1, 4–6 s).
- À gauche :
  - Label doré : `ANIMATION CAFÉ SOLIDAIRE · PRÉSENTATION MAGASINS`
  - Titre : **Un grand café.** / *Un geste qui compte.* (2ᵉ ligne en italique dorée)
  - Texte : « Chaque samedi, un étudiant fait découvrir YAKA dans vos allées. Chaque paquet vendu soutient les personnes sourdes et malentendantes. »
- En bas, bandeau de 3 chiffres séparé par un filet fin :
  - **1 €** — reversé par paquet vendu
  - **100 %** — Arabica, torréfaction medium-dark
  - **0** — contrainte pour vos équipes

### 2. Ce que YAKA apporte (fond ivoire)
- Label `CE QUE YAKA APPORTE`
- Titre : **Chacun y gagne,** / *à commencer par vous.*
- **Cercle interactif** : un grand cercle fin avec 4 points (Magasin en haut, Clients à droite, Association en bas, Étudiant à gauche), petites flèches indiquant le sens, un point lumineux qui tourne lentement sur le cercle. Au centre : logo YAKA + « [Nom] · reçoit » + phrase. Toutes les 3,5 s le point actif change ; au survol/tap d'un point, il s'active.
- Légende à côté (liste) :
  - **Magasin** — accueille YAKA chaque samedi. *Une animation humaine, sans effort pour vos équipes, et un engagement à mettre en avant.*
  - **Clients** — découvrent un café premium. *Un bon café, et un geste utile à chaque paquet.*
  - **Association** — reçoit 1 € par paquet vendu. *Un soutien financier régulier.*
  - **Étudiant** — présente le café et raconte la cause. *Un revenu et une vraie expérience.*
- Phrase en italique : « … et le cercle recommence, chaque samedi. »

### 3. L'association (fond kaki)
- Label `L'ASSOCIATION`
- Titre : **1 paquet vendu,** / **1 € reversé.**
- Texte : « À chaque paquet de café YAKA vendu, 1 € est reversé à une association qui accompagne les personnes sourdes et malentendantes. »
- **Simulateur** à droite : grand chiffre « 1 000 paquets vendus = **1 000 €** reversés à l'association », un slider (0 à 3 000, pas de 10) qui met à jour les deux chiffres en direct, et une rangée de 30 petites barres qui se remplissent. Petite note : « Simulation illustrative : 1 € par paquet vendu. »
- Ligne d'info : `ASSOCIATION` — « Association en cours de sélection » (style placeholder discret).
- Mention discrète : « Le choix de l'association est en cours. Aucun partenariat n'est encore signé : il sera annoncé publiquement. »

### 4. Pourquoi cette cause (fond ivoire)
- À droite : **image d'une oreille formée par une foule de personnes vue du dessus**, en noir et blanc, fondue dans le fond (mix-blend-mode: multiply).
- À gauche :
  - Petit texte italique : « Ce n'est pas une cause choisie au hasard. »
  - Titre : **L'un des fondateurs de YAKA a un frère sourd.**
  - Texte : « Les barrières du quotidien, les portes qui s'ouvrent moins facilement : ils les connaissent de près. C'est pour cela que YAKA soutient une association dédiée aux personnes sourdes et malentendantes. »
  - Citation avec filet vertical à gauche, en italique : « Dans votre magasin, vos clients n'achètent pas seulement un café. Ils soutiennent une cause réelle, portée par une histoire vraie. »
- En bas, une fine ligne d'onde sonore (SVG) qui s'aplatit progressivement de gauche à droite et se dessine au scroll.

### 5. Transition (fond noir)
- Grand titre : **Et sur place,** / **comment ça se passe ?**
- En bas, bandeau photo pleine largeur : **macro de grains de café torréfiés**.

### 6. Clé en main (fond lin)
- Label `CLÉ EN MAIN`
- Titre : **Nous apportons tout.** / **Vous ouvrez la porte.**
- Colonne gauche « YAKA APPORTE » (liste numérotée 01–05, serif) :
  1. Le café et tout le stock
  2. Un étudiant formé au produit et à la cause
  3. L'installation et le rangement
  4. L'encaissement, sur notre propre terminal
  5. Le bilan de la journée
- Colonne droite, bloc fond kaki « VOTRE MAGASIN FOURNIT » :
  - Un emplacement dans une allée passante
  - Surface : *à préciser*
  - Chaque samedi (et le mercredi, si vous le souhaitez)
  - Horaires : *à caler ensemble*
  - Une table si possible (sinon, l'étudiant va vers les clients)
  - En italique : « Pas de stock à acheter. Pas de caisse mobilisée. Pas de personnel détaché. »

### 7. Le café (fond noir)
- À gauche : **photo détourée (PNG transparent) du dos du paquet YAKA** (textes dorés, icônes, profil aromatique, QR code), avec halo doré léger derrière et ombre portée. Apparition en fondu + montée.
- À droite :
  - Label `LE CAFÉ`
  - Titre : **Un café premium,** / **simple à choisir.**
  - Profil en italique : *Doux · Chocolaté · Gourmand*
  - Texte : « Un assemblage 100 % Arabica, doux et facile à boire. Acheté d'abord parce qu'il est bon. »
  - Fiche (lignes séparées par des filets, label à gauche en petites capitales) :
    - CAFÉ — 100 % Arabica · assemblage de plusieurs origines
    - ORIGINES — Brésil · Pérou · Colombie · Éthiopie
    - TORRÉFACTION — Medium-dark
    - FORMAT — En grains · 250 g · ≈ 15 € TTC
    - USAGE — Espresso, machine automatique, italienne, filtre, piston

### 8. Les étudiants (fond lin)
- Grille 2×2 de chiffres : **1** étudiant · **1** magasin · **1** café · **1** journée
- Titre : **Dans chaque magasin, un étudiant.**
- Texte : « Un étudiant rémunéré, briefé sur le produit et sur la cause. Il présente, il conseille, il n'interpelle pas. »
- Compétences en ligne séparées par « / » : Prise de parole / Confiance / Vente / Autonomie / Relation client / Responsabilité / Expérience professionnelle
- À droite : emplacement photo (placeholder élégant « Photographie à venir — étudiant YAKA en magasin »), citation italique : « Un samedi de travail. Une expérience qui reste. » et petite note : « À terme : un réseau d'étudiants capables de représenter YAKA dans différents points de vente. »

### 9. Le terrain (fond kaki)
- Label `LE TERRAIN`
- Titre : **La vente en direct, nous savons la faire.** + à droite en italique : « Des chiffres observés face à de vrais clients. »
- Chiffres géants animés (compteurs) :
  - **240 €** (petit, grisé) — Objectif initial par vendeur
  - **~340 €** (énorme, doré) — CA moyen observé par vendeur
- Rangée de 3 : **416 €** — réalisés personnellement par un porteur du projet · **750 €** — meilleure performance observée · **34** — ventes en une journée par un porteur du projet (hypothèse initiale : 24)
- Mentions obligatoires en petit : « Résultats observés lors d'une journée de vente sur stand, avec une autre catégorie de produit. Ce sont des observations, pas une prévision ni une garantie de performance pour YAKA. » et « Performance la plus faible observée : environ 180 €, malgré des difficultés avec le terminal de paiement. »

### 10. Sur place (fond ivoire)
- Trois lignes en escalier, grandes, serif, numérotées : 01 **Le produit attire.** / 02 **L'histoire touche.** / 03 **Le client décide.**
- Texte : « Pas de vendeur qui interpelle. Un étudiant qui présente le café et explique où va l'euro reversé. »
- Mots-clés : Léger / Mobile / Rien à installer / Aucune charge pour vos équipes
- À droite, titre « DEUX FAÇONS DE FAIRE » et 2 blocs :
  - **A · Avec une table** (fond kaki) — « Si le magasin peut nous en prêter une, le café y est présenté et les clients viennent à l'étudiant. »
  - **B · Sans table** (fond noir) — « Aucun souci : l'étudiant va directement à la rencontre des clients dans l'allée, paquet en main. »

### 11. Notre proposition (fond kaki)
- Label `NOTRE PROPOSITION`
- Titre : **YAKA chez vous,** / **chaque samedi.**
- Grille 2×2 : **1** magasin · **1** étudiant · **Tous** les samedis · **1 €** par paquet
- Trois colonnes :
  - « CE QUE NOUS VOUS DEMANDONS » (01–03) : Un emplacement dans une allée passante · Une présence chaque samedi, et d'autres jours si vous le souhaitez (le mercredi par exemple) · *Une mise à disposition gracieuse ou à tarif solidaire* — petite note : « Un emplacement gracieux ou solidaire nous permet de consacrer nos moyens au projet et à l'association. »
  - « CE QUE VOUS RECEVEZ APRÈS CHAQUE JOURNÉE » : Ventes et transactions · Retours clients · Retour de vos équipes · Montant reversé grâce à vos clients
  - Phrase italique : « Un rendez-vous régulier, un bilan partagé, une cause qui avance. »

### 12. Qui sommes-nous (fond lin)
- Titre (sans-serif, grand) : **Deux entrepreneurs. Le goût du terrain. Une cause à servir.**
- Texte : « Yanil et Arthur ont créé YAKA. En magasin, ce sont des étudiants qui présentent le café et racontent la cause à vos clients : Yanil et Arthur les recrutent, les forment et les accompagnent. YAKA réunit un bon produit, une vente humaine et une cause qui touche les fondateurs de près. »
- 2 portraits en noir et blanc, format 3:4 : **Yanil Bey-Omar** — Cofondateur · **Arthur Mignon** — Cofondateur

### 13. Contact (fond kaki, photo du paquet en transparence ~20 % sur la moitié droite)
- En haut à droite : logo YAKA doré + « L'animation café solidaire, clé en main. »
- Grand titre : **Faisons de vos samedis des samedis YAKA.**
- Texte : « Un rendez-vous fixe, chaque samedi, dans votre magasin. »
- Bouton contour qui se remplit au survol : « Nous écrire → » (mailto:yanil@webonestudio.fr)
- Contacts :
  - **Yanil Bey-Omar** — Cofondateur — 06 17 99 14 80 — yanil@webonestudio.fr
  - **Arthur Mignon** — Cofondateur — arthur@webonestudio.fr
- Sur mobile : gros boutons pleine largeur « Appeler Yanil » (tel:), « Écrire à Yanil », « Écrire à Arthur ».

## Footer
Très sobre : logo YAKA · « Café solidaire · 1 € reversé par paquet aux personnes sourdes et malentendantes » · © YAKA 2026.

---

## Images à fournir (je les uploaderai)
1. Logo YAKA doré (PNG transparent)
2. Hero horizontal : paquet sur rochers + grains (zone vide à gauche)
3. Hero vertical (mobile) : paquet de face sur rochers
4. Dos du paquet détouré (PNG transparent)
5. Oreille formée par une foule (noir et blanc)
6. Macro de grains de café
7. Portrait Yanil, portrait Arthur

## Règles de contenu
- Ne jamais inventer : nom d'association, labels, certifications, avis clients, chiffres de ventes YAKA.
- Ton : phrases courtes, assuré sans arrogance. Interdits : « révolutionnaire », « disruptif », « incroyable », « le meilleur café ».
- Les éléments « à préciser » s'affichent en style placeholder discret (doré, souligné pointillé) pour être remplacés plus tard.
