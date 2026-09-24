/* ==========================================================================
   YAKA — Paquet 3D (Three.js / WebGL) pour l'écran « Le café »
   Sachet galbé généré en code : face (logo doré) et dos (infos café),
   éclairage studio, rotation automatique, rotation au doigt / à la souris.
   Repli : si WebGL est indisponible (ou en mode impression), le paquet CSS
   3D déjà présent dans la page reste affiché.
   ========================================================================== */
(function () {
  "use strict";
  const C = window.YAKA_CONTENT;
  const scene0 = document.querySelector(".s-product .photo .scene");
  if (!scene0 || !window.THREE || window.YAKA_NO_WEBGL) return;
  if (document.documentElement.classList.contains("is-print")) return;
  const probe = document.createElement("canvas");
  if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) return;

  const T = window.THREE;
  const GOLD = "#E6C49B", GOLD_DIM = "rgba(230,196,155,.62)";
  const TW = 1024, TH = 1490; // proportions de la face (22 × 32)

  /* ---------- Textures dessinées en canvas -------------------------------- */
  function base(ctx) {
    const g = ctx.createLinearGradient(0, 0, TW, TH);
    g.addColorStop(0, "#0f0f0e"); g.addColorStop(.55, "#0b0b0a"); g.addColorStop(1, "#080808");
    ctx.fillStyle = g; ctx.fillRect(0, 0, TW, TH);
    // grain mat très léger
    const img = ctx.getImageData(0, 0, TW, TH), d = img.data;
    for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - .5) * 7; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    ctx.putImageData(img, 0, 0);
    // soudure haute + zip
    ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.fillRect(0, 0, TW, 150);
    ctx.fillStyle = "rgba(255,255,255,.035)"; for (let y = 20; y < 140; y += 9) ctx.fillRect(0, y, TW, 2);
    ctx.fillStyle = "rgba(0,0,0,.6)"; ctx.fillRect(30, 212, TW - 60, 5);
    ctx.fillStyle = "rgba(255,255,255,.06)"; ctx.fillRect(30, 218, TW - 60, 2);
  }
  function spaced(ctx, text, x, y, spacing) {
    ctx.save(); ctx.textAlign = "left";
    const chars = [...text]; const widths = chars.map((c) => ctx.measureText(c).width);
    const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
    let cx = x - total / 2;
    chars.forEach((c, i) => { ctx.fillText(c, cx, y); cx += widths[i] + spacing; });
    ctx.restore();
  }
  // ORM : G = rugosité, B = métal (dorures brillantes, fond mat)
  function orm() {
    const c = document.createElement("canvas"); c.width = TW; c.height = TH;
    const x = c.getContext("2d"); x.fillStyle = "rgb(0,200,0)"; x.fillRect(0, 0, TW, TH); return [c, x];
  }
  const GOLD_ORM = "rgb(0,110,120)";

  function front(logo) {
    const c = document.createElement("canvas"); c.width = TW; c.height = TH; const x = c.getContext("2d");
    const [oc, ox] = orm();
    base(x);
    const lw = 600, lh = lw * logo.height / logo.width, ly = 560;
    x.drawImage(logo, (TW - lw) / 2, ly, lw, lh);
    const lm = document.createElement("canvas"); lm.width = TW; lm.height = TH; const lx = lm.getContext("2d");
    lx.drawImage(logo, (TW - lw) / 2, ly, lw, lh); lx.globalCompositeOperation = "source-in"; lx.fillStyle = GOLD_ORM; lx.fillRect(0, 0, TW, TH);
    ox.drawImage(lm, 0, 0);
    x.fillStyle = GOLD; ox.fillStyle = GOLD_ORM;
    [x, ox].forEach((k) => k.fillRect(TW / 2 - 70, ly + lh + 70, 140, 3));
    x.font = '400 34px "Inter Tight", Arial, sans-serif'; x.textBaseline = "middle";
    spaced(x, "100 % ARABICA", TW / 2, ly + lh + 140, 13);
    x.font = '400 32px "Inter Tight", Arial, sans-serif'; spaced(x, C.coffee.weight.replace(" ", ""), TW / 2, TH - 110, 2);
    return [c, oc];
  }

  function back() {
    const c = document.createElement("canvas"); c.width = TW; c.height = TH; const x = c.getContext("2d");
    const [oc] = orm();
    base(x);
    x.fillStyle = GOLD; x.textBaseline = "middle";
    x.font = '400 30px "Inter Tight", Arial, sans-serif';
    spaced(x, "UN CAFÉ D’EXCEPTION", TW / 2, 380, 10);
    spaced(x, "POUR LES VRAIS MOMENTS", TW / 2, 430, 10);
    x.fillRect(TW / 2 - 60, 500, 120, 2);
    const cols = [["100 %", "ARABICA"], ["ORIGINES", ...C.coffee.origins.toUpperCase().split(" · ").reduce((r, o, i) => (i % 2 ? r[r.length - 1] += " · " + o : r.push(o), r), [])], ["TORRÉFACTION", C.coffee.roast.toUpperCase()]];
    x.font = '400 24px "Inter Tight", Arial, sans-serif';
    cols.forEach((col, i) => {
      const cx = TW / 2 + (i - 1) * 300;
      col.forEach((line, k) => { x.fillStyle = k === 0 && i ? GOLD_DIM : GOLD; spaced(x, line, cx, 610 + k * 40, 4); });
    });
    x.fillStyle = GOLD_DIM; x.fillRect(150, 820, 250, 1.5); x.fillRect(TW - 400, 820, 250, 1.5);
    x.fillStyle = GOLD; x.font = '400 24px "Inter Tight", Arial, sans-serif'; spaced(x, "PROFIL", TW / 2, 820, 8);
    x.font = 'italic 400 54px "Cormorant Garamond", Georgia, serif'; x.textAlign = "center";
    x.fillText(C.coffee.profile.join("  ·  "), TW / 2, 910);
    x.fillStyle = GOLD_DIM; x.fillRect(150, 1030, TW - 300, 1.5);
    x.fillStyle = GOLD; x.font = '400 26px "Inter Tight", Arial, sans-serif';
    spaced(x, `${C.cause.perPack} € REVERSÉ PAR PAQUET`, TW / 2, 1110, 6);
    x.fillStyle = GOLD_DIM; x.font = '400 22px "Inter Tight", Arial, sans-serif';
    spaced(x, "AUX PERSONNES SOURDES ET MALENTENDANTES", TW / 2, 1160, 4);
    x.fillStyle = GOLD; x.font = '400 32px "Inter Tight", Arial, sans-serif'; spaced(x, C.coffee.weight.replace(" ", ""), TW / 2, TH - 110, 2);
    return [c, oc];
  }

  function shadowTex() {
    const c = document.createElement("canvas"); c.width = c.height = 256; const x = c.getContext("2d");
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(0,0,0,.85)"); g.addColorStop(.55, "rgba(0,0,0,.35)"); g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g; x.fillRect(0, 0, 256, 256); return new T.CanvasTexture(c);
  }

  /* ---------- Géométrie : sachet galbé à soufflets -------------------------- */
  function pouch(W, H, D) {
    const g = new T.BoxGeometry(W, H, D, 48, 72, 14);
    const p = g.attributes.position, v = new T.Vector3();
    const sm = (a, b, t) => { t = Math.min(1, Math.max(0, (t - a) / (b - a))); return t * t * (3 - 2 * t); };
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const t = (v.y + H / 2) / H;                // 0 bas → 1 haut
      const u = v.x / (W / 2);                    // -1 → 1
      const thin = 1 - sm(.8, .96, t) * .82;       // le haut se pince jusqu'à la soudure
      const pillow = 1 + .12 * (1 - u * u) * Math.sin(Math.PI * Math.min(1, t / .96)); // galbe
      v.z *= thin * pillow;
      v.x *= 1 - .025 * (1 - t);                  // léger évasement du bas
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
    return g;
  }

  /* ---------- Scène ---------------------------------------------------------- */
  async function build() {
    try { await Promise.all([document.fonts.load('400 34px "Inter Tight"'), document.fonts.load('italic 400 54px "Cormorant Garamond"')]); } catch (e) {}
    const logo = new Image(); logo.src = C.images.logoGold;
    try { await logo.decode(); } catch (e) { return; }

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = .95;
    const cv = renderer.domElement; cv.className = "bag-webgl"; cv.setAttribute("aria-hidden", "true");

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(28, 1, .1, 100);
    camera.position.set(0, .35, 11);

    scene.add(new T.HemisphereLight(0xfff1dc, 0x1a120a, .22));
    const key = new T.DirectionalLight(0xffe0b8, 1.5); key.position.set(3.5, 4.5, 6); scene.add(key);
    const rim = new T.DirectionalLight(0xffb36b, .55); rim.position.set(-5, 2.5, -4); scene.add(rim);
    const rim2 = new T.DirectionalLight(0xffd9a8, .4); rim2.position.set(5, 1.5, -4); scene.add(rim2);
    const glint = new T.PointLight(0xfff0d8, 1.2, 14); scene.add(glint);

    const tex = (c) => { const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t; };
    const lin = (c) => { const t = new T.CanvasTexture(c); t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t; };
    const [fc, fo] = front(logo), [bc, bo] = back();
    const face = (c, o) => new T.MeshStandardMaterial({ map: tex(c), roughnessMap: lin(o), metalnessMap: lin(o), roughness: 1, metalness: 1, color: 0xffffff });
    const side = new T.MeshStandardMaterial({ color: 0x070707, roughness: .85, metalness: 0 });
    const W = 2.2, H = 3.2, D = .8;
    const bag = new T.Mesh(pouch(W, H, D), [side, side, side, side, face(fc, fo), face(bc, bo)]);
    const pivot = new T.Group(); pivot.add(bag); pivot.rotation.x = -.06; scene.add(pivot);

    const shadow = new T.Mesh(new T.PlaneGeometry(4.2, 1.5), new T.MeshBasicMaterial({ map: shadowTex(), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = -H / 2 - .02; scene.add(shadow);

    scene0.classList.add("webgl");
    scene0.appendChild(cv);

    function resize() {
      const r = scene0.getBoundingClientRect();
      const w = Math.max(1, r.width), h = Math.max(1, r.height);
      renderer.setSize(w, h, false); cv.style.width = w + "px"; cv.style.height = h + "px";
      camera.aspect = w / h;
      camera.position.z = w / h < .8 ? 14 : 11;   // recule sur écran étroit
      camera.updateProjectionMatrix();
    }
    resize();
    if (window.ResizeObserver) new ResizeObserver(resize).observe(scene0); else window.addEventListener("resize", resize);

    // Rotation automatique + prise en main (glisser pour tourner)
    let angle = -.5, vel = .0055, dragging = false, lastX = 0, visible = false, raf = 0, t0 = performance.now();
    const auto = matchMedia("(prefers-reduced-motion: reduce)").matches ? .0012 : .0055;
    cv.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener("pointermove", (e) => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; angle += dx * .012; vel = dx * .0012; });
    const release = () => { dragging = false; };
    cv.addEventListener("pointerup", release); cv.addEventListener("pointercancel", release);

    function frame(now) {
      raf = 0;
      const dt = Math.min(3, (now - t0) / 16.67); t0 = now;
      if (!dragging) { vel += (auto - vel) * .02 * dt; angle += vel * dt; }
      const s = now / 1000;
      pivot.rotation.y = angle;
      pivot.position.y = Math.sin(s * .9) * .05;
      shadow.scale.setScalar(1 - Math.sin(s * .9) * .04);
      glint.position.set(Math.cos(s * .6) * 4, 2.2, 4.5 + Math.sin(s * .6));
      renderer.render(scene, camera);
      if (visible) raf = requestAnimationFrame(frame);
    }
    new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible && !raf) { t0 = performance.now(); raf = requestAnimationFrame(frame); }
    }, { threshold: 0.05 }).observe(scene0);
    frame(performance.now());
  }
  build();
})();
