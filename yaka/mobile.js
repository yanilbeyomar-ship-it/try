/* ==========================================================================
   YAKA — VERSION TÉLÉPHONE : cartes plein écran, tap / swipe pour avancer
   Contenu issu de content.js (window.YAKA_CONTENT).
   ========================================================================== */
(function () {
  "use strict";
  const C = window.YAKA_CONTENT, S = C.slides, cf = C.coffee, f = C.field, I = C.images;
  const fmt = (s) => String(s ?? "").replace(/\[\[(.+?)\]\]/g, "$1").replace(/\n/g, "<br>");
  const a = (d) => `class="a" style="--d:${d}"`;
  const tel = (p) => p.replace(/\s/g, "");

  const cards = [
    // 1 · Couverture
    ["dark", "cover", `
      <div class="bg"><img src="${I.packFront}" alt="Paquet de café YAKA sur des rochers et des grains de café"></div>
      <div class="body stack">
        <p ${a(2)}><span class="eyebrow">Animation café solidaire</span></p>
        <h1 ${a(3)}><span class="h">Un grand café.<br><em>Un geste qui compte.</em></span></h1>
        <p ${a(5)}><span class="p">Chaque samedi, un étudiant fait découvrir YAKA dans vos allées. Chaque paquet vendu soutient les personnes sourdes et malentendantes.</span></p>
        <p ${a(8)}><span class="hint">Touchez pour découvrir <i></i></span></p>
      </div>`],

    // 2 · 1 paquet = 1 €
    ["kaki", "euro", `
      <p ${a(1)}><span class="eyebrow">L’engagement</span></p>
      <div class="grow"></div>
      <div ${a(2)}><div class="big">${C.cause.perPack}<small>&#8239;€</small></div></div>
      <h2 ${a(3)} style="margin-top:18px"><span class="h" style="font-size:34px">reversé à chaque paquet vendu.</span></h2>
      <p ${a(4)} style="margin-top:14px"><span class="p">Pour une association qui accompagne les personnes sourdes et malentendantes.</span></p>
      <div class="grow"></div>
      <div ${a(6)}><div class="eq"><div><b>1&#8239;000</b><span>paquets vendus</span></div><div class="op">=</div><div><b style="color:var(--gold)">1&#8239;000&#8239;€</b><span>reversés</span></div></div></div>
      <p ${a(7)} style="margin-top:18px"><span class="small">Association en cours de sélection. Montants publiés en toute transparence.</span></p>`],

    // 3 · Pourquoi cette cause
    ["ivory", "deaf", `
      ${I.ear ? `<div class="ear a" style="--d:1"><img src="${I.ear}" alt="Une oreille dessinée par une foule"></div>` : ""}
      <div class="grow"></div>
      <div class="stack">
        <p ${a(2)}><span class="eyebrow">Pourquoi cette cause</span></p>
        <h2 ${a(3)}><span class="h">${fmt(S.deaf.title)}</span></h2>
        <p ${a(5)}><span class="p">${fmt(S.deaf.body)}</span></p>
      </div>`],

    // 4 · Chacun y gagne
    ["sand", "gains", `
      <p ${a(1)}><span class="eyebrow">Ce que YAKA apporte</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h">Chacun y gagne,<br><em>à commencer par vous.</em></span></h2>
      <div class="grow"></div>
      <div ${a(4)}>${S.model.nodes.map((n) => `<div class="gain"><b>${n.name}</b><span>${n.gets}</span></div>`).join("")}</div>`],

    // 5 · Clé en main
    ["ivory", "turnkey", `
      <p ${a(1)}><span class="eyebrow">Clé en main</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h">Nous apportons tout.<br><em>Vous ouvrez la porte.</em></span></h2>
      <div class="grow"></div>
      <div class="two">
        <div ${a(4)}><div class="box us"><h4>YAKA apporte</h4><ul>${S.turnkey.yaka.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>
        <div ${a(5)}><div class="box you"><h4>Vous</h4><ul><li>Un emplacement dans une allée passante</li><li>Vos samedis (et le mercredi si vous voulez)</li><li>Une table si possible</li></ul></div></div>
      </div>`],

    // 6 · Le café
    ["dark", "coffee", `
      <p ${a(1)}><span class="eyebrow">Le café</span></p>
      <div class="pack a" style="--d:2"><img src="${I.packBack}" alt="Dos du paquet YAKA"></div>
      <div class="stack">
        <h2 ${a(3)}><span class="h" style="font-size:34px">100&#8239;% Arabica,<br><em>doux et chocolaté.</em></span></h2>
        <div ${a(4)}><div class="tags"><span>Brésil</span><span>Pérou</span><span>Colombie</span><span>Éthiopie</span></div></div>
        <p ${a(5)}><span class="small">Torréfaction ${cf.roast} · ${cf.weight} en grains · ${cf.price}</span></p>
      </div>`],

    // 7 · Sur place
    ["kaki", "onsite", `
      <p ${a(1)}><span class="eyebrow">Sur place</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h">Le produit attire.<br>L’histoire touche.<br><em>Le client décide.</em></span></h2>
      <div class="grow"></div>
      <p ${a(3)} style="margin-bottom:16px"><span class="p">Un étudiant rémunéré, formé au produit et à la cause. Il présente, il n’interpelle pas.</span></p>
      ${S.meeting.options.map(([h, t], i) => `<div class="opt a" style="--d:${4 + i}"><b>${h}</b><p>${t}</p></div>`).join("")}`],

    // 8 · Le terrain
    ["dark", "proof", `
      <p ${a(1)}><span class="eyebrow">Le terrain</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h" style="font-size:32px">La vente en direct,<br><em>nous savons la faire.</em></span></h2>
      <div class="grow"></div>
      <div ${a(3)}><div class="big"><span class="t">~</span>${f.average}<small>&#8239;€</small></div></div>
      <p ${a(4)} style="margin-top:10px"><span class="eyebrow" style="color:inherit;opacity:.7">CA moyen observé par vendeur · objectif ${f.target}&#8239;€</span></p>
      <div class="grow"></div>
      <div ${a(5)}><div class="stats"><div><b>${f.best}&#8239;€</b><span>meilleure journée</span></div><div><b>${f.founderRevenue}&#8239;€</b><span>un fondateur</span></div><div><b>${f.founderSales}</b><span>ventes en un jour</span></div></div></div>
      <p ${a(6)} style="margin-top:16px"><span class="small">${f.disclaimer}</span></p>`],

    // 9 · Proposition
    ["sand", "pilot", `
      <p ${a(1)}><span class="eyebrow">Notre proposition</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h">YAKA chez vous,<br><em>chaque samedi.</em></span></h2>
      <div class="grow"></div>
      <div ${a(3)}><div class="formula"><div><b>1</b><span>étudiant</span></div><div><b>0</b><span>contrainte</span></div><div><b>1&#8239;€</b><span>par paquet</span></div><div><b>1</b><span>bilan partagé</span></div></div></div>
      <div class="grow"></div>
      <p ${a(4)}><span class="eyebrow">Ce que nous vous demandons</span></p>
      <ul class="a ask" style="--d:5;margin-top:6px">${S.pilot.asks.map((x, i) => `<li data-n="0${i + 1}">${x}</li>`).join("")}</ul>`],

    // 10 · Contact
    ["kaki", "contact", `
      <p ${a(1)}><span class="eyebrow">Qui sommes-nous</span></p>
      <h2 ${a(2)} style="margin-top:14px"><span class="h" style="font-size:36px">Faisons de vos samedis<br><em>des samedis YAKA.</em></span></h2>
      <div class="grow"></div>
      <div ${a(3)}><div class="people">${C.founders.map((p) => `<figure><img src="${p.image}" alt="${p.name}"><figcaption>${p.name}</figcaption></figure>`).join("")}</div></div>
      <div class="grow"></div>
      <div ${a(4)}><div class="btns">
        ${C.founders[0].phone ? `<a class="btn gold" href="tel:${tel(C.founders[0].phone)}">Appeler Yanil <small>${C.founders[0].phone}</small></a>` : ""}
        ${C.founders.map((p) => `<a class="btn" href="mailto:${p.email}">Écrire à ${p.name.split(" ")[0]} <small>${p.email}</small></a>`).join("")}
      </div></div>`],
  ];

  /* ---------- Montage ---------- */
  const deck = document.getElementById("deck");
  deck.innerHTML = `
    <div class="bars">${cards.map(() => "<i></i>").join("")}</div>
    <div class="top"><span class="mark" aria-label="YAKA"></span><span class="count"></span></div>
    ${cards.map(([theme, id, html]) => `<section class="card ${theme} c-${id}" id="${id}">${html}</section>`).join("")}
    <button class="tap prev" aria-label="Précédent"></button><button class="tap next" aria-label="Suivant"></button>`;
  deck.querySelectorAll(".tap").forEach((b) => { b.style.background = "none"; b.style.border = "0"; });
  const els = [...deck.querySelectorAll(".card")], bars = [...deck.querySelectorAll(".bars i")], count = deck.querySelector(".count");
  const DUR = [6, 8, 9, 9, 9, 8, 9, 9, 9, 0];

  if (/[?&]print\b/.test(location.search)) { els.forEach((e) => e.classList.add("on")); return; }

  let cur = -1, timer = 0, paused = false;
  function show(i) {
    i = Math.max(0, Math.min(els.length - 1, i));
    if (i === cur) return;
    cur = i;
    els.forEach((e, k) => e.classList.toggle("on", k === i));
    bars.forEach((b, k) => { b.classList.toggle("done", k < i); b.classList.remove("on"); });
    void bars[i].offsetWidth;
    const light = /ivory|sand/.test(els[i].className);
    deck.classList.toggle("light", light);
    deck.classList.toggle("cover-on", i === 0);
    count.textContent = `${String(i + 1).padStart(2, "0")} / ${els.length}`;
    try { history.replaceState(null, "", "#" + els[i].id); } catch (e) {}
    clearTimeout(timer);
    if (DUR[i]) { deck.style.setProperty("--dur", DUR[i] + "s"); bars[i].classList.add("on"); schedule(DUR[i] * 1000); }
    else bars[i].classList.add("done");
  }
  let left = 0, t0 = 0;
  function schedule(ms) { left = ms; t0 = Date.now(); timer = setTimeout(() => show(cur + 1), ms); }
  function pause() { if (paused || !DUR[cur]) return; paused = true; deck.classList.add("paused"); clearTimeout(timer); left -= Date.now() - t0; }
  function resume() { if (!paused) return; paused = false; deck.classList.remove("paused"); schedule(Math.max(300, left)); }

  // Tap court = avancer / reculer ; appui long = pause ; swipe horizontal
  let sx = 0, sy = 0, st = 0, holdT = 0;
  deck.addEventListener("pointerdown", (e) => { if (e.target.closest("a")) return; sx = e.clientX; sy = e.clientY; st = Date.now(); holdT = setTimeout(pause, 220); });
  deck.addEventListener("pointerup", (e) => {
    if (e.target.closest("a")) return;
    clearTimeout(holdT);
    const dx = e.clientX - sx, dy = e.clientY - sy, long = Date.now() - st > 220;
    if (paused) { resume(); if (long) return; }
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) return show(cur + (dx < 0 ? 1 : -1));
    if (Math.abs(dy) > 60) return show(cur + (dy < 0 ? 1 : -1));
    const r = deck.getBoundingClientRect();
    show(cur + (e.clientX - r.left < r.width * .3 ? -1 : 1));
  });
  deck.addEventListener("pointercancel", () => { clearTimeout(holdT); resume(); });
  document.addEventListener("keydown", (e) => {
    if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) { e.preventDefault(); show(cur + 1); }
    if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); show(cur - 1); }
  });
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : resume()));

  const start = els.findIndex((e) => "#" + e.id === location.hash);
  show(Math.max(0, start));
})();
