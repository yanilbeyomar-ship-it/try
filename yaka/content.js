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
    { name: "Yanil Bey-Omar", role: "Cofondateur", image: "assets/yanil.jpg", phone: null, email: null },
    { name: "Arthur Mignon",  role: "Cofondateur", image: null, phone: null, email: null },
  ],

  /* Adresse utilisée par le bouton final. null → le bouton renvoie aux contacts. */
  ctaEmail: null,

  images: {
    packaging: "assets/packaging.jpg",   // paquet YAKA 250 g
    beans: "assets/grains-macro.jpg",    // macro grains torréfiés
    student: null,                       // étudiant YAKA au stand
    stand: null,                         // stand YAKA en magasin
  },

  /* ---------- Le café ---------------------------------------------------- */
  coffee: {
    form: "Café en grain",
    weight: "250 g",
    price: "≈ 15 € TTC",
    priceLabel: "Prix public cible",
    positioning: "Premium accessible",
    usage: "Pensé pour les machines automatiques avec broyeur",
    origin: "[[Sourcing en cours de finalisation]]",
    profile: ["Doux", "Équilibré", "Gourmand", "Chocolaté", "Caramel", "Faible acidité"],
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

    gains: {
      nav: "Pour votre magasin",
      label: "Pour votre magasin",
      title: "Ce qu’un samedi YAKA\napporte à votre magasin.",
      items: [
        ["Une animation, sans effort", "Un stand élégant et un étudiant qui présente le café toute la journée. Vos équipes n’ont rien à gérer."],
        ["Des allées plus vivantes", "Une présence humaine qui arrête les clients et crée l’échange."],
        ["Une expérience client", "Une découverte accompagnée plutôt qu’un produit simplement posé en rayon."],
        ["Un engagement à votre nom", "Chaque paquet vendu chez vous reverse 1 € à une association pour les personnes sourdes et malentendantes. Un geste que votre magasin peut mettre en avant."],
        ["Un bilan chiffré", "Ventes, transactions, retours clients, montant reversé : un bilan clair après chaque samedi."],
        ["Aucun risque", "Un seul samedi pour tester, sans engagement pour la suite."],
      ],
    },

    turnkey: {
      nav: "Clé en main",
      label: "Clé en main",
      title: "Nous apportons tout.\nVous ouvrez la porte.",
      yakaTitle: "YAKA apporte",
      yaka: [
        "Le café et tout le stock",
        "Le stand et sa signalétique",
        "Un étudiant formé au produit et à la cause",
        "L’installation et le rangement",
        "L’encaissement, sur notre propre terminal",
        "Les visuels, si vous souhaitez annoncer l’animation",
        "Le bilan de la journée",
      ],
      storeTitle: "Votre magasin fournit",
      store: [
        "Un emplacement dans une allée passante",
        "Surface : [[à préciser]]",
        "Un samedi",
        "Un contact le jour J",
      ],
      note: "Pas de stock à acheter. Pas de caisse mobilisée. Pas de personnel détaché.",
    },

    day: {
      nav: "Le jour J",
      label: "Le jour J",
      title: "Un samedi,\nétape par étape.",
      steps: [
        ["Avant", "Nous validons ensemble la date et l’emplacement. Nous vous envoyons des visuels si vous souhaitez annoncer l’animation."],
        ["Le matin", "Installation rapide, avant l’affluence. Aucune structure lourde, aucun outil."],
        ["La journée", "L’étudiant présente le café, raconte la cause, conseille et vend. Encaissement sur notre terminal."],
        ["Le soir", "Rangement complet. L’emplacement est rendu tel qu’il nous a été confié."],
        ["Après", "Vous recevez le bilan : ventes, transactions, retours clients et montant reversé à l’association."],
      ],
      hours: "Horaires de présence : [[à caler avec le magasin]]",
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
      title: "L’un des fondateurs de YAKA\na un frère sourd.",
      body: "Les barrières du quotidien, les portes qui s’ouvrent moins facilement : ils les connaissent de près. C’est pour cela que YAKA soutient une association dédiée aux personnes sourdes et malentendantes.",
      closing: "Dans votre magasin, vos clients n’achètent pas seulement un café. Ils soutiennent une cause réelle, portée par une histoire vraie.",
    },

    product: {
      nav: "Le café",
      label: "Le café",
      title: "Un café premium,\nsimple à choisir.",
      promise: "Une seule référence, pensée pour plaire au plus grand nombre.\nAchetée d’abord parce qu’elle est bonne.",
    },

    people: {
      nav: "Les étudiants",
      label: "Les étudiants",
      formula: [["1", "étudiant"], ["1", "stand"], ["1", "café"], ["1", "journée"]],
      title: "Derrière chaque stand,\nun étudiant.",
      body: "Un étudiant rémunéré, briefé sur le produit et sur la cause. Il présente, il conseille, il n’interpelle pas.",
      skills: ["Prise de parole", "Confiance", "Vente", "Autonomie", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Un samedi de travail.\nUne expérience qui reste.",
      network: "À terme : un réseau d’étudiants capables de représenter YAKA dans différents points de vente.",
      photoCaption: "Étudiant YAKA au stand — échange, produit en main",
    },

    proof: {
      nav: "Le terrain",
      label: "Le terrain",
      title: "La vente sur stand,\nnous savons la faire.",
      claim: "Des chiffres observés face à de vrais clients.",
    },

    meeting: {
      nav: "Le stand",
      label: "Le stand",
      lines: ["Le produit attire.", "L’histoire touche.", "Le client décide."],
      body: "Pas de vendeur qui interpelle. Un étudiant qui présente le café et explique où va l’euro reversé.",
      qualities: ["Léger", "Élégant", "Simple à installer", "Peu encombrant", "Sans infrastructure lourde"],
      caption: "Illustration de principe — stand en cours de conception.",
    },

    pilot: {
      nav: "Notre proposition",
      label: "Notre proposition",
      titleGeneric: "Un samedi test,\nsans engagement.",
      titlePartner: "Un samedi test\nà {city}.",
      formula: [["1", "magasin"], ["1", "samedi"], ["1", "étudiant"], ["1", "stand"], ["1 €", "par paquet"]],
      askTitle: "Ce que nous vous demandons",
      asks: ["Un emplacement dans une allée passante", "Un samedi", "Une mise à disposition gracieuse ou à tarif solidaire"],
      askWhy: "Un emplacement gracieux ou solidaire nous permet de consacrer nos moyens au projet et à l’association.",
      measureTitle: "Ce que vous recevez après",
      measures: ["Ventes et transactions", "Retours clients", "Retour de vos équipes", "Montant reversé grâce à vos clients"],
      line: "Pas besoin de croire à une projection.\nTestons-la sur le terrain.",
    },

    founders: {
      nav: "Qui sommes-nous",
      label: "Qui sommes-nous",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUne cause à servir.",
      body: "Yanil et Arthur vendent en direct, sur stand, face aux clients. Ils en ont tiré une conviction : quand un produit est bon et qu’on le présente avec sincérité, les gens s’arrêtent, écoutent et achètent.\n\nYAKA réunit ce savoir-faire et une cause qui les touche de près.",
    },

    cta: {
      nav: "Commençons",
      title: "Commençons\npar un samedi.",
      body: "Si l’expérience fonctionne pour votre magasin, construisons la suite ensemble.",
      button: "Proposer une date",
    },
  },
};
