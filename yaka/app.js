/* ==========================================================================
   YAKA — COMPOSANTS, ÉCRANS & INTERACTIONS
   Le contenu vient exclusivement de content.js (window.YAKA_CONTENT).
   ========================================================================== */
(function () {
  "use strict";

  const C = window.YAKA_CONTENT;
  const S = C.slides;

  /* ---------- Helpers ---------------------------------------------------- */

  // "[[x]]" → placeholder visible, "\n" → <br>
  const fmt = (s) => String(s ?? "")
    .replace(/\[\[(.+?)\]\]/g, '<span class="todo">$1</span>')
    .replace(/\n/g, "<br>");

  const todo = (s) => `<span class="todo">${s}</span>`;

  // Titre révélé ligne par ligne
  const lines = (s, cls = "", d = 0) =>
    `<div class="lines ${cls}" style="--d:${d}">${String(s).split("\n")
      .map((l, i) => `<span class="ln"><span style="--i:${i}">${fmt(l)}</span></span>`).join("")}</div>`;

  const label = (n, text, d = 0) =>
    `<div class="label r" style="--d:${d}"><span class="num">${String(n).padStart(2, "0")}</span><span class="rule"></span><span>${text}</span></div>`;

  // Image ou emplacement photo premium
  const photo = (src, caption, alt = "", cls = "") => src
    ? `<img class="${cls}" src="${src}" alt="${alt}" loading="eager">`
    : `<div class="ph"><i class="c c1"></i><i class="c c2"></i><i class="c c3"></i><i class="c c4"></i>
         <span class="ph-k">Photographie à venir</span><span class="ph-t">${caption}</span></div>`;

  const euro = (n) => `${n}<small>&#8239;€</small>`;

  // Magasin : version générique ou personnalisée (content.js → partner)
  const PT = C.partner && C.partner.name ? C.partner : null;
  const partnerLabel = PT ? [PT.name, PT.city].filter(Boolean).join(" ") : "Magasins partenaires";

  /* ---------- Écrans ----------------------------------------------------- */

  const slides = [];
  const add = (id, theme, nav, html) => slides.push({ id, theme, nav, html });
  let n = 0; // numéro d'écran pour les labels
  const next = () => ++n;

  // Couverture
  next();
  add("cover", "black", S.cover.nav, `
    <section class="slide s-cover" data-theme="black">
      <div class="photo hero"><picture><source media="(max-width: 900px), (max-aspect-ratio: 4/5)" srcset="${C.images.packFront}"><img src="${C.images.hero}" alt="YAKA, 100 % Arabica : le paquet posé sur des rochers et des grains de café"></picture></div>
      <div class="hero-copy">
        <p class="eyebrow r" style="--d:6">${fmt(S.cover.eyebrow)}</p>
        ${lines(S.cover.headline, "headline serif", 7)}
        <p class="lead r" style="--d:11">${fmt(S.cover.lead)}</p>
      </div>
      <ul class="facts">${S.cover.facts.map(([v, k], i) => `<li class="r" style="--d:${12 + i}"><b>${v}</b><span>${k}</span></li>`).join("")}</ul>
      <div class="meta r" style="--d:15"><div class="upper muted">${PT ? "À l’attention de" : "Présentation"}</div><div class="serif h-m" style="margin-top:.35em">${PT ? partnerLabel : C.meta.audience}</div></div>
      <div class="scroll-cue" aria-hidden="true"></div>
    </section>`);

  // Chacun y gagne (cercle interactif)
  const M = S.model, nodes = M.nodes;
  const R = 210, CX = 300, CY = 300, step = 360 / nodes.length;
  const pos = (deg, r = R) => [CX + r * Math.cos(deg * Math.PI / 180), CY + r * Math.sin(deg * Math.PI / 180)];
  const ringPath = `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX} ${CY + R} A ${R} ${R} 0 1 1 ${CX} ${CY - R}`;
  const cycleSvg = `
    <svg viewBox="0 0 600 600" role="img" aria-label="Le cercle YAKA : ${nodes.map((nd) => nd.name).join(", ")}">
      <circle class="inner" cx="${CX}" cy="${CY}" r="${R - 58}"/>
      <path class="ring" d="${ringPath}"/>
      <path class="ring-draw" d="${ringPath}"/>
      ${nodes.map((_, i) => {
        const a = -90 + i * step + step / 2; const [x, y] = pos(a);
        return `<path class="chev" d="M -4 -5 L 3 0 L -4 5" transform="translate(${x} ${y}) rotate(${a + 90})"/>`;
      }).join("")}
      ${nodes.map((nd, i) => {
        const a = -90 + i * step; const [x, y] = pos(a); const [lx, ly] = pos(a, R + 30);
        const [tx1, ty1] = pos(a, R - 10); const [tx2, ty2] = pos(a, R - 22);
        const cs = Math.cos(a * Math.PI / 180), sn = Math.sin(a * Math.PI / 180);
        const anchor = Math.abs(cs) < .2 ? "middle" : (cs > 0 ? "start" : "end");
        const dy = sn < -.9 ? -6 : (sn > .5 ? 14 : 4);
        return `<g class="node" data-i="${i}" tabindex="0" role="button" aria-label="${nd.name}">
          <circle class="hit" cx="${x}" cy="${y}" r="34"/>
          <line class="tick" x1="${tx1}" y1="${ty1}" x2="${tx2}" y2="${ty2}"/>
          <circle class="dot" cx="${x}" cy="${y}" r="5"/>
          <text x="${lx}" y="${ly + dy}" text-anchor="${anchor}">${nd.name}</text>
        </g>`;
      }).join("")}
      <circle class="runner" r="2.6"><animateMotion dur="14s" repeatCount="indefinite" path="${ringPath}"/></circle>
    </svg>`;
  add("model", "ivory", M.nav, `
    <section class="slide s-model ivory">
      <div class="grid">
        <div class="left">
          <div class="head">
            ${label(next(), M.label)}
            ${lines(M.title, "title serif")}
            <p class="upper muted r" style="--d:3;margin-top:1.6em">${M.hint}</p>
          </div>
          <ul class="legend r" style="--d:4">
            ${nodes.map((nd, i) => `<li data-i="${i}"><b>${nd.name}</b><span>${nd.does}. <em class="serif italic">${nd.gets}</em></span></li>`).join("")}
          </ul>
          <p class="loop serif italic muted r" style="--d:5">${M.loop}</p>
        </div>
        <div class="cycle r-fade" style="--d:1">
          ${cycleSvg}
          <div class="core">
            <div class="brand"><span class="logo" role="img" aria-label="YAKA"></span></div>
            <div class="who upper muted">${nodes[0].name} · reçoit</div>
            <div class="gets">${nodes[0].gets}</div>
          </div>
        </div>
      </div>
    </section>`);

  // L'association : 1 paquet = 1 €
  const CA = C.cause, CS = S.cause;
  const nf = (x) => Math.round(x).toLocaleString("fr-FR").replace(/ | /g, " ");
  add("cause", "kaki", CS.nav, `
    <section class="slide s-cause kaki">
      <div class="grid">
        <div class="left">
          ${label(next(), CS.label)}
          ${lines(CS.title, "title serif", 1)}
          <p class="body r" style="--d:4">${fmt(CS.body)}</p>
          <div class="status r" style="--d:6">
            <div class="row"><span class="upper muted">Association</span><span>${CA.partnerName ? CA.partnerName : todo(CA.partnerStatus)}</span></div>
          </div>
          <p class="honesty r" style="--d:7">${fmt(CS.honesty)}</p>
        </div>
        <div class="sim r" style="--d:3">
          <div class="eq">
            <div class="v"><span class="sim-packs">${nf(CA.example)}</span></div>
            <div class="k upper">${CS.example}</div>
            <div class="op">=</div>
            <div class="v strong"><span class="sim-euros">${nf(CA.example * CA.perPack)}</span><small>&#8239;€</small></div>
            <div class="k upper">${CS.exampleResult}</div>
          </div>
          <label class="range">
            <span class="upper muted">${CS.simLabel}</span>
            <input type="range" min="0" max="${CA.simulatorMax}" step="10" value="${CA.example}" aria-label="Nombre de paquets vendus">
          </label>
          <div class="beads" aria-hidden="true">${Array.from({ length: 30 }, () => "<i></i>").join("")}</div>
          <p class="sim-note muted">${fmt(CS.simNote)}</p>
        </div>
      </div>
    </section>`);

  // Pourquoi cette cause (histoire familiale)
  const W = S.deaf;
  add("deaf", "ivory", W.nav, `
    <section class="slide s-origin ivory${C.images.ear ? " has-ear" : ""}">
      ${C.images.ear ? `<figure class="ear r-fade" style="--d:2"><img src="${C.images.ear}" alt="Une oreille dessinée par une foule de personnes"></figure>` : ""}
      ${label(next(), W.label)}
      <div class="center">
        <p class="lead serif italic r" style="--d:1">${fmt(W.lead)}</p>
        ${lines(W.title, "title serif", 2)}
        <div class="cols">
          <p class="body r" style="--d:6">${fmt(W.body)}</p>
          <p class="closing r" style="--d:8">${fmt(W.closing)}</p>
        </div>
      </div>
      <svg class="wave" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M 0 60.0 L 5 72.0 L 10 82.1 L 15 86.5 L 20 82.8 L 25 71.3 L 30 55.1 L 35 39.1 L 40 28.7 L 45 27.5 L 50 36.2 L 55 52.2 L 60 70.5 L 65 85.3 L 70 92.1 L 75 89.1 L 80 77.8 L 85 62.2 L 90 47.4 L 95 37.9 L 100 35.9 L 105 41.1 L 110 50.8 L 115 61.5 L 120 69.8 L 125 73.5 L 130 72.6 L 135 68.4 L 140 62.9 L 145 58.1 L 150 55.3 L 155 54.7 L 160 55.7 L 165 57.6 L 170 59.5 L 175 61.1 L 180 62.1 L 185 62.6 L 190 62.5 L 195 61.6 L 200 60.0 L 205 57.7 L 210 55.3 L 215 53.9 L 220 54.3 L 225 56.9 L 230 61.6 L 235 66.9 L 240 71.1 L 245 72.3 L 250 69.6 L 255 63.3 L 260 55.0 L 265 47.4 L 270 43.1 L 275 43.8 L 280 49.6 L 285 58.8 L 290 68.6 L 295 75.9 L 300 78.3 L 305 75.2 L 310 67.8 L 315 58.4 L 320 50.2 L 325 45.5 L 330 45.4 L 335 49.6 L 340 56.2 L 345 62.9 L 350 67.8 L 355 69.5 L 360 68.3 L 365 64.9 L 370 60.9 L 375 57.7 L 380 56.0 L 385 55.9 L 390 57.0 L 395 58.6 L 400 60.0 L 405 61.0 L 410 61.4 L 415 61.3 L 420 61.0 L 425 60.4 L 430 59.8 L 435 59.1 L 440 58.5 L 445 58.2 L 450 58.5 L 455 59.4 L 460 61.0 L 465 62.6 L 470 63.8 L 475 63.9 L 480 62.7 L 485 60.3 L 490 57.4 L 495 54.9 L 500 53.8 L 505 54.5 L 510 57.1 L 515 60.7 L 520 64.2 L 525 66.5 L 530 66.9 L 535 65.2 L 540 61.9 L 545 58.3 L 550 55.4 L 555 54.0 L 560 54.5 L 565 56.6 L 570 59.3 L 575 61.9 L 580 63.6 L 585 63.9 L 590 63.1 L 595 61.6 L 600 59.9 L 605 58.7 L 610 58.1 L 615 58.3 L 620 58.8 L 625 59.6 L 630 60.2 L 635 60.5 L 640 60.6 L 645 60.5 L 650 60.3 L 655 60.1 L 660 59.9 L 665 59.8 L 670 59.7 L 675 59.7 L 680 59.8 L 685 60.0 L 690 60.2 L 695 60.4 L 700 60.5 L 705 60.4 L 710 60.2 L 715 59.9 L 720 59.6 L 725 59.4 L 730 59.3 L 735 59.5 L 740 59.8 L 745 60.2 L 750 60.4 L 755 60.6 L 760 60.5 L 765 60.3 L 770 60.1 L 775 59.9 L 780 59.8 L 785 59.8 L 790 59.8 L 795 59.9 L 800 60.0 L 805 60.0 L 810 60.0 L 815 60.0 L 820 60.0 L 825 60.0 L 830 60.0 L 835 60.0 L 840 60.0 L 845 60.0 L 850 60.0 L 855 60.0 L 860 60.0 L 865 60.0 L 870 60.0 L 875 60.0 L 880 60.0 L 885 60.0 L 890 60.0 L 895 60.0 L 900 60.0 L 905 60.0 L 910 60.0 L 915 60.0 L 920 60.0 L 925 60.0 L 930 60.0 L 935 60.0 L 940 60.0 L 945 60.0 L 950 60.0 L 955 60.0 L 960 60.0 L 965 60.0 L 970 60.0 L 975 60.0 L 980 60.0 L 985 60.0 L 990 60.0 L 995 60.0 L 1000 60.0 L 1005 60.0 L 1010 60.0 L 1015 60.0 L 1020 60.0 L 1025 60.0 L 1030 60.0 L 1035 60.0 L 1040 60.0 L 1045 60.0 L 1050 60.0 L 1055 60.0 L 1060 60.0 L 1065 60.0 L 1070 60.0 L 1075 60.0 L 1080 60.0 L 1085 60.0 L 1090 60.0 L 1095 60.0 L 1100 60.0 L 1105 60.0 L 1110 60.0 L 1115 60.0 L 1120 60.0 L 1125 60.0 L 1130 60.0 L 1135 60.0 L 1140 60.0 L 1145 60.0 L 1150 60.0 L 1155 60.0 L 1160 60.0 L 1165 60.0 L 1170 60.0 L 1175 60.0 L 1180 60.0 L 1185 60.0 L 1190 60.0 L 1195 60.0 L 1200 60.0"/></svg>
    </section>`);

  // Concrètement (respiration photo)
  add("interlude", "black", S.interlude.nav, `
    <section class="slide s-interlude">
      ${label(next(), S.interlude.label)}
      ${lines(S.interlude.title, "title serif", 1)}
      <div class="band r-fade" style="--d:2">${photo(C.images.beans, "Grains torréfiés", "Grains de café YAKA torréfiés")}</div>
    </section>`);

  // Clé en main
  const K = S.turnkey;
  add("turnkey", "sand", K.nav, `
    <section class="slide s-turnkey sand">
      ${label(next(), K.label)}
      ${lines(K.title, "title serif")}
      <div class="cols">
        <div class="col big r" style="--d:2">
          <h4 class="upper muted">${K.yakaTitle}</h4>
          <ol>${K.yaka.map((x, i) => `<li><em>0${i + 1}</em><span>${fmt(x)}</span></li>`).join("")}</ol>
        </div>
        <div class="col small r" style="--d:4">
          <h4 class="upper muted">${K.storeTitle}</h4>
          <ul>${K.store.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul>
          <p class="note serif italic">${fmt(K.note)}</p>
        </div>
      </div>
    </section>`);

  // Le café
  const cf = C.coffee;
  add("product", "black", S.product.nav, `
    <section class="slide s-product">
      <div class="photo pack"><img src="${C.images.packBack}" alt="Paquet Maison YAKA 250 g : 100 % Arabica, Brésil, Pérou, Colombie, Éthiopie, torréfaction medium-dark, chocolaté, doux, gourmand"></div>
      <div class="info">
        ${label(next(), S.product.label)}
        ${lines(S.product.title, "title serif")}
        <div class="profile r" style="--d:4">${cf.profile.map((p) => `<span>${p}</span>`).join("")}</div>
        <p class="promise r" style="--d:5">${fmt(S.product.promise)}</p>
        <div class="specs r" style="--d:6">
          <dl>
            <dt>Café</dt><dd>${cf.type} · ${cf.blend.toLowerCase()}</dd>
            <dt>Origines</dt><dd>${cf.origins}</dd>
            <dt>Torréfaction</dt><dd>${cf.roast}</dd>
            <dt>Format</dt><dd>${cf.form} · ${cf.weight} · ${cf.price}</dd>
            <dt>Usage</dt><dd>${cf.usage}</dd>
          </dl>
        </div>
      </div>
    </section>`);

  // Les étudiants
  add("people", "sand", S.people.nav, `
    <section class="slide s-people sand">
      <div class="grid">
        <div class="left">
          ${label(next(), S.people.label)}
          <div class="formula">${S.people.formula.map(([a, b], i) => `<div class="f r" style="--d:${1 + i}"><b>${a}</b><span class="upper muted">${b}</span></div>`).join("")}</div>
          ${lines(S.people.title, "title sans-title", 3)}
          <p class="body r" style="--d:6">${fmt(S.people.body)}</p>
          <div class="skills r" style="--d:7">${S.people.skills.map((s) => `<span>${s}</span>`).join("")}</div>
        </div>
        <div class="right">
          <div class="frame r-fade" style="--d:2">${photo(C.images.student, S.people.photoCaption, "Étudiant YAKA en magasin")}</div>
          <p class="quote serif italic r" style="--d:8">${fmt(S.people.quote)}</p>
          <p class="muted t-s r" style="--d:9;font-size:var(--fs-body)">${fmt(S.people.network)}</p>
        </div>
      </div>
    </section>`);

  // Le terrain
  const f = C.field;
  add("proof", "kaki", S.proof.nav, `
    <section class="slide s-proof kaki">
      ${label(next(), S.proof.label)}
      <div class="head">
        ${lines(S.proof.title, "title", 1)}
        <p class="claim serif italic h-m soft r" style="--d:3">${fmt(S.proof.claim)}</p>
      </div>
      <div class="hero">
        <div class="stat target r" style="--d:2"><div class="v">${euro(`<span class="count" data-to="${f.target}">${f.target}</span>`)}</div><div class="k">Objectif initial<br>par vendeur</div></div>
        <div class="stat big r" style="--d:3"><div class="v"><span class="tilde">~</span>${euro(`<span class="count" data-to="${f.average}">${f.average}</span>`)}</div><div class="k"><strong>CA moyen observé</strong> par vendeur</div></div>
        <div></div>
      </div>
      <div class="row">
        <div class="stat r" style="--d:5"><div class="v">${euro(`<span class="count" data-to="${f.founderRevenue}">${f.founderRevenue}</span>`)}</div><div class="k">Réalisés personnellement<br>par un porteur du projet</div></div>
        <div class="stat r" style="--d:6"><div class="v">${euro(`<span class="count" data-to="${f.best}">${f.best}</span>`)}</div><div class="k">Meilleure performance<br>observée</div></div>
        <div class="stat r" style="--d:7"><div class="v"><span class="count" data-to="${f.founderSales}">${f.founderSales}</span></div><div class="k">Ventes en une journée par un porteur<br>du projet — hypothèse initiale : ${f.salesHypothesis}</div></div>
      </div>
      <div class="foot r" style="--d:9">
        <p>${fmt(f.disclaimer)}</p>
        <p>Performance la plus faible observée : environ ${f.lowest}&#8239;€, malgré des difficultés avec le terminal de paiement.</p>
      </div>
    </section>`);

  // Sur place (avec ou sans table)

  add("meeting", "ivory", S.meeting.nav, `
    <section class="slide s-meeting ivory">
      <div class="grid">
        <div class="left">
          ${label(next(), S.meeting.label)}
          <div class="lines3">${S.meeting.lines.map((l, i) => `<div class="l serif r" style="--d:${1 + i * 2}"><em>0${i + 1}</em><span>${l}</span></div>`).join("")}</div>
          <p class="body r" style="--d:7">${fmt(S.meeting.body)}</p>
          <div class="qual r" style="--d:8">${S.meeting.qualities.map((q) => `<span>${q}</span>`).join("")}</div>
        </div>
        <div class="right">
          ${C.images.onsite ? `<div class="frame r-fade" style="--d:2">${photo(C.images.onsite, "", "Étudiant YAKA en magasin")}</div>` : ""}
          <h4 class="upper muted r" style="--d:3">${S.meeting.optionsTitle}</h4>
          <div class="options">${S.meeting.options.map(([h, t], i) => `<div class="opt r" style="--d:${4 + i}"><em>${String.fromCharCode(65 + i)}</em><b class="serif">${h}</b><p>${fmt(t)}</p></div>`).join("")}</div>
        </div>
      </div>
    </section>`);

  // Notre proposition
  const P = S.pilot;
  const pilotTitle = PT && PT.city ? P.titlePartner.replace("{city}", PT.city) : P.titleGeneric;
  add("pilot", "kaki", P.nav, `
    <section class="slide s-pilot kaki">
      ${label(next(), PT ? `${P.label} · ${partnerLabel}` : P.label)}
      <div class="top">
        ${lines(pilotTitle, "title serif")}
        <div class="formula">${P.formula.map(([a, b], i) => `<div class="f r" style="--d:${2 + i}"><b>${a}</b><span class="upper muted">${b}</span></div>`).join("")}</div>
      </div>
      <div class="bottom">
        <div class="r" style="--d:7"><h4 class="upper muted">${P.askTitle}</h4><ol class="steps">${P.asks.map((s, i) => `<li><em>0${i + 1}</em><span>${s}</span></li>`).join("")}</ol><p class="why muted">${fmt(P.askWhy)}</p></div>
        <div class="r" style="--d:8"><h4 class="upper muted">${P.measureTitle}</h4><ul>${P.measures.map((m) => `<li>${m}</li>`).join("")}</ul></div>
        <div class="final r" style="--d:9"><p class="serif italic">${fmt(P.line)}</p></div>
      </div>
    </section>`);

  // Qui sommes-nous
  add("founders", "sand", S.founders.nav, `
    <section class="slide s-story sand">
      <div class="grid">
        <div class="left">
          <div>
            ${label(next(), S.founders.label)}
            ${lines(S.founders.title, "title sans-title")}
          </div>
          <div class="body r" style="--d:4">${S.founders.body.split("\n\n").map((p) => `<p>${fmt(p)}</p>`).join("")}</div>
        </div>
        <div class="founders">
          ${C.founders.map((fd, i) => `
            <div class="founder r" style="--d:${3 + i * 2}">
              <div class="frame">${photo(fd.image, "Portrait — " + fd.name.split(" ")[0], fd.name)}</div>
              <div class="name">${fd.name}</div>
              <div class="role upper muted">${fd.role}</div>
            </div>`).join("")}
        </div>
      </div>
    </section>`);

  // Call to action
  const mail = C.ctaEmail ? `mailto:${C.ctaEmail}?subject=${encodeURIComponent("Un samedi YAKA" + (PT ? " — " + partnerLabel : ""))}` : "#contacts";
  add("cta", "kaki", S.cta.nav, `
    <section class="slide s-cta kaki">
      <div class="bg">${C.images.hero ? `<img src="${C.images.hero}" alt="">` : ""}</div>
      <div class="label r"><span class="num">${String(next()).padStart(2, "0")}</span><span class="rule"></span><span>${partnerLabel}</span></div>
      <div class="sign r" style="--d:2"><span class="logo gold" role="img" aria-label="YAKA" style="height:calc(var(--u)*2.4)"></span><div class="upper muted" style="margin-top:.6em">${fmt(S.cover.tagline.replace("\n", " "))}</div></div>
      ${lines(S.cta.title, "title serif", 1)}
      <p class="body r" style="--d:4">${fmt(S.cta.body)}</p>
      <div class="actions">
        <a class="btn r" style="--d:6" href="${mail}">${S.cta.button}<span class="arr"></span></a>
        <div class="contacts r" id="contacts" style="--d:7">
          ${C.founders.map((p) => `<div class="c"><div class="n">${p.name}</div><div class="m">${[p.role, p.phone && `<a href="tel:${p.phone.replace(/\s/g, "")}">${p.phone}</a>`, p.email && `<a href="mailto:${p.email}">${p.email}</a>`].filter(Boolean).join("<br>")}</div></div>`).join("")}
        </div>
      </div>
    </section>`);

  /* ---------- Montage ---------------------------------------------------- */

  const deck = document.getElementById("deck");
  deck.innerHTML = slides.map((s) => s.html).join("");
  const els = [...deck.querySelectorAll(".slide")];
  els.forEach((el, i) => { el.id = slides[i].id; el.dataset.theme = slides[i].theme; el.dataset.index = i; });
  document.title = C.meta.documentTitle;

  // Chrome
  const total = els.length;
  const pad = (x) => String(x).padStart(2, "0");
  const chrome = document.getElementById("chrome");
  chrome.innerHTML = `
    <div class="bar"></div>
    <div class="chrome-top">
      <a class="brandmark" href="#cover" aria-label="YAKA, retour au début"><span class="logo"></span></a>
      <div class="chrome-tools">
        <span class="counter"><span class="cur">01</span> <span class="total">/ ${pad(total)}</span></span>
        <button class="t-full" type="button" data-act="full" title="Plein écran (F)">Plein écran</button>
        ${window.YAKA_NO_PRINT ? "" : `<button type="button" data-act="print" title="Exporter en PDF (P)">PDF</button>`}
      </div>
    </div>
    <nav class="progress" aria-label="Écrans">${slides.map((s, i) => `<button type="button" data-go="${i}" aria-label="${s.nav}"><span>${s.nav}</span><i></i></button>`).join("")}</nav>`;

  const curEl = chrome.querySelector(".cur");
  const ticks = [...chrome.querySelectorAll(".progress button")];
  const bar = chrome.querySelector(".bar");
  let current = -1;

  function setCurrent(i) {
    if (i === current) return;
    current = i;
    document.body.dataset.slide = slides[i].id;
    curEl.textContent = pad(i + 1);
    ticks.forEach((t, k) => t.classList.toggle("on", k === i));
    bar.style.transform = `scaleX(${(i + 1) / total})`;
    document.body.dataset.theme = slides[i].theme;
    try { history.replaceState(null, "", "#" + slides[i].id); } catch (e) { /* cadre restreint */ }
  }

  /* ---------- Défilement fluide ------------------------------------------
     Sur grand écran, chaque geste (molette, trackpad, clavier) fait avancer
     d'exactement un écran, avec une courbe douce et sans à-coups d'inertie.
     Sur mobile, le défilement natif au doigt est conservé. */
  const deckMQ = matchMedia("(min-width: 901px) and (min-aspect-ratio: 4/5)");
  const reduceMQ = matchMedia("(prefers-reduced-motion: reduce)");
  const root = document.documentElement;
  const isDeck = () => deckMQ.matches && !root.classList.contains("is-print");
  const syncMode = () => root.classList.toggle("deck-mode", isDeck());
  syncMode();
  deckMQ.addEventListener?.("change", syncMode);

  let anim = null;
  const easeInOut = (t) => t < .5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2; // quintic
  function scrollToY(y, dur) {
    if (anim) cancelAnimationFrame(anim.raf);
    const from = window.scrollY, dist = y - from;
    if (Math.abs(dist) < 1 || reduceMQ.matches || !dur) { window.scrollTo(0, y); anim = null; return; }
    const t0 = performance.now();
    anim = { raf: 0 };
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      window.scrollTo(0, from + dist * easeInOut(p));
      if (p < 1) anim.raf = requestAnimationFrame(step);
      else { anim = null; lastAnimEnd = performance.now(); }
    };
    anim.raf = requestAnimationFrame(step);
  }
  let lastAnimEnd = 0;

  const go = (i) => {
    i = Math.max(0, Math.min(total - 1, i));
    if (!isDeck()) { els[i].scrollIntoView({ behavior: reduceMQ.matches ? "auto" : "smooth", block: "start" }); return; }
    const jump = Math.abs(i - current);
    setCurrent(i);
    enter(els[i]);
    scrollToY(els[i].offsetTop, Math.min(1500, 1050 + (jump - 1) * 90));
  };

  // Molette / trackpad : un geste = un écran. Les événements d'inertie qui
  // suivent un geste (espacés de moins de 160 ms) sont ignorés.
  let lastWheel = 0, streamUsed = false;
  window.addEventListener("wheel", (e) => {
    if (!isDeck() || e.ctrlKey) return;
    e.preventDefault();
    const now = performance.now(), gap = now - lastWheel;
    lastWheel = now;
    if (gap > 160) streamUsed = false;
    if (anim || streamUsed || Math.abs(e.deltaY) < 3) return;
    streamUsed = true;
    go(current + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  // Si l'utilisateur tire la barre de défilement, on se recale en douceur
  let settle = 0;
  window.addEventListener("scroll", () => {
    if (!isDeck() || anim) return;
    clearTimeout(settle);
    settle = setTimeout(() => {
      if (anim) return;
      const i = Math.round(window.scrollY / innerHeight);
      if (Math.abs(window.scrollY - els[i].offsetTop) > 2) { setCurrent(i); scrollToY(els[i].offsetTop, 600); }
    }, 180);
  }, { passive: true });
  window.addEventListener("resize", () => { if (isDeck() && current >= 0) window.scrollTo(0, els[current].offsetTop); });

  // Écran courant = celui qui traverse le milieu de l'écran
  const centerObs = new IntersectionObserver((entries) => {
    if (typeof anim !== "undefined" && anim) return; // pendant une transition pilotée, l'écran cible fait foi
    entries.forEach((e) => { if (e.isIntersecting) setCurrent(+e.target.dataset.index); });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
  // Révélation dès qu'un écran est visible à ~35 %
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) enter(e.target); });
  }, { threshold: 0.35 });
  els.forEach((el) => { centerObs.observe(el); revealObs.observe(el); });

  function enter(el) {
    if (el.classList.contains("in")) return;
    el.classList.add("in");
    el.querySelectorAll(".count").forEach(countUp);
    if (el.id === "model") startCycle();
  }

  /* ---------- Compteurs -------------------------------------------------- */
  function countUp(node) {
    const to = +node.dataset.to;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dur = 1900, t0 = performance.now() + 350;
    node.textContent = "0";
    const tick = (t) => {
      const p = Math.min(1, Math.max(0, (t - t0) / dur));
      const e = 1 - Math.pow(2, -10 * p);
      node.textContent = Math.round(to * (p === 1 ? 1 : e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Simulateur : paquets vendus → € reversés ------------------ */
  const sim = document.querySelector(".s-cause .sim");
  const range = sim.querySelector("input[type=range]");
  const simPacks = sim.querySelector(".sim-packs");
  const simEuros = sim.querySelector(".sim-euros");
  const beads = [...sim.querySelectorAll(".beads i")];
  function renderSim() {
    const v = +range.value;
    simPacks.textContent = nf(v);
    simEuros.textContent = nf(v * CA.perPack);
    range.style.setProperty("--p", (v / +range.max * 100).toFixed(2) + "%");
    const on = Math.round(v / +range.max * beads.length);
    beads.forEach((b, i) => b.classList.toggle("on", i < on));
  }
  range.addEventListener("input", renderSim);
  renderSim();

  /* ---------- Cercle interactif ------------------------------------------ */
  const model = document.getElementById("model");
  const gNodes = [...model.querySelectorAll(".node")];
  const legend = [...model.querySelectorAll(".legend li")];
  const who = model.querySelector(".core .who");
  const gets = model.querySelector(".core .gets");
  let cycleTimer = null, hovering = false, active = -1;
  function focusNode(i) {
    if (i === active) return;
    active = i;
    gNodes.forEach((g, k) => g.classList.toggle("on", k === i));
    legend.forEach((l, k) => l.classList.toggle("on", k === i));
    gets.classList.add("fade");
    setTimeout(() => {
      who.textContent = nodes[i].name + " · reçoit";
      gets.textContent = nodes[i].gets;
      gets.classList.remove("fade");
    }, 220);
  }
  function startCycle() {
    if (cycleTimer) return;
    focusNode(0);
    cycleTimer = setInterval(() => { if (!hovering) focusNode((active + 1) % nodes.length); }, 3600);
  }
  [...gNodes, ...legend].forEach((el) => {
    const i = +el.dataset.i;
    el.addEventListener("mouseenter", () => { hovering = true; focusNode(i); });
    el.addEventListener("mouseleave", () => { hovering = false; });
    el.addEventListener("focus", () => focusNode(i));
    el.addEventListener("click", () => { hovering = false; focusNode(i); });
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focusNode(i); } });
  });
  gNodes[0].classList.add("on"); legend[0].classList.add("on"); active = 0;

  /* ---------- Navigation ------------------------------------------------- */
  const isField = (t) => /INPUT|TEXTAREA|SELECT/.test(t.tagName);
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || isField(e.target)) return;
    const k = e.key;
    if (["ArrowDown", "ArrowRight", "PageDown", " "].includes(k)) { e.preventDefault(); go(current + 1); }
    else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(k)) { e.preventDefault(); go(current - 1); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); go(total - 1); }
    else if (k === "f" || k === "F") toggleFull();
    else if ((k === "p" || k === "P") && !window.YAKA_NO_PRINT) printDeck();
  });

  chrome.addEventListener("click", (e) => {
    const b = e.target.closest("button, a");
    if (!b) return;
    if (b.dataset.go) go(+b.dataset.go);
    if (b.dataset.act === "full") toggleFull();
    if (b.dataset.act === "print") printDeck();
    if (b.classList.contains("brandmark")) { e.preventDefault(); go(0); }
  });

  function toggleFull() {
    const d = document;
    if (!d.fullscreenElement) (d.documentElement.requestFullscreen || d.documentElement.webkitRequestFullscreen)?.call(d.documentElement);
    else (d.exitFullscreen || d.webkitExitFullscreen)?.call(d);
  }
  const fullBtn = chrome.querySelector('[data-act="full"]');
  document.addEventListener("fullscreenchange", () => { fullBtn.textContent = document.fullscreenElement ? "Quitter" : "Plein écran"; });

  function finalize() {
    els.forEach((el) => el.classList.add("in"));
    deck.querySelectorAll(".count").forEach((c) => { c.textContent = c.dataset.to; });
  }
  function printDeck() { finalize(); setTimeout(() => window.print(), 50); }
  window.addEventListener("beforeprint", finalize);

  /* ---------- Démarrage -------------------------------------------------- */
  // Mode export : ?print → tout est affiché dans son état final
  if (/[?&]print\b/.test(location.search)) { document.documentElement.classList.add("is-print"); finalize(); }
  const start = slides.findIndex((s) => "#" + s.id === location.hash);
  if (start > 0) els[start].scrollIntoView({ block: "start" });
  setCurrent(Math.max(0, start));
  requestAnimationFrame(() => document.documentElement.classList.add("ready"));
})();
