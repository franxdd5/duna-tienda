/* ═══════════════════════════════════════════════════════════════════════
   URIX FORTE · CHECKOUT · DUNA SOLUTIONS · Tienda Nube
   Se carga desde Google Tag Manager (Etiqueta HTML personalizada) o
   desde GitHub (jsDelivr). Solo corre en /checkout.

   QUÉ HACE (según el análisis de Tachis)
   1. Solo envío a SUCURSAL ANDREANI: oculta domicilio y otros correos; si estaba
      elegido, selecciona la primera opción a sucursal.
   2. Oculta el cupón de descuento.
   3. Barra de urgencia arriba: "Tu precio Black Friday está reservado por 10:00".
   4. Nombre corto del producto: "URIX FORTE · Pack 4 meses + 1 regalo".
   5. Muestra los ebooks de regalo con el valor tachado en el resumen.
   6. Bloque de confianza abajo del total (garantía, pago seguro, envío, WhatsApp).
   7. Colores URIX y botón rojo grande.
   8. Destilda "quiero recibir ofertas".
   Todo se re-aplica solo cuando el checkout cambia de paso (es una app React).
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
"use strict";

var CFG = {
  minutosReserva: 10,
  textoReserva: "🔥 Tu precio Black Friday está reservado por",
  garantiaDias: 60,
  cuotas: 3,
  correo: "Andreani",
  whatsapp: "",                 /* ej. "5493511234567" · vacío = no se muestra */
  ocultarDomicilio: true,
  correosPermitidos: ["andreani"],   /* solo se muestran envíos de estos correos · [] = todos */
  ocultarCupon: true,
  /* SOLO SUCURSAL: oculta calle, número, depto y barrio de facturación.
     Calle se completa sola con este texto y se marca "Sin número". */
  soloSucursal: true,
  botonCP: "Ver sucursales cercanas →",
  /* PEDIR CP: si el carrito llega con un código postal ya cargado, lo borra una vez
     para que el cliente escriba el suyo y recién ahí vea sus sucursales */
  pedirCP: true,
  calleAuto: "Retira en sucursal Andreani",
  destildarOfertas: true,
  /* packs: texto de la variante → regalos y precio de lista (para mostrar el ahorro) */
  packs: [
    { match: "2 meses",  nombre: "Pack 2 meses",  regalos: [],         lista: 0 },
    { match: "4 meses",  nombre: "Pack 4 meses",  regalos: ["a"],      lista: 109800 },
    { match: "6 meses",  nombre: "Pack 6 meses",  regalos: ["a", "b"], lista: 164700 }
  ],
  ebooks: {
    a: { titulo: "Comer sin miedo", valor: "$14.990", n: 14990 },
    b: { titulo: "Plan 60 días",    valor: "$12.990", n: 12990 }
  },

  /* PERSUASIÓN (todo se puede apagar) */
  avisoAlSalir: true,      /* "¿Te vas? Tu precio y tus regalos se pierden" al intentar salir */
  ocultarSalidas: true,    /* oculta "Volver a la tienda", "Seguir comprando" y links del logo */
  ayudaPago: true,         /* si el pago es rechazado, ofrece alternativas y WhatsApp */
  /* Testimonio que se ve en el paso de pago. USÁ UNO REAL (con permiso del cliente):
     Meta y ANMAT sancionan testimonios inventados. Vacío = no se muestra. */
  testimonio: { texto: "", autor: "" },
  despacho: "",

  /* BOTONES · mismo tono que la landing (en vez de "Continuar" / "Finalizar compra") */
  botones: {
    datos:   "Quiero cortar con esto →",
    entrega: "Quiero cortar con esto →",
    pago:    "Quiero cortar con esto"
  },

  /* GANCHO · tarjeta corta justo arriba del primer campo (habla del problema) */
  gancho: {
    titulo: "Sabemos lo que es despertarte a las 3 a.m. con el pie que late.",
    texto:  "Son 3 datos y en menos de 1 minuto tu URIX FORTE queda en camino."
  },
  /* AYUDAS · debajo de cada campo: por qué pedimos el dato (baja la fricción) */
  ayudas: [
    { re: /mail/,                 txt: "📩 Acá te llega el seguimiento y tu ebook de regalo" },
    { re: /tel|phone|celular/,    txt: "📱 Solo para avisarte cuando llegue a tu sucursal" },
    { re: /dni|document|cuit/,    txt: "🪪 Andreani lo pide para entregarte el paquete" },
    { re: /shippingaddress\.zipcode/, txt: "📍 Poné tu código postal y te mostramos las sucursales Andreani más cercanas" },
    { re: /zip|postal|cp\b/,      txt: "🧾 Solo para tu factura" }
  ],

  /* DOLOR · mensajes por paso (arriba) */
  dolor: {
    datos:   "Cada crisis que esperás es otro día sin poder pisar. Completá tus datos.",
    entrega: "Ya casi. Elegí tu sucursal y tu URIX FORTE sale en camino.",
    pago:    "Último paso. Hoy cortás con las crisis de madrugada."
  }             /* ej. "Despachamos en 24 h hábiles" · vacío = no se muestra (poné solo lo que cumplís) */
};

if (!/\/checkout/.test(location.pathname) && !window.__uxCheckoutForce) return;
if (window.__uxCheckout) return;
window.__uxCheckout = true;

var D = document;
function all(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }
function one(s, c) { return (c || D).querySelector(s); }
function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim(); }
function mine(el) { return el.closest && el.closest("[data-uxc]"); }
function hide(el) { if (el && !mine(el)) el.setAttribute("data-uxc-off", ""); }

/* ── estilos ───────────────────────────────────────────────────────── */
var css = D.createElement("style");
css.id = "uxc-css";
css.textContent = [
":root{--uxc-red:#C8102E;--uxc-red2:#A50D26;--uxc-wine:#6D0F1F;--uxc-pink:#FBEAEC;--uxc-soft:#FDF6F7;--uxc-line:#EBDADD;--uxc-green:#1E8E3E}",
"[data-uxc-off]{display:none!important}",
"body{background:var(--uxc-soft)!important;font-family:'Inter',system-ui,sans-serif!important}",
"button[type=submit],input[type=submit],.btn-primary{background:var(--uxc-red)!important;color:#fff!important;border:0!important;border-radius:999px!important;min-height:56px!important;width:100%!important;font-family:'Archivo',sans-serif!important;font-size:17px!important;font-weight:900!important;letter-spacing:.04em!important;text-transform:uppercase!important;box-shadow:0 10px 24px rgba(200,16,46,.3)!important;cursor:pointer!important;text-decoration:none!important;align-items:center;justify-content:center}",
"button[type=submit]:hover,input[type=submit]:hover,.btn-primary:hover{background:var(--uxc-red2)!important}",
"input[type=radio],input[type=checkbox]{accent-color:var(--uxc-red)}",
"input:focus,select:focus{border-color:var(--uxc-red)!important;box-shadow:0 0 0 3px var(--uxc-pink)!important;outline:0!important}",
"#uxc-bar{position:sticky;top:0;z-index:9999;background:var(--uxc-wine);color:#fff;border-bottom:3px solid var(--uxc-red);text-align:center;padding:10px 12px;font:800 14px/1.3 'Archivo',sans-serif;letter-spacing:.02em}",
"#uxc-bar b{display:inline-block;background:#fff;color:var(--uxc-red);border-radius:6px;padding:2px 8px;margin-left:6px;font-variant-numeric:tabular-nums}",
".uxc-gifts{margin:10px 0 4px;display:grid;gap:6px}",
".uxc-gift{display:flex;align-items:center;gap:10px;background:var(--uxc-pink);border-radius:10px;padding:8px 10px;font-size:13px;color:var(--uxc-wine)}",
".ux-eb{width:28px;height:38px;flex:0 0 auto;filter:drop-shadow(0 2px 4px rgba(0,0,0,.2));transform:rotate(-4deg)}",
".uxc-gift b{display:block;font-weight:700}.uxc-gift small{display:block;color:var(--uxc-green);font-weight:700}.uxc-gift s{color:#9A8F91;font-weight:500;margin-right:4px}",
"#uxc-trust{margin:14px 0;border:1.5px dashed var(--uxc-red);border-radius:14px;padding:12px 14px;background:#fff;display:grid;gap:8px}",
"#uxc-trust div{display:flex;align-items:center;gap:10px;font-size:13.5px;color:#2B2B2B}#uxc-trust span.i{flex:0 0 22px;text-align:center}",
"#uxc-trust a{color:var(--uxc-green);font-weight:700;text-decoration:none}"
].join("");
D.head.appendChild(css);
(function(){var l=D.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Archivo:wght@800;900&family=Inter:wght@400;600;700&display=swap";D.head.appendChild(l);})();

/* ── 1 · solo envío a sucursal ────────────────────────────────────── */
var RE_HOME = /domicilio|a tu casa|en tu casa|entrega en direccion|envio a direccion/;
var RE_BRANCH = /sucursal|punto de retiro|retiro en|pick ?up|pickit|retira/;
function optionBox(radio) {
  /* sube desde el radio hasta el contenedor de esa opción, sin abarcar otra opción */
  var box = radio;
  while (box.parentElement && box.parentElement !== D.body && all("input[type=radio]", box.parentElement).length < 2) box = box.parentElement;
  return box;
}
function shipping() {
  if (!CFG.ocultarDomicilio) return;
  var branch = [], selectedHome = false, ok = CFG.correosPermitidos || [];
  var RE_CARRIER = /andreani|correo argentino|oca|e-?pick|pickit|urbano|via cargo|moova|uber|rapiboy|mercado envios|envio pack|cruz del sur|credifin|integral pack/;
  function allowed(t) { return !ok.length || ok.some(function (c) { return t.indexOf(norm(c)) > -1; }); }
  all("input[type=radio]").forEach(function (r) {
    var box = optionBox(r), t = norm(box.textContent);
    var home = RE_HOME.test(t) && !RE_BRANCH.test(t);
    var otherCarrier = RE_CARRIER.test(t) && !allowed(t);
    if (home || otherCarrier) { hide(box); if (r.checked) selectedHome = true; }
    else if (RE_BRANCH.test(t)) branch.push(r);
  });
  /* títulos de grupo tipo "Envío a domicilio" */
  all("h1,h2,h3,h4,h5,h6,legend,p,span,div").forEach(function (h) {
    if (mine(h) || h.children.length > 1 || h.querySelector("input")) return;
    var t = norm(h.textContent);
    if (t.length < 40 && RE_HOME.test(t) && !RE_BRANCH.test(t)) hide(h);
  });
  if (selectedHome && branch[0]) branch[0].click();
}

/* ── 1b · sin datos de domicilio (solo retiro en sucursal) ─────────── */
function setVal(i, v) {
  var d = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
  d.set.call(i, v);
  ["input", "change", "blur"].forEach(function (e) { i.dispatchEvent(new Event(e, { bubbles: true })); });
}
function address() {
  if (!CFG.soloSucursal) return;
  var calle = one('input[name="billingAddress.address"]');
  if (!calle) return;
  if (!calle.value) setVal(calle, CFG.calleAuto);
  var sn = one("#billing_numbercheckbox");
  if (sn && !sn.checked) sn.click();
  ["billingAddress.address", "billingAddress.number", "billingAddress.floor", "billingAddress.locality"].forEach(function (n) {
    var i = one('input[name="' + n + '"]'); if (!i) return;
    var g = i.closest(".form-group"); if (!g) return;
    hide(g);
    var r = g.parentElement; if (r && r.classList.contains("row") && !all(".form-group:not([data-uxc-off])", r).filter(function (x) { return !x.closest(".input-button"); }).length) hide(r);
  });
  var h = all("#address-form-section .panel-subheader")[0];
  if (h && h.textContent !== "Tus datos") h.textContent = "Tus datos";
}

/* ── 1b2 · el cliente siempre escribe su propio código postal ──────── */
function cartKey() { var m = location.pathname.match(/\/(\d{6,})\//); return "uxcCp_" + (m ? m[1] : "x"); }
function askCP() {
  if (!CFG.pedirCP || step() !== 1) return;
  var k = cartKey(), st; try { st = sessionStorage.getItem(k); } catch (e) {}
  if (st === "done") return;
  var zi = one('input[name="shippingAddress.zipcode"]');
  if (zi && zi.offsetParent) {
    if (st !== "cleared" && zi.value) setVal(zi, "");
    try { sessionStorage.setItem(k, "cleared"); } catch (e) {}
    if (!zi.hasAttribute("data-uxc-cpw")) {
      zi.setAttribute("data-uxc-cpw", "");
      zi.addEventListener("input", function () { try { sessionStorage.setItem(k, "done"); } catch (e) {} });
    }
    return;
  }
  if (st === "cleared") return;
  /* llegó con sucursales de un CP viejo: abre "Cambiar" para que lo escriba de nuevo */
  var b = all(".formless-address .btn-link, .change-button-area .btn-link").filter(function (x) { return /cambiar/i.test(x.textContent); })[0];
  if (b) { try { sessionStorage.setItem(k, "opening"); } catch (e) {} b.click(); }
}

/* ── 1c · aclara de qué CP salen las sucursales ───────────────────── */
function branchCP() {
  var sel = one("#shipping-suboption"); if (!sel) return;
  var cp = "", fl = one(".formless-address"), zi = one('input[name="shippingAddress.zipcode"]');
  if (fl) { var m = fl.textContent.match(/\b\d{4}\b/); if (m) cp = m[0]; }
  if (!cp && zi && /^\d{4}$/.test(zi.value)) cp = zi.value;
  if (!cp) { try { cp = window.nubeSDK.getState().customer.shipping_address.zipcode; } catch (e) {} }
  var old = one("#uxc-cp");
  if (old && old.getAttribute("data-cp") === cp && old.parentElement) return;
  if (old) old.remove();
  if (!cp) return;
  var d = D.createElement("div"); d.id = "uxc-cp"; d.setAttribute("data-uxc", ""); d.setAttribute("data-cp", cp);
  d.innerHTML = "📍 Sucursales Andreani cerca de tu código postal <b>" + safe(cp) + "</b>" +
     ' <a href="#" data-cpx>¿No es tu CP? Cambialo acá</a>';
  (sel.closest(".form-group") || sel).insertAdjacentElement("beforebegin", d);
  /* usa el botón "Cambiar" de Tienda Nube: al cambiar el CP, Andreani recalcula las sucursales */
  one("[data-cpx]", d).addEventListener("click", function (e) {
    e.preventDefault();
    var b = all(".formless-address .btn-link, .change-button-area .btn-link")[0];
    if (b) { b.click(); return; }
    var z = one('input[name="shippingAddress.zipcode"]');
    if (z && z.offsetParent) { setVal(z, ""); z.focus(); z.scrollIntoView({ block: "center" }); return; }
    /* en la pantalla de sucursales Tienda Nube no deja cambiar el CP: se cambia en el carrito */
    location.href = "https://" + location.host + "/comprar/";
  });
}

/* ── 2 · cupón ────────────────────────────────────────────────────── */
function coupon() {
  if (!CFG.ocultarCupon) return;
  all("a,button,label,span,p,div").forEach(function (el) {
    if (mine(el) || el.children.length > 3) return;
    var t = norm(el.textContent);
    if (t.length < 60 && /cupon|codigo de descuento/.test(t)) {
      var box = el;
      while (box.parentElement && box.parentElement !== D.body) {
        var pt = norm(box.parentElement.textContent);
        if (pt.length > 140 || /total/.test(pt)) break;
        box = box.parentElement;
      }
      hide(box);
    }
  });
}

/* ── 3 · barra de reserva ─────────────────────────────────────────── */
function bar() {
  if (one("#uxc-bar")) return;
  var b = D.createElement("div");
  b.id = "uxc-bar"; b.setAttribute("data-uxc", "");
  b.innerHTML = CFG.textoReserva + ' <b data-t>' + CFG.minutosReserva + ':00</b>';
  D.body.insertBefore(b, D.body.firstChild);
  var start;
  try { start = +sessionStorage.getItem("uxcStart"); if (!start) { start = Date.now(); sessionStorage.setItem("uxcStart", start); } } catch (e) { start = Date.now(); }
  (function tick() {
    var left = Math.max(0, CFG.minutosReserva * 60 - Math.floor((Date.now() - start) / 1000));
    if (left === 0) { b.innerHTML = "⏳ Tu reserva está por vencer · completá tu compra ahora"; return; }
    one("[data-t]", b).textContent = Math.floor(left / 60) + ":" + ("0" + left % 60).slice(-2);
    setTimeout(tick, 1000);
  })();
}

function safe(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function ebookCover(k) {
  var e = CFG.ebooks[k] || {}, dark = k === "b";
  return '<svg class="ux-eb" viewBox="0 0 60 80" aria-hidden="true"><rect width="60" height="80" rx="3" fill="' + (dark ? "#6D0F1F" : "#C8102E") + '"/><rect x="0" y="0" width="5" height="80" fill="' + (dark ? "#4E0A16" : "#A50D26") + '"/>' +
    '<text x="32" y="14" text-anchor="middle" font-family="Archivo,Arial" font-weight="800" font-size="4.2" fill="#F6DDE1" letter-spacing=".6">EBOOK URIX</text>' +
    '<text x="32" y="34" text-anchor="middle" font-family="Archivo,Arial" font-weight="900" font-size="8" fill="#fff">' + safe((e.titulo || "").split(" ").slice(0, 2).join(" ")) + '</text>' +
    '<text x="32" y="44" text-anchor="middle" font-family="Archivo,Arial" font-weight="900" font-size="8" fill="#fff">' + safe((e.titulo || "").split(" ").slice(2).join(" ")) + '</text>' +
    '<circle cx="32" cy="60" r="8" fill="none" stroke="#fff" stroke-width="1.6" opacity=".7"/><path d="M28 60l3 3 5-6" fill="none" stroke="#fff" stroke-width="1.8"/></svg>';
}
/* ── 4 y 5 · nombre corto + regalos ───────────────────────────────── */
function packOf(t) {
  t = norm(t); var best = null;
  CFG.packs.forEach(function (p) {
    if (new RegExp("(^|\\D)" + norm(p.match)).test(t) && (!best || p.match.length > best.match.length)) best = p;
  });
  return best;
}
function sdkPack() {
  try { var it = window.nubeSDK.getState().cart.items[0]; return packOf(it.variant_values + " " + it.name); } catch (e) { return null; }
}
var SUMS = "#secondary-column,.summary-details,.js-checkout-order-summary";
function summary() {
  if (!curPack) curPack = sdkPack();
  all(SUMS).forEach(function (col) { all("*", col).forEach(function (el) {
    if (mine(el) || el.hasAttribute("data-uxc-name") || el.children.length) return;
    var t = el.textContent;
    if (!/urix/i.test(t) || t.length < 20 || t.length > 260) return;
    var p = packOf(t) || curPack; if (!p) return;
    var n = p.regalos.length;
    el.setAttribute("data-uxc-name", p.match); curPack = p;
    el.textContent = "URIX FORTE · " + p.nombre + (n ? " + " + n + (n > 1 ? " regalos" : " regalo") : "");
    if (!n) return;
    var g = D.createElement("div");
    g.className = "uxc-gifts"; g.setAttribute("data-uxc", "");
    g.innerHTML = p.regalos.map(function (k) {
      var e = CFG.ebooks[k] || {};
      return '<div class="uxc-gift">' + ebookCover(k) + '<span><b>🎁 Ebook "' + e.titulo + '"</b><small><s>' + e.valor + "</s> GRATIS</small></span></div>";
    }).join("");
    /* debajo de toda la fila del producto (la que tiene el precio), no al lado del nombre */
    /* sube hasta la fila completa del producto (sin llegar a la que tiene el subtotal) */
    var row = el, k = 0;
    while (k++ < 8 && row.parentElement && row.parentElement !== col && !/total/i.test(row.parentElement.textContent)) row = row.parentElement;
    row.insertAdjacentElement("afterend", g);
  }); });
}

/* ── 6 · confianza abajo del total ────────────────────────────────── */
function trust() {
  if (one("#uxc-trust")) return;
  var col = one("#secondary-column"), anchor = null;
  var tot = col && all("*", col).filter(function (e) {
    return !mine(e) && e.children.length === 0 && /^total$/.test(norm(e.textContent));
  }).pop();
  if (tot) anchor = tot.closest(".table-subtotal") || tot.closest("table") || tot;
  var t = D.createElement("div");
  t.id = "uxc-trust"; t.setAttribute("data-uxc", "");
  t.innerHTML =
    '<div><span class="i">🛡️</span><span><b>Garantía de ' + CFG.garantiaDias + " días</b> · si no ves resultados, te devolvemos el dinero</span></div>" +
    '<div><span class="i">🔒</span><span>Pago 100% seguro · ' + CFG.cuotas + " cuotas sin interés</span></div>" +
    '<div><span class="i">🚚</span><span><b>Envío gratis a sucursal</b> ' + CFG.correo + "</span></div>" +
    (CFG.whatsapp ? '<div><span class="i">💬</span><span>¿Dudas? <a href="https://wa.me/' + CFG.whatsapp + '" target="_blank" rel="noopener">Escribinos por WhatsApp</a></span></div>' : "");
  if (anchor) { anchor.insertAdjacentElement("afterend", t); return; }
  var btn = one("button[type=submit],input[type=submit]");
  if (btn) btn.insertAdjacentElement("afterend", t);
}

/* ── 8 · destildar "recibir ofertas" (solo una vez) ───────────────── */
var unchecked = false;
function offers() {
  if (!CFG.destildarOfertas || unchecked) return;
  all("input[type=checkbox]").forEach(function (c) {
    var box = c.closest("label") || c.parentElement;
    if (c.checked && box && /oferta|novedad|promocion|newsletter/.test(norm(box.textContent))) { c.click(); unchecked = true; }
  });
}

/* ═══════════ PERSUASIÓN · para que termine la compra ═══════════ */
function pesos(n) { return "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
function num(t) { var m = String(t || "").replace(/\s/g, "").match(/\$?([\d.]+)(,\d{1,2})?/); return m ? +m[1].replace(/\./g, "") : 0; }
var curPack = null;
function totalValue() {
  var tot = all("span,p,div,dt,td,strong").filter(function (e) { return !mine(e) && e.children.length === 0 && norm(e.textContent) === "total"; })[0];
  if (!tot) return 0;
  var row = tot; while (row.parentElement && !/\$/.test(row.textContent)) row = row.parentElement;
  var prices = row.textContent.match(/\$\s?[\d.]+/g) || [];
  return prices.length ? num(prices[prices.length - 1]) : 0;
}
var _step = 0;
function step() { return _step || (_step = calcStep()); }
function calcStep() {
  var u = location.pathname;
  if (/\/(payment|pago)/.test(u)) return 3;
  if (/\/(start|shipping|datos)/.test(u)) return 1;
  var t = norm(D.body.innerText);   /* solo lo visible */
  if (/mercado ?pago|tarjeta de credito|transferencia|medio de pago|numero de tarjeta/.test(t) && one("input[type=radio],iframe")) return 3;
  if (/andreani|sucursal|codigo postal/.test(t)) return 2;
  return 1;
}

/* A · "Estás a X pasos": la sensación de que falta poco */
function progress() { return; }
function progressOld() {
  var s = step(), p = one("#uxc-prog");
  if (!p) {
    p = D.createElement("div"); p.id = "uxc-prog"; p.setAttribute("data-uxc", "");
    var b = one("#uxc-bar"); (b || D.body.firstChild).insertAdjacentElement(b ? "afterend" : "beforebegin", p);
  }
  if (p.getAttribute("data-s") === String(s)) return;
  p.setAttribute("data-s", s);
  var L = ["Tus datos", "Entrega", "Pago"];
  var msg = s === 3 ? CFG.dolor.pago : s === 2 ? CFG.dolor.entrega : CFG.dolor.datos;
  p.innerHTML = '<div class="st">' + L.map(function (l, k) { return '<span class="' + (k + 1 < s ? "ok" : k + 1 === s ? "on" : "") + '"><i>' + (k + 1 < s ? "✓" : k + 1) + "</i>" + l + "</span>"; }).join('<em></em>') + '</div><p>' + msg + "</p>";
}

/* B · el ahorro grande y claro, al lado del total */
function savings() {
  if (!curPack) return;
  var tot = totalValue(); if (!tot) return;
  var gifts = curPack.regalos.reduce(function (a, k) { return a + ((CFG.ebooks[k] || {}).n || 0); }, 0);
  var off = curPack.lista && curPack.lista > tot ? curPack.lista - tot : 0;
  var save = off + gifts, box = one("#uxc-save");
  var sig = tot + "-" + save;
  if (box && box.getAttribute("data-sig") === sig) return;
  var cuota = pesos(tot / CFG.cuotas);
  var html = (save ? '<div class="sv">🎉 Con este pack te ahorrás <b>' + pesos(save) + "</b>" + (gifts ? " <small>(incluye " + curPack.regalos.length + (curPack.regalos.length > 1 ? " ebooks" : " ebook") + " de regalo)</small>" : "") + "</div>" : "") +
    '<div class="cu">o <b>' + CFG.cuotas + " cuotas sin interés de " + cuota + "</b></div>";
  if (!box) {
    box = D.createElement("div"); box.id = "uxc-save"; box.setAttribute("data-uxc", "");
    var t = one("#uxc-trust"); if (!t) return;
    t.insertAdjacentElement("beforebegin", box);
  }
  box.setAttribute("data-sig", sig); box.innerHTML = html;
}

/* C · en el pago: garantía pegada al botón + testimonio real + despacho */
function payBoost() {
  if (step() !== 3) return;
  var btn = all("button[type=submit],input[type=submit],.btn-primary").filter(function (b) { return b.offsetParent; }).pop();
  if (!btn || one("#uxc-paynote")) return;
  var n = D.createElement("div"); n.id = "uxc-paynote"; n.setAttribute("data-uxc", "");
  var T = CFG.testimonio;
  n.innerHTML = '<p class="pn">La próxima crisis no avisa. <b>Cortala hoy.</b></p>' +
    '<p class="rr">🛡️ <b>Comprás sin riesgo:</b> si en ' + CFG.garantiaDias + " días no notás la diferencia, te devolvemos el dinero.</p>" +
    (CFG.despacho ? '<p class="ds">📦 ' + CFG.despacho + "</p>" : "") +
    (T && T.texto ? '<blockquote>⭐⭐⭐⭐⭐ “' + T.texto + '” <cite>— ' + T.autor + "</cite></blockquote>" : "");
  btn.insertAdjacentElement("afterend", n);
}

/* D · si el pago falla, no lo dejamos solo */
function payHelp() {
  if (!CFG.ayudaPago || one("#uxc-help")) return;
  var t = norm(D.body.innerText);
  if (!/rechaz|no pudimos procesar|no se pudo (procesar|completar)|pago no aprobado|fondos insuficientes|intenta(lo)? nuevamente|error en el pago/.test(t)) return;
  var h = D.createElement("div"); h.id = "uxc-help"; h.setAttribute("data-uxc", "");
  h.innerHTML = "<b>No te preocupes, tu pedido sigue reservado.</b><p>Pasa seguido con tarjetas que tienen límite para compras online. Probá:</p><ul><li>Otra tarjeta o tu saldo de <b>Mercado Pago</b></li><li>Pagar por <b>transferencia</b></li><li>Pagar en " + CFG.cuotas + " cuotas en vez de 1 pago</li></ul>" +
    (CFG.whatsapp ? '<a href="https://wa.me/' + CFG.whatsapp + "?text=" + encodeURIComponent("Hola, tuve un problema al pagar URIX FORTE") + '" target="_blank" rel="noopener">💬 Te ayudamos por WhatsApp a terminar tu compra</a>' : "");
  var bar = one("#uxc-prog") || one("#uxc-bar");
  bar.insertAdjacentElement("afterend", h);
  h.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* G · el antes y el después, arriba del ahorro */
function painCard() {
  if (one("#uxc-pain")) return;
  var btn = all("button[type=submit],input[type=submit]").filter(function (b) { return !mine(b) && b.offsetParent; }).pop();
  if (!btn) return;
  var c = D.createElement("div"); c.id = "uxc-pain"; c.setAttribute("data-uxc", "");
  c.innerHTML = '<div class="no"><b>Hoy</b><span>😣 Te despierta el dolor a las 3 a.m.</span><span>👞 El zapato no entra</span><span>🛏️ Perdés días de laburo</span></div>' +
    '<div class="si"><b>Lo que vas a tener</b><span>😴 Dormir de corrido</span><span>🚶 Pisar firme</span><span>🔥 Volver al asado tranquilo</span></div>';
  btn.insertAdjacentElement("afterend", c);
}

/* I · gancho de dolor pegado al primer campo: lo primero que lee al llegar */
function hook() {
  if (step() !== 1 || one("#uxc-hook")) return;
  var f = all("input[type=email],input[type=text],input[type=tel]").filter(function (i) { return !mine(i) && i.offsetParent; })[0];
  if (!f) return;
  var box = f.closest("fieldset,form") || f.parentElement;
  var h = D.createElement("div"); h.id = "uxc-hook"; h.setAttribute("data-uxc", "");
  h.innerHTML = "<b>" + CFG.gancho.titulo + "</b><span>" + CFG.gancho.texto + "</span>";
  box.insertBefore(h, box.firstChild);
}

/* J · una línea debajo de cada campo explicando para qué es */
function hints() {
  all("input:not([type=hidden]):not([type=radio]):not([type=checkbox]):not([type=submit])").forEach(function (i) {
    if (mine(i) || i.hasAttribute("data-uxc-hint") || !i.offsetParent) return;
    var lab = i.id && one('label[for="' + i.id + '"]');
    var k = norm([i.type, i.name, i.id, i.placeholder, i.autocomplete, lab && lab.textContent].join(" "));
    var a = CFG.ayudas.filter(function (x) { return x.re.test(k); })[0];
    i.setAttribute("data-uxc-hint", "");
    if (!a) return;
    var s = D.createElement("small"); s.className = "uxc-hint"; s.setAttribute("data-uxc", ""); s.textContent = a.txt;
    (i.closest(".has-float-label") || i).insertAdjacentElement("afterend", s);
  });
}

/* H · botones con el tono de la landing (sin tocar el HTML de React: se pinta por CSS) */
function buttons() {
  var s = step(), label = s === 3 ? CFG.botones.pago : s === 2 ? CFG.botones.entrega : CFG.botones.datos;
  all("button[type=submit],input[type=submit],.btn-primary").forEach(function (b) {
    if (mine(b) || !b.offsetParent) return;
    if (b.matches('[data-testid="btnSubmitZipcode"]')) { if (b.getAttribute("data-uxc-label") !== CFG.botonCP) b.setAttribute("data-uxc-label", CFG.botonCP); return; }
    var t = norm(b.value || b.textContent || b.getAttribute("data-uxc-orig"));
    if (!/continuar|finalizar|pagar|confirmar|comprar|siguiente|ir a pagar|realizar pedido/.test(t) && !b.hasAttribute("data-uxc-label")) return;
    if (!b.hasAttribute("data-uxc-orig")) b.setAttribute("data-uxc-orig", t);
    if (b.tagName === "INPUT") { if (b.value !== label) b.value = label; }
    else if (b.getAttribute("data-uxc-label") !== label) b.setAttribute("data-uxc-label", label);
  });
}

/* E · menos salidas: que no se distraiga */
function exits() {
  if (!CFG.ocultarSalidas) return;
  all("a").forEach(function (a) {
    if (mine(a)) return;
    var t = norm(a.textContent);
    if (/volver a la tienda|seguir comprando|ir a la tienda|volver al carrito|modificar carrito|editar carrito/.test(t)) hide(a);
    else if (a.querySelector("img") && /^https?:\/\/[^/]+\/?$/.test(a.href)) a.removeAttribute("href");
  });
}

/* F · aviso al intentar salir (una sola vez por visita) */
var exitShown = false;
function exitModal() {
  if (exitShown || one("#uxc-exit")) return;
  exitShown = true;
  try { if (sessionStorage.getItem("uxcExit")) return; sessionStorage.setItem("uxcExit", "1"); } catch (e) {}
  var gifts = curPack && curPack.regalos.length ? (curPack.regalos.length > 1 ? " y tus " + curPack.regalos.length + " ebooks de regalo" : " y tu ebook de regalo") : "";
  var m = D.createElement("div"); m.id = "uxc-exit"; m.setAttribute("data-uxc", "");
  m.innerHTML = '<div class="bx" role="dialog" aria-modal="true"><b class="h">¿Vas a esperar la próxima crisis?</b>' +
    "<p>Esa que te despierta a las 3 de la mañana y no te deja ni apoyar el pie. <b>Estás a un paso de cortarla.</b></p>" +
    "<p>Si salís ahora, tu precio Black Friday" + gifts + " ya no quedan reservados.</p>" +
    '<p class="g">🛡️ Y tenés ' + CFG.garantiaDias + " días de garantía: si no te sirve, te devolvemos el dinero.</p>" +
    '<button type="button" data-k>Quiero cortar con esto</button><button type="button" class="no" data-x>Prefiero seguir con el dolor</button></div>';
  D.body.appendChild(m);
  function close() { m.remove(); }
  one("[data-k]", m).addEventListener("click", function () {
    close();
    var b = all("button[type=submit],input[type=submit],input:not([type=hidden]):not([type=radio]):not([type=checkbox])").filter(function (x) { return x.offsetParent; })[0];
    if (b) { b.scrollIntoView({ behavior: "smooth", block: "center" }); if (b.tagName === "INPUT" && b.type !== "submit") b.focus(); }
  });
  one("[data-x]", m).addEventListener("click", function () { close(); if (leaving) history.back(); });
}
var leaving = false;
function exitIntent() {
  if (!CFG.avisoAlSalir) return;
  /* computadora: el mouse se va hacia la barra de pestañas */
  D.addEventListener("mouseout", function (e) { if (!e.relatedTarget && e.clientY <= 0) exitModal(); });
  /* celular: botón "atrás" */
  try {
    history.pushState({ uxc: 1 }, "");
    window.addEventListener("popstate", function () {
      if (exitShown) return;
      leaving = true; history.pushState({ uxc: 1 }, ""); exitModal();
    });
  } catch (e) {}
}

css.textContent += [
"#uxc-prog{background:#fff;border-bottom:1px solid var(--uxc-line);padding:10px 12px 8px;text-align:center;font-family:'Inter',sans-serif}",
"#uxc-prog .st{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12.5px;font-weight:600;color:#9A8F91}",
"#uxc-prog .st span{display:inline-flex;align-items:center;gap:5px}#uxc-prog .st i{width:20px;height:20px;border-radius:50%;background:#EEE;color:#9A8F91;font-style:normal;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center}",
"#uxc-prog .st .on{color:var(--uxc-wine)}#uxc-prog .st .on i{background:var(--uxc-red);color:#fff}#uxc-prog .st .ok{color:var(--uxc-green)}#uxc-prog .st .ok i{background:var(--uxc-green);color:#fff}",
"#uxc-prog .st em{width:22px;height:2px;background:var(--uxc-line)}#uxc-prog p{margin:6px 0 0;font-size:13px;font-weight:700;color:var(--uxc-wine)}",
"#uxc-save{margin:12px 0 0;text-align:center}#uxc-save .sv{background:#E9F6EC;color:#14692D;border-radius:10px;padding:9px 10px;font-size:14px}#uxc-save .sv b{font-size:16px}#uxc-save .sv small{display:block;font-size:11.5px}",
"#uxc-save .cu{font-size:13px;color:#5F5A5B;margin-top:6px}#uxc-save .cu b{color:var(--uxc-wine)}",
"#uxc-paynote{margin:10px 0 0;font-size:13px;color:#2B2B2B}#uxc-paynote p{margin:6px 0;text-align:center}#uxc-paynote .rr b{color:var(--uxc-wine)}",
"#uxc-paynote blockquote{margin:10px 0 0;background:#fff;border-left:3px solid var(--uxc-red);border-radius:8px;padding:10px 12px;font-size:13px;font-style:italic}#uxc-paynote cite{display:block;font-style:normal;font-weight:700;color:var(--uxc-wine);margin-top:4px}",
"#uxc-help{margin:12px auto;max-width:560px;background:#FFF7E6;border:1.5px solid #F5B301;border-radius:14px;padding:14px 16px;font-size:14px;color:#2B2B2B}#uxc-help p{margin:4px 0}#uxc-help ul{margin:6px 0;padding-left:18px}",
"#uxc-help a{display:block;margin-top:8px;background:#25D366;color:#fff;text-align:center;border-radius:999px;padding:11px;font-weight:800;text-decoration:none}",
"button[data-uxc-label]{font-size:0!important;line-height:1.2!important;padding:14px 18px!important}button[data-uxc-label]>*{display:none!important}button[data-uxc-label]::after{content:attr(data-uxc-label);font-size:16px;font-family:'Archivo',sans-serif;font-weight:900;letter-spacing:.03em;text-transform:uppercase}",
"input[type=submit]{white-space:normal!important;line-height:1.2!important;padding:14px 18px!important;font-size:16px!important}",
"#uxc-paynote .pn{font-family:'Archivo',sans-serif;font-size:15px;color:var(--uxc-red);margin-top:10px}",
"#uxc-hook{display:flex;flex-direction:column;gap:3px;background:var(--uxc-pink);border-left:4px solid var(--uxc-red);border-radius:10px;padding:10px 12px;margin:0 0 14px;color:var(--uxc-wine);font-size:13px;line-height:1.35}#uxc-hook b{font-family:'Archivo',sans-serif;font-size:14.5px}",
".uxc-hint{display:block;margin:5px 2px 0;font-size:12px;line-height:1.35;color:#7A6F71}",
".btn-submit-step,form button[type=submit]{float:none!important;display:flex!important;margin:16px 0 0!important}",
"#uxc-trust,#uxc-pain,#uxc-paynote,#uxc-hook,.uxc-gifts{clear:both;box-sizing:border-box;width:100%}",
"#secondary-column #uxc-trust{margin:14px 0 0}#secondary-column .uxc-gifts{margin:8px 0}",
"@media(max-width:768px){#uxc-bar{position:relative}#uxc-pain{gap:6px}#uxc-pain div{padding:9px 8px;font-size:12px}}",
"@media(max-width:768px){#uxc-prog p{display:none}#uxc-bar{padding:7px 10px;font-size:12.5px}}",
"#uxc-pain{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 0}#uxc-pain div{border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:4px;font-size:12.5px;line-height:1.3}",
"#uxc-pain b{font-family:'Archivo',sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:.05em}#uxc-pain .no{background:#F2EEEF;color:#6E6466}#uxc-pain .no b{color:#6E6466}#uxc-pain .si{background:var(--uxc-pink);color:var(--uxc-wine)}#uxc-pain .si b{color:var(--uxc-red)}",
"#uxc-exit{position:fixed;inset:0;z-index:100000;background:rgba(43,10,18,.6);display:flex;align-items:center;justify-content:center;padding:18px;animation:uxcf .25s}@keyframes uxcf{from{opacity:0}}",
"#uxc-exit .bx{background:#fff;border-radius:20px;max-width:380px;width:100%;padding:24px 20px 18px;text-align:center;border-top:6px solid var(--uxc-red)}",
"#uxc-exit .h{display:block;font-family:'Archivo',sans-serif;font-size:22px;font-weight:900;color:var(--uxc-wine);margin-bottom:8px}#uxc-exit p{font-size:14.5px;margin:6px 0;color:#2B2B2B}#uxc-exit .g{background:var(--uxc-pink);border-radius:10px;padding:8px;font-size:13.5px}",
"#uxc-exit button{width:100%;margin-top:12px;background:var(--uxc-red);color:#fff;border:0;border-radius:999px;padding:15px;font-family:'Archivo',sans-serif;font-size:16px;font-weight:900;text-transform:uppercase;cursor:pointer}",
"#uxc-exit button.no{background:none;color:#9A8F91;font:500 13px 'Inter',sans-serif;text-transform:none;text-decoration:underline;margin-top:6px;padding:6px}"
].join("");


/* ── PIEL: el checkout de Tienda Nube con el look de la landing ───── */
css.textContent += [
"body{color:#2B2B2B!important;-webkit-font-smoothing:antialiased}",
"body *{font-family:'Inter',system-ui,sans-serif}",
"h3,h4,.panel-header,.panel-subheader{font-family:'Archivo',system-ui,sans-serif!important;color:var(--uxc-wine)!important;letter-spacing:-.01em}",
".headbar{background:#fff!important;border-bottom:1px solid var(--uxc-line)!important;padding:10px 0!important}.headbar-logo-img{max-height:40px!important;width:auto}",
".container,.main-container{max-width:1100px!important;margin:0 auto!important;padding:0 14px!important;box-sizing:border-box}",
"#main-row{display:grid!important;grid-template-columns:minmax(0,1fr);gap:18px;margin:14px 0 30px!important}",
"#main-row>[class*=col]{width:auto!important;max-width:none!important;flex:none!important;padding:0!important}",
"@media(min-width:768px){#main-row{grid-template-columns:minmax(0,1fr) 370px;gap:26px;align-items:start}#secondary-column{position:sticky;top:16px}.d-md-none{display:none!important}}",
"@media(max-width:767px){.d-none{display:none!important}}",
".panel{background:#fff!important;border:1px solid var(--uxc-line)!important;border-radius:16px!important;padding:16px!important;margin:0 0 14px!important;box-shadow:0 4px 18px rgba(109,15,31,.06)!important}",
".panel-header{font-size:17px!important;font-weight:900!important;margin:0 0 12px!important;padding:0!important;background:none!important;border:0!important;position:static!important;display:flex;align-items:center;justify-content:space-between}",
".panel-subheader{font-size:15px!important;font-weight:800!important;margin:14px 0 8px!important}",
".form-group{margin:0 0 12px!important;padding:0!important}",
".has-float-label{position:relative!important;display:block}",
".form-control{width:100%!important;box-sizing:border-box!important;min-height:52px!important;border:1.5px solid var(--uxc-line)!important;border-radius:12px!important;background:#fff!important;padding:20px 14px 6px!important;font-size:15px!important;color:#2B2B2B!important;appearance:none;-webkit-appearance:none}",
".has-float-label .input-label,.has-float-label .select-label{position:absolute!important;left:15px!important;top:16px!important;margin:0!important;font-size:14px!important;color:#8A7F81!important;pointer-events:none;transition:all .15s;background:none!important;padding:0!important}",
".has-float-label input:focus+.input-label,.has-float-label input:not(:placeholder-shown)+.input-label,.has-float-label .select-label{top:7px!important;font-size:11px!important;font-weight:600;color:var(--uxc-wine)!important}",
".select-icon{position:absolute!important;right:14px;top:50%;transform:translateY(-50%);color:var(--uxc-wine);pointer-events:none}.select-icon svg{width:12px;height:12px}",
".form-control-help{position:absolute;right:12px;top:17px;font-size:12px}.form-control-help a{color:var(--uxc-red)!important;font-weight:600}",
".form-checkbox{display:flex!important;align-items:center;gap:8px;cursor:pointer;font-size:13.5px;color:#5F5A5B;margin:0!important}",
".form-checkbox input{position:absolute;opacity:0;width:0;height:0}.form-options-content{display:flex;align-items:center;gap:8px}",
".form-group-icon{position:relative;width:18px;height:18px;flex:0 0 18px;display:inline-block}.form-group-icon svg{position:absolute;inset:0;width:18px;height:18px;fill:var(--uxc-line)}",
".form-group-icon .checked{opacity:0;fill:var(--uxc-red)}.form-checkbox input:checked+.form-options-content .checked{opacity:1}.form-checkbox input:checked+.form-options-content .unchecked{opacity:0}",
".breadcrumb{background:none!important;padding:0!important;margin:14px 0 0!important}.breadcrumb-timeline{display:flex!important;align-items:center;justify-content:center;gap:6px;list-style:none;margin:0;padding:0}",
".breadcrumb-timeline-item{display:flex!important;align-items:center;gap:6px;background:#fff!important;border:1.5px solid var(--uxc-line)!important;border-radius:999px!important;padding:6px 12px 6px 6px!important;color:#9A8F91!important;font-size:12.5px!important;font-weight:700;cursor:default;min-height:0!important;width:auto!important;box-shadow:none!important;text-transform:none!important;letter-spacing:0!important}",
".breadcrumb-timeline-item p{margin:0!important;font-family:'Inter',sans-serif!important}.breadcrumb-timeline-item-icon{width:22px;height:22px;border-radius:50%;background:var(--uxc-pink);display:flex;align-items:center;justify-content:center;color:var(--uxc-red)}",
".breadcrumb-timeline-item.current{border-color:var(--uxc-red)!important;color:var(--uxc-wine)!important}.breadcrumb-timeline-item.current .breadcrumb-timeline-item-icon{background:var(--uxc-red);color:#fff}",
".breadcrumb-timeline-line{width:18px;height:2px;background:var(--uxc-line)}",
".shipping-option{display:block;border:2px solid var(--uxc-red)!important;border-radius:14px!important;background:var(--uxc-soft)!important;padding:12px!important}.shipping-option .label{display:flex;gap:10px;cursor:pointer;margin:0}",
".shipping-option input[type=radio]{width:18px;height:18px;margin:2px 0 0;flex:0 0 18px}.shipping-method-item{flex:1;min-width:0}.shipping-method-item>span{display:block}",
".shipping-method-item-price{font-size:16px!important;color:var(--uxc-green)!important;margin:0 0 4px!important}.price-striked{text-decoration:line-through;color:#9A8F91;font-size:13px;font-weight:500;margin-left:6px}",
".shipping-method-item-name{font-weight:700;color:var(--uxc-wine)}.available-hours{list-style:none;padding:0;margin:6px 0 0;font-size:12px;color:#5F5A5B}",
".panel-header-tooltip,.tooltip-icon{display:none!important}",
".summary.d-md-none{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--uxc-line)}.summary-container .container{display:flex;justify-content:space-between;align-items:center;padding:12px 14px!important;font-size:14px;color:var(--uxc-wine);font-weight:600}.summary-total{font-family:'Archivo';font-weight:900;color:var(--uxc-red)}.summary-title{display:flex;align-items:center;gap:6px}",
"#secondary-column{background:#fff;border:1px solid var(--uxc-line);border-radius:16px;padding:16px;box-shadow:0 4px 18px rgba(109,15,31,.06);box-sizing:border-box}",
"#uxc-cp{font-size:12.5px;color:var(--uxc-wine);margin:8px 0 6px}#uxc-cp a{color:var(--uxc-red);font-weight:700;margin-left:4px;white-space:nowrap}",
"form button.hide.btn-submit-step,form .btn-submit-step.hide,.hide{display:none!important}",
"[data-uxc-label]{font-size:0!important}[data-uxc-label]>*{display:none!important}[data-uxc-label]::after{content:attr(data-uxc-label);font-size:16px;font-family:'Archivo',sans-serif;font-weight:900;letter-spacing:.03em;text-transform:uppercase;color:#fff}",
"div.btn-primary[role=button]{display:flex!important;align-items:center;justify-content:center;float:none!important;width:100%!important;min-height:54px;margin:6px 0 0!important;box-sizing:border-box}",
".shipping-option .selector{display:none!important}.shipping-option input[type=radio]{position:static!important;opacity:1!important;appearance:auto!important;-webkit-appearance:radio!important;accent-color:var(--uxc-red)}",
".shipping-option .label{display:flex!important;align-items:flex-start;gap:10px;width:100%}.shipping-method-item,.shipping-method-item>span{width:100%;display:block}",
".shipping-method-item-price{float:right;margin:0 0 0 8px!important}#pickup-address,#pickup-address .form-group,.select-container{display:block!important;width:100%!important;max-width:none!important}",
"#shipping-suboption{width:100%!important;max-width:none!important;padding:14px 36px 14px 12px!important;font-size:14px!important;white-space:normal;text-overflow:ellipsis}",
"#uxc-cp{clear:both}",
"#secondary-column table{width:100%!important;border-collapse:collapse;table-layout:auto}#secondary-column td{padding:6px 4px;vertical-align:middle;border:0}",
".summary-img-thumb{width:56px;height:56px;overflow:hidden;border-radius:10px;background:var(--uxc-pink)}@media(max-width:767px){#secondary-column{border:0!important;box-shadow:none!important;padding:0!important;background:none!important}}",
".summary-img-thumb img{width:56px;height:56px;object-fit:cover;border-radius:10px}.summary-img-wrap{width:64px}",
"#secondary-column .table-price{width:auto!important;white-space:nowrap;text-align:right}.table-product-name{min-width:110px;font-weight:700;color:var(--uxc-wine);font-size:13.5px;line-height:1.3}",
".table-price-discount-tag{background:var(--uxc-red);color:#fff;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:800}.table-price-compare{font-size:12px}.table-price-compare span:last-child{text-decoration:line-through;color:#9A8F91}",
".table-footer td{font-family:'Archivo',sans-serif;font-weight:900!important;font-size:18px!important;color:var(--uxc-wine)!important;padding-top:10px!important;border-top:1px solid var(--uxc-line)!important}",
".visually-hidden{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}",
"#secondary-column #uxc-trust,#secondary-column #uxc-save{width:100%!important;display:grid}#secondary-column #uxc-save{display:block}",
".summary-details:empty{display:none!important}",
"#secondary-column>.panel{border:0!important;box-shadow:none!important;padding:0!important;margin:0!important}",
"@media(max-width:767px){.panel{padding:14px!important;border-radius:14px!important}.breadcrumb-timeline-item{padding:4px 9px 4px 4px!important;font-size:11.5px!important}}"
].join("");

/* ── arranque + re-aplicar en cada cambio de paso ─────────────────── */
var busy = false;
function run() {
  if (busy) return; busy = true;
  _step = 0;
  try { askCP(); address(); branchCP(); hook(); hints(); bar(); progress(); shipping(); coupon(); summary(); trust(); savings(); painCard(); buttons(); payBoost(); payHelp(); exits(); offers(); }
  catch (e) { if (window.console) console.warn("[URIX checkout]", e); }
  busy = false;
}
function start() {
  run(); exitIntent();
  var t;
  new MutationObserver(function (ms) {
    if (ms.every(function (m) { return mine(m.target) || [].every.call(m.addedNodes, function (n) { return n.nodeType !== 1 || mine(n); }); })) return;
    clearTimeout(t); t = setTimeout(run, 120);
  })
    .observe(D.body, { childList: true, subtree: true });
  setInterval(run, 4000);   /* por si el paso cambia sin agregar elementos */
}
if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", start); else start();
})();
