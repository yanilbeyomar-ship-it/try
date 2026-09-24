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
   ========================================================================== */

window.YAKA_CONTENT = {

  /* ---------- Général ---------------------------------------------------- */
  meta: {
    brand: "YAKA",
    documentTitle: "YAKA — Présentation partenaires",
    edition: "Dossier de présentation · 2026",
    audience: "E.Leclerc Saint-Aunès",
  },

  partner: {
    name: "E.Leclerc",
    city: "Saint-Aunès",
  },

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
    hands: null,                         // mains, paquet, échange
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
    focus: "Une attention particulière est portée aux initiatives liées au handicap, notamment à l’accompagnement des personnes sourdes et malentendantes.",
    partnerStatus: "En cours de sélection",
    partnerName: null,          // renseigner lorsque le partenariat sera officiel
    cafesSold: null,            // ex. "12 000" — null tant que rien n'est mesuré
    amountDonated: null,        // ex. "3 000 €"
  },

  /* ---------- Expérience terrain (autre catégorie de produit) ------------ */
  field: {
    target: 240,
    average: 340,
    founderRevenue: 416,
    best: 750,
    lowest: 180,
    founderSales: 34,
    salesHypothesis: 24,
    disclaimer: "Résultats issus d’une première expérience de vente terrain sur une autre catégorie de produit. Ils constituent des observations et ne constituent ni une prévision ni une garantie de performance pour YAKA.",
  },

  /* ---------- Écrans ----------------------------------------------------- */
  slides: {

    cover: {
      nav: "YAKA",
      tagline: "Un café qui a du goût.\nUn projet qui a du sens.",
    },

    story: {
      nav: "Notre histoire",
      label: "Notre histoire",
      title: "Deux jeunes entrepreneurs.\nUne première expérience terrain.\nUne idée qui apparaît.",
      body: "Avant YAKA, il y a eu la vente, la prospection, les premiers projets. Puis une journée de vente sur stand, face aux clients, avec un autre produit premium.\n\nCe jour-là, un modèle simple a été mis à l’épreuve : des étudiants, un stand, une vraie rencontre avec le public.",
    },

    spark: {
      nav: "Le déclic",
      label: "Le déclic",
      intro: "Sur le stand, plusieurs clients posaient spontanément la même question.",
      question: "« Est-ce que vous vendez aussi du café ? »",
      answer: "Et si nous construisions\nquelque chose autour de ça ?",
      note: "Un modèle de vente humaine et directe.\nUn produit universel, récurrent et premium.",
    },

    why: {
      nav: "Pourquoi le café",
      label: "Pourquoi le café",
      words: ["Quotidien", "Universel", "Émotionnel", "Récurrent", "Partageable", "Premium"],
      problem: "Mais le rayon café est saturé de références difficiles à distinguer.",
      turn: "YAKA prend le chemin inverse.",
      nots: ["Pas dix cafés au lancement.", "Pas une gamme incompréhensible.", "Pas une accumulation d’origines et de termes techniques."],
      trio: ["Une marque.", "Un café signature.", "Une histoire."],
      closing: "Le client ne se demande pas lequel choisir.\nIl découvre le café YAKA.",
    },

    product: {
      nav: "Le produit",
      label: "Le produit",
      title: "Un café.\nUne signature.",
      promise: "Assez qualitatif pour surprendre.\nAssez accessible pour devenir le café de tous les jours.",
    },

    people: {
      nav: "L’humain",
      label: "L’humain",
      formula: [["1", "étudiant"], ["1", "stand"], ["1", "café"], ["1", "journée"]],
      title: "Derrière chaque stand,\nun étudiant.",
      body: "Des missions commerciales rémunérées, principalement le samedi. Les étudiants ne sont pas des figurants : ils représentent la marque et participent à son développement.",
      skills: ["Prise de parole", "Confiance", "Vente", "Autonomie", "Relation client", "Responsabilité", "Expérience professionnelle"],
      quote: "Un samedi de travail.\nUne expérience qui reste.",
      network: "À terme : un réseau d’étudiants capables de représenter YAKA dans différents points de vente.",
      photoCaption: "Étudiant YAKA au stand — échange, produit en main",
    },

    impact: {
      nav: "L’impact",
      label: "L’impact",
      kicker: "Faire du commerce un moteur d’impact.",
      title: "Plus YAKA grandit,\nplus son impact grandit.",
      body: "La solidarité n’est pas une ligne ajoutée à la fin. Elle fait partie du modèle : une partie de l’activité commerciale doit soutenir concrètement une cause associative.",
      flow: ["cafés vendus", "reversés", "un impact concret, communiqué"],
      honesty: "Aucun partenariat n’est encore signé. Le choix sera annoncé, et l’engagement rendu mesurable, en toute transparence.",
    },

    model: {
      nav: "Le modèle",
      label: "Le modèle",
      title: "Chacun reçoit\nquelque chose.",
      hint: "Survolez le cercle",
      nodes: [
        { key: "client",   name: "Client",   does: "achète un produit premium",              gets: "Un bon produit et une histoire." },
        { key: "etudiant", name: "Étudiant", does: "travaille et acquiert de l’expérience",  gets: "Un revenu et une expérience." },
        { key: "cause",    name: "Cause",    does: "bénéficie d’une contribution",           gets: "Un soutien financier." },
        { key: "magasin",  name: "Magasin",  does: "accueille une animation porteuse de sens", gets: "Une animation et une initiative valorisante." },
        { key: "yaka",     name: "YAKA",     does: "développe sa présence",                  gets: "Un canal d’acquisition et de distribution." },
      ],
      loop: "… et le cercle recommence.",
    },

    proof: {
      nav: "Le terrain",
      label: "La preuve terrain",
      title: "Le principe a déjà rencontré\nde vrais clients.",
      claim: "YAKA n’est pas une idée construite derrière un ordinateur.",
    },

    meeting: {
      nav: "La rencontre",
      label: "La rencontre",
      lines: ["Le produit attire.", "L’humain explique.", "Le client décide."],
      body: "Pas de vendeur qui interpelle. Une rencontre, en magasin, principalement le samedi.",
      qualities: ["Léger", "Premium", "Élégant", "Simple à installer", "Peu encombrant", "Sans infrastructure lourde"],
      caption: "Illustration de principe — stand en cours de conception.",
    },

    store: {
      nav: "Le magasin",
      label: "Le magasin partenaire",
      title: "Un partenariat.",
      yaka: { head: "YAKA", sub: "apporte le concept", items: ["Le produit", "Le stand", "La marque", "L’étudiant", "L’animation", "L’organisation"] },
      store: { head: "Le magasin", sub: "lui donne un terrain", items: ["L’espace", "Le flux", "L’accueil"] },
      result: { head: "Une animation", sub: "qui crée de la valeur", items: ["Une expérience client"] },
      line: "Vous nous donnez l’espace.\nNous lui donnons du sens.",
    },

    benefits: {
      nav: "Pour le magasin",
      label: "Pour le magasin",
      title: "Ce qu’un samedi YAKA\napporte au point de vente.",
      items: [
        ["Animation", "Une présence humaine supplémentaire dans le magasin."],
        ["Expérience client", "Une découverte accompagnée plutôt qu’un produit simplement posé en rayon."],
        ["Jeunesse", "Des étudiants qui acquièrent une vraie expérience professionnelle."],
        ["Solidarité", "Une activité commerciale associée à un engagement concret."],
        ["Jeune entrepreneuriat", "Un projet porté par de jeunes entrepreneurs français."],
        ["Test simple", "Expérimenter le concept avant tout engagement plus important."],
        ["Potentiel commercial", "Si les résultats sont là, réfléchir ensemble à une relation plus large. Rien n’est acquis : tout se mesure."],
      ],
    },

    pilot: {
      nav: "Saint-Aunès",
      label: "Proposition",
      title: "Et si l’histoire commençait\nà Saint-Aunès ?",
      formula: [["1", "magasin"], ["1", "samedi"], ["1", "étudiant"], ["1", "stand"], ["1", "café signature"]],
      measureTitle: "Ce que nous mesurerons",
      measures: ["Ventes", "Nombre de transactions", "Retours clients", "Intérêt pour le produit", "Retour des équipes magasin"],
      steps: ["Le samedi test", "La mesure", "Le bilan, ensemble", "La suite, si l’expérience fonctionne"],
      storeSide: "Côté magasin : un espace, un samedi, un accueil.\nLe reste, nous l’apportons.",
      line: "Pas besoin de croire à une projection.\nTestons-la sur le terrain.",
    },

    cta: {
      nav: "Commençons",
      title: "Commençons\npar un samedi.",
      body: "Si l’expérience fonctionne, construisons la suite ensemble.",
      button: "Accueillir le premier test YAKA",
    },
  },
};
