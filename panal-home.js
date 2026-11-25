/* ═══════════════════════════════════════════════════════════════════════
   PANAL · DUNA SOLUTIONS · HOME PARA TIENDA NUBE  (panal-home.js)
   Se carga desde Google Tag Manager. Solo se activa en la página de inicio (/).
   Arma el home completo con el estilo negro y rojo de la landing, viste el
   header, el menú, el buscador y el carrito del tema, y lleva cada botón a
   la ficha del producto. Los precios se leen en vivo de la ficha.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
"use strict";

/* ─────────────────────────────────────────────────────────────────────
   1 · CONFIGURACIÓN (la misma de la landing)
   ───────────────────────────────────────────────────────────────────── */
var PANAL = {
  producto: "panal-para-el-dolor-de-coxis-99r4y",            /* final del link de la ficha */
  marca: "Duna Solutions",
  logo: "data:image/webp;base64,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",   /* logo blanco (header y footer) · vacío = usa el del tema */
  nombre: "PANAL",
  cuotas: 3,
  correo: "Andreani",
  whatsapp: "",                        /* ej. "5491112345678" · vacío = no se muestra */
  whatsappTexto: "Hola! Quiero consultar por el almohadón PANAL",

  /* cuenta regresiva (hora de Argentina -03:00) · vacío = se renueva cada medianoche */
  promo: "Black Friday anticipado",
  finOferta: "2026-11-29T23:59:59-03:00",
  precioDespues: "",                  /* "Cuando el contador llega a cero, vuelve a ..." · vacío = mensaje genérico */

  adbar: "Envíos a todo Argentina · Compra segura · Mercado Pago",   /* barra roja arriba del header · vacío = no se muestra */
  cinta: ["<b>Black Friday anticipado: funda de REGALO</b>", "3 cuotas sin interés", "<b>Envío gratis a sucursal</b>", "Compra 100% segura"],

  /* PACKS · variante = nombre exacto en Tienda Nube ("" = usa cantidad) */
  packs: [
    { variante: "Kit Panal", cantidad: 1, titulo: "Kit PANAL", detalle: "Almohadón de gel + funda de <b>REGALO</b>",
      precio: "$49.990", tachado: "$69.990", etiqueta: "Más elegido", ahorro: "-29% · Ahorrás $20.000", elegido: true },
    { variante: "2 Kits Panal", cantidad: 2, titulo: "2 Kits PANAL", detalle: "Uno para el auto y otro para casa · 2 fundas de <b>REGALO</b>",
      precio: "$69.990", tachado: "$139.980", etiqueta: "Black Friday", ahorro: "-50% · Ahorrás $69.990" }
  ],

  /* FOTOS Y VIDEO (URLs) · vacías = recuadro de muestra */
  fotos: {
    galeria: ["https://i.ibb.co/k667dH0g/Oficina.webp", "https://i.ibb.co/v68rY2n3/Bundle.avif", "https://i.ibb.co/DZQSHL2/Auto.webp", "https://i.ibb.co/B2CHLMhZ/Casa.webp"],          /* 4:5 · 1) lo aplastás y vuelve 2) almohadón + funda 3) en la camioneta 4) en casa */
    pack: "https://i.ibb.co/v68rY2n3/Bundle.avif",                           /* miniatura cuadrada de las ofertas y la barra fija */
    usos: ["https://i.ibb.co/DZQSHL2/Auto.webp", "https://i.ibb.co/B2CHLMhZ/Casa.webp", "https://i.ibb.co/k667dH0g/Oficina.webp"],                 /* 3:4 · Auto, Casa, Oficina */
    video: "https://wigy.nyc3.cdn.digitaloceanspaces.com/videos/widgets/store_6218_daiiqPg2jooBpQWvxgZK_1795629620.mp4",                          /* .mp4 vertical 9:16 · "Así llega tu kit PANAL" */
    videoPoster: "https://i.ibb.co/v68rY2n3/Bundle.avif",
    gel: "https://i.ibb.co/k667dH0g/Oficina.webp"                             /* 4:5 · primer plano del gel en panal */
  }
};
var PRODUCT_URL = "/productos/" + PANAL.producto + "/";

/* ─────────────────────────────────────────────────────────────────────
   2 · ¿ESTAMOS EN EL HOME?
   ───────────────────────────────────────────────────────────────────── */
var path = location.pathname.replace(/\/+$/, "");
if (path !== "" && !/^\/(es|pt|en)$/.test(path) && !window.__panalHomeForce) return;

/* ─────────────────────────────────────────────────────────────────────
   3 · HERRAMIENTAS, ESTILOS Y HEADER (compartidos con la landing)
   ───────────────────────────────────────────────────────────────────── */
var D = document;
function one(s, c) { return (c || D).querySelector(s); }
function all(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }
function safe(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function key(s) { return String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[()]/g, "").replace(/\s+/g, " ").trim(); }
function pesos(n) { return "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
function toNumber(v) {
  if (v == null || v === "") return null;
  if (typeof v === "number") return isFinite(v) ? v : null;
  var t = String(v).replace(/<[^>]*>/g, "").replace(/[^\d.,]/g, ""); if (!t) return null;
  var lc = t.lastIndexOf(","), ld = t.lastIndexOf(".");
  if (lc > -1 && ld > -1) t = lc > ld ? t.replace(/\./g, "").replace(",", ".") : t.replace(/,/g, "");
  else if (lc > -1) t = /,\d{1,2}$/.test(t) ? t.replace(/\./g, "").replace(",", ".") : t.replace(/,/g, "");
  else if (ld > -1 && /\.\d{3}$/.test(t)) t = t.replace(/\./g, "");
  var n = parseFloat(t); return isNaN(n) ? null : n;
}
function make(tag, id, html) { var el = D.createElement(tag); if (id) el.id = id; if (html != null) el.innerHTML = html; return el; }
function log(m, e) { if (window.console) console.warn("[PANAL] " + m, e || ""); }
function img(url, label, ratio, cls) {
  if (url) {
    var hi = /mitiendanube\.com\/.*-2048-2048\./.test(url), fb = hi ? url.replace("-2048-2048.", "-1024-1024.") : "";
    return '<img' + (cls ? ' class="' + cls + '"' : "") + ' src="' + safe(url) + '" alt="' + safe(label) + '"' +
      (hi ? ' onerror="this.onerror=null;this.src=\'' + safe(fb) + '\'"' : "") +
      (/^PANAL: lo aplast|foto 1$/.test(label) ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
  }
  return '<span class="ph"' + (ratio ? ' style="aspect-ratio:' + ratio + '"' : "") + "><span>" + safe(label) + "</span></span>";
}
function waLink() { return "https://wa.me/" + PANAL.whatsapp + "?text=" + encodeURIComponent(PANAL.whatsappTexto); }

/* tipografías */
if (!D.getElementById("pn-font")) {
  var lk = make("link", "pn-font"); lk.rel = "stylesheet";
  lk.href = "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;500;600;700;800;900&display=swap";
  D.head.appendChild(lk);
}

/* íconos */
function svg(p, w, fill) { return '<svg viewBox="0 0 24 24" fill="' + (fill ? "currentColor" : "none") + '" stroke="' + (fill ? "none" : "currentColor") + '" stroke-width="' + (w || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + "</svg>"; }
var SND = {
  off: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>',
  on: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>'
};
var ICO = {
  hex:   svg('<path d="M7 3h10l5 9-5 9H7l-5-9z"/><path d="M9.5 8h5l2.5 4-2.5 4h-5L7 12z"/>'),
  back:  svg('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
  wind:  svg('<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>'),
  lock:  svg('<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'),
  truck: svg('<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>'),
  card:  svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'),
  cash:  svg('<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>'),
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 2.6),
  wa:    svg('<path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 3.9 3.5 1.5.6 2 .7 2.7.6.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z"/>', 0, true)
};

var CSS = [
".pn-off{display:none!important}html,body{overflow-x:clip}",
"#pn{--bg:#000;--paper:#0A0A0A;--line:#3A0705;--red:#FF1200;--heat:#E10600;--muted:#B9BCC2;--wa:#25D366;--display:'Bricolage Grotesque','Figtree',system-ui,sans-serif;--body:'Figtree',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;--sticky-h:78px;",
"background:#000;color:#fff;font-family:var(--body);font-size:17px;line-height:1.5;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;position:relative;left:50%;margin-left:-50vw;padding-bottom:calc(var(--sticky-h) + env(safe-area-inset-bottom,0px));color-scheme:dark;clear:both}",
"@media(min-width:900px){#pn{padding-bottom:0}}",
"#pn,#pn *{box-sizing:border-box}#pn img{max-width:100%;display:block}#pn a{color:inherit;text-decoration:none}",
"#pn h1,#pn h2{font-family:var(--display)!important;font-weight:800!important;letter-spacing:-.03em!important;line-height:1!important;margin:0!important;text-wrap:balance;color:#fff!important;text-transform:none!important}",
"#pn p,#pn ul{margin:0}#pn ul{padding:0}",
"#pn .wrap{max-width:1100px;margin:0 auto;padding-inline:16px}",
"#pn section{padding-block:40px;background:#000;color:#fff;border-top:1px solid #2A0504}",
"#pn .eyebrow{font-size:12.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}",
"#pn .h2{font-size:clamp(32px,8.6vw,52px)!important}#pn .h2 em,#pn h1 em{font-style:normal;color:var(--red)}",
"#pn .lead{font-size:18px;color:#C9CCD2;margin-top:12px;max-width:44ch}#pn .center{text-align:center}#pn .center .lead{margin-inline:auto}",
"#pn .ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#1c1c1f;color:#8a8f98;font-weight:700;font-size:14px;text-align:center;padding:10px}",
/* cinta */
"#pn .topbar{background:#000;color:#fff;font-size:13px;font-weight:700;letter-spacing:.03em;overflow:hidden;white-space:nowrap;padding:9px 0;border-bottom:1px solid #2A0504}",
"#pn .topbar .track{display:inline-flex;gap:34px;padding-left:16px;animation:pnMarq 24s linear infinite}#pn .topbar b{color:#FF5A3C}",
"@keyframes pnMarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}",
/* botones */
"#pn .btn{position:relative;display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:64px;padding:14px 22px;border-radius:16px;font-family:var(--body);font-weight:800;font-size:19px;letter-spacing:.04em;text-transform:uppercase;border:0;overflow:hidden;cursor:pointer;transition:transform .15s}",
"#pn .btn:active{transform:scale(.97)}#pn .btn svg{width:22px;height:22px;flex:none}",
"#pn .btn-red{background:linear-gradient(180deg,#FF2A14 0%,#E10600 55%,#A80400 100%);color:#fff;animation:pnBtn 1.1s ease-in-out infinite}",
"#pn .btn-red::after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);animation:pnShine 3s ease-in-out infinite}",
"@keyframes pnShine{0%,55%{left:-60%}100%{left:130%}}",
"@keyframes pnBtn{0%,100%{filter:brightness(1.15);box-shadow:0 14px 42px 2px rgba(255,18,0,.95),0 0 26px rgba(255,40,20,.8)}50%{filter:brightness(.92);box-shadow:0 6px 14px -8px rgba(255,18,0,.3),0 0 0 rgba(255,40,20,0)}}",
"#pn .btn-wa{background:var(--wa);color:#fff;text-transform:none;letter-spacing:0;font-size:17px;min-height:58px;max-width:560px;margin:12px auto 0}#pn .btn-wa svg{width:24px;height:24px}",
"#pn .cta{max-width:560px;margin:24px auto 0}",
"#pn .cta small{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:12px;font-size:14px;font-weight:700;color:#AEB3BB}#pn .cta small span{display:inline-flex;align-items:center;gap:6px}#pn .cta small svg{width:16px;height:16px;color:#FF4A2E}",
"#pn .pays{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:12px}#pn .pays span{font-size:10.5px;font-weight:800;letter-spacing:.04em;color:#fff;border:1px solid #3A0705;border-radius:6px;padding:4px 8px;background:#0A0A0A}#pn .warn{display:block;text-align:center;font-weight:800;font-size:14px;color:#fff;margin-top:10px}",
"#pn .strip{display:block;text-align:center;font-weight:900;font-size:14px;color:#fff;background:#1A0200;border:1px solid var(--red);border-radius:12px;padding:10px;margin:0 0 10px;text-transform:uppercase;letter-spacing:.03em}#pn .strip s{color:#FF5A4D}#pn .strip b{font-size:17px}",
"#pn .cd{font-variant-numeric:tabular-nums;background:var(--heat);color:#fff;border-radius:8px;padding:3px 9px;letter-spacing:.04em;margin-left:4px;white-space:nowrap}",
/* hero */
"#pn .hero{background:radial-gradient(90% 60% at 100% 0%,rgba(225,6,0,.6) 0%,transparent 62%),radial-gradient(70% 50% at 0% 100%,rgba(225,6,0,.28) 0%,transparent 60%),#000;padding-block:14px 36px;border-top:0}",
"#pn .hero-grid{display:grid;gap:14px}#pn .hero h1{font-size:clamp(36px,10vw,64px)!important}",
"#pn .hero .sub{font-size:17px;color:#C9CCD2;max-width:40ch;margin-top:10px}#pn .hero .sub b{color:#fff}",
"#pn .launch{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;text-align:center;line-height:1.3;background:var(--heat);border-radius:12px;padding:13px 12px;font-weight:900;font-size:15px;letter-spacing:.05em;text-transform:uppercase;color:#fff;animation:pnGlow 1.5s ease-in-out infinite}#pn .launch .cd{background:#000;font-size:16px}",
"@keyframes pnGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,18,0,.9)}50%{box-shadow:0 0 0 10px rgba(255,18,0,0)}}",
"#pn .paybar{display:flex;align-items:center;justify-content:center;gap:10px;text-align:center;background:#fff;color:#0C0E12;border-radius:12px;padding:11px 12px;font-weight:800;font-size:16.5px;line-height:1.2}#pn .paybar svg{width:24px;height:24px;color:var(--heat);flex:none}#pn .paybar b{color:var(--heat)}",
"#pn .gallery{position:relative;border-radius:22px;overflow:hidden;background:#111;box-shadow:0 30px 60px -30px rgba(229,40,28,.6)}",
"#pn .slides{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}#pn .slides::-webkit-scrollbar{display:none}",
"#pn .slide{flex:0 0 100%;aspect-ratio:4/5;scroll-snap-align:center;overflow:hidden}#pn .slide img{width:100%;height:100%;object-fit:cover}",
"#pn .kb{animation:pnKb 9s ease-in-out infinite alternate}@keyframes pnKb{0%{transform:scale(1)}100%{transform:scale(1.05)}}",
"#pn .dots{position:absolute;bottom:12px;left:0;right:0;display:flex;justify-content:center;gap:7px;z-index:2}#pn .dots button{width:8px;height:8px;border-radius:99px;border:0;padding:0;background:rgba(255,255,255,.45);cursor:pointer;transition:width .2s}#pn .dots button.on{width:22px;background:var(--heat)}",
"#pn .hero-cta{display:grid;gap:12px}",
/* ofertas */
"#pn .pick{display:grid;gap:16px;text-align:left}",
"#pn .opt{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:14px;padding:16px;border-radius:18px;color:#fff;position:relative;border:2px solid var(--line);background:#000;cursor:pointer;transition:transform .15s,border-color .2s}",
"#pn .opt:active{transform:scale(.985)}#pn .opt.on{border-color:var(--red);background:linear-gradient(180deg,#240200,#000);box-shadow:0 0 26px -6px rgba(255,18,0,.75)}#pn .opt.no{opacity:.45;pointer-events:none}",
"#pn .opt .th{width:62px;height:62px;border-radius:12px;overflow:hidden;background:#1c1c1f;flex:none}#pn .opt .th img{width:100%;height:100%;object-fit:cover}#pn .opt .th .ph{font-size:10px;padding:4px}",
"#pn .opt .q{display:block;font-weight:800;font-size:18px;line-height:1.15}#pn .opt .d{display:block;font-size:14px;color:#C9CCD2;font-weight:600;margin-top:3px}#pn .opt .d b{color:#FF5A3C}",
"#pn .opt .p{font-family:var(--display);font-weight:800;font-size:32px;line-height:1;text-align:right;color:#fff}#pn .opt.on .p{color:#FF5A3C}",
"#pn .opt .p s{display:block;font-family:var(--body);font-size:16px;font-weight:700;color:#FF5A4D;margin-bottom:3px;text-decoration-thickness:2px}",
"#pn .opt .flag{position:absolute;top:-11px;left:14px;background:var(--heat);color:#fff;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:999px}",
"#pn .opt .save{position:absolute;top:-11px;right:14px;background:#fff;color:#000;font-size:12px;font-weight:900;letter-spacing:.04em;text-transform:uppercase;padding:4px 10px;border-radius:999px;animation:pnPop 1.4s ease-in-out infinite}",
"@keyframes pnPop{0%,100%{scale:1}50%{scale:1.08}}",
"#pn .hero-cta .cta{margin-top:0;max-width:none}",
"@media(min-width:900px){#pn .hero{padding-block:36px 70px}#pn .hero-grid{grid-template-columns:1.05fr 1fr;align-items:center;gap:56px}#pn .gallery{order:2}#pn .hero-copy{order:1;display:grid;gap:20px}#pn .hero-head{order:-1}}",
"@media(max-width:899px){#pn .hero-copy{display:contents}#pn .hero-head{order:1;text-align:center}#pn .gallery{order:2}#pn .hero-cta{order:3}#pn .hero .eyebrow{display:none}#pn .hero h1{font-size:clamp(30px,8.6vw,40px)!important;margin-top:4px!important}#pn .hero .sub{font-size:16px;margin:8px auto 0}}",
/* problema */
"#pn .pain{list-style:none;margin:18px auto 22px;max-width:520px;text-align:left;display:grid;gap:10px}#pn .pain li{background:var(--paper);border:1px solid var(--line);border-left:5px solid var(--red);border-radius:12px;padding:13px 14px;font-weight:800;font-size:17px}#pn .pain li span{color:var(--red);margin-right:8px}",
"#pn .zones{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:20px}#pn .zone{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;background:#1c1c1f}#pn .zone img{width:100%;height:100%;object-fit:cover}",
"#pn .zone b{position:absolute;left:8px;bottom:8px;background:var(--heat);color:#fff;font-size:12.5px;font-weight:800;padding:5px 10px;border-radius:999px}",
"#pn .verdict{margin-top:14px;padding:18px 20px;border-radius:16px;background:var(--heat);color:#fff}#pn .verdict b{font-family:var(--display);font-size:clamp(23px,6.2vw,32px);line-height:1.08;letter-spacing:-.02em;display:block}#pn .verdict b em{font-style:normal;color:#000}",
/* video y beneficios */
"#pn .media{position:relative;border-radius:22px;overflow:hidden;background:#1c1c1f;max-width:480px;width:100%;margin-inline:auto;aspect-ratio:4/5}#pn .media img,#pn .media video{width:100%;height:100%;object-fit:cover;display:block}",
"#pn .media.vid{max-width:340px;aspect-ratio:9/16;margin-top:18px}",
"#pn .snd{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;align-items:center;gap:7px;height:42px;padding:0 14px;border-radius:999px;border:1px solid rgba(255,255,255,.35);background:rgba(0,0,0,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;font-family:var(--body);font-size:13px;font-weight:800;cursor:pointer}#pn .snd svg{width:20px;height:20px;flex:none}#pn .snd.on{padding:0;width:42px;justify-content:center}#pn .snd.on span{display:none}",
"#pn .split{display:grid;gap:24px;align-items:center}@media(min-width:900px){#pn .split{grid-template-columns:1fr 1fr;gap:60px}}",
"#pn .feats{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px}#pn .feat{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:16px 14px}#pn .feat svg{width:30px;height:30px;color:var(--red)}",
"#pn .feat b{display:block;font-size:17px;line-height:1.2;margin-top:10px}#pn .feat span{display:block;font-size:14.5px;color:#AEB3BB;margin-top:4px;line-height:1.35}",
/* pasos, confianza, objeciones */
"#pn .steps{display:grid;gap:10px;margin:18px auto 0;max-width:720px}@media(min-width:760px){#pn .steps{grid-template-columns:repeat(3,1fr)}}",
"#pn .step{display:flex;gap:14px;align-items:center;background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:14px;font-weight:700;font-size:17px;line-height:1.3;text-align:left}#pn .step b{flex:0 0 44px;height:44px;border-radius:50%;background:var(--heat);color:#fff;display:grid;place-items:center;font-size:19px;font-weight:900}",
"#pn .trust{display:grid;gap:10px;grid-template-columns:1fr 1fr;margin-top:22px;text-align:left}#pn .trust div{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:14px}#pn .trust b{display:block;font-size:17px}#pn .trust span{font-size:14px;color:var(--muted)}",
"#pn .obj{display:grid;gap:10px;margin:22px auto 0;max-width:720px;text-align:left}#pn .obj>div{background:var(--paper);border:1px solid var(--line);border-left:5px solid var(--heat);border-radius:14px;padding:16px}#pn .obj b{display:block;font-size:18px;line-height:1.25;margin-bottom:6px}#pn .obj span{display:block;color:var(--muted);font-size:16px;line-height:1.45}",
/* oferta final */
"#pn .offer .wrap{max-width:600px}#pn .offer .launch{margin-top:18px}#pn .offer .pick{margin-top:24px}",
"#pn .gift{margin-top:16px;padding:14px 16px;border-radius:14px;background:rgba(255,59,47,.1);border:1px dashed #FF4A2E;color:#fff;font-weight:700;font-size:16px;text-align:center;line-height:1.4}",
/* faq */
"#pn .faq-list{margin:20px auto 0;max-width:720px;border-top:1px solid var(--line);text-align:left}#pn .faq details{border-bottom:1px solid var(--line)}",
"#pn .faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:17px 2px;font-weight:700;font-size:17px;line-height:1.3;color:#fff}#pn .faq summary::-webkit-details-marker{display:none}",
"#pn .faq summary::after{content:'';flex:none;width:10px;height:10px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg) translateY(-3px);transition:transform .2s}#pn .faq details[open] summary::after{transform:rotate(-135deg) translateX(-2px)}",
"#pn .faq details p{padding:0 2px 17px;color:var(--muted)}#pn .faq details p b{color:#fff}#pn .wa-q{text-align:center;font-weight:700;margin-top:28px;font-size:17px}",
/* footer */
"#pn .foot{background:#000;border-top:1px solid #2A0504;padding:40px 0 calc(24px + var(--sticky-h));font-size:14px;color:var(--muted)}@media(min-width:900px){#pn .foot{padding-bottom:24px}}",
"#pn .foot .g{display:grid;gap:26px;grid-template-columns:1.3fr 1fr 1fr}@media(max-width:760px){#pn .foot .g{grid-template-columns:1fr 1fr}#pn .foot .g>div:first-child{grid-column:1/-1}}",
"#pn .foot .pay{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}#pn .foot .pay span{font-size:10.5px;font-weight:800;color:#000;background:#fff;border-radius:5px;padding:4px 7px}#pn .foot .lg{font-family:var(--display);font-size:30px;font-weight:800;color:#fff}#pn .foot h4{color:#fff;font-size:13px;letter-spacing:.1em;text-transform:uppercase;margin:0 0 10px}",
"#pn .foot a{display:block;padding:3px 0;color:var(--muted)}#pn .foot a:hover{color:#fff}#pn .foot .cp{border-top:1px solid #2A0504;margin-top:28px;padding-top:16px;font-size:12.5px;text-align:center}",
/* flotantes */
"#pn-wa{position:fixed;right:14px;bottom:calc(var(--pn-sticky,78px) + 14px + env(safe-area-inset-bottom,0px));z-index:9991;width:58px;height:58px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 10px 24px -8px rgba(0,0,0,.45)}#pn-wa svg{width:32px;height:32px;color:#fff}@media(min-width:900px){#pn-wa{bottom:22px}}",
"#pn-sticky{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:rgba(10,11,13,.97);padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:12px;border-top:1px solid #2A2D33;transform:translateY(110%);transition:transform .3s;font-family:'Figtree',system-ui,sans-serif}",
"#pn-sticky.show{transform:none}#pn-sticky .th{width:46px;height:46px;border-radius:10px;overflow:hidden;background:#1c1c1f;flex:none}#pn-sticky .th img{width:100%;height:100%;object-fit:cover}",
"#pn-sticky .tx{flex:1;min-width:0;line-height:1.2;color:#fff}#pn-sticky .tx b{display:block;font-size:15px;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#pn-sticky .tx span{font-size:12px;font-weight:800;color:#FF5A3C;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}",
"#pn-sticky button{background:linear-gradient(180deg,#FF2A14,#E10600 55%,#A80400);color:#fff;border:0;border-radius:14px;min-height:52px;padding:10px 18px;font-family:inherit;font-size:15px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;cursor:pointer;display:flex;align-items:center;gap:8px}#pn-sticky button svg{width:18px;height:18px}",
"@media(min-width:900px){#pn-sticky{display:none}}",
/* reveal */
"#pn .rv{opacity:0;transform:translateY(16px);transition:opacity .55s ease,transform .55s ease}#pn .rv.in{opacity:1;transform:none}",
/* efectos extra (estilo landing Uruguay) */
"#pn .topbar{background:#0A0A0A;border-bottom:1px solid #2A0504}#pn .topbar b{color:#FF5A3C}",

"#pn .cta{position:relative}#pn .cta::before{content:'';position:absolute;left:10%;right:10%;top:20%;height:70%;background:radial-gradient(closest-side,rgba(255,18,0,.45),transparent);filter:blur(18px);z-index:-1;pointer-events:none}",
"#pn section{position:relative;isolation:isolate}",
"#pn .strip{background:#0A0A0A;box-shadow:0 0 22px -4px rgba(255,18,0,.8);animation:pnGlow 1.8s ease-in-out infinite}",
"#pn .opt.on{animation:pnSel 1.6s ease-in-out infinite}@keyframes pnSel{0%,100%{box-shadow:0 0 18px -6px rgba(255,18,0,.6)}50%{box-shadow:0 0 34px -2px rgba(255,18,0,1)}}",
"#pn .pain li{box-shadow:0 0 16px -8px rgba(255,18,0,.7)}",
"#pn .step b{animation:pnPop 1.6s ease-in-out infinite}",
"#pn .verdict{box-shadow:0 0 40px -8px rgba(255,18,0,.9)}",
"#pn-sticky{transition:none;border-top:1px solid #3A0705;box-shadow:0 -10px 30px -10px rgba(255,18,0,.5)}",
"#pn-sticky button{position:relative;overflow:hidden;animation:pnBtn 1.1s ease-in-out infinite}",
"#pn-sticky button::after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);animation:pnShine 3s ease-in-out infinite}",
"#pn-wa{animation:pnPop 2s ease-in-out infinite}",
"@media(prefers-reduced-motion:reduce){#pn-sticky button,#pn-sticky button::after,#pn .strip,#pn .opt.on,#pn .step b,#pn-wa{animation:none}}",
"@keyframes pnLum{0%{transform:scale(1);box-shadow:0 12px 30px -10px rgba(225,6,0,.9),0 0 0 0 rgba(255,18,0,.75)}45%{transform:scale(1.04)}70%{box-shadow:0 12px 30px -10px rgba(225,6,0,.9),0 0 0 12px rgba(255,18,0,0)}100%{transform:scale(1);box-shadow:0 12px 30px -10px rgba(225,6,0,.9),0 0 0 0 rgba(255,18,0,0)}}",
"#pn .btn-red,#pn .launch,#pn .strip,#pn-sticky button,#pn-menu-promo button,#pn-cart-up button,#modal-cart input[name=go_to_checkout]{animation:pnLum .95s ease-out infinite!important;will-change:transform}",
"#pn .opt .save{animation:pnLumW .95s ease-out infinite!important;will-change:transform}@keyframes pnLumW{0%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,255,255,.8)}45%{transform:scale(1.08)}70%{box-shadow:0 0 0 8px rgba(255,255,255,0)}100%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,255,255,0)}}",
"#pn .opt.on{animation:pnLumCard .95s ease-out infinite!important}@keyframes pnLumCard{0%{box-shadow:0 0 0 0 rgba(255,18,0,.7)}70%{box-shadow:0 0 0 10px rgba(255,18,0,0)}100%{box-shadow:0 0 0 0 rgba(255,18,0,0)}}",
"@media(prefers-reduced-motion:reduce){#pn .rv{opacity:1;transform:none}#pn .kb,#pn .btn-red,#pn .btn-red::after,#pn .launch,#pn .opt .save{animation:none}}"
].join("");

var HCSS = [
/* aviso de cookies del tema: oculto */
".js-notification-cookie-banner,.js-acknowledge-cookies{display:none!important}",
"#pn-adbar{background:#E10600;color:#fff;text-align:center;font-family:'Figtree',system-ui,sans-serif;font-size:12.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;line-height:1.55;padding:9px 16px;position:relative;z-index:1001}",
/* header */
".pn-hd{background:#000!important;border-bottom:1px solid #2A0504!important;border-top:3px solid #E10600!important;box-shadow:0 6px 20px rgba(0,0,0,.4)!important;font-family:'Figtree',system-ui,sans-serif}",
".pn-hd>.container-fluid,.pn-hd>.container{max-width:1200px;margin:0 auto;padding:0 12px}",
".pn-hd .row{display:flex!important;position:relative;flex-wrap:nowrap!important;align-items:center}.pn-hd .container-fluid>.row:first-child,.pn-hd .container>.row:first-child{min-height:64px}.pn-hd .col-utility{flex:0 0 auto}.pn-hd .col{flex:1 1 0}",
"@media(max-width:767px){.pn-hd .menu-and-banners-row,.pn-hd .d-md-block{display:none!important}}",
"#modal-cart .modal-header .row{display:flex!important;flex-wrap:nowrap!important;align-items:center;width:100%;margin:0!important}",
".pn-hd .pn-h-menu{order:0!important;flex:1 1 0!important;padding:0!important}",
".pn-hd .pn-h-logo{position:absolute!important;left:50%;top:50%;transform:translate(-50%,-50%);flex:none!important;width:auto!important;padding:0!important;z-index:1;text-align:center!important}",
".pn-hd .pn-h-logo .logo-img{max-height:40px!important;max-width:150px!important;width:auto!important;height:auto!important;filter:brightness(0) invert(1)}",
"@media(max-width:480px){.pn-hd .pn-h-logo .logo-img{max-height:32px!important;max-width:120px!important}}",
".pn-hd .pn-h-search{order:2!important;margin-left:auto;padding:0!important}.pn-hd .pn-h-cart{order:3!important;padding:0!important}",
".pn-hd .pn-hico{display:inline-flex!important;align-items:center;justify-content:center;width:44px;height:44px;color:#fff!important;position:relative;background:none!important;border:0!important;padding:0!important;font-size:0!important;border-radius:50%;transition:background .15s}",
".pn-hd .pn-hico:hover{background:#1A0200!important}.pn-hd .pn-hico>svg{width:22px;height:22px;flex:0 0 auto}",
".pn-hd .pn-hico>*:not(svg):not(.pn-bub),.pn-hd .utilities-icon,.pn-hd .cart-widget-total{display:none!important}",
".pn-hd .pn-bub{position:absolute;right:2px;top:3px;min-width:18px;height:18px;border-radius:9px;background:#E10600;color:#fff;font-size:10px;font-weight:800;line-height:18px;text-align:center;padding:0 4px;display:none}.pn-hd .pn-bub.on{display:block}",
".pn-hd .js-search-form,.pn-hd .search-container-floating{display:none!important}",
"@media(min-width:768px){.pn-hd .container-fluid>.row:first-child{min-height:76px}.pn-hd .pn-h-menu{display:none!important}.pn-hd .pn-h-logo{position:static!important;transform:none;margin-right:auto}}",
".pn-hd .nav-desktop-list{display:flex;justify-content:center;gap:4px;list-style:none!important;margin:0;padding:0 0 10px}.pn-hd .nav-desktop-list li{list-style:none!important}",
".pn-hd .nav-list-link{font-family:'Figtree',sans-serif!important;font-size:14px!important;font-weight:800!important;color:#fff!important;letter-spacing:.06em!important;text-transform:uppercase;padding:8px 14px!important;text-decoration:none!important}.pn-hd .nav-list-link:hover,.pn-hd .nav-list-link.selected{color:#FF1200!important}",
/* paneles */
".pn-panel{background:#000!important;color:#fff!important;font-family:'Figtree',system-ui,sans-serif!important;border:0!important;box-shadow:0 0 40px rgba(0,0,0,.6)!important}",
".pn-panel .modal-header{display:flex!important;align-items:center;justify-content:space-between;min-height:62px;padding:0 12px 0 18px!important;margin:0!important;border-bottom:1px solid #2A0504!important;background:#000!important;border-top:3px solid #E10600!important;color:#fff!important}",
".pn-panel .modal-header svg{width:18px!important;height:18px!important;color:#fff;fill:none}",
".pn-panel .modal-header.js-modal-close{width:auto!important;height:auto!important;border-radius:0!important;margin:0!important;display:flex!important;cursor:default}",
".pn-panel .modal-header .js-modal-close:not(.modal-header),.pn-panel .modal-header>a.js-modal-close{display:inline-flex!important;align-items:center;justify-content:center;width:44px!important;height:44px!important;min-width:44px;margin-left:auto;border-radius:50%;border:1px solid #3A0705;background:#0A0A0A;color:#fff!important;cursor:pointer;flex:none}",
".pn-panel .modal-header .js-modal-close:not(.modal-header):hover{background:#1A0200;border-color:#FF1200}",
".pn-panel .modal-header .js-modal-close:not(.modal-header) svg{width:18px!important;height:18px!important;stroke:#fff!important;fill:none!important;display:block!important}",
"#nav-search .modal-header,#nav-hamburger .modal-header{justify-content:flex-end}",
".pn-panel .modal-body{background:#000!important;color:#fff!important}",
/* menú */
"#nav-hamburger.pn-panel{width:100%!important;max-width:100%!important}@media(min-width:768px){#nav-hamburger.pn-panel{max-width:400px!important}}",
"#nav-hamburger .nav-list,#nav-hamburger .nav-item{list-style:none!important;margin:0!important;padding:0!important;border:0!important}",
"#nav-hamburger .nav-list-link{display:flex!important;align-items:center;justify-content:space-between;font-size:18px!important;font-weight:800!important;color:#fff!important;padding:15px 24px!important;text-transform:none!important;text-decoration:none!important;border:0!important;border-bottom:1px solid #2A0504!important;background:none!important}",
"#nav-hamburger .nav-list-link:hover{background:#0A0A0A!important;color:#FF1200!important}#nav-hamburger svg{fill:currentColor}",
"#nav-hamburger .hamburger-footer,#nav-hamburger .nav-secondary{background:#0A0A0A!important;padding:20px 24px!important;border:0!important}#nav-hamburger .nav-secondary a{color:#B9BCC2!important}",
"#pn-menu-promo{margin:18px;border-radius:16px;background:linear-gradient(180deg,#240200,#000);border:2px solid #FF1200;padding:16px;display:flex;gap:12px;align-items:center;color:#fff}",
"#pn-menu-promo .th{width:64px;height:64px;border-radius:12px;overflow:hidden;background:#1c1c1f;flex:none}#pn-menu-promo .th img{width:100%;height:100%;object-fit:cover}#pn-menu-promo .ph{display:flex;align-items:center;justify-content:center;height:100%;font-size:10px;color:#8a8f98}",
"#pn-menu-promo b{display:block;font-family:'Bricolage Grotesque',sans-serif;font-size:18px}#pn-menu-promo small{display:block;font-size:13px;color:#FF5A3C;font-weight:800;margin:2px 0 8px}",
"#pn-menu-promo button,#pn-cart-up button,#modal-cart input[name=go_to_checkout]{animation:pnBtn 1.1s ease-in-out infinite!important}",
"#pn-menu-promo button{background:#E10600;color:#fff;border:0;border-radius:10px;padding:9px 16px;font-weight:800;font-size:13px;text-transform:uppercase;cursor:pointer;font-family:inherit}",
"#pn-menu-trust{display:grid;gap:12px;padding:4px 24px 22px}#pn-menu-trust div{display:flex;gap:10px;align-items:center;font-size:14.5px;font-weight:600;color:#fff}#pn-menu-trust svg{width:20px;height:20px;color:#FF1200;flex:none}",
/* buscador */
"#nav-search.pn-panel .modal-body{padding:18px!important}",
"#nav-search .search-input{height:52px!important;border:2px solid #3A0705!important;border-radius:14px!important;background:#0A0A0A!important;color:#fff!important;font-size:16px!important;padding:0 56px 0 18px!important;box-shadow:none!important}",
"#nav-search .search-input:focus{border-color:#FF1200!important;outline:0}",
"#nav-search .search-input-submit{position:absolute;right:6px;top:50%;transform:translateY(-50%);background:#E10600!important;border:0!important;border-radius:10px;width:42px;height:42px;display:flex;align-items:center;justify-content:center}#nav-search .search-input-submit svg{width:16px!important;height:16px!important;fill:#fff!important}",
"#nav-search .search-suggest a{display:block;padding:12px 0;border-bottom:1px solid #2A0504;color:#fff!important;text-decoration:none!important}",
"#pn-search-hint{margin-top:18px}#pn-search-hint small{display:block;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#FF1200;margin-bottom:10px}",
"#pn-search-hint a{display:inline-block;margin:0 6px 8px 0;border:1px solid #3A0705;background:#0A0A0A;border-radius:999px;padding:7px 14px;font-size:13.5px;font-weight:600;color:#fff!important;text-decoration:none!important}",
/* carrito */
"#modal-cart.pn-panel{position:fixed!important;top:0!important;bottom:0!important;right:0!important;left:auto!important;height:100%!important;width:92%!important;max-width:430px!important;margin:0!important;border-radius:0!important;overflow-y:auto;transform:translateX(105%)!important;transition:transform .35s cubic-bezier(.2,.8,.2,1)!important;display:block!important;visibility:hidden;z-index:20000!important}",
"#modal-cart.pn-panel.modal-show{transform:translateX(0)!important;visibility:visible}",
"#modal-cart .modal-body{padding:0 16px!important}#modal-cart .modal-header .col{font-size:0!important;display:flex!important;align-items:center}",
"#pn-cart-title{font-family:'Bricolage Grotesque',sans-serif!important;font-size:22px!important;font-weight:800;color:#fff;line-height:1}",
"#pn-cart-rw{margin:0 -16px;padding:12px 16px;background:#1A0200;border-bottom:1px solid #3A0705;text-align:center;color:#fff}",
"#pn-cart-rw p{font-size:14px;margin:0 0 8px}#pn-cart-rw p b{color:#FF5A3C}",
"#pn-cart-rw .tr{height:10px;border-radius:10px;background:#2A0504;overflow:hidden}#pn-cart-rw .tr i{display:block;height:100%;border-radius:10px;background:linear-gradient(90deg,#FF2A14,#A80400);transition:width .5s}",
"#pn-cart-rw .ic{display:flex;justify-content:space-between;gap:6px;margin-top:8px;font-size:11.5px;font-weight:700;color:#B9BCC2}#pn-cart-rw .ic span{display:inline-flex;align-items:center;gap:4px}#pn-cart-rw .ic svg{width:14px;height:14px;color:#25D366}",
"#modal-cart .cart-item{padding:14px 0!important;border-bottom:1px solid #2A0504!important;color:#fff}#modal-cart .cart-item img{border-radius:10px}",
"#modal-cart .cart-item-name a,#modal-cart [data-component='line-item.name'] a{font-size:15px!important;font-weight:800!important;color:#fff!important;text-decoration:none!important}",
"#modal-cart .js-cart-item-subtotal{font-family:'Bricolage Grotesque',sans-serif!important;font-size:20px!important;font-weight:800!important;color:#FF5A3C!important}",
"#modal-cart .form-quantity,#modal-cart .cart-item-quantity input{background:#0A0A0A!important;color:#fff!important;border-color:#3A0705!important}",
"#pn-cart-up{position:relative;display:flex;align-items:center;gap:12px;border:2px solid #FF1200;background:linear-gradient(180deg,#240200,#000);border-radius:14px;padding:18px 12px 12px;margin:16px 0 10px;color:#fff}",
"#pn-cart-up .lb{position:absolute;top:-10px;left:14px;background:#E10600;color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.08em;padding:3px 10px;border-radius:999px}",
"#pn-cart-up .th{width:52px;height:52px;border-radius:10px;overflow:hidden;background:#1c1c1f;flex:none}#pn-cart-up .th img{width:100%;height:100%;object-fit:cover}#pn-cart-up .ph{display:flex;align-items:center;justify-content:center;height:100%;font-size:9px;color:#8a8f98}",
"#pn-cart-up .tx{flex:1;min-width:0}#pn-cart-up .t1{font-size:14px;font-weight:800;line-height:1.3}#pn-cart-up .t2{font-size:12px;color:#25D366;font-weight:700;margin-top:2px}",
"#pn-cart-up button{flex:none;background:#E10600;color:#fff;border:0;border-radius:10px;padding:10px 14px;font-weight:800;font-size:13px;cursor:pointer;font-family:inherit}#pn-cart-up.busy{opacity:.5;pointer-events:none}",
"#modal-cart .cart-totals-container,#modal-cart #ajax-cart-submit-div{background:#0A0A0A!important;margin:0 -16px!important;padding:14px 16px!important;color:#fff!important}",
"#modal-cart .cart-total,#modal-cart .cart-total-price,#modal-cart .js-cart-total{font-family:'Bricolage Grotesque',sans-serif!important;font-size:22px!important;font-weight:800!important;color:#fff!important}",
"#modal-cart input[name=go_to_checkout]{background:linear-gradient(180deg,#FF2A14,#E10600 55%,#A80400)!important;color:#fff!important;border:0!important;border-radius:14px!important;font-size:17px!important;font-weight:800!important;text-transform:uppercase!important;letter-spacing:.04em;padding:18px!important;width:100%;box-shadow:0 14px 30px -12px rgba(225,6,0,1)}",
"#pn-cart-pay{display:flex;justify-content:center;flex-wrap:wrap;gap:12px;font-size:12px;font-weight:600;color:#B9BCC2;margin:10px 0 4px}#pn-cart-pay span{display:inline-flex;align-items:center;gap:4px}#pn-cart-pay svg{width:14px;height:14px;color:#FF1200}",
"#modal-cart .alert-info{background:#000!important;border:0!important;color:#fff!important;text-align:center;font-size:15px!important;padding:40px 10px!important}",
"#modal-cart .js-modal-close.btn-link,#modal-cart .text-center.w-100>.js-modal-close{color:#B9BCC2!important}",
/* carrito · arreglos visuales */
"@media(max-width:767px){#modal-cart.pn-panel{width:100%!important;max-width:100%!important}}",
"#modal-cart .modal-header{border-radius:0!important;position:sticky;top:0;z-index:5}#modal-cart .modal-header .row{gap:8px}",
"#modal-cart .modal-header .col{flex:1 1 auto!important;min-width:0}#modal-cart .modal-header .col-2{flex:0 0 auto!important;max-width:none!important;width:auto!important;padding:0!important}",
"#pn-cart-title{white-space:nowrap}",
"#modal-cart .js-ajax-cart-list,#modal-cart .cart-item,#modal-cart .cart-item .row,#modal-cart .cart-item [class*='col']{background:transparent!important;color:#fff!important}",
"#modal-cart .js-ajax-cart-list{padding:0!important}",
"#modal-cart .cart-item{margin:14px 0 0!important;padding:12px!important;background:#0A0A0A!important;border:1px solid #3A0705!important;border-radius:14px!important}",
"#modal-cart .cart-item-image-col{padding:0 12px 0 0!important}#modal-cart .cart-item-image{width:76px!important;height:76px!important;object-fit:cover;border-radius:10px;background:#1c1c1f}",
"#modal-cart .cart-item .py-3{padding-top:0!important;padding-bottom:0!important}",
"#modal-cart [data-component='line-item.name']{margin-bottom:6px!important;line-height:1.25}",
"#modal-cart [data-component='name.short-name']{display:block;font-size:15px!important;font-weight:800!important;color:#fff!important;text-decoration:none!important}",
"#modal-cart [data-component='name.short-variant-name']{display:inline-block;margin-top:4px;font-size:11.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:#fff;background:#E10600;border-radius:999px;padding:2px 9px}",
"#modal-cart .form-quantity .row{background:#1A0200!important;border:1px solid #3A0705;border-radius:999px;flex-wrap:nowrap!important}",
"#modal-cart .form-quantity-icon{color:#fff!important;width:34px;height:34px;display:inline-flex!important;align-items:center;justify-content:center;padding:0!important}#modal-cart .form-quantity-icon svg{fill:#fff!important;width:12px;height:12px}",
"#modal-cart .js-cart-quantity-input{background:transparent!important;border:0!important;color:#fff!important;font-weight:800;width:36px!important;padding:0!important}",
"#modal-cart [data-component='line-item.remove']{color:#B9BCC2!important;font-size:13px!important;text-decoration:underline}",
"#modal-cart .js-toggle-shipping,#modal-cart .js-toggle-shipping .h5{color:#fff!important}#modal-cart .js-toggle-shipping svg{fill:#fff!important}#modal-cart .divider{border-color:#2A0504!important}",
"#modal-cart .js-shipping-input{background:#0A0A0A!important;color:#fff!important;border:1px solid #3A0705!important}",
"#modal-cart .cart-subtotal,#modal-cart .cart-shipping-costs-container,#modal-cart .cart-total{color:#fff!important}#modal-cart #shipping-cost{color:#B9BCC2!important;opacity:1!important}",
"#modal-cart .cart-installments{color:#B9BCC2!important}",
"#modal-cart .js-cart-item-subtotal-compare-price-container{display:none!important}",
"#modal-cart .cart-item-quantity{display:none!important}",
"#modal-cart .cart-subtotals-container,#modal-cart .js-shipping-calculator-container,#modal-cart .js-fulfillment-info.cart-fulfillment-info,#modal-cart .js-toggle-shipping{display:none!important}",
"#modal-cart.pn-panel{overflow-x:hidden!important}#modal-cart .modal-body{overflow-x:hidden}",
"#modal-cart .js-cart-item-subtotal,#modal-cart .js-cart-subtotal,#modal-cart .js-cart-total{color:#25D366!important}",
"#modal-cart .pn-was{display:block;font-size:14px;font-weight:700;color:#FF5A4D;text-decoration-thickness:2px;line-height:1.1;margin-bottom:2px}",
"#modal-cart .cart-total{display:grid!important;grid-template-columns:1fr auto;align-items:end;row-gap:0}",
"#modal-cart .cart-total .cart-total-label{grid-column:1;grid-row:1/3;align-self:center}",
"#modal-cart .cart-total .pn-was{grid-column:2;grid-row:1;justify-self:end;display:block;margin:0;font-size:15px}",
"#modal-cart .cart-total .cart-total-price{grid-column:2;grid-row:2;width:auto!important;max-width:none!important;padding:0!important}"
].join("");

var HICO = {
  menu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h12"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  bag:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  close:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'
};
function header() {
  var hd = one("header.js-head-main") || one(".js-head-main") || one("header");
  if (!hd) return;
  hd.classList.add("pn-hd");
  if (PANAL.adbar && !D.getElementById("pn-adbar")) {
    var ab = make("div", "pn-adbar", safe(PANAL.adbar));
    var host = hd.closest(".js-head-main-container, .head-main-container") || hd;
    host.parentNode.insertBefore(ab, host);
  }
  function iconize(el, ico, cls) {
    if (!el || el.hasAttribute("data-pn")) return;
    el.setAttribute("data-pn", "1"); el.classList.add("pn-hico");
    var col = el.closest(".col-utility") || el.closest("[class*='col']"); if (col) col.classList.add(cls);
    el.insertAdjacentHTML("afterbegin", ico);
  }
  iconize(one('[data-component="menu-button"]', hd) || one("[data-toggle='#nav-hamburger']", hd), HICO.menu, "pn-h-menu");
  iconize(one(".js-search-button", hd) || one("[data-toggle='#nav-search']", hd), HICO.search, "pn-h-search");
  iconize(one("#ajax-cart a", hd) || one(".js-toggle-cart", hd), HICO.bag + '<span class="pn-bub"></span>', "pn-h-cart");
  var logo = one("#logo", hd) || one(".logo-img-container", hd);
  if (logo) (logo.closest(".col") || logo).classList.add("pn-h-logo");
  if (logo && PANAL.logo && !logo.hasAttribute("data-pn-logo")) {
    logo.setAttribute("data-pn-logo", "1");
    var li = one("img", logo);
    if (li) { li.removeAttribute("srcset"); li.removeAttribute("data-srcset"); li.src = PANAL.logo; li.alt = PANAL.marca; li.classList.add("logo-img"); }
    else logo.innerHTML = '<a href="/" aria-label="' + safe(PANAL.marca) + '"><img class="logo-img" src="' + PANAL.logo + '" alt="' + safe(PANAL.marca) + '"></a>';
  }
  var amount = one(".js-cart-widget-amount", hd), bub = one(".pn-bub", hd);
  if (amount && bub) { var n = parseInt(amount.textContent, 10) || 0; bub.textContent = n; bub.classList.toggle("on", n > 0); }
  ["nav-hamburger", "nav-search", "modal-cart"].forEach(function (id) {
    var m = D.getElementById(id); if (!m || m.hasAttribute("data-pn")) return;
    m.setAttribute("data-pn", "1"); m.classList.add("pn-panel");
    all(".modal-header svg, .js-modal-close svg", m).forEach(function (v) { v.outerHTML = HICO.close; });
  });
  /* menú: tarjeta de PANAL + confianza */
  var hm = D.getElementById("nav-hamburger");
  if (hm && !one("#pn-menu-promo", hm)) {
    var body = one(".modal-body", hm) || one(".nav-body", hm) || hm, p = PANAL.packs[0];
    var pr = make("div", "pn-menu-promo", '<span class="th">' + img(PANAL.fotos.pack, "PANAL", "1/1") + '</span><div><b>Almohadón PANAL</b><small>🔥 ' + safe(PANAL.promo) + " · " + safe(p.precio) + '</small><button type="button" data-pn-go>Lo quiero</button></div>');
    var tr = make("div", "pn-menu-trust", "<div>" + ICO.truck + "Envío gratis a sucursal " + safe(PANAL.correo) + "</div><div>" + ICO.card + PANAL.cuotas + " cuotas sin interés</div><div>" + ICO.lock + "Compra 100% segura</div>" + (PANAL.whatsapp ? '<div>' + ICO.wa + '<a href="' + waLink() + '" target="_blank" rel="noopener" style="color:#fff">Escribinos por WhatsApp</a></div>' : ""));
    body.appendChild(pr); body.appendChild(tr);
    one("button", pr).addEventListener("click", function () { var c = one(".js-modal-close", hm); if (c) c.click(); });
  }
  /* buscador */
  var ns = one("#nav-search .search-input"); if (ns) ns.setAttribute("placeholder", "¿Qué estás buscando?");
  var sp = D.getElementById("nav-search");
  if (sp && !one("#pn-search-hint", sp)) {
    var sb = one(".modal-body", sp) || sp;
    sb.appendChild(make("div", "pn-search-hint", "<small>Lo más buscado</small>" + ["almohadón", "dolor de coxis", "gel", "cojín para auto"].map(function (q) { return '<a href="/search/?q=' + encodeURIComponent(q) + '">' + safe(q) + "</a>"; }).join("")));
  }
}


/* ─────────────────────────────────────────────────────────────────────
   PRECIOS EN VIVO · lee las variantes de la ficha del producto
   ───────────────────────────────────────────────────────────────────── */
var LIVE = { variants: [] };
function optName(v) {
  var o = v.option0 != null ? v.option0 : (v.option_0 != null ? v.option_0 : (v.values && v.values[0]));
  if (o && typeof o === "object") o = o.es || o.name || o.value;
  return key(o);
}
function livePrice(p) {
  var r = { now: toNumber(p.precio), before: toNumber(p.tachado) };
  var v = null;
  for (var n = 0; n < LIVE.variants.length; n++) if (p.variante && optName(LIVE.variants[n]) === key(p.variante)) v = LIVE.variants[n];
  if (v) {
    var now = toNumber(v.price_number != null ? v.price_number : (v.price_short || v.price));
    var before = toNumber(v.compare_at_price_number != null ? v.compare_at_price_number : (v.compare_at_price_short || v.compare_at_price));
    if (now) r.now = now;
    if (before && before > r.now) r.before = before;
  }
  if (r.before && r.now && r.before <= r.now) r.before = null;
  return r;
}
function loadLive(cb) {
  if (!window.fetch || window.__panalPreview) return;
  fetch(PRODUCT_URL, { credentials: "same-origin" }).then(function (r) { return r.text(); }).then(function (h) {
    var doc = new DOMParser().parseFromString(h, "text/html");
    var nodes = doc.querySelectorAll("[data-variants]");
    for (var i = 0; i < nodes.length; i++) {
      try {
        var d = JSON.parse(nodes[i].getAttribute("data-variants") || "[]"), list = [];
        if (Array.isArray(d)) list = d; else if (d && typeof d === "object") Object.keys(d).forEach(function (k) { list.push(d[k]); });
        if (list.length) { LIVE.variants = list; break; }
      } catch (e) {}
    }
    /* fotos del carrusel de la ficha, si las hay */
    var seen = {}, gal = [];
    Array.prototype.forEach.call(doc.querySelectorAll(".js-product-slide-img, .product-slider-image"), function (im) {
      var set = im.getAttribute("srcset") || im.getAttribute("data-srcset") || "", best = "", bw = 0;
      set.split(",").forEach(function (c) { var pr = c.trim().split(/\s+/), w = parseInt(pr[1], 10) || 0; if (pr[0] && w >= bw) { bw = w; best = pr[0]; } });
      var u = best || im.getAttribute("data-src") || im.getAttribute("src") || "";
      if (!u || /^data:|empty-placeholder|no-photo/.test(u)) return;
      if (u.indexOf("//") === 0) u = "https:" + u;
      var id = u.replace(/-\d+-\d+\.(webp|jpe?g|png|avif)$/i, "");
      if (seen[id]) return; seen[id] = 1;
      gal.push(/mitiendanube\.com/.test(u) ? id + "-2048-2048." + (u.match(/\.(\w+)$/) || [, "webp"])[1] : u);
    });
    LIVE.gallery = gal;
    cb();
  }).catch(function (e) { log("No pude leer la ficha del producto", e); });
}

/* ─────────────────────────────────────────────────────────────────────
   ESTILOS EXTRA DEL HOME
   ───────────────────────────────────────────────────────────────────── */
var HOME_CSS = [
"#pn .hero-home{padding-block:22px 44px}",
"#pn .hero-home .hero-grid{gap:20px}",
"#pn .hero-home .gallery{order:1}",
"#pn .hero-home .hero-copy{display:grid;gap:14px;text-align:center;order:2}",
"#pn .hero-home .hero-copy .sub{margin-inline:auto}",
"#pn .hero-home .eyebrow{display:block!important}",
"#pn .hero-home h1{font-size:clamp(34px,9.4vw,62px)!important}",
"#pn .bullets{list-style:none;display:grid;gap:8px;margin:4px auto 0;max-width:420px;text-align:left}#pn .bullets li{display:flex;gap:10px;align-items:center;font-weight:700;font-size:16px}#pn .bullets svg{width:20px;height:20px;color:var(--red);flex:none}",
"@media(min-width:900px){#pn .hero-home .hero-grid{grid-template-columns:1fr 1.05fr;align-items:center;gap:56px}#pn .hero-home .hero-copy{text-align:left}#pn .hero-home .hero-copy .sub{margin-inline:0}#pn .hero-home .bullets{margin-inline:0}#pn .hero-home .cta{margin-left:0}#pn .kits{max-width:880px;margin-inline:auto}#pn .hero-home .hero-copy{order:1}#pn .hero-home .gallery{order:2}}",
"#pn .kits{display:grid;gap:18px;margin-top:26px;text-align:left}@media(min-width:760px){#pn .kits{grid-template-columns:1fr 1fr}}",
"#pn .kit{position:relative;display:flex;flex-direction:column;border-radius:22px;border:2px solid var(--line);background:#050505;overflow:hidden;transition:transform .2s,border-color .2s}",
"#pn .kit:hover{transform:translateY(-4px);border-color:var(--red)}#pn .kit.top{border-color:var(--red);box-shadow:0 0 30px -8px rgba(255,18,0,.8)}",
"#pn .kit .im{aspect-ratio:1/1;background:#1c1c1f;overflow:hidden}#pn .kit .im img{width:100%;height:100%;object-fit:cover;transition:transform .5s}#pn .kit:hover .im img{transform:scale(1.05)}",
"#pn .kit .flag{position:absolute;top:14px;left:14px;z-index:2;background:var(--heat);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:5px 12px;border-radius:999px}",
"#pn .kit .save{position:absolute;top:14px;right:14px;z-index:2;background:#fff;color:#000;font-size:12px;font-weight:900;text-transform:uppercase;padding:5px 11px;border-radius:999px}",
"#pn .kit .bd{padding:18px;display:grid;gap:8px;flex:1}#pn .kit .t{font-family:var(--display);font-size:24px;font-weight:800;line-height:1.1}#pn .kit .d{font-size:15px;color:#C9CCD2}#pn .kit .d b{color:#FF5A3C}",
"#pn .kit .pr{display:flex;align-items:baseline;gap:10px;margin-top:4px}#pn .kit .pr s{font-size:17px;font-weight:700;color:#FF5A4D;text-decoration-thickness:2px}#pn .kit .pr b{font-family:var(--display);font-size:36px;font-weight:800;color:#fff;line-height:1}",
"#pn .kit .cu{font-size:13.5px;font-weight:700;color:#25D366}#pn .kit .btn{margin-top:8px;min-height:56px;font-size:17px}",
"#pn .marquee-img{display:flex;gap:10px;overflow:hidden;margin-top:22px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}",
"#pn .marquee-img .tr{display:flex;gap:10px;animation:pnMarq 30s linear infinite}#pn .marquee-img .it{flex:0 0 200px;aspect-ratio:4/5;border-radius:16px;overflow:hidden;background:#1c1c1f}#pn .marquee-img .it img{width:100%;height:100%;object-fit:cover}",
"#pn .snd{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;align-items:center;gap:7px;height:42px;padding:0 14px;border-radius:999px;border:1px solid rgba(255,255,255,.35);background:rgba(0,0,0,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;font-family:var(--body);font-size:13px;font-weight:800;cursor:pointer}#pn .snd svg{width:20px;height:20px;flex:none}#pn .snd.on{padding:0;width:42px;justify-content:center}#pn .snd.on span{display:none}",
"#pn .vid-split{display:grid;gap:24px;align-items:center}@media(min-width:900px){#pn .vid-split{grid-template-columns:1fr 1fr;gap:60px}#pn .vid-split .media.vid{margin-top:0}}",
"#pn .checks{list-style:none;display:grid;gap:10px;margin-top:20px}#pn .checks li{display:flex;gap:12px;align-items:flex-start;background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:13px 14px;font-weight:700;font-size:16px;text-align:left}#pn .checks li svg{width:22px;height:22px;color:var(--red);flex:none;margin-top:1px}"
].join("");

/* ─────────────────────────────────────────────────────────────────────
   HOME
   ───────────────────────────────────────────────────────────────────── */
function goLink(txt, pack) { return '<a class="btn btn-red" href="' + PRODUCT_URL + (pack != null ? "?pack=" + pack : "") + '">' + txt + " " + ICO.arrow + "</a>"; }
function pays() { return '<div class="pays"><span>MERCADO PAGO</span><span>VISA</span><span>MASTERCARD</span><span>AMEX</span><span>NARANJA</span></div>'; }
function ship() { return "<small><span>" + ICO.truck + "Envío gratis a sucursal</span><span>" + ICO.card + PANAL.cuotas + " cuotas sin interés</span></small>"; }
var CHECK = svg('<path d="M20 6 9 17l-5-5"/>', 3);

function kits() {
  return '<div class="kits">' + PANAL.packs.map(function (p, n) {
    return '<a class="kit rv' + (p.elegido ? " top" : "") + '" href="' + PRODUCT_URL + "?pack=" + n + '" data-kit="' + n + '">' +
      (p.etiqueta ? '<span class="flag">' + safe(p.etiqueta) + "</span>" : "") + (p.ahorro ? '<span class="save">' + safe(p.ahorro.split("·")[0].trim()) + "</span>" : "") +
      '<span class="im">' + img(n === 0 ? PANAL.fotos.pack : (PANAL.fotos.galeria[1] || PANAL.fotos.pack), p.titulo, "1/1") + "</span>" +
      '<span class="bd"><span class="t">' + safe(p.titulo) + '</span><span class="d">' + p.detalle + "</span>" +
      '<span class="pr"><s data-before></s><b data-now>' + safe(p.precio) + "</b></span>" +
      '<span class="cu">' + PANAL.cuotas + " cuotas sin interés · Envío gratis a sucursal</span>" +
      '<span class="btn btn-red">Lo quiero ' + ICO.arrow + "</span></span></a>";
  }).join("") + "</div>";
}

function build() {
  var F = PANAL.fotos;
  var cinta = PANAL.cinta.map(function (c) { return "<span>" + c + "</span>"; }).join("");
  var gal = F.galeria.filter(Boolean);
  var all4 = [F.pack].concat(F.usos, F.galeria).filter(function (u, i, a) { return u && a.indexOf(u) === i; });

  var html =
  '<div class="topbar"><div class="track">' + cinta + cinta + cinta + cinta + "</div></div>" +

  /* HERO */
  '<section class="hero hero-home" id="pn-inicio"><div class="wrap hero-grid">' +
    '<div class="gallery"><div class="slides">' + gal.map(function (u, n) { return '<div class="slide">' + img(u, "PANAL de Duna · foto " + (n + 1), "4/5", n === 0 ? "kb" : "") + "</div>"; }).join("") + "</div>" +
    '<div class="dots">' + gal.map(function (u, n) { return '<button type="button" class="' + (n ? "" : "on") + '" aria-label="Foto ' + (n + 1) + '"></button>'; }).join("") + "</div></div>" +
    '<div class="hero-copy">' +
      '<p class="eyebrow">PANAL · by ' + safe(PANAL.marca) + "</p>" +
      '<h1>Sentate sin dolor de coxis ni cadera. <em>Desde hoy.</em></h1>' +
      '<p class="sub"><b>El almohadón de gel en forma de panal</b> que saca la presión de la cadera en el auto, en casa y en la oficina.</p>' +
      '<ul class="bullets">' + ["Gel de verdad: lo aplastás y vuelve", "Funda antideslizante de REGALO", "Envío gratis a sucursal " + PANAL.correo].map(function (b) { return "<li>" + CHECK + safe(b) + "</li>"; }).join("") + "</ul>" +
      '<div class="launch"><span style="flex-basis:100%">🔥 ' + safe(PANAL.promo) + '</span><span>Termina en <span class="cd" data-cd>--</span></span></div>' +
      '<div class="cta" style="margin-top:0">' + goLink("Quiero mi PANAL") + ship() + pays() + "</div>" +
    "</div>" +
  "</div></section>" +

  /* KITS */
  '<section id="pn-oferta"><div class="wrap center">' +
    '<p class="eyebrow rv">Precio ' + safe(PANAL.promo) + "</p>" +
    '<h2 class="h2 rv" style="margin-top:8px!important">Elegí tu <em>kit PANAL</em></h2>' +
    '<p class="lead rv">La funda va de regalo y el envío a sucursal es gratis.</p>' +
    kits() +
  "</div></section>" +

  /* PROBLEMA + USOS */
  '<section><div class="wrap center">' +
    '<p class="eyebrow rv">Esto no se va solo</p>' +
    '<h2 class="h2 rv" style="margin-top:8px!important">Cada día que seguís así, <em>la puntada empeora</em></h2>' +
    '<ul class="pain rv"><li><span>✕</span>Te bajás del auto doblado de la cadera</li><li><span>✕</span>No aguantás ni media hora sentado</li><li><span>✕</span>El ciático te baja por la pierna y no te deja dormir</li></ul>' +
    '<p class="eyebrow rv" style="margin-bottom:12px">Donde te sentás, PANAL te salva</p>' +
    '<div class="zones">' + [["Auto", "PANAL en la camioneta"], ["Casa", "PANAL en casa"], ["Oficina", "PANAL en la oficina"]].map(function (z, n) {
      return '<div class="zone rv">' + img(F.usos[n], z[1], "3/4") + "<b>" + z[0] + "</b></div>"; }).join("") + "</div>" +
    '<div class="verdict rv"><b>La puntada en el coxis no se va sola. <em>Con PANAL, te sentás y listo.</em></b></div>' +
    '<div class="cta">' + goLink("Quiero mi PANAL") + "</div>" +
  "</div></section>" +

  /* VIDEO */
  '<section><div class="wrap vid-split">' +
    '<div class="media vid">' + (F.video ? '<video src="' + safe(F.video) + '"' + (F.videoPoster ? ' poster="' + safe(F.videoPoster) + '"' : "") + ' autoplay muted loop playsinline preload="metadata"></video><button type="button" class="snd" aria-label="Activar sonido">' + SND.off + "<span>Activar sonido</span></button>" : img(F.videoPoster, "Video", "9/16")) + "</div>" +
    '<div class="center">' +
      '<p class="eyebrow">Mirá cómo es</p><h2 class="h2" style="margin-top:8px!important">Así llega tu <em>kit PANAL</em></h2>' +
      '<ul class="checks">' + ["Almohadón de gel en forma de panal", "Funda antideslizante y lavable de regalo", "Listo para usar: lo sacás de la caja y te sentás", "Seguimiento del envío por email"].map(function (c) { return "<li>" + CHECK + safe(c) + "</li>"; }).join("") + "</ul>" +
      '<div class="cta">' + goLink("Lo quiero") + "</div>" +
    "</div>" +
  "</div></section>" +

  /* BENEFICIOS */
  '<section><div class="wrap split">' +
    '<div class="media rv">' + img(F.gel, "Gel PANAL", "4/5", "kb") + "</div>" +
    "<div>" +
      '<p class="eyebrow rv">Gel de verdad. No espuma.</p>' +
      '<h2 class="h2 rv" style="margin-top:8px!important">Te sentás y el peso <em>se reparte solo</em></h2>' +
      '<div class="feats">' + [[ICO.hex, "Gel en panal", "Saca la presión del coxis y la cadera"], [ICO.back, "No se aplasta", "Vuelve a su forma, día tras día"], [ICO.wind, "Queda fresco", "Nada de transpirar en verano"], [ICO.lock, "No se resbala", "Funda antideslizante y lavable"]].map(function (f) {
        return '<div class="feat rv">' + f[0] + "<b>" + f[1] + "</b><span>" + f[2] + "</span></div>"; }).join("") + "</div>" +
    "</div>" +
  "</div></section>" +

  /* CÓMO SE USA */
  '<section><div class="wrap center">' +
    '<p class="eyebrow rv">Más fácil, imposible</p><h2 class="h2 rv" style="margin-top:8px!important">Lo ponés y <em>chau puntada</em></h2>' +
    '<div class="steps"><div class="step rv"><b>1</b>Lo ponés en el asiento</div><div class="step rv"><b>2</b>Te sentás como siempre</div><div class="step rv"><b>3</b>Horas sentado, sin dolor</div></div>' +
    '<div class="marquee-img"><div class="tr">' + all4.concat(all4).map(function (u) { return '<div class="it">' + img(u, "PANAL de Duna", "4/5") + "</div>"; }).join("") + "</div></div>" +
  "</div></section>" +

  /* CONFIANZA */
  '<section><div class="wrap center">' +
    '<p class="eyebrow rv">' + safe(PANAL.marca) + "</p>" +
    '<h2 class="h2 rv" style="margin-top:8px!important">Miles de argentinos <em>ya se sientan sin dolor</em></h2>' +
    '<div class="trust">' + [["Miles de pedidos", "A todo el país"], [PANAL.cuotas + " cuotas sin interés", "Con todas las tarjetas"], ["Gente real", "Te atendemos por WhatsApp"], ["Envío gratis", "A sucursal " + PANAL.correo]].map(function (t) {
      return '<div class="rv"><b>' + t[0] + "</b><span>" + t[1] + "</span></div>"; }).join("") + "</div>" +
    '<div class="obj">' + [["“Ya probé almohadones y se aplastan.”", "PANAL no es espuma: es gel en forma de panal que vuelve a su forma. Pasan los meses y sigue igual."],
      ["“¿Se resbala en el asiento del auto?”", "No. La funda antideslizante lo deja firme aunque frenes o dobles."],
      ["“Me da miedo comprar por internet.”", "Pagás con Mercado Pago o tu tarjeta en un checkout 100% seguro, en " + PANAL.cuotas + " cuotas sin interés. Te mandamos el seguimiento y hay gente real que te atiende por WhatsApp."]].map(function (o) {
      return '<div class="rv"><b>' + o[0] + "</b><span>" + o[1] + "</span></div>"; }).join("") + "</div>" +
  "</div></section>" +

  /* FAQ */
  '<section class="faq"><div class="wrap center">' +
    '<h2 class="h2">Preguntas <em>rápidas</em></h2>' +
    '<div class="faq-list">' + [
      ["¿Cómo pago?", "Con <b>Mercado Pago, tarjeta de crédito o débito, o transferencia</b>. Con tarjeta de crédito, en <b>" + PANAL.cuotas + " cuotas sin interés</b>."],
      ["¿Cómo me llega?", "<b>Envío gratis a sucursal " + PANAL.correo + "</b> en todo el país. Apenas despachamos te mandamos el código de seguimiento por email."],
      ["¿Qué trae el kit?", "El <b>almohadón de gel PANAL</b> y su <b>funda antideslizante y lavable de regalo</b>. En el pack de 2 kits van 2 almohadones y 2 fundas."],
      ["¿Entra en el asiento de mi auto o camioneta?", "Sí. Está pensado para el asiento del auto o la camioneta, y también para la silla de casa o de la oficina."],
      ["¿Se puede lavar?", "Sí. La <b>funda es lavable</b>: la sacás, la lavás y se la volvés a poner."]
    ].map(function (f) { return "<details><summary>" + f[0] + "</summary><p>" + f[1] + "</p></details>"; }).join("") + "</div>" +
    (PANAL.whatsapp ? '<p class="wa-q">¿Te quedó alguna duda?</p><a class="btn btn-wa" href="' + waLink() + '" target="_blank" rel="noopener">' + ICO.wa + "Escribinos por WhatsApp</a>" : "") +
    '<div class="cta"><span class="strip">🔥 ' + safe(PANAL.promo) + ' · termina en <span class="cd" data-cd>--</span></span>' + goLink("Quiero mi PANAL") + "</div>" +
  "</div></section>" +

  /* FOOTER */
  '<div class="foot"><div class="wrap"><div class="g">' +
    '<div><div class="lg">' + (PANAL.logo ? '<img src="' + PANAL.logo + '" alt="' + safe(PANAL.marca) + '" style="width:170px;height:auto">' : safe(PANAL.marca)) + '</div><p style="margin-top:8px">Soluciones para que el dolor no te frene.</p><div class="pay"><span>MERCADO PAGO</span><span>VISA</span><span>MASTERCARD</span><span>AMEX</span><span>NARANJA</span><span>TRANSFERENCIA</span></div></div>' +
    '<div><h4>Comprar</h4><a href="' + PRODUCT_URL + '">Almohadón PANAL</a><a href="/productos/">Todos los productos</a><a href="/contacto/">Contacto</a></div>' +
    '<div><h4>Ayuda</h4><a href="/envios/">Envíos</a><a href="/rastreo/">Seguí tu pedido</a><a href="/devoluciones/">Cambios y devoluciones</a><a href="/arrepentimiento/">Botón de arrepentimiento</a>' +
      (PANAL.whatsapp ? '<a href="' + waLink() + '" target="_blank" rel="noopener">Escribinos</a>' : "") + "</div>" +
  '</div><div class="cp">© ' + new Date().getFullYear() + " " + safe(PANAL.marca) + ". Todos los derechos reservados.</div></div></div>";

  var root = make("div", "pn", html);
  var anchor = HOME_HIDE.map(function (s) { return one(s); }).filter(Boolean)[0];
  if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(root, anchor);
  else { var h = one(".js-head-main-container, .head-main-container, header"); if (h && h.parentNode) h.parentNode.insertBefore(root, h.nextSibling); else D.body.appendChild(root); }
  return root;
}

/* ocultar el contenido nativo del home (el header y el carrito quedan) */
var HOME_HIDE = ["[data-store^='home-']", ".js-home-sections", ".js-home-main-slider", ".section-home", ".home-slider", "#main-slider",
  "footer.js-footer", "footer[data-store='footer']", ".js-footer", ".breadcrumbs"];
function tidy() { HOME_HIDE.forEach(function (s) { all(s).forEach(function (el) { if (!el.closest("#pn")) el.classList.add("pn-off"); }); }); }

function wire(root) {
  /* galería */
  var sl = one(".slides", root), dots = all(".dots button", root);
  if (sl && dots.length) {
    dots.forEach(function (d, n) { d.addEventListener("click", function () { sl.scrollTo({ left: sl.clientWidth * n, behavior: "smooth" }); }); });
    sl.addEventListener("scroll", function () { var n = Math.round(sl.scrollLeft / sl.clientWidth); dots.forEach(function (d, k) { d.classList.toggle("on", k === n); }); }, { passive: true });
    setInterval(function () { if (D.hidden) return; var n = (Math.round(sl.scrollLeft / sl.clientWidth) + 1) % dots.length; sl.scrollTo({ left: sl.clientWidth * n, behavior: "smooth" }); }, 4500);
  }

  /* video + sonido */
  var vd = one(".media.vid video", root), sb = one(".media.vid .snd", root);
  if (vd && sb) {
    vd.muted = true; var pp = vd.play(); if (pp && pp.catch) pp.catch(function () {});
    sb.addEventListener("click", function () {
      vd.muted = !vd.muted; if (!vd.muted) { vd.volume = 1; var q = vd.play(); if (q && q.catch) q.catch(function () {}); }
      sb.classList.toggle("on", !vd.muted);
      sb.innerHTML = vd.muted ? SND.off + "<span>Activar sonido</span>" : SND.on;
      sb.setAttribute("aria-label", vd.muted ? "Activar sonido" : "Silenciar");
    });
  }

  /* precios */
  function paint() {
    all(".kit", root).forEach(function (k) {
      var p = PANAL.packs[+k.getAttribute("data-kit")], pr = livePrice(p);
      one("[data-now]", k).textContent = pr.now ? pesos(pr.now) : p.precio;
      one("[data-before]", k).textContent = pr.before ? pesos(pr.before) : "";
    });
    var b = one("#pn-sticky b"); if (b) { var p0 = PANAL.packs.filter(function (p) { return p.elegido; })[0] || PANAL.packs[0], r0 = livePrice(p0); b.textContent = "Almohadón PANAL · " + (r0.now ? pesos(r0.now) : p0.precio); }
  }

  /* cuenta regresiva */
  function two(n) { return (n < 10 ? "0" : "") + n; }
  var end = PANAL.finOferta ? new Date(PANAL.finOferta) : null;
  function tick() {
    var now = new Date(), e = end && end > now ? end : new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var s = Math.max(0, Math.floor((e - now) / 1000)), d = Math.floor(s / 86400);
    var t = (d ? d + "d " : "") + two(Math.floor(s % 86400 / 3600)) + ":" + two(Math.floor(s % 3600 / 60)) + ":" + two(s % 60);
    all("[data-cd]", root).forEach(function (x) { x.textContent = t; });
  }
  tick(); setInterval(tick, 1000);

  /* aparición al hacer scroll */
  var items = all(".rv", root);
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12, rootMargin: "0px 0px -30px 0px" });
    items.forEach(function (x) { io.observe(x); });
  } else items.forEach(function (x) { x.classList.add("in"); });

  /* barra fija + WhatsApp */
  var bar = make("div", "pn-sticky", '<span class="th">' + img(PANAL.fotos.pack, "PANAL", "1/1") + '</span><div class="tx"><b></b><span>' + PANAL.cuotas + ' cuotas sin interés</span></div><button type="button" data-pn-go>Ver oferta</button>');
  D.body.appendChild(bar); bar.classList.add("show");
  if (PANAL.whatsapp) { var wa = make("a", "pn-wa", ICO.wa); wa.href = waLink(); wa.target = "_blank"; wa.rel = "noopener"; wa.setAttribute("aria-label", "Escribinos por WhatsApp"); D.body.appendChild(wa); wa.style.setProperty("--pn-sticky", bar.offsetHeight + "px"); }

  paint();
  loadLive(function () {
    paint();
    /* si la ficha tiene fotos en el carrusel, las usa en la galería del hero */
    if (LIVE.gallery && LIVE.gallery.length && sl) {
      sl.innerHTML = LIVE.gallery.map(function (u, n) { return '<div class="slide">' + img(u, "PANAL de Duna · foto " + (n + 1), "4/5", n === 0 ? "kb" : "") + "</div>"; }).join("");
      var dw = one(".dots", root);
      dw.innerHTML = LIVE.gallery.map(function (u, n) { return '<button type="button" class="' + (n ? "" : "on") + '" aria-label="Foto ' + (n + 1) + '"></button>'; }).join("");
      dots = all(".dots button", root);
      dots.forEach(function (d, n) { d.addEventListener("click", function () { sl.scrollTo({ left: sl.clientWidth * n, behavior: "smooth" }); }); });
    }
  });
}

/* botones "ir a la oferta": en el home llevan a la sección de kits */
D.addEventListener("click", function (e) {
  var t = e.target.closest && e.target.closest("[data-pn-go]");
  if (!t) return;
  e.preventDefault();
  var o = D.getElementById("pn-oferta");
  if (o) o.scrollIntoView({ behavior: "smooth", block: "start" }); else location.href = PRODUCT_URL;
});

/* carrito lateral: solo estilo (el upsell vive en la ficha) */
function cart() {
  var mc = one("#modal-cart"); if (!mc) return;
  var hdr = one(".modal-header .col", mc) || one(".modal-header", mc);
  if (hdr && !one("#pn-cart-title", mc)) { if (hdr.classList.contains("col")) hdr.innerHTML = ""; hdr.insertBefore(make("span", "pn-cart-title", "Tu carrito"), hdr.firstChild); }
  var go = one("input[name=go_to_checkout]", mc);
  if (go) { go.value = "Finalizar compra"; if (!one("#pn-cart-pay", mc)) go.insertAdjacentHTML("afterend", '<div id="pn-cart-pay"><span>' + ICO.lock + "Pago seguro</span><span>" + ICO.card + PANAL.cuotas + " cuotas sin interés</span><span>" + ICO.truck + "Envío gratis a sucursal</span></div>"); }
}

/* ─────────────────────────────────────────────────────────────────────
   ARRANQUE
   ───────────────────────────────────────────────────────────────────── */
function start() {
  if (window.__panalHome) return; window.__panalHome = true;
  var st = make("style", "pn-css"); st.textContent = CSS + HOME_CSS + HCSS; D.head.appendChild(st);
  var root = build(); tidy(); wire(root); header(); cart();
  var n = 0, t = setInterval(function () { tidy(); header(); cart(); if (++n > 20) clearInterval(t); }, 500);
  setInterval(function () { header(); cart(); }, 2000);
}
if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", start); else start();

})();
