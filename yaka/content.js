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
    documentTitle: "YAKA — Présentation aux magasins partenaires",
    edition: "Café solidaire · Présentation partenaires",
    audience: "Magasins partenaires",
  },

  /* null = version générique. Exemple de version personnalisée :
     partner: { name: "Magasin", city: "Ville" }, */
  partner: null,

  founders: [
    { name: "Yanil Bey-Omar", role: "Cofondateur", image: null, phone: null, email: null },
    { name: "Arthur Mignon",  role: "Cofondateur", image: null, phone: null, email: null },
  ],

  /* Adresse utilisée par le bouton final. null → le bouton renvoie aux contacts. */
  ctaEmail: null,

  images: {
    packaging: "assets/packaging.jpg",   // paquet YAKA 250 g
    beans: "assets/grains-macro.jpg",    // macro grains torréfiés
    student: null,                       // étudiant YAKA au stand
    stand: null,                         // stand YAKA en magasin
    origin: null,                        // photo d'ambiance pour l'écran « Pourquoi YAKA existe » (mains, lumière…)
  },

  /* ---------- Le café ---------------------------------------------------- */
  coffee: {
    name: "Le café YAKA",
    form: "Café en grain",
    weight: "250 g",
    price: "≈ 15 € TTC",
    priceLabel: "Prix public cible",
    positioning: "Premium accessible",
    usage: "Pensé pour les machines automatiques avec broyeur",
    origin: "[[Sourcing en cours de finalisation]]",
    profile: ["Doux", "Équilibré", "Gourmand", "Chocolaté", "Caramel", "Faible acidité"],
  },

  /* ---------- Cause soutenue --------------------------------------------- */
  cause: {
    audience: "les personnes sourdes et malentendantes",
    partnerStatus: "Association en cours de sélection",
    partnerName: null,          // renseigner lorsque le partenariat sera officiel
    share: null,                // ex. "1 € par paquet" ou "10 % du CA" — null tant que non décidé
    cafesSold: null,            // ex. "12 000" — null tant que rien n'est mesuré
    amountDonated: null,        // ex. "3 000 €"
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
      tagline: "Un café qui a du goût.\nUn projet qui a du sens.",
    },

    origin: {
      nav: "Pourquoi YAKA",
      label: "Pourquoi YAKA existe",
      lead: "Tout est parti d’une histoire de famille.",
      title: "L’un de nous a grandi\naux côtés d’un frère sourd.",
      body: "Les regards, les barrières, les portes qui s’ouvrent moins facilement : nous les connaissons de près. Alors en créant YAKA, une évidence s’est imposée : notre entreprise devait aussi servir cette cause.",
      closing: "YAKA soutiendra une association dédiée\naux personnes sourdes et malentendantes.",
      photoCaption: "Photo d’ambiance — mains, regard, lumière",
    },

    story: {
      nav: "Les fondateurs",
      label: "Les fondateurs",
      title: "Deux entrepreneurs.\nLe goût du terrain.\nUne cause à servir.",
      body: "Yanil et Arthur vendent en direct, sur stand, face aux clients. Ils en ont tiré une conviction : quand un produit est bon et qu’on le présente avec sincérité, les gens s’arrêtent, écoutent et achètent.\n\nYAKA réunit ce savoir-faire et une cause qui leur tient à cœur.",
    },

    spark: {
      nav: "Le déclic",
      label: "Le déclic",
      intro: "Sur le stand, plusieurs clients posaient spontanément la même question.",
      question: "« Est-ce que vous vendez aussi du café ? »",
      answer: "Et si le café devenait\nle moyen de porter notre cause ?",
      note: "Un produit que tout le monde aime.\nUne vente humaine. Une cause concrète.",
    },

    why: {
      nav: "Pourquoi le café",
      label: "Pourquoi le café",
      words: ["Quotidien", "Universel", "Émotionnel", "Récurrent", "Partageable", "Premium"],
      problem: "Un produit que chacun achète chaque semaine peut soutenir une cause chaque semaine.",
      turn: "Encore faut-il qu’il soit simple à choisir.",
      nots: ["Pas dix cafés au lancement.", "Pas une gamme incompréhensible.", "Pas une accumulation d’origines et de termes techniques."],
      trio: ["Une marque.", "Un café signature.", "Une histoire."],
      closing: "Le client ne se demande pas lequel choisir.\nIl découvre le café YAKA.",
    },

    product: {
      nav: "Le produit",
      label: "Le produit",
      title: "Un café.\nUne signature.",
      promise: "Assez bon pour être acheté pour lui-même.\nLa cause donne une raison de plus de le choisir.",
    },

    people: {
      nav: "Les étudiants",
      label: "Les étudiants",
      formula: [["1", "étudiant"], ["1", "stand"], ["1", "café"], ["1", "journée"]],
      title: "Derrière chaque stand,\nun étudiant.",
      body: "Des missions rémunérées, principalement le samedi. Les étudiants représentent la marque, racontent la cause et repartent avec une vraie expérience.",
      skills: ["Prise de parole", "Confiance", "Vente", "Autonomie", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Un samedi de travail.\nUne expérience qui reste.",
      network: "À terme : un réseau d’étudiants capables de représenter YAKA dans différents points de vente.",
      photoCaption: "Étudiant YAKA au stand — échange, produit en main",
    },

    impact: {
      nav: "La cause",
      label: "La cause",
      kicker: "Au cœur du projet, pas en bas de page.",
      title: "Plus YAKA grandit,\nplus son impact grandit.",
      body: "Une partie de chaque vente est destinée à une association qui accompagne les personnes sourdes et malentendantes.",
      focus: "Chaque paquet vendu en magasin devient un geste concret, visible et mesurable.",
      flow: ["cafés vendus", "reversés à l’association", "un impact concret, publié en toute transparence"],
      honesty: "Le choix de l’association est en cours. Aucun partenariat n’est encore signé : il sera annoncé publiquement, avec les montants reversés.",
    },

    model: {
      nav: "Le cercle",
      label: "Le cercle YAKA",
      title: "Chacun y gagne\nquelque chose.",
      hint: "Survolez le cercle",
      nodes: [
        { key: "client",   name: "Client",   does: "achète un bon café",                        gets: "Un bon produit et un geste qui compte." },
        { key: "etudiant", name: "Étudiant", does: "travaille et apprend",                      gets: "Un revenu et une expérience." },
        { key: "cause",    name: "Cause",    does: "reçoit une part de chaque vente",           gets: "Un soutien financier régulier." },
        { key: "magasin",  name: "Magasin",  does: "accueille une animation porteuse de sens",  gets: "Une animation humaine et une initiative à valoriser." },
        { key: "yaka",     name: "YAKA",     does: "fait connaître le café et la cause",        gets: "Les moyens de continuer, et de soutenir davantage." },
      ],
      loop: "… et le cercle recommence.",
    },

    proof: {
      nav: "Le terrain",
      label: "Le terrain",
      title: "La vente humaine sur stand,\nnous savons la faire.",
      claim: "YAKA n’est pas une idée construite derrière un ordinateur.",
    },

    meeting: {
      nav: "La rencontre",
      label: "La rencontre",
      lines: ["Le produit attire.", "L’histoire touche.", "Le client décide."],
      body: "Pas de vendeur qui interpelle. Un étudiant qui présente le café et raconte pourquoi YAKA existe.",
      qualities: ["Léger", "Élégant", "Simple à installer", "Peu encombrant", "Sans infrastructure lourde", "Aucune charge pour vos équipes"],
      caption: "Illustration de principe — stand en cours de conception.",
    },

    store: {
      nav: "Le magasin",
      label: "Le magasin partenaire",
      title: "Un partenariat,\npas une location.",
      yaka: { head: "YAKA", sub: "apporte le concept", items: ["Le produit", "Le stand", "La cause", "L’étudiant", "L’animation", "L’organisation"] },
      store: { head: "Le magasin", sub: "lui donne un terrain", items: ["Un petit espace", "Son flux", "Son accueil"] },
      result: { head: "Une rencontre", sub: "qui a du sens", items: ["Pour vos clients", "Pour les étudiants", "Pour la cause"] },
      line: "Vous nous donnez l’espace.\nNous lui donnons du sens.",
      light: "Un modèle volontairement léger : moins de frais d’installation, plus de moyens pour les étudiants et pour la cause.",
    },

    benefits: {
      nav: "Pour le magasin",
      label: "Pour le magasin",
      title: "Ce qu’un samedi YAKA\napporte à votre magasin.",
      items: [
        ["Une cause concrète", "Associer le magasin à un engagement envers les personnes sourdes et malentendantes."],
        ["Animation", "Une présence humaine supplémentaire dans les allées."],
        ["Expérience client", "Une découverte accompagnée plutôt qu’un produit simplement posé en rayon."],
        ["Jeunesse", "Des étudiants qui acquièrent une vraie expérience professionnelle."],
        ["Jeunes entrepreneurs", "Soutenir un projet français porté par des jeunes."],
        ["Zéro contrainte", "Nous installons, animons et rangeons. Vos équipes n’ont rien à gérer."],
        ["Et ensuite ?", "Si l’expérience plaît à vos clients, nous imaginerons la suite ensemble."],
      ],
    },

    pilot: {
      nav: "Un premier samedi",
      label: "Notre proposition",
      titleGeneric: "Et si l’histoire continuait\ndans votre magasin ?",
      titlePartner: "Et si l’histoire continuait\nà {city} ?",
      formula: [["1", "magasin"], ["1", "samedi"], ["1", "étudiant"], ["1", "stand"], ["1", "café solidaire"]],
      askTitle: "Ce que nous vous demandons",
      asks: ["Un petit espace dans vos allées", "Un samedi", "Votre accueil", "Une mise à disposition gracieuse ou à tarif solidaire"],
      measureTitle: "Ce que nous mesurerons",
      measures: ["Ventes et transactions", "Retours clients", "Retour des équipes magasin", "Montant reversé à la cause"],
      line: "Pas besoin de croire à une projection.\nTestons-la sur le terrain.",
      after: "Puis nous faisons le bilan, ensemble.",
    },

    cta: {
      nav: "Commençons",
      title: "Commençons\npar un samedi.",
      body: "Si l’expérience fonctionne, construisons la suite ensemble.",
      button: "Accueillir un samedi YAKA",
    },
  },
};
