(function () {
"use strict";
if (window.__NPADV__) return; window.__NPADV__ = true;

/* ════════════════ CONFIG · editá solo este bloque ════════════════ */
var CONFIG = {
  urlLanding: "https://dunasolutions.mitiendanube.com/productos/neuropath-6-en-1-gomitas-para-hormigueo-ardor-y-adormecimiento-de-pies-y-manos-y8nwe/",   /* link de la ficha/landing de NeuroPath */
  soloHome: true,                               /* true = se muestra solo en el home ("/") */
  medio: "Duna Solutions",
  autor: "Redacción Duna Solutions",
  logo: "",                                     /* URL del logo (si queda vacío usa el logo incrustado) */
  fecha: "",                                    /* vacío = fecha de hoy */
  garantiaDias: 60,
  img: {
    hero: "https://i.ibb.co/27tkzhyX/Man-rubbing-sore-foot-715fe4e4-1.jpg",
    nervio: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Guillain-barr%C3%A9_syndrome_-_Nerve_Damage.gif",
    ciencia: "https://i.ibb.co/XZKtrC6Y/Scientists-working-in-laboratory-1c0ab4ab-1.jpg",
    capsula: "https://i.ibb.co/B5xTZfNK/Floating-capsule-product-shot-0db51492-removebg-preview.png",
    producto: "https://i.ibb.co/JWN2064L/Man-holding-supplement-bottle-in-1c8b8e6e-1.jpg",
    caminar: "https://i.ibb.co/4g02qKdb/Women-walking-by-river-c4c8b196-1.jpg"
  },
  /* SOLO testimonios REALES. Mientras ejemplo:true se ve la etiqueta EJEMPLO. */
  testimonios: [
    { ejemplo: false, nombre: "Roberto, 68", texto: "Tomo omeprazol hace años y tenía hormigueo en pies y manos. Yo le echaba la culpa a la edad. Lo probé por la garantía y hoy el hormigueo es mucho menor." },
    { ejemplo: false, nombre: "Norma, 63", texto: "A la noche no soportaba ni la sábana en los pies. A las pocas semanas de empezar, las noches cambiaron y hoy duermo mucho mejor." }
  ]
};
/* ═════════════════════════════════════════════════════════════════ */

if (CONFIG.soloHome && location.pathname.replace(/\/+$/, "") !== "") return;

var LOGO = CONFIG.logo || "data:image/webp;base64,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";
var U = CONFIG.urlLanding, I = CONFIG.img;
var hoy = CONFIG.fecha || new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });

function img(src, alt, cap) {
  if (!src) return "";
  return '<figure class="npa-fig"><img src="' + src + '" alt="' + alt + '" data-npa-src="' + src.replace(/^https?:\/\//, "").slice(0, 48) + '">' +
    (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>';
}
function cta(txt, sub) {
  return '<div class="npa-cta"><a href="' + U + '">' + txt + ' &rarr;</a>' +
    (sub ? '<small>' + sub + '</small>' : '') + '</div>';
}
function tst() {
  return CONFIG.testimonios.map(function (t) {
    return '<blockquote class="npa-tst">' + (t.ejemplo ? '<span class="npa-ej">EJEMPLO</span>' : '') +
      '<p>“' + t.texto + '”</p><cite>— ' + t.nombre + '</cite></blockquote>';
  }).join("");
}

var css = '' +
'#npa{--t:#1b2433;--s:#405c80;--a:#134e7a;--b:#e3e8f0;--bg:#fff;max-width:720px;margin:0 auto;padding:18px 18px 40px;background:var(--bg);color:var(--t);font:18px/1.65 Georgia,"Times New Roman",serif;text-align:left}' +
'#npa *{box-sizing:border-box}' +
'html,body{background:#ffffff!important;background-color:#ffffff!important}' +
'.npa-wrap{background:#ffffff!important;width:100vw;position:relative;left:50%;margin-left:-50vw;padding:0;overflow:hidden}' +
'#npa,#npa .npa-tst,#npa .npa-box{background:#ffffff!important}' +
'#npa .npa-top{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #002655;padding-bottom:8px;margin-bottom:14px;font:700 13px/1 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}' +
'#npa .npa-logo{height:34px;width:auto;display:block}' +
'#npa .npa-top span{color:var(--s);font-weight:400;letter-spacing:0;text-transform:none}' +
'#npa .npa-kick{font:700 12px Arial,sans-serif;color:#e32402;letter-spacing:.1em;text-transform:uppercase;margin:0 0 8px}' +
'#npa h1{color:#002655;font:800 30px/1.18 Georgia,serif;margin:0 0 12px;letter-spacing:-.01em}' +
'#npa .npa-sub{font-size:19px;color:var(--s);margin:0 0 14px;font-style:italic}' +
'#npa .npa-by{font:13px Arial,sans-serif;color:var(--s);border-top:1px solid var(--b);border-bottom:1px solid var(--b);padding:9px 0;margin-bottom:18px}' +
'#npa h2{color:#002655;font:800 23px/1.25 Georgia,serif;margin:34px 0 10px}' +
'#npa p{margin:0 0 16px}' +
'#npa b{color:#000}' +
'#npa .npa-fig{margin:22px 0}#npa .npa-fig img{width:100%;height:auto;display:block;border-radius:6px}' +
'#npa .npa-ph{aspect-ratio:4/3;background:repeating-linear-gradient(45deg,#f6f8fb,#f6f8fb 12px,#eef3f9 12px,#eef3f9 24px);border:2px dashed #c6d0de;border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;font:15px Arial,sans-serif;color:#405c80;text-align:center;padding:12px}#npa .npa-ph b{font-size:12px;letter-spacing:.12em;color:#134e7a}#npa .npa-ph small{font-size:11px;color:#8a9bb3;word-break:break-all}' +
'#npa figcaption{font:13px/1.4 Arial,sans-serif;color:var(--s);margin-top:6px}' +
'#npa .npa-box{background:#fff;border:1px solid var(--b);border-left:4px solid var(--a);padding:16px 18px;margin:22px 0;border-radius:4px}' +
'#npa .npa-box p:last-child{margin:0}' +
'#npa ul.npa-l{padding-left:0;list-style:none;margin:0 0 18px}#npa ul.npa-l li{padding-left:28px;position:relative;margin-bottom:9px}' +
'#npa ul.npa-l li:before{content:"";position:absolute;left:4px;top:.55em;width:10px;height:10px;border-radius:50%;background:var(--a)}' +
'#npa ul.npa-x li:before{background:#e32402;border-radius:2px}' +
'#npa .npa-quote{font:italic 22px/1.4 Georgia,serif;border-top:2px solid #002655;border-bottom:2px solid #002655;color:#002655;padding:16px 4px;margin:26px 0;text-align:center}' +
'#npa .npa-tst{position:relative;background:#fff;border:1px solid var(--b);border-radius:8px;padding:16px 18px;margin:0 0 14px;font-size:17px}' +
'#npa .npa-tst p{margin:0 0 6px}#npa cite{font:700 14px Arial,sans-serif;font-style:normal;color:var(--s)}' +
'#npa .npa-ej{position:absolute;top:-9px;right:10px;background:#e32402;color:#fff;font:700 10px Arial,sans-serif;padding:3px 7px;border-radius:3px;letter-spacing:.08em}' +
'#npa .npa-cta{text-align:center;margin:26px 0}' +
'#npa .npa-cta a{display:block;background:var(--a);color:#fff!important;text-decoration:none;font:800 18px/1.2 Arial,sans-serif;padding:18px 16px;border-radius:8px;box-shadow:0 6px 18px rgba(19,78,122,.28);transition:transform .15s}' +
'#npa .npa-cta a:hover{transform:translateY(-2px);background:#002655}' +
'#npa .npa-cta small{display:block;font:13px Arial,sans-serif;color:var(--s);margin-top:8px}' +
'#npa .npa-ps{border-top:1px dashed var(--b);padding-top:16px;margin-top:30px;font-size:17px}' +
'#npa .npa-legal{font:12px/1.5 Arial,sans-serif;color:#8a9bb3;margin-top:26px}' +
'@media(min-width:760px){#npa{font-size:19px}#npa h1{color:#002655;font-size:40px}#npa h2{color:#002655;font-size:27px}}';

var html = '' +
'<div class="npa-top"><img class="npa-logo" src="' + LOGO + '" alt="' + CONFIG.medio + '"><span>Salud · Bienestar</span></div>' +
'<p class="npa-kick">Lo que casi nadie te cuenta</p>' +
'<h1>“Pensé que era la edad”: por qué miles de personas mayores de 50 sienten hormigueo y ardor en los pies, y qué tienen que ver los remedios de todos los días</h1>' +
'<p class="npa-sub">No es solo la edad. Hay una causa silenciosa que se puede estar acumulando hace años, y entenderla cambia la forma de buscar alivio.</p>' +
'<div class="npa-by">Por ' + CONFIG.autor + ' · ' + hoy + ' · 5 min de lectura</div>' +

img(I.hero, "Hombre mayor frotándose el pie en el sillón", "Muchas personas conviven años con estas molestias sin saber de dónde vienen.") +

'<p>Empieza de a poco. Un cosquilleo en la punta de los dedos del pie cuando te acostás. Una sensación rara, como si tuvieras una media puesta que no está.</p>' +
'<p>Después llega el ardor. Esos pinchazos que aparecen justo cuando querés dormir. Hay noches en que ni la sábana se puede apoyar en los pies.</p>' +
'<p>Y un día te das cuenta de que te cuesta abrocharte un botón, o que caminás mirando el piso porque no sentís bien dónde pisás.</p>' +
'<p>Si te pasa algo de esto, seguramente ya escuchaste la frase de siempre: <b>“Es la edad, hay que acostumbrarse”.</b></p>' +
'<p>Pero hay algo que muchas personas no saben. Y que tiene que ver con una cosa que hacen todos los días, sin pensarlo.</p>' +

'<h2>Lo que pasa cuando el nervio se queda sin “aislante”</h2>' +
'<p>Pensá en los nervios como en los cables de tu casa. Llevan señales desde los pies y las manos hasta el cerebro.</p>' +
'<p>Esos cables tienen una capa que los protege, como el plástico que recubre un cable eléctrico. Se llama <b>mielina</b>.</p>' +
'<p>Cuando esa capa se desgasta, la señal llega mal. A veces llega de más (ardor, pinchazos, calambres). A veces no llega (adormecimiento, pies “de algodón”).</p>' +
img(I.nervio, "Ilustración de un nervio", "Cuando la capa que protege al nervio se desgasta, la señal llega distorsionada.") +
'<p>Hay varias cosas que pueden desgastar esa capa: el azúcar alto sostenido en el tiempo, el paso de los años… y otra que casi nadie menciona.</p>' +

'<h2>El detalle que aparece en tu botiquín</h2>' +
'<p>Para mantener y reparar esa capa protectora, el cuerpo necesita <b>vitamina B12</b>. Sin suficiente B12, el nervio no tiene con qué arreglarse.</p>' +
'<p>Y acá viene lo que sorprende a muchos:</p>' +
'<div class="npa-box"><p>Dos de los remedios más usados en personas mayores, la <b>metformina</b> (para la glucosa) y el <b>omeprazol</b> (para el estómago), pueden disminuir la absorción de la B12 cuando se toman durante años. Por eso los médicos suelen recomendar controlarla en quienes los toman.</p></div>' +
'<p>No pasa de un día para el otro. Baja despacito, mes a mes, sin dar aviso. Y mientras tanto el nervio se va quedando sin uno de sus “materiales de reparación”.</p>' +
'<p>Por eso tanta gente siente que las molestias aparecieron “de la nada”. En realidad se venían gestando hace tiempo.</p>' +
'<p class="npa-quote">No es que hiciste algo mal.<br>Es que nadie te explicó que esto podía pasar.</p>' +

'<h2>Por qué lo que probaste no alcanzó</h2>' +
'<p>Si ya intentaste aliviarlo, probablemente pasaste por alguna de estas:</p>' +
'<ul class="npa-l npa-x">' +
'<li><b>Cremas y geles:</b> calman un rato la piel, pero no llegan a lo que le pasa al nervio por dentro.</li>' +
'<li><b>Pastillas para el dolor:</b> a muchas personas las dejan con sueño o mareadas, y el día se vuelve pesado.</li>' +
'<li><b>Ampollas o vitaminas sueltas:</b> a veces vienen en formas que el cuerpo aprovecha peor, o les falta el resto del equipo.</li>' +
'</ul>' +
'<p>El problema es que el nervio no necesita una sola cosa. Necesita tres al mismo tiempo: <b>protección</b>, <b>energía</b> y <b>materiales para repararse</b>.</p>' +

'<h2>Lo que la ciencia viene estudiando hace décadas</h2>' +
img(I.ciencia, "Científicos en un laboratorio de los años 50", "Los nutrientes que protegen al nervio se estudian desde hace décadas.") +
'<p>Hay un nutriente que en Alemania se usa desde hace años para acompañar las molestias de la neuropatía diabética: el <b>ácido alfa lipoico</b>.</p>' +
'<p>Es un antioxidante que ayuda a proteger al nervio del daño que deja el azúcar alto. En un estudio publicado en <i>Diabetes Care</i> (SYDNEY 2, 2006), las personas que lo tomaron notaron menos ardor, pinchazos y adormecimiento que las que tomaron placebo.</p>' +
'<p>A eso se suman otros dos aliados:</p>' +
'<ul class="npa-l">' +
'<li><b>Acetil-L-carnitina:</b> le da energía a la célula nerviosa, como cargarle la batería para que pueda recuperarse.</li>' +
'<li><b>Complejo B en formas activas</b> (B12 metilcobalamina, B1 benfotiamina, B6 y folato): son las versiones que el cuerpo usa directamente, sin tener que transformarlas.</li>' +
'</ul>' +
'<p>Por separado, cada uno hace su parte. Juntos, cubren las tres necesidades del nervio a la vez.</p>' +
'<p>El problema siempre fue práctico: comprarlos sueltos es caro, son muchas pastillas por día y es fácil equivocarse con las formas.</p>' +

'<h2>Las tres cosas, en una sola cápsula</h2>' +
img(I.capsula, "Cápsula NeuroPath", "") +
'<p>Esa es la idea detrás de <b>NeuroPath 6 en 1</b>: reunir el ácido alfa lipoico, la acetil-L-carnitina y el complejo B activo en <b>una cápsula por día</b>, con el desayuno.</p>' +
'<ul class="npa-l">' +
'<li>Puede ayudar a calmar el <b>ardor y los pinchazos</b> de la noche.</li>' +
'<li>Acompaña a recuperar la <b>sensibilidad</b> en pies y manos.</li>' +
'<li>Aporta la B12 que la metformina, el omeprazol y los años van quitando.</li>' +
'<li>Sin azúcar, en cápsula vegetal y fácil de tomar.</li>' +
'</ul>' +
cta("Conocé NeuroPath 6 en 1", "Ver cómo funciona y los packs disponibles") +

'<h2>Lo que cuentan quienes lo están tomando</h2>' +
tst() +
'<p>Un detalle importante: no es mágico ni instantáneo. El nervio se recupera despacio. Muchas personas empiezan a notar cambios entre la tercera semana y el segundo mes, por eso los packs más elegidos son los de tratamiento completo.</p>' +

'<h2>¿Y si lo tomo con mis remedios?</h2>' +
'<p>NeuroPath es un suplemento, no reemplaza tu medicación. Se toma junto a lo que ya usás.</p>' +
'<p>Si tomás medicación para la glucosa, avisale a tu médico: el ácido alfa lipoico puede bajarla un poco, y es bueno que lo sepa en tus controles.</p>' +
img(I.caminar, "Personas caminando al aire libre", "Volver a caminar sin pensar en los pies: lo que más valoran quienes lo prueban.") +

'<h2>Probarlo sin riesgo</h2>' +
'<p>Sabemos que si llegaste hasta acá, probablemente ya gastaste plata en cosas que no funcionaron. Por eso NeuroPath tiene <b>' + CONFIG.garantiaDias + ' días de garantía</b>: si no notás la diferencia, te devolvemos el dinero.</p>' +
'<p>Hoy hay packs con <b>envío gratis a sucursal, cuotas sin interés y guías de regalo</b> para aliviar el hormigueo en pies y manos. El stock de los packs con regalo es limitado.</p>' +
cta("Ver disponibilidad y packs", CONFIG.garantiaDias + " días de garantía · Envío gratis desde el pack de 3 meses") +

'<div class="npa-ps"><p><b>P.D.</b> Cada mes que el nervio pasa sin lo que necesita, la molestia se instala un poco más. No hace falta acostumbrarse. Una cápsula por día y ' + CONFIG.garantiaDias + ' días para comprobarlo.</p></div>' +
cta("Quiero probar NeuroPath", "");;

function mount() {
  if (document.getElementById("npa")) return;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var wrap = document.createElement("div"); wrap.className = "npa-wrap";
  var box = document.createElement("article"); box.id = "npa"; box.innerHTML = html; wrap.appendChild(box);
  var a = document.getElementById("np-adv-anchor");
  var hdr = document.querySelector("header, .js-head-main, .head-main");
  if (a) a.parentNode.insertBefore(wrap, a.nextSibling);
  else if (hdr && hdr.parentNode === document.body) document.body.insertBefore(wrap, hdr.nextSibling);
  else document.body.insertBefore(wrap, document.body.firstChild);
  wrap.style.cssText += ";display:block!important;visibility:visible!important;opacity:1!important;position:relative;z-index:5";
  try { console.log("[NeuroPath advertorial] cargado OK"); } catch (e) {}
  /* si una imagen no carga, muestra un recuadro con lo que va ahí */
  Array.prototype.forEach.call(box.querySelectorAll("img[data-npa-src]"), function (im) {
    function ph() { var d = document.createElement("div"); d.className = "npa-ph";
      d.innerHTML = "<b>IMAGEN</b><span>" + im.alt + "</span><small>" + im.getAttribute("data-npa-src") + "…</small>";
      im.parentNode.replaceChild(d, im); }
    im.addEventListener("error", ph);
    if (im.complete && !im.naturalWidth) ph();
    setTimeout(function () { if (im.parentNode && !im.naturalWidth) ph(); }, 4000);
  });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount); else mount();
})();
