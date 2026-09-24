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

  /* ---------- Écrans ----------------------------------------------------- */

  const slides = [];
  const add = (id, theme, nav, html) => slides.push({ id, theme, nav, html });
  let n = 0; // numéro d'écran pour les labels
  const next = () => ++n;

  // 01 — Couverture
  next();
  add("cover", "black", S.cover.nav, `
    <section class="slide s-cover" data-theme="black">
      <div class="photo r-fade">${photo(C.images.packaging, "Le paquet YAKA", "Paquet de café YAKA 250 g")}</div>
      <div class="tag">
        <div class="label r"><span>${C.meta.edition}</span></div>
        <div class="serif italic h-l r" style="--d:2">${fmt(S.cover.tagline)}</div>
      </div>
      <h1 class="mega" aria-label="${C.meta.brand}">${[...C.meta.brand].map((ch, i) => `<span style="--i:${i}">${ch}</span>`).join("")}</h1>
      <div class="meta r" style="--d:6"><div class="upper muted">Présentation à l’attention de</div><div class="serif h-m" style="margin-top:.35em">${C.meta.audience}</div></div>
      <div class="scroll-cue" aria-hidden="true"></div>
    </section>`);

  // 02 — Notre histoire
  add("story", "kaki", S.story.nav, `
    <section class="slide s-story kaki">
      <div class="grid">
        <div class="left">
          <div>
            ${label(next(), S.story.label)}
            ${lines(S.story.title, "title sans-title")}
          </div>
          <div class="body r" style="--d:4">${S.story.body.split("\n\n").map((p) => `<p>${fmt(p)}</p>`).join("")}</div>
        </div>
        <div class="founders">
          ${C.founders.map((f, i) => `
            <div class="founder r" style="--d:${3 + i * 2}">
              <div class="frame">${photo(f.image, "Portrait — " + f.name.split(" ")[0], f.name)}</div>
              <div class="name">${f.name}</div>
              <div class="role upper muted">${f.role}</div>
            </div>`).join("")}
        </div>
      </div>
    </section>`);

  // 03 — Le déclic
  add("spark", "black", S.spark.nav, `
    <section class="slide s-spark">
      ${label(next(), S.spark.label)}
      <div class="center">
        <p class="intro soft t-s r" style="--d:1">${fmt(S.spark.intro)}</p>
        ${lines(S.spark.question, "question serif italic", 2)}
        <p class="answer r" style="--d:7">${fmt(S.spark.answer)}</p>
      </div>
      <div class="band r-fade" style="--d:3">
        ${photo(C.images.beans, "Grains torréfiés", "Grains de café torréfiés")}
        <p class="note upper">${fmt(S.spark.note)}</p>
      </div>
    </section>`);

  // 04 — Pourquoi le café
  add("why", "ivory", S.why.nav, `
    <section class="slide s-why ivory">
      <div class="grid">
        <div>
          ${label(next(), S.why.label)}
          <ul class="words">${S.why.words.map((w, i) => `<li class="r" style="--d:${i + 1}"><em>0${i + 1}</em>${w}</li>`).join("")}</ul>
        </div>
        <div class="right">
          <p class="problem r" style="--d:3">${fmt(S.why.problem)}</p>
          <p class="turn r" style="--d:4">${fmt(S.why.turn)}</p>
          <ul class="nots r" style="--d:5">${S.why.nots.map((t) => `<li>${t}</li>`).join("")}</ul>
          <div class="trio">${S.why.trio.map((t, i) => `<span class="r" style="--d:${7 + i}">${t}</span>`).join("")}</div>
          <p class="closing soft r" style="--d:10">${fmt(S.why.closing)}</p>
        </div>
      </div>
    </section>`);

  // 05 — Le produit
  const cf = C.coffee;
  add("product", "black", S.product.nav, `
    <section class="slide s-product">
      <div class="photo">${photo(C.images.packaging, "Packshot du café YAKA", "Paquet YAKA")}</div>
      <div class="info">
        ${label(next(), S.product.label)}
        ${lines(S.product.title, "title serif")}
        <div class="profile r" style="--d:4">${cf.profile.map((p) => `<span>${p}</span>`).join("")}</div>
        <p class="promise r" style="--d:5">${fmt(S.product.promise)}</p>
        <div class="specs r" style="--d:6">
          <dl>
            <dt>Format</dt><dd>${cf.form} · ${cf.weight}</dd>
            <dt>${cf.priceLabel}</dt><dd>${cf.price}</dd>
            <dt>Positionnement</dt><dd>${cf.positioning}</dd>
            <dt>Usage</dt><dd>${cf.usage}</dd>
            <dt>Origine</dt><dd>${fmt(cf.origin)}</dd>
          </dl>
        </div>
      </div>
    </section>`);

  // 06 — L'humain
  add("people", "kaki", S.people.nav, `
    <section class="slide s-people kaki">
      <div class="grid">
        <div class="left">
          ${label(next(), S.people.label)}
          <div class="formula">${S.people.formula.map(([a, b], i) => `<div class="f r" style="--d:${1 + i}"><b>${a}</b><span class="upper muted">${b}</span></div>`).join("")}</div>
          ${lines(S.people.title, "title sans-title", 3)}
          <p class="body r" style="--d:6">${fmt(S.people.body)}</p>
          <div class="skills r" style="--d:7">${S.people.skills.map((s) => `<span>${s}</span>`).join("")}</div>
        </div>
        <div class="right">
          <div class="frame r-fade" style="--d:2">${photo(C.images.student, S.people.photoCaption, "Étudiant YAKA au stand")}</div>
          <p class="quote serif italic r" style="--d:8">${fmt(S.people.quote)}</p>
          <p class="muted t-s r" style="--d:9;font-size:var(--fs-body)">${fmt(S.people.network)}</p>
        </div>
      </div>
    </section>`);

  // 07 — L'impact
  const ca = C.cause;
  const flowVals = [ca.cafesSold ?? "X", ca.amountDonated ?? "X €", "→"];
  add("impact", "black", S.impact.nav, `
    <section class="slide s-impact">
      <div class="grid">
        <div class="left">
          ${label(next(), S.impact.label)}
          <p class="kicker upper muted r" style="--d:1">${S.impact.kicker}</p>
          ${lines(S.impact.title, "title serif", 1)}
          <div class="body r" style="--d:5"><p>${fmt(S.impact.body)}</p><p class="focus">${fmt(ca.focus)}</p></div>
        </div>
        <div class="right">
          <ol class="flow">
            ${S.impact.flow.map((t, i) => `
              ${i ? `<li aria-hidden="true"><span class="arrow" style="--dl:${i * .4}s"></span></li>` : ""}
              <li class="r" style="--d:${3 + i * 2}">${i < 2 ? `<b class="${(i === 0 ? ca.cafesSold : ca.amountDonated) ? "" : "todo-num"}">${flowVals[i]}</b>` : ""}<span>${t}</span></li>`).join("")}
          </ol>
          <div class="status r" style="--d:9">
            <div class="row"><span class="upper muted">Partenaire associatif</span><span>${ca.partnerName ? ca.partnerName : todo(ca.partnerStatus)}</span></div>
            <div class="row"><span class="upper muted">Montants reversés</span><span>${ca.amountDonated ? ca.amountDonated : todo("Communiqués dès le lancement")}</span></div>
          </div>
          <p class="honesty r" style="--d:10">${fmt(S.impact.honesty)}</p>
        </div>
      </div>
    </section>`);

  // 08 — Le modèle (cercle interactif)
  const nodes = S.model.nodes;
  const R = 210, CX = 300, CY = 300;
  const pos = (deg, r = R) => [CX + r * Math.cos(deg * Math.PI / 180), CY + r * Math.sin(deg * Math.PI / 180)];
  const ringPath = `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX} ${CY + R} A ${R} ${R} 0 1 1 ${CX} ${CY - R}`;
  const cycleSvg = `
    <svg viewBox="0 0 600 600" role="img" aria-label="Le cercle YAKA : client, étudiant, cause, magasin, YAKA">
      <circle class="inner" cx="${CX}" cy="${CY}" r="${R - 58}"/>
      <path class="ring" d="${ringPath}"/>
      <path class="ring-draw" d="${ringPath}"/>
      ${nodes.map((_, i) => {
        const a = -90 + i * 72 + 36; const [x, y] = pos(a);
        return `<path class="chev" d="M -4 -5 L 3 0 L -4 5" transform="translate(${x} ${y}) rotate(${a + 90})"/>`;
      }).join("")}
      ${nodes.map((nd, i) => {
        const a = -90 + i * 72; const [x, y] = pos(a); const [lx, ly] = pos(a, R + 30);
        const [tx1, ty1] = pos(a, R - 10); const [tx2, ty2] = pos(a, R - 22);
        const anchor = Math.abs(Math.cos(a * Math.PI / 180)) < .2 ? "middle" : (Math.cos(a * Math.PI / 180) > 0 ? "start" : "end");
        const dy = Math.sin(a * Math.PI / 180) < -.9 ? -6 : (Math.sin(a * Math.PI / 180) > .5 ? 14 : 4);
        return `<g class="node" data-i="${i}" tabindex="0" role="button" aria-label="${nd.name}">
          <circle class="hit" cx="${x}" cy="${y}" r="34"/>
          <line class="tick" x1="${tx1}" y1="${ty1}" x2="${tx2}" y2="${ty2}"/>
          <circle class="dot" cx="${x}" cy="${y}" r="5"/>
          <text x="${lx}" y="${ly + dy}" text-anchor="${anchor}">${nd.name}</text>
        </g>`;
      }).join("")}
      <circle class="runner" r="2.6"><animateMotion dur="14s" repeatCount="indefinite" path="${ringPath}"/></circle>
    </svg>`;
  add("model", "kaki", S.model.nav, `
    <section class="slide s-model kaki">
      <div class="grid">
        <div class="left">
          <div class="head">
            ${label(next(), S.model.label)}
            ${lines(S.model.title, "title serif")}
            <p class="upper muted r" style="--d:3;margin-top:1.6em">${S.model.hint}</p>
          </div>
          <ul class="legend r" style="--d:4">
            ${nodes.map((nd, i) => `<li data-i="${i}"><b>${nd.name}</b><span>${nd.does}. <em class="serif italic" style="font-size:1.15em">${nd.gets}</em></span></li>`).join("")}
          </ul>
          <p class="loop serif italic muted r" style="--d:5;font-size:var(--fs-m)">${S.model.loop}</p>
        </div>
        <div class="cycle r-fade" style="--d:1">
          ${cycleSvg}
          <div class="core">
            <div class="brand">${C.meta.brand}</div>
            <div class="who upper muted">Chacun reçoit</div>
            <div class="gets">quelque chose.</div>
          </div>
        </div>
      </div>
    </section>`);

  // 09 — La preuve terrain
  const f = C.field;
  add("proof", "black", S.proof.nav, `
    <section class="slide s-proof">
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

  // 10 — La rencontre (stand)
  const standSvg = `
    <svg class="stand" viewBox="-80 0 720 430" role="img" aria-label="Principe du stand YAKA">
      <!-- sol -->
      <line class="ln thin" x1="-70" y1="392" x2="620" y2="392"/>
      <ellipse class="ln dash" cx="320" cy="404" rx="210" ry="16"/>
      <!-- panneau signature -->
      <rect class="fillb" x="468" y="96" width="58" height="296"/>
      <text class="logo-s" x="497" y="140" text-anchor="middle">YAKA</text>
      <line x1="486" y1="152" x2="508" y2="152" stroke="#F2F0E8" stroke-width=".6"/>
      <!-- étudiant -->
      <g class="ln draw">
        <circle cx="330" cy="150" r="17"/>
        <path d="M 330 167 L 330 176 M 292 250 C 292 204 304 184 330 184 C 356 184 368 204 368 250"/>
        <path d="M 304 212 C 312 232 330 238 350 232"/>
      </g>
      <!-- comptoir -->
      <path class="fillb" d="M 196 262 L 444 262 L 444 392 L 196 392 Z"/>
      <path class="ln" d="M 186 252 L 454 252 L 454 262 L 186 262 Z" style="fill:#050505"/>
      <text class="logo" x="320" y="336" text-anchor="middle">YAKA</text>
      <!-- paquets -->
      ${[232, 266, 390].map((x) => `
        <path class="fillb" d="M ${x} 252 L ${x} 206 L ${x + 3} 200 L ${x + 23} 200 L ${x + 26} 206 L ${x + 26} 252 Z"/>
        <line x1="${x + 7}" y1="222" x2="${x + 19}" y2="222" stroke="#F2F0E8" stroke-width=".6"/>`).join("")}
      <!-- repères -->
      <g class="ln thin">
        <path d="M 246 198 L 246 150 L -70 150"/>
        <path d="M 312 150 L 150 110 L -70 110" />
        <path d="M 196 300 L -70 300"/>
        <path d="M 150 404 L 90 360 L -70 360"/>
        <path d="M 526 180 L 580 180 L 580 150"/>
      </g>
      <text x="-70" y="102">Étudiant YAKA</text>
      <text x="-70" y="142">Café signature · 250 g</text>
      <text x="-70" y="292">Comptoir léger</text>
      <text x="-70" y="352">Espace de rencontre</text>
      <text x="580" y="140" text-anchor="middle">Signature</text>
    </svg>`;
  add("meeting", "ivory", S.meeting.nav, `
    <section class="slide s-meeting ivory">
      <div class="grid">
        <div class="left">
          ${label(next(), S.meeting.label)}
          <div class="lines3">${S.meeting.lines.map((l, i) => `<div class="l serif r" style="--d:${1 + i * 2}"><em>0${i + 1}</em><span>${l}</span></div>`).join("")}</div>
          <p class="body r" style="--d:7">${fmt(S.meeting.body)}</p>
          <div class="qual r" style="--d:8">${S.meeting.qualities.map((q) => `<span>${q}</span>`).join("")}</div>
        </div>
        <div class="right r-fade" style="--d:2">
          ${C.images.stand ? photo(C.images.stand, "", "Stand YAKA") : standSvg}
          <p class="caption">${fmt(S.meeting.caption)}</p>
        </div>
      </div>
    </section>`);

  // 11 — Le magasin partenaire
  const term = (t, cls = "") => `<div class="term ${cls}"><div class="h">${t.head}</div><div class="sub">${t.sub}</div><ul>${t.items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
  add("store", "black", S.store.nav, `
    <section class="slide s-store">
      ${label(next(), S.store.label)}
      ${lines(S.store.title, "title serif")}
      <div class="equation">
        <div class="r" style="--d:2">${term(S.store.yaka)}</div>
        <div class="op r" style="--d:3">+</div>
        <div class="r" style="--d:4">${term(S.store.store, "one")}</div>
        <div class="op r" style="--d:5">=</div>
        <div class="r" style="--d:6">${term(S.store.result, "one result")}</div>
      </div>
      <div class="line r" style="--d:8">
        <p class="serif italic">${fmt(S.store.line)}</p>
        <p class="upper muted" style="text-align:right">${fmt(S.pilot.storeSide)}</p>
      </div>
    </section>`);

  // 12 — Pour le magasin
  add("benefits", "kaki", S.benefits.nav, `
    <section class="slide s-benefits kaki">
      <div class="grid">
        <div>
          ${label(next(), S.benefits.label)}
          ${lines(S.benefits.title, "title sans-title")}
        </div>
        <ol>${S.benefits.items.map(([h, t], i, a) => `<li class="r ${i === a.length - 1 ? "last" : ""}" style="--d:${1 + i}"><em>0${i + 1}</em><b>${h}</b><span>${fmt(t)}</span></li>`).join("")}</ol>
      </div>
    </section>`);

  // 13 — Proposition Saint-Aunès
  const P = S.pilot;
  add("pilot", "ivory", P.nav, `
    <section class="slide s-pilot ivory">
      ${label(next(), `${P.label} · ${C.partner.name} ${C.partner.city}`)}
      ${lines(P.title, "title serif")}
      <div class="formula">${P.formula.map(([a, b], i) => `<div class="f r" style="--d:${2 + i}"><b>${a}</b><span class="upper muted">${b}</span></div>`).join("")}</div>
      <div class="bottom">
        <div class="r" style="--d:7"><h4 class="upper muted">${P.measureTitle}</h4><ul>${P.measures.map((m) => `<li>${m}</li>`).join("")}</ul></div>
        <div class="r" style="--d:8"><h4 class="upper muted">Ensuite</h4><ol class="steps">${P.steps.map((s, i) => `<li><em>0${i + 1}</em><span>${s}</span></li>`).join("")}</ol></div>
        <div class="final r" style="--d:9"><p class="serif italic">${fmt(P.line)}</p><p class="soft">${fmt(P.storeSide)}</p></div>
      </div>
    </section>`);

  // 14 — Call to action
  const mail = C.ctaEmail ? `mailto:${C.ctaEmail}?subject=${encodeURIComponent("Premier test YAKA — " + C.partner.name + " " + C.partner.city)}` : "#contacts";
  add("cta", "black", S.cta.nav, `
    <section class="slide s-cta">
      <div class="bg">${C.images.packaging ? `<img src="${C.images.packaging}" alt="">` : ""}</div>
      <div class="label r"><span class="num">${String(next()).padStart(2, "0")}</span><span class="rule"></span><span>${C.partner.name} ${C.partner.city}</span></div>
      <div class="sign r" style="--d:2"><div class="serif" style="font-size:calc(var(--u)*1.6);letter-spacing:.4em">${C.meta.brand}</div><div class="upper muted" style="margin-top:.6em">${fmt(S.cover.tagline.replace("\n", " "))}</div></div>
      ${lines(S.cta.title, "title serif", 1)}
      <p class="body r" style="--d:4">${fmt(S.cta.body)}</p>
      <div class="actions">
        <a class="btn r" style="--d:6" href="${mail}">${S.cta.button}<span class="arr"></span></a>
        <div class="contacts r" id="contacts" style="--d:7">
          ${C.founders.map((p) => `<div class="c"><div class="n">${p.name}</div><div class="m">${p.role}<br>${p.phone ?? todo("Téléphone")}<br>${p.email ?? todo("E-mail")}</div></div>`).join("")}
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
      <a class="brandmark" href="#cover" aria-label="Début">${C.meta.brand}</a>
      <div class="chrome-tools">
        <span class="counter"><span class="cur">01</span> <span class="total">/ ${pad(total)}</span></span>
        <button class="t-full" type="button" data-act="full" title="Plein écran (F)">Plein écran</button>
        <button type="button" data-act="print" title="Exporter en PDF (P)">PDF</button>
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
    curEl.textContent = pad(i + 1);
    ticks.forEach((t, k) => t.classList.toggle("on", k === i));
    bar.style.transform = `scaleX(${(i + 1) / total})`;
    document.body.dataset.theme = slides[i].theme;
    if (history.replaceState) history.replaceState(null, "", "#" + slides[i].id);
  }

  const go = (i) => {
    i = Math.max(0, Math.min(total - 1, i));
    els[i].scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  // Écran courant = celui qui traverse le milieu de l'écran
  const centerObs = new IntersectionObserver((entries) => {
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
    let i = 0;
    setTimeout(() => focusNode(0), 1200);
    cycleTimer = setInterval(() => { if (!hovering) { i = (active + 1) % nodes.length; focusNode(i); } }, 3200);
  }
  [...gNodes, ...legend].forEach((el) => {
    const i = +el.dataset.i;
    el.addEventListener("mouseenter", () => { hovering = true; focusNode(i); });
    el.addEventListener("mouseleave", () => { hovering = false; });
    el.addEventListener("focus", () => focusNode(i));
    el.addEventListener("click", () => { hovering = false; focusNode(i); });
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focusNode(i); } });
  });

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
    else if (k === "p" || k === "P") printDeck();
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

  /* ---------- Parallax très léger ---------------------------------------- */
  const band = document.querySelector(".s-spark .band");
  const spark = document.getElementById("spark");
  let raf = 0;
  window.addEventListener("scroll", () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = spark.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) band.style.setProperty("--par", (r.top * -0.06).toFixed(1));
    });
  }, { passive: true });

  /* ---------- Démarrage -------------------------------------------------- */
  // Mode export : ?print → tout est affiché dans son état final
  if (/[?&]print\b/.test(location.search)) { document.documentElement.classList.add("is-print"); finalize(); }
  const start = slides.findIndex((s) => "#" + s.id === location.hash);
  if (start > 0) els[start].scrollIntoView({ block: "start" });
  setCurrent(Math.max(0, start));
  requestAnimationFrame(() => document.documentElement.classList.add("ready"));
})();
