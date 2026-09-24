/* ==========================================================================
   YAKA — CONTENU DE LA PRÉSENTATION
   --------------------------------------------------------------------------
   Toutes les données susceptibles de changer sont ici : textes, chiffres,
   prix, café, association, contacts, images.
   Modifier ce fichier suffit : le design ne bouge pas.

   Conventions :
   - "\n"            → retour à la ligne
   - "[[texte]]"     → élément À COMPLÉTER, affiché comme placeholder visible
   - image: null     → un emplacement photo premium s'affiche à la place
   - partner: null   → présentation générique « votre magasin »
                       (renseigner { name, city } pour personnaliser une version)
   ========================================================================== */

window.YAKA_CONTENT = {

  /* ---------- Général ---------------------------------------------------- */
  meta: {
    brand: "YAKA",
    documentTitle: "YAKA — L’animation café solidaire pour votre magasin",
    edition: "Animation café solidaire · Présentation magasins",
    audience: "Magasins partenaires",
  },

  /* null = version générique. Exemple de version personnalisée :
     partner: { name: "Magasin", city: "Ville" }, */
  partner: null,

  founders: [
    { name: "Yanil Bey-Omar", role: "Cofondateur", image: "assets/yanil.jpg", phone: "06 17 99 14 80", email: "yanil@webonestudio.fr" },
    { name: "Arthur Mignon",  role: "Cofondateur", image: "assets/arthur.jpg", phone: null, email: "arthur@webonestudio.fr" },
  ],

  /* Adresse utilisée par le bouton final. null → le bouton renvoie aux contacts. */
  ctaEmail: "yanil@webonestudio.fr",

  images: {
    packaging: "assets/paquet-face.jpg", // fond de l’écran contact
    hero: "assets/hero.jpg",             // visuel de couverture (logo + paquet)
    packFront: "assets/paquet-face.jpg", // face du paquet (couverture)
    packBack: "assets/paquet-dos.jpg",   // dos du paquet (écran café)
    beans: "assets/grains-macro.jpg",    // macro grains torréfiés
    student: null,                       // étudiant YAKA en magasin
    ear: "assets/oreille.jpg",           // oreille formée par une foule (écran « Pourquoi cette cause »)
    onsite: null,                        // étudiant YAKA en magasin, avec ou sans table
  },

  /* ---------- Le café ---------------------------------------------------- */
  coffee: {
    type: "100 % Arabica",
    blend: "Assemblage de plusieurs origines",
    origins: "Brésil · Pérou · Colombie · Éthiopie",
    roast: "Medium-dark",
    form: "En grains",
    weight: "250 g",
    price: "≈ 15 € TTC",
    priceLabel: "Prix public cible",
    usage: "Espresso, machine automatique, italienne, filtre, piston",
    profile: ["Doux", "Chocolaté", "Gourmand"],
    // Fournisseur (non affiché) : Premium Dolce
  },

  /* ---------- L'association ---------------------------------------------- */
  cause: {
    perPack: 1,                 // € reversés par paquet vendu
    example: 1000,              // exemple mis en avant : 1 000 paquets = 1 000 €
    simulatorMax: 3000,         // borne haute du simulateur (paquets)
    audience: "les personnes sourdes et malentendantes",
    partnerStatus: "Association en cours de sélection",
    partnerName: null,          // renseigner lorsque le partenariat sera officiel
  },

  /* ---------- Vente terrain (autre catégorie de produit) ----------------- */
  field: {
    target: 240,
    average: 340,
    founderRevenue: 416,
    best: 750,
    lowest: 180,
    founderSales: 34,
    salesHypothesis: 24,
    disclaimer: "Résultats observés lors d’une journée de vente sur stand, avec une autre catégorie de produit. Ce sont des observations, pas une prévision ni une garantie de performance pour YAKA.",
  },

  /* ---------- Écrans ----------------------------------------------------- */
  slides: {

    cover: {
      nav: "YAKA",
      tagline: "L’animation café solidaire,\nclé en main.",
      promise: "1 paquet vendu = 1 € reversé\naux personnes sourdes et malentendantes.",
    },

    model: {
      nav: "Chacun y gagne",
      label: "Ce que YAKA apporte",
      title: "Chacun y gagne,\nà commencer par vous.",
      hint: "Survolez le cercle",
      nodes: [
        { name: "Magasin",     does: "accueille YAKA chaque samedi",        gets: "Une animation humaine, sans effort pour vos équipes, et un engagement à mettre en avant." },
        { name: "Clients",     does: "découvrent un café premium",           gets: "Un bon café, et un geste utile à chaque paquet." },
        { name: "Association", does: "reçoit 1 € par paquet vendu",          gets: "Un soutien financier régulier." },
        { name: "Étudiant",    does: "présente le café et raconte la cause", gets: "Un revenu et une vraie expérience." },
      ],
      loop: "… et le cercle recommence, chaque samedi.",
    },

    turnkey: {
      nav: "Clé en main",
      label: "Clé en main",
      title: "Nous apportons tout.\nVous ouvrez la porte.",
      yakaTitle: "YAKA apporte",
      yaka: [
        "Le café et tout le stock",
        "Un étudiant formé au produit et à la cause",
        "L’installation et le rangement",
        "L’encaissement, sur notre propre terminal",
        "Le bilan de la journée",
      ],
      storeTitle: "Votre magasin fournit",
      store: [
        "Un emplacement dans une allée passante",
        "Surface : [[à préciser]]",
        "Chaque samedi (et le mercredi, si vous le souhaitez)",
        "Horaires : [[à caler ensemble]]",
        "Une table si possible (sinon, l’étudiant va vers les clients)",
      ],
      note: "Pas de stock à acheter. Pas de caisse mobilisée. Pas de personnel détaché.",
    },

    cause: {
      nav: "L’association",
      label: "L’association",
      title: "1 paquet vendu,\n1 € reversé.",
      body: "À chaque paquet de café YAKA vendu, 1 € est reversé à une association qui accompagne les personnes sourdes et malentendantes.",
      example: "paquets vendus",
      exampleResult: "reversés à l’association",
      simLabel: "Faites glisser pour simuler",
      simNote: "Simulation illustrative : 1 € par paquet vendu.",
      transparency: "Montants publiés en toute transparence. Chaque magasin reçoit le montant reversé grâce à ses clients.",
      honesty: "Le choix de l’association est en cours. Aucun partenariat n’est encore signé : il sera annoncé publiquement.",
    },

    deaf: {
      nav: "Pourquoi cette cause",
      label: "Pourquoi cette cause",
      lead: "Ce n’est pas une cause choisie au hasard.",
      title: "L’un des fondateurs\nde YAKA a un frère sourd.",
      body: "Les barrières du quotidien, les portes qui s’ouvrent moins facilement : ils les connaissent de près. C’est pour cela que YAKA soutient une association dédiée aux personnes sourdes et malentendantes.",
      closing: "Dans votre magasin, vos clients n’achètent pas seulement un café. Ils soutiennent une cause réelle, portée par une histoire vraie.",
    },

    interlude: {
      nav: "Concrètement",
      label: "Concrètement",
      title: "Et sur place,\ncomment ça se passe ?",
    },

    product: {
      nav: "Le café",
      label: "Le café",
      title: "Un café premium,\nsimple à choisir.",
      promise: "Un assemblage 100 % Arabica, doux et facile à boire.\nAcheté d’abord parce qu’il est bon.",
    },

    people: {
      nav: "Les étudiants",
      label: "Les étudiants",
      formula: [["1", "étudiant"], ["1", "magasin"], ["1", "café"], ["1", "journée"]],
      title: "Dans chaque magasin,\nun étudiant.",
      body: "Un étudiant rémunéré, briefé sur le produit et sur la cause. Il présente, il conseille, il n’interpelle pas.",
      skills: ["Prise de parole", "Confiance", "Vente", "Autonomie", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Un samedi de travail.\nUne expérience qui reste.",
      network: "À terme : un réseau d’étudiants capables de représenter YAKA dans différents points de vente.",
      photoCaption: "Étudiant YAKA en magasin — échange, produit en main",
    },

    proof: {
      nav: "Le terrain",
      label: "Le terrain",
      title: "La vente en direct,\nnous savons la faire.",
      claim: "Des chiffres observés face à de vrais clients.",
    },

    meeting: {
      nav: "Sur place",
      label: "Sur place",
      lines: ["Le produit attire.", "L’histoire touche.", "Le client décide."],
      body: "Pas de vendeur qui interpelle. Un étudiant qui présente le café et explique où va l’euro reversé.",
      qualities: ["Léger", "Mobile", "Rien à installer", "Aucune charge pour vos équipes"],
      optionsTitle: "Deux façons de faire",
      options: [
        ["Avec une table", "Si le magasin peut nous en prêter une, le café y est présenté et les clients viennent à l’étudiant."],
        ["Sans table", "Aucun souci : l’étudiant va directement à la rencontre des clients dans l’allée, paquet en main."],
      ],
    },

    pilot: {
      nav: "Notre proposition",
      label: "Notre proposition",
      titleGeneric: "YAKA chez vous,\nchaque samedi.",
      titlePartner: "YAKA à {city},\nchaque samedi.",
      formula: [["1", "magasin"], ["1", "étudiant"], ["Tous", "les samedis"], ["1 €", "par paquet"]],
      askTitle: "Ce que nous vous demandons",
      asks: ["Un emplacement dans une allée passante", "Une présence chaque samedi, et d’autres jours si vous le souhaitez (le mercredi par exemple)", "Une mise à disposition gracieuse ou à tarif solidaire"],
      askWhy: "Un emplacement gracieux ou solidaire nous permet de consacrer nos moyens au projet et à l’association.",
      measureTitle: "Ce que vous recevez après chaque journée",
      measures: ["Ventes et transactions", "Retours clients", "Retour de vos équipes", "Montant reversé grâce à vos clients"],
      line: "Un rendez-vous régulier,\nun bilan partagé,\nune cause qui avance.",
    },

    founders: {
      nav: "Qui sommes-nous",
      label: "Qui sommes-nous",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUne cause à servir.",
      body: "Yanil et Arthur vendent en direct, face aux clients. Ils en ont tiré une conviction : quand un produit est bon et qu’on le présente avec sincérité, les gens s’arrêtent, écoutent et achètent.\n\nYAKA réunit ce savoir-faire et une cause qui les touche de près.",
    },

    cta: {
      nav: "Contact",
      title: "Faisons de vos samedis\ndes samedis YAKA.",
      body: "Parlons de votre emplacement et de votre calendrier.",
      button: "Nous écrire",
    },
  },
};
