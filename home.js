/* ==========================================================================
   DUNA BODYCARE · HOME (página de inicio) · v2
   ARCHIVO ÚNICO .js: dibuja el home completo sobre el tema Lima de Tiendanube

   Mercado .......... Argentina (precios en ARS, texto en voseo)
   Voz .............. PRIMERA PERSONA: la creadora de Duna, igual que la landing
   Enfoque .......... INFORMATIVO: el dolor, por qué pasa y qué hace el
                      producto. La venta fuerte queda para la landing.
   Paleta ........... Salvia y lino: #3F4A3C · #B7C4AA · #F4F0E8 · miel #C9965F
   Tipografía ....... Marcellus (títulos) + Nunito Sans (texto)

   ── DÓNDE SE PEGA ─────────────────────────────────────────────────────
   Administrador → Configuración → Códigos de tracking → "Para la Tienda",
   DEBAJO del bloque de la landing, envuelto así:
       <script>
       ...todo este archivo...
       </script>
   Corre SOLO en la página de inicio ("/"). En el resto de la tienda no hace
   nada, así que no choca con la landing.

   ── QUÉ CUENTA EL HOME (en este orden) ────────────────────────────────
     Cinta de arriba ...... envío gratis · regalos desde el pack de 2 ·
                            garantía · cuotas
     01 Portada ........... "Volvé a ponerte la malla sin taparte" + el kit
     02 Reseñas ........... cintas infinitas: una con fotos y dos de texto
                            (una corre a la derecha y la otra a la izquierda)
     03 De dónde salen .... cómo se forman los granitos, en 5 pasos
                            (roce, sudor, bacterias, granito y el jabón de siempre)
     04 Mapa del roce ..... cola, espalda y muslos: por qué ahí y qué hacer
     05 Mitos ............. lo que nadie te dice
     06 Más fuerte no es mejor  ingredientes agresivos vs. activos naturales
     07 Ingredientes ...... qué hace cada aceite
     08 Rutina ............ jabón (paso 1) y crema (paso 2): por qué juntos
     09 La guía de regalo . qué trae el ebook (regalo desde el pack de 2)
     10 Packs ............. "Comenzá tu tratamiento": los packs de 2 y 3 en
                            grande, el de 1 en una fila chica. Cada uno lleva
                            a la landing con ESE pack ya elegido (?pack=2)
     11 Garantía y preguntas · 12 Cierre · Pie de página propio
     Barra fija de compra en el celular

   ── ANTES DE PUBLICAR · 6 cosas ───────────────────────────────────────
   1. productoURL: la dirección de la ficha de Chau Granitos.
   2. PRECIOS: se leen EN VIVO de la ficha. Los del panel son de respaldo.
   3. FOTOS: el pote, el jabón y el logo vienen dentro de este archivo.
      Para que la tienda cargue más rápido, subilas a Cloudinary y pegá
      los links en imgCrema, imgJabon e imgLogo.
   4. RESEÑAS: son las mismas de la landing (EJEMPLOS, con sus fotos de
      Cloudinary). Con "ejemplos: false" se apagan. Antes de pautar,
      reemplazalas por reales: la Ley de Defensa del Consumidor sanciona
      la publicidad engañosa.
   5. PIE DE PÁGINA: el propio copia del pie del tema los links legales
      (Botón de arrepentimiento, Defensa del Consumidor, Data Fiscal) y
      recién ahí esconde el del tema. Si no los encuentra, deja los dos.
   6. "antibacteriana" y "antimicótica": que las apruebe el director
      técnico (igual que en la landing).
   7. REGALOS: el jabón de 150 ml y el ebook van SOLO con los packs de 2 y
      de 3. Envío gratis, 3 cuotas sin interés y garantía, en los tres
      (igual que la landing). El "match" de cada pack tiene que ser el
      nombre EXACTO de la variante en Tiendanube.
   8. JABÓN: "muchos jabones de tocador, incluso de primeras marcas, tienen
      pH alto, perfume y desodorante" va sin nombrar marcas. Lo que se dice
      del jabón de Duna lo confirma el director técnico (como en la landing).
   9. NATURAL: la página dice "activos 100% naturales" (los 4 aceites). Si
      el laboratorio certifica que TODA la fórmula (lista INCI) es natural,
      podés cambiarlo a "100% natural". La comparación con "cremas comunes"
      habla de ingredientes, sin nombrar marcas: así lo permite la Ley de
      Lealtad Comercial. No nombres marcas ni digas que son "nocivas".
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- H01 · PANEL DE CONFIGURACIÓN · editá SOLO este bloque ---------- */
  var HC = {
    marca: "Duna",
    productoURL: "/productos/chau-granitos-crema-exfoliante-para-gluteos-con-tendencia-acneica-wakca/",
    ctaTexto: "Quiero mi Chau Granitos",
    garantiaDias: 30,
    ebookTitulo: "Piel lisa para la malla",

    /* Fotos: "" = usa las que vienen dentro del archivo */
    imgCrema: "",   /* el pote de la crema, PNG sin fondo */
    imgJabon: "",   /* el jabón de regalo, PNG sin fondo */
    imgLogo: "",    /* el logo (PNG sin fondo, verde) para el pie */

    /* true = se ven las reseñas y números de EJEMPLO · false = se apagan */
    ejemplos: true,

    /* EJEMPLO: reemplazalo por el real (el mismo que la landing) */
    rating: { puntuacion: 4.9, cantidadOpiniones: 1287 },

    /* Mensajes de la cinta de arriba. Solo promesas que la tienda cumple. */
    cinta: ["Activos 100% naturales", "Envío gratis a todo el país", "Jabón + ebook de regalo desde el pack de 2", "Garantía de 30 días", "3 cuotas sin interés"],

    /* Packs: "match" = valor EXACTO de la variante en Tiendanube (los mismos
       que la landing). precio = SOLO respaldo, se lee en vivo de la ficha.
       regalo = la cinta de regalo (packs 2 y 3) · lite = fila chica abajo
       (pack de 1) · nota = lo que no trae · destacado = el resaltado. */
    packs: [
      { match: "1 Chau Granitos", qty: 1, titulo: "1 Chau Granitos", sub: "1 crema de 100 ml · 1 mes",
        nota: "Sin jabón ni ebook de regalo", lite: true, badge: "", precio: 49990 },
      { match: "2 Chau Granitos + Jabon Antibacterial de regalo", qty: 2, titulo: "2 Chau Granitos", sub: "2 cremas · 2 meses de tratamiento",
        regalo: "+ Jabón y ebook de regalo", badge: "Más elegido", precio: 84990, destacado: true },
      { match: "3 Chau Granitos + Jabon Antibacterial de regalo", qty: 3, titulo: "3 Chau Granitos", sub: "3 cremas · el tratamiento completo",
        regalo: "+ Jabón y ebook de regalo", badge: "Mejor precio", precio: 112490 }
    ],

    /* Pie de página propio */
    pie: {
      activo: true,
      frase: "Activos naturales para la piel del cuerpo que vive tapada.",
      contactoURL: "/contacto/",
      /* redes: pegá el link completo. Vacío = no se muestra */
      instagram: "",
      tiktok: "",
      whatsapp: "",   /* ej.: https://wa.me/5491100000000 */
      ocultarPieNativo: true
    },

    /* Secciones del tema que se esconden en el home (no toca el encabezado) */
    ocultarNativo: true,
    ocultarSelectores: ["[data-store^='home-']", ".js-home-section", ".js-home-slider", ".js-home-main-slider", ".section-home", ".home-slider", "[data-store='slider-home']"],

    /* Reseñas con foto de antes y después (las mismas de la landing) */
    antesDespues: [
    /* COMPARADOR CHICO (arriba del precio). Sin "foto": no entra en la 08. */
    { ej:!0, nombre:"Martina", edad:29,
      antes:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168195/Woman_standing_showing_skincare___20261004232005_1.jpg",
      despues:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168199/Editing_photo_for_skincare_results_20261004232048_1.jpg" },

    /* SECCIÓN 08 · "Ellas también se tapaban" (una foto 4:5 por clienta) */
    { ej:!0, nombre:"Camila", edad:24, foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168204/Woman_showing_skincare_progress___20261004232718_1.jpg",
      texto:"Tenía la cola llena de granitos y pensaba que era acné. Me cansé de ponerme la crema de la cara. Este verano por fin me puse la malla sin el short arriba." },
    { ej:!0, nombre:"Florencia", edad:27, foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168208/Woman_showing_skincare_progress___20261004232816_1.jpg",
      texto:"Tres veranos sin sacarme el short en la pileta por los granitos de la cola. Este año me animé a la malla. Parece una pavada, pero para mí fue enorme." },
    { ej:!0, nombre:"Graciela", edad:54, foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168211/Woman_skincare_progress_photos_20261004232940_1.jpg",
      texto:"Hace años que tenía la cola áspera, con granitos y unas manchitas que no se iban. Ahora la piel se siente lisa y volví a usar malla en la pileta del club." },
    { ej:!0, nombre:"Agustina", edad:22, foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168216/Woman_showing_skincare_progress___20261004233121_1.jpg",
      texto:"La calza del gimnasio me dejaba la cola llena de granitos. Me cambiaba escondida en el vestuario. Ahora los noto mucho menos y ya no me escondo." },
    { ej:!0, nombre:"Rocío", edad:31, foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168219/Woman_showing_skincare_progress___20261004233210_1.jpg",
      texto:"Me daba vergüenza que mi novio me viera la cola con granitos, apagaba la luz para cambiarme. Ya no. Me la pongo después de la ducha y no queda pegajosa." }
  ],

    /* Reseñas (las mismas de la landing). zona: arriba · fotos · opiniones */
    resenas: [
    /* ARRIBA · las 5 que se ven primero */
    { ej:!0, zona:"arriba", n:"Camila", edad:24, c:"Córdoba", e:5, f:"hace 3 días", t:"Tenía la cola llena de granitos y pensaba que era acné. Me cansé de ponerme la crema de la cara. Este verano por fin me puse la malla sin el short arriba." },
    { ej:!0, zona:"arriba", n:"Florencia", edad:27, c:"CABA", e:5, f:"hace 5 días", t:"Tres veranos sin sacarme el short en la pileta por los granitos de la cola. Este año me animé a la malla. Parece una pavada, pero para mí fue enorme." },
    { ej:!0, zona:"arriba", n:"Graciela", edad:54, c:"Mendoza", e:5, f:"hace 1 semana", t:"Hace años que tenía la cola áspera, con granitos y unas manchitas que no se iban. Ahora la piel se siente lisa y volví a usar malla en la pileta del club." },
    { ej:!0, zona:"arriba", n:"Agustina", edad:22, c:"Rosario", e:5, f:"hace 1 semana", t:"La calza del gimnasio me dejaba la cola llena de granitos. Me cambiaba escondida en el vestuario. Ahora los noto mucho menos y ya no me escondo." },
    { ej:!0, zona:"arriba", n:"Rocío", edad:31, c:"La Plata", e:5, f:"hace 2 semanas", t:"Me daba vergüenza que mi novio me viera la cola con granitos, apagaba la luz para cambiarme. Ya no. Me la pongo después de la ducha y no queda pegajosa." },

    /* FOTOS · "Ellas se animaron a mostrarlo" (cargá la foto en cada una) */
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168222/Woman_comparing_before_and_after_20261004233338_1.jpg", n:"Julieta", edad:28, c:"Quilmes", e:5, f:"hace 4 días", t:"Antes de mandarles la foto se la mostré a mi hermana y no me creía que era la misma cola. Me la pongo todas las noches después de la ducha." },
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168229/Woman_taking_mirror_selfie_20261004233442_1.jpg", n:"Brenda", edad:33, c:"San Juan", e:5, f:"hace 6 días", t:"Nunca me había sacado una foto de la cola, me daba vergüenza hasta a mí. Esta la saqué para mostrarles cómo quedó: lisa y sin los puntitos rojos." },
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168234/Woman_checking_swimsuit_in_mirror_20261004233553_1.jpg", n:"Carolina", edad:40, c:"Villa María", e:5, f:"hace 10 días", t:"Esta foto es en el probador, con la malla puesta. Hacía dos veranos que no me probaba una. Me la llevé y la estreno en enero." },
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168238/Woman_adjusting_hair_on_patio_20261004233612_1.jpg", n:"Micaela", edad:23, c:"Posadas", e:5, f:"hace 2 semanas", t:"Les mando la de la espalda, que era lo que más me acomplejaba. Ahora me hago rodete sin pensar en lo que se ve atrás." },
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168241/Woman_comparing_skincare_progres__20261004234015_1.jpg", n:"Romina", edad:37, c:"Comodoro Rivadavia", e:4, f:"hace 3 semanas", t:"Al principio no veía tanto cambio y casi la dejo. Seguí siendo constante y se empezó a notar. Les mando la de antes y la de ahora, con la misma luz." },
    { ej:!0, zona:"fotos", foto:"https://res.cloudinary.com/byhkgd6e/image/upload/v1791168244/Woman_walking_on_beach_20261004234041_1.jpg", n:"Antonela", edad:26, c:"San Isidro", e:5, f:"hace 1 mes", t:"Es la primera foto en malla que me saco en años. Ya no salgo del agua corriendo a taparme con el pareo." },

    /* OPINIONES · "Lo que dicen ellas" (solo texto) */
    { ej:!0, zona:"opiniones", n:"Belén", edad:30, c:"Morón", e:5, f:"hace 2 días", t:"Llegó rápido y bien embalado. La textura es liviana, se absorbe enseguida y no mancha la ropa. Ya siento la piel de la cola más suave al tacto." },
    { ej:!0, zona:"opiniones", n:"Sofía", edad:21, c:"Río Cuarto", e:5, f:"hace 4 días", t:"Pensé que iba a ser otra crema más. Es la primera que no me deja la piel pegajosa ni me obliga a frotar. Me la pongo y me visto al toque." },
    { ej:!0, zona:"opiniones", n:"Mónica", edad:58, c:"Santa Rosa", e:5, f:"hace 1 semana", t:"A mi edad pensé que la piel áspera de la cola ya no tenía vuelta. Me la regaló mi hija y ahora la compro yo." },
    { ej:!0, zona:"opiniones", n:"Soledad", edad:45, c:"Tucumán", e:5, f:"hace 2 semanas", t:"Años probando de todo para los granitos de la cola, sin ver ningún cambio. Pensé que no tenía arreglo. Este verano me compré una malla y la usé." },
    { ej:!0, zona:"opiniones", n:"Carla", edad:34, c:"Pilar", e:4, f:"hace 2 semanas", t:"Los resultados no son de un día para el otro, hay que ser constante. Pero los granitos de los muslos bajaron mucho. Le saco una estrella porque si la usás en varias zonas el frasco dura menos." },
    { ej:!0, zona:"opiniones", n:"Valeria", edad:38, c:"Mar del Plata", e:4, f:"hace 3 semanas", t:"Primero la probé en el brazo, como dice la página, porque tengo la piel sensible. Los granitos de la cola se fueron calmando y la textura es otra. Y el olor a lavanda me encanta." },
    { ej:!0, zona:"opiniones", n:"Marina", edad:49, c:"Neuquén", e:5, f:"hace 3 semanas", t:"Me frotaba la cola con azúcar y café, y quedaba más irritada que antes. Con esta no froto nada y la piel está mucho más lisa. Después de diez años, malla nueva." },
    { ej:!0, zona:"opiniones", n:"Ana", edad:27, c:"Ushuaia", e:5, f:"hace 3 semanas", t:"Acá el verano dura poco, pero igual me molestaba sentir la cola áspera. Lo que más me gusta es lo simple: el jabón en la ducha, la crema y listo." },
    { ej:!0, zona:"opiniones", n:"Milagros", edad:29, c:"Paraná", e:5, f:"hace 1 mes", t:"No me ponía nada ajustado porque se marcaban los granitos de la cola. Ahora uso el vestido que tenía guardado y en la playa voy en malla, sin taparme." },
    { ej:!0, zona:"opiniones", n:"Natalia", edad:41, c:"Santa Fe", e:5, f:"hace 1 mes", t:"Compré el de 3 meses para llegar al verano con la cola lisa. Fue la mejor decisión: este año fui a la playa sin taparme con nada." },
    { ej:!0, zona:"opiniones", n:"Victoria", edad:44, c:"Resistencia", e:5, f:"hace 1 mes", t:"Probé el de 1 mes y volví por el de 3. Se nota cuando sos constante. Ahora espero el verano en vez de temerle." },
    { ej:!0, zona:"opiniones", n:"Lucía", edad:19, c:"Salta", e:5, f:"hace 1 mes", t:"Tenía granitos en la cola y los muslos llenos de puntitos por el jean. Me la pongo en las dos zonas y por primera vez me animé al short y a la malla." },
    { ej:!0, zona:"opiniones", n:"Paula", edad:35, c:"Bahía Blanca", e:4, f:"hace 1 mes", t:"La uso en la cola y en la espalda, que tenía granitos por las tiras del corpiño. Este verano me animé a la malla de espalda abierta." },
    { ej:!0, zona:"opiniones", n:"Daiana", edad:26, c:"Corrientes", e:5, f:"hace 1 mes", t:"Frotaba la cola con la esponja como loca y los granitos seguían. Entendí que eso era lo que me lo empeoraba. Ahora voy a la pileta tranquila." }
  ],

    faq: [
      ["¿Para qué zonas sirve?", "Para la cola, la espalda y los muslos: las zonas donde la ropa, el sudor y el roce tapan el poro. No es para la cara."],
      ["¿Qué tiene la crema?", "Aceite de semilla de uva, tea tree, lavanda y lemongrass. El frasco trae 100 ml."],
      ["¿Es natural?", "Sus activos son 100% naturales: aceite de semilla de uva, tea tree, lavanda y lemongrass. No tiene ácidos fuertes ni partículas exfoliantes, así que no le suma agresión a una piel que ya está irritada por el roce."],
      ["¿Sirve para los hongos?", "El tea tree, la lavanda y el lemongrass son aceites conocidos por su acción antibacteriana y antimicótica: ayudan a mantener a raya las bacterias y los hongos que aparecen con el sudor y el roce. Si tenés una infección diagnosticada, o una zona que pica mucho, supura o se extiende, consultá con un médico."],
      ["¿Qué incluye cada pack?", "Los tres packs tienen envío gratis a todo el país, 3 cuotas sin interés y garantía de 30 días. A partir del pack de 2 se suman de regalo un jabón líquido antibacterial de 150 ml con tea tree y lavanda, para limpiar la zona antes de la crema, y el ebook “Piel lisa para la malla”. Uno de cada uno por pedido."],
      ["¿Puedo usar mi jabón de siempre?", "Muchos jabones de tocador, incluso de primeras marcas, son alcalinos (tienen un pH bastante más alto que el de la piel) y traen perfume o desodorante. En una zona que ya está irritada por el roce, eso la puede irritar más. Por eso hicimos un jabón líquido con tea tree y lavanda para esta zona, que va de regalo con los packs de 2 y de 3."],
      ["¿Cuándo voy a notar la diferencia?", "Cada piel es distinta. Lo que más importa es la constancia: usarla todas las noches. Por eso los packs de 2 y de 3 son los más elegidos: te alcanzan para ser constante."],
      ["¿Y si no me convence?", "Tenés 30 días de garantía: escribinos y te devolvemos el dinero."]
    ]
  };

  /* ---------- H02 · ¿ES EL HOME? ---------- */
  var ruta = (location.pathname || "/").replace(/\/+$/, "");
  var esHome = window.DUNA_HOME_PREVIEW === true || ruta === "" || /^\/(es|pt|en)$/.test(ruta);
  if (!esHome || window.__DUNA_HOME__) return;
  window.__DUNA_HOME__ = true;

  var MARCA = HC.marca || "Duna";
  /* en la vista previa los links apuntan a la tienda real */
  var URLP = (window.DUNA_HOME_PREVIEW && window.DUNA_HOME_BASE ? window.DUNA_HOME_BASE : "") + (HC.productoURL || "/");

  /* fotos que vienen dentro del archivo (se usan si el panel está vacío) */
  var IMG = {
    crema: HC.imgCrema || "data:image/webp;base64,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",
    jabon: HC.imgJabon || "data:image/webp;base64,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",
    logo: HC.imgLogo || "data:image/webp;base64,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"
  };

  /* íconos del kit (los mismos de la landing) */
  var ICO_CREMA="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMjAiIGZpbGw9IiNGNEYwRTgiLz48cmVjdCB4PSIzNSIgeT0iMTMiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxNSIgcng9IjQuNSIgZmlsbD0iIzU2NjM0RiIvPjxyZWN0IHg9IjM1IiB5PSIyNCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjQiIGZpbGw9IiMyRTM1MjkiIG9wYWNpdHk9Ii41NSIvPjxyZWN0IHg9IjI5IiB5PSIyNyIgd2lkdGg9IjM4IiBoZWlnaHQ9IjU2IiByeD0iMTEiIGZpbGw9IiMzRjRBM0MiLz48cmVjdCB4PSIzNSIgeT0iNDEiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyOCIgcng9IjUiIGZpbGw9IiNGNEYwRTgiLz48cGF0aCBkPSJNNDggNDVjLTYuNSA0LjUtNy41IDEyLTEgMTYgNS41LTMuNSA3LjUtMTEgMS0xNnoiIGZpbGw9IiNDOTk2NUYiLz48cGF0aCBkPSJNNDcuNSA0OXYxMSIgc3Ryb2tlPSIjRjRGMEU4IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTQxIDY0LjVoMTQiIHN0cm9rZT0iIzNGNEEzQyIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iLjU1Ii8+PC9zdmc+";
  var ICO_JABON="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMjAiIGZpbGw9IiNGNEYwRTgiLz48cmVjdCB4PSIzNiIgeT0iMTQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI3IiByeD0iMy41IiBmaWxsPSIjNTY2MzRGIi8+PHBhdGggZD0iTTU2IDE3LjVoN2EzLjUgMy41IDAgMCAxIDMuNSAzLjV2MyIgc3Ryb2tlPSIjNTY2MzRGIiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxyZWN0IHg9IjQzIiB5PSIyMCIgd2lkdGg9IjYiIGhlaWdodD0iOSIgZmlsbD0iIzU2NjM0RiIvPjxyZWN0IHg9IjM5IiB5PSIyOCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjgiIHJ4PSIyLjUiIGZpbGw9IiMyRTM1MjkiLz48cmVjdCB4PSIyOSIgeT0iMzUiIHdpZHRoPSIzNCIgaGVpZ2h0PSI0NyIgcng9IjEwIiBmaWxsPSIjM0Y0QTNDIi8+PHJlY3QgeD0iMzQiIHk9IjQ3IiB3aWR0aD0iMjQiIGhlaWdodD0iMjMiIHJ4PSI1IiBmaWxsPSIjRjRGMEU4Ii8+PHBhdGggZD0iTTQ2IDUxYy02IDQtNyAxMS0xIDE1IDUtMyA3LTEwIDEtMTV6IiBmaWxsPSIjQzk5NjVGIi8+PHBhdGggZD0iTTQ1LjUgNTV2MTAiIHN0cm9rZT0iI0Y0RjBFOCIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjczIiBjeT0iNDIiIHI9IjUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzk5NjVGIiBzdHJva2Utd2lkdGg9IjIuNiIvPjxjaXJjbGUgY3g9Ijc5IiBjeT0iNTUiIHI9IjMuNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzk5NjVGIiBzdHJva2Utd2lkdGg9IjIuMiIvPjxjaXJjbGUgY3g9IjcxLjUiIGN5PSI2MyIgcj0iMi4zIiBmaWxsPSIjQzk5NjVGIi8+PC9zdmc+";
  var ICO_EBOOK="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiByeD0iMjAiIGZpbGw9IiNGNEYwRTgiLz48cGF0aCBkPSJNMTggMjJoMjZjMyAwIDQgMiA0IDR2NTBjMC0zLTItNS01LTVIMTh6IiBmaWxsPSIjM0Y0QTNDIi8+PHBhdGggZD0iTTc4IDIySDUyYy0zIDAtNCAyLTQgNHY1MGMwLTMgMi01IDUtNWgyNXoiIGZpbGw9IiM1NjYzNEYiLz48cGF0aCBkPSJNMjYgMzZoMTRNMjYgNDZoMTRNNTYgMzZoMTRNNTYgNDZoMTQiIHN0cm9rZT0iI0Y0RjBFOCIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==";

  /* ---------- H03 · FONDO CLARO (mismo que la landing) ----------
     El tema Lima viene azul marino de fábrica. Esta capa pinta el home con
     la paleta de Duna y le gana al tema. Para cambiar los colores en TODA
     la tienda: Administrador > Diseño > Personalizar > Colores. */
  (function () {
    var ID = "dh-tema-claro";
    var CSS = [
      "html{background-color:#FFFFFF}",
    ".svg-icon-text{fill:#2B3027}",
    ".svg-icon-accent{fill:#3F4A3C}",
    ".svg-icon-invert{fill:#FFFFFF}",
    ".svg-circle{border:1px solid #2B3027}",
    ".svg-circle-big.svg-icon-invert{border:1px solid #FFFFFF}",
    ".svg-circle-invert{border:1px solid #FFFFFF}",
    ".text-secondary{color:#FFFFFF}",
    ".text-accent,.product-installments.installment-no-interest{color:#3F4A3C!important}",
    ".bg-primary{background-color:#3F4A3C!important;color:#FFFFFF!important}",
    ".bg-primary a{color:#FFFFFF!important}",
    ".background-main{background-color:#FFFFFF}",
    "body{color:#2B3027;background-color:#FFFFFF}",
    ".box{border:1px solid rgba(43,48,39,0.1)}",
    ".placeholder-color{background-color:rgba(43,48,39,0.2)}",
    ".placeholder-shine,.placeholder-fade{background-color:rgba(43,48,39,0.2)}",
    ".placeholder-shine-invert{background-color:rgba(255,255,255,0.5)}",
    ".placeholder-overlay{background-color:rgba(43,48,39,0.3)}",
    ".placeholder-info{color:#2B3027;fill:#2B3027;background-color:#FFFFFF}",
    ".placeholder-info .placeholder-button{color:#FFFFFF;background-color:#2B3027}",
    ".spinner::before{background-color:#2B3027}",
    ".divider{border-bottom:1px solid rgba(43,48,39,0.1)}",
    ".top-line{border-top:1px solid rgba(43,48,39,0.1)}",
    ".btn-default{color:#2B3027;fill:#2B3027;background-color:#FFFFFF}",
    ".btn-primary{background-color:#3F4A3C;color:#F4F0E8;fill:#F4F0E8}",
    ".btn-primary:hover{color:#F4F0E8}",
    ".btn-secondary{color:#2B3027;fill:#2B3027;border:1px solid #2B3027}",
    ".btn-secondary:hover{color:#2B3027}",
    ".btn-secondary.invert{color:#FFFFFF;border:1px solid #FFFFFF}",
    ".btn-secondary.invert:hover{color:#FFFFFF}",
    ".btn-variant{border:1px solid rgba(43,48,39,0.8);color:rgba(43,48,39,0.8)}",
    ".btn-variant.selected{color:#2B3027;border:1px solid #2B3027;background:rgba(43,48,39,0.1)}",
    ".btn-variant-no-stock{color:rgba(43,48,39,0.5);border-color:rgba(43,48,39,0.3)}",
    ".btn-variant-no-stock:after{background:linear-gradient(to top left, transparent 49%, rgba(43,48,39,0.5), transparent 52%)}",
    ".btn-variant-no-stock.selected:after{background:linear-gradient(to top left, transparent 49%, #2B3027, transparent 52%)}",
    ".btn-variant-no-stock.btn-variant-color:after{background:linear-gradient(-45deg, rgba(255,255,255,0.3) calc(50% - 0.7px), rgba(43,48,39,0.5) calc(50% - 0.7px), rgba(43,48,39,0.5) 50%, rgba(43,48,39,0.5) calc(50% + 0.7px), rgba(255,255,255,0.3) calc(50% + 0.7px))}",
    ".btn-variant-no-stock.btn-variant-color.selected:after{background:linear-gradient(-45deg, rgba(255,255,255,0.3) calc(50% - 0.7px), #2B3027 calc(50% - 0.7px), #2B3027 50%, #2B3027 calc(50% + 0.7px), rgba(255,255,255,0.3) calc(50% + 0.7px))}",
    ".btn-facebook:hover{color:#2B3027}",
    ".btn-facebook:hover .svg-fb-icon{fill:#2B3027}",
    "a{color:#2B3027}",
    "a:hover,a:focus{color:rgba(43,48,39,0.5)}",
    ".link-contrast{color:#FFFFFF}",
    ".link-contrast:hover,.link-contrast:focus{color:rgba(255,255,255,0.8)}",
    ".btn-link{color:#2B3027;fill:#2B3027}",
    ".btn-link.invert{color:#FFFFFF;fill:#FFFFFF}",
    ".btn-link.invert:hover,.btn-link.invert:focus{color:#FFFFFF;fill:#FFFFFF}",
    ".btn-link-primary{color:#2B3027;fill:#2B3027}",
    ".btn-link-primary:hover,.btn-link-primary:focus{color:#2B3027;fill:#2B3027}",
    ".accordion{border-top:1px solid rgba(43,48,39,0.1)}",
    ".accordion:last-child{border-bottom:1px solid rgba(43,48,39,0.1)}",
    ".chip{color:#2B3027;fill:#2B3027;background-color:#FFFFFF;border:1px solid #2B3027}",
    ".progress-bar-subtitle{color:rgba(43,48,39,0.6)}",
    ".bar-progress{background:rgba(43,48,39,0.1)}",
    ".bar-progress-active{background:#3F4A3C}",
    ".modal{color:#2B3027;background-color:#FFFFFF}",
    ".modal-header{background-color:rgba(43,48,39,0.03)}",
    ".modal-header-no-title{background-color:rgba(255,255,255,0.9)}",
    ".modal-shadow{box-shadow:0 0 8px 4px rgba(43,48,39,0.1)}",
    ".form-label-divider{border-bottom:1px solid rgba(43,48,39,0.1)}",
    ".form-control::-webkit-input-placeholder{color:rgba(43,48,39,0.3)}",
    ".form-control:-moz-placeholder{color:rgba(43,48,39,0.3)}",
    ".form-control::-moz-placeholder{color:rgba(43,48,39,0.3)}",
    ".form-control:-ms-input-placeholder{color:rgba(43,48,39,0.3)}",
    ".form-control,.form-select,.form-quantity,.form-select-options{border:1px solid rgba(43,48,39,0.3);color:#2B3027;fill:#2B3027;background-color:#FFFFFF}",
    ".form-control:hover,.form-select:hover,.form-quantity:hover,.form-select-options:hover{border:1px solid rgba(43,48,39,0.6)}",
    ".form-control:hover+.form-select-icon,.form-select:hover+.form-select-icon,.form-quantity:hover+.form-select-icon,.form-select-options:hover+.form-select-icon{fill:#2B3027}",
    ".form-select-options::-webkit-scrollbar-track{background:rgba(255,255,255,0.5)}",
    ".form-select-options::-webkit-scrollbar-thumb{background:rgba(43,48,39,0.5)}",
    ".form-select-option:hover,.form-select-option:active{background-color:rgba(43,48,39,0.05)}",
    ".form-select-option.selected{background-color:rgba(43,48,39,0.08)}",
    ".form-quantity{border:1px solid #2B3027}",
    ".form-quantity-icon{background:rgba(43,48,39,0.1);fill:#2B3027}",
    ".cart-promotion-number{color:#3F4A3C}",
    ".form-select-icon{background:#FFFFFF;fill:#2B3027}",
    ".radio-button-content{border:1px solid #FFFFFF}",
    ".radio-button-icon.unchecked{background-color:#FFFFFF}",
    ".radio-button-icon.checked{background-color:#2B3027}",
    ".radio-button input[type=radio]+.radio-button-content .unchecked{border:1px solid rgba(43,48,39,0.5)}",
    ".radio-button input[type=radio]:checked+.radio-button-content{border:1px solid rgba(43,48,39,0.5)}",
    ".radio-button-primary .radio-button-content{border:1px solid rgba(63,74,60,0.2)}",
    ".radio-button-primary input[type=radio]:checked+.radio-button-content{border:1px solid #3F4A3C}",
    ".list-item-icon{background-color:#2B3027}",
    ".checkbox-container .checkbox-icon{background:#FFFFFF;border:1px solid #2B3027}",
    ".checkbox-container .checkbox-icon:after{border:solid #2B3027}",
    ".checkbox-container .checkbox:hover,.checkbox-container input:checked~.checkbox{color:#2B3027;fill:#2B3027}",
    ".checkbox-container .checkbox:hover .checkbox-icon,.checkbox-container input:checked~.checkbox .checkbox-icon{border:1px solid #2B3027}",
    ".checkbox-container .checkbox-color{border:1px solid rgba(43,48,39,0.06)}",
    ".alert-primary{border-color:#3F4A3C;color:#3F4A3C}",
    ".bg-primary .alert-danger,.bg-primary .alert-error{color:#FFFFFF;border-color:#FFFFFF}",
    ".bg-primary .alert-warning{color:#FFFFFF;border-color:#FFFFFF}",
    ".bg-primary .alert-info{color:#FFFFFF;border-color:#FFFFFF}",
    ".bg-primary .alert-success{color:#FFFFFF;border-color:#FFFFFF}",
    ".bg-primary .alert-primary{border-color:#FFFFFF;color:#FFFFFF}",
    ".notification-primary{color:#2B3027;background-color:#FFFFFF;border-top:1px solid rgba(43,48,39,0.1);border-bottom:1px solid rgba(43,48,39,0.1)}",
    ".notification-arrow-up{border-bottom:10px solid #FFFFFF}",
    ".notification-floating .notification-primary{color:#2B3027;background-color:#FFFFFF;border:1px solid rgba(43,48,39,0.5)}",
    ".notification-secondary{background:#3F4A3C;color:#FFFFFF}",
    ".notification-tertiary{color:#F4F0E8;background:#3F4A3C}",
    ".notification-img svg{background:#FFFFFF}",
    ".tooltip{background:#FFFFFF;color:#2B3027}",
    ".tooltip-arrow{border-bottom:10px solid #3F4A3C}",
    ".tooltip-card{background:#FFFFFF}",
    ".card-img-pill{background-color:#FFFFFF;color:#2B3027}",
    ".table{background-color:#FFFFFF;color:#2B3027}",
    ".table tbody tr:nth-child(odd){background-color:rgba(43,48,39,0.05)}",
    ".table tbody.table-body-inverted tr:nth-child(odd){background-color:#FFFFFF}",
    ".table tbody.table-body-inverted tr:nth-child(even){background-color:rgba(43,48,39,0.05)}",
    ".tab-group .tab-link{border:1px solid #2B3027;color:#2B3027}",
    ".tab-group .tab.active .tab-link{border:1px solid #3F4A3C;color:#F4F0E8;background:#3F4A3C}",
    ".tab-group .tab.active .tab-link .text-accent{color:#F4F0E8!important}",
    ".swiper-text{color:#FFFFFF}",
    ".swiper-dark{color:#2B3027}",
    ".swiper-dark .btn-default{color:#FFFFFF;background:#2B3027}",
    ".swiper-pagination-bullet,.swiper-pagination-bullet-active{background-color:#2B3027}",
    ".swiper-overlay{background-image:linear-gradient(transparent, rgba(43,48,39,0.4))}",
    ".swiper-overlay-dark{background-image:linear-gradient(transparent, rgba(255,255,255,0.4))}",
    ".section-slider{background:rgba(43,48,39,0.05)}",
    ".textbanner-text.over-image{background-image:linear-gradient(transparent, rgba(43,48,39,0.4));color:#FFFFFF}",
    ".textbanner-text.over-image a{color:#FFFFFF}",
    ".textbanner-text.over-image .btn-secondary{color:#FFFFFF;border:1px solid #FFFFFF}",
    ".textbanner-text.over-image .svg-icon-text{fill:#FFFFFF}",
    ".textbanner-link:hover{color:#2B3027}",
    ".section-brands-home{background:rgba(43,48,39,0.1)}",
    ".testimonials-image-placeholder{background:rgba(43,48,39,0.05)}",
    ".embed-responsive{background:#2B3027}",
    ".video-player-icon{background:#FFFFFF}",
    ".home-video-text{color:#FFFFFF}",
    ".home-video-text .btn-secondary{color:#FFFFFF;border:1px solid #FFFFFF}",
    ".home-video-overlay:after{background:linear-gradient(transparent, rgba(43,48,39,0.4))}",
    ".instafeed-title{color:#2B3027}",
    ".instafeed-info{color:#FFFFFF;background:rgba(43,48,39,0.6)}",
    ".featured-product-container{background:#FFFFFF}",
    ".section-newsletter-home{color:#2B3027}",
    ".section-newsletter-home .form-control{color:#2B3027;border:1px solid rgba(43,48,39,0.3)}",
    ".section-newsletter-home .form-control:hover,.section-newsletter-home .form-control:active{border:1px solid rgba(43,48,39,0.6)}",
    ".section-newsletter-home .btn-primary{background-color:#3F4A3C}",
    ".section-newsletter-home .form-control::-webkit-input-placeholder{color:rgba(43,48,39,0.5)}",
    ".section-newsletter-home .form-control:-moz-placeholder{color:rgba(43,48,39,0.5)}",
    ".section-newsletter-home .form-control::-moz-placeholder{color:rgba(43,48,39,0.5)}",
    ".section-newsletter-home .form-control:-ms-input-placeholder{color:rgba(43,48,39,0.5)}",
    ".category-controls{background-color:#FFFFFF}",
    ".category-controls.is-sticky{border-bottom:1px solid rgba(43,48,39,0.1)}",
    ".filters-overlay{background-color:rgba(255,255,255,0.85)}",
    ".item,.card{background:#FFFFFF}",
    ".item-link{color:#2B3027}",
    ".item-price{color:#2B3027}",
    ".label{background:#FFFFFF;color:#2B3027}",
    ".label.label-accent{background:#3F4A3C;color:#F4F0E8}",
    ".label.label-accent svg{fill:#F4F0E8}",
    ".label.label-default{background:#2B3027;color:#FFFFFF}",
    ".product-video-container{background-color:rgba(43,48,39,0.07)}",
    ".fancybox__container .fancybox__backdrop{background:rgba(43,48,39,0.9)}",
    ".carousel__button .svg-icon-invert{fill:#FFFFFF}",
    ".social-share .social-share-button{color:#2B3027}",
    ".contact-item-icon{fill:#2B3027}",
    ".contact-link{color:#2B3027}",
    ".order-item{border-bottom:1px solid rgba(43,48,39,0.08)}",
    ".order-item:first-child{border-top:1px solid rgba(43,48,39,0.08)}",
    ".head-main{color:#3F4A3C;fill:#3F4A3C;background-color:#FFFFFF;border-bottom:1px solid rgba(63,74,60,0.1)}",
    ".head-main .btn-link{color:#3F4A3C;fill:#3F4A3C}",
    ".head-main .section-topbar{background-color:#3F4A3C;color:#FFFFFF;fill:#FFFFFF}",
    ".head-main .section-topbar a{color:#FFFFFF;fill:#FFFFFF}",
    ".head-main .section-adbar{color:#2B3027;fill:#2B3027}",
    ".head-main .section-adbar a,.head-main .section-adbar .svg-icon-text{color:#2B3027;fill:#2B3027}",
    ".head-main .menu-and-banners-row{border-top:1px solid rgba(63,74,60,0.1);border-bottom:1px solid rgba(63,74,60,0.1)}",
    ".head-main .btn-utility{fill:#3F4A3C}",
    ".head-main .badge{color:#3F4A3C;background:#FFFFFF;border:1px solid #3F4A3C}",
    ".head-main .form-control{background-color:#FFFFFF;color:#3F4A3C;fill:#3F4A3C;border:1px solid #3F4A3C}",
    ".head-main .form-control::-webkit-input-placeholder{color:#3F4A3C}",
    ".head-main .form-control:-moz-placeholder{color:#3F4A3C}",
    ".head-main .form-control::-moz-placeholder{color:#3F4A3C}",
    ".head-main .form-control:-ms-input-placeholder{color:#3F4A3C}",
    ".head-main a,.head-main .svg-icon-text{color:#3F4A3C;fill:#3F4A3C}",
    ".head-main .search-suggest{background-color:#FFFFFF}",
    ".head-main .search-suggest a.btn{background-color:#FFFFFF;color:#3F4A3C;fill:#3F4A3C}",
    ".head-main .nav-primary{background-color:#FFFFFF}",
    ".head-main .nav-primary .nav-list .nav-item{border-color:rgba(63,74,60,0.2)}",
    ".head-main .notification-primary a{color:#2B3027;fill:#2B3027}",
    ".head-main .notification-primary .btn-primary{color:#F4F0E8;fill:#F4F0E8}",
    ".head-banners{color:#3F4A3C;fill:#3F4A3C;background-color:#FFFFFF;border-bottom:1px solid rgba(63,74,60,0.1)}",
    ".head-banners .head-banner-item:nth-child(2){border-left:1px solid rgba(63,74,60,0.1)}",
    ".head-banners .btn-link,.head-banners a{color:#3F4A3C;fill:#3F4A3C}",
    ".nav-list-panel{color:#2B3027;fill:#2B3027;background-color:#FFFFFF}",
    ".nav-desktop-list>.nav-item-desktop>.nav-item-container>.nav-list-link:after{background:#3F4A3C}",
    ".nav-desktop-list-arrow{background:#FFFFFF}",
    ".nav-desktop-list-arrow .svg-circle{fill:#3F4A3C;border:1px solid #3F4A3C}",
    ".modal-nav-hamburger .modal-footer{background-color:rgba(43,48,39,0.05)}",
    ".subutility-list{background-color:#FFFFFF}",
    ".search-suggest{border:1px solid rgba(63,74,60,0.1)}",
    ".desktop-list-subitems{background-color:#FFFFFF;border-bottom:1px solid rgba(63,74,60,0.1)}",
    ".desktop-dropdown-small{background-color:#FFFFFF;border:1px solid #3F4A3C}",
    ".desktop-dropdown::-webkit-scrollbar-track{background:rgba(255,255,255,0.5)}",
    ".desktop-dropdown::-webkit-scrollbar-thumb{background:rgba(63,74,60,0.008)}",
    ".desktop-dropdown::-webkit-scrollbar-thumb:hover{background:#3F4A3C}",
    ".nav-categories-container:after,.nav-categories-container:before{background-image:linear-gradient(-90deg, transparent, #FFFFFF)}",
    "footer{color:#2B3027;background:#FFFFFF;border-top:1px solid rgba(43,48,39,0.1)}",
    "footer a,footer .contact-link,footer .footer-menu-item{color:#2B3027}",
    "footer a:hover{color:rgba(43,48,39,0.8)}",
    "footer svg{fill:#2B3027}",
    "footer .form-control,footer .form-select{color:#2B3027;border:1px solid rgba(43,48,39,0.3)}",
    "footer .form-control:hover,footer .form-control:active,footer .form-select:hover,footer .form-select:active{border:1px solid rgba(43,48,39,0.6)}",
    "footer .form-select-icon{background-color:#FFFFFF}",
    "footer .form-control::-webkit-input-placeholder{color:rgba(43,48,39,0.5)}",
    "footer .form-control:-moz-placeholder{color:rgba(43,48,39,0.5)}",
    "footer .form-control::-moz-placeholder{color:rgba(43,48,39,0.5)}",
    "footer .form-control:-ms-input-placeholder{color:rgba(43,48,39,0.5)}",
    "footer .footer-payments-shipping-logos img{border:1px solid rgba(43,48,39,0.2)}",
    "footer .accordion{border-top:1px solid rgba(43,48,39,0.1)}",
    "footer .accordion:last-child{border-bottom:1px solid rgba(43,48,39,0.1)}",
    "footer .btn-primary{background-color:#3F4A3C;color:#FFFFFF}",
    "footer .alert-success,footer .alert-danger{color:#2B3027;border-color:#2B3027}",
    ".social-icon-rounded{border:1px solid #2B3027;fill:#2B3027}",
    ".powered-by-logo svg{fill:#2B3027}",
    ".footer-legal{background:rgba(43,48,39,0.1);color:#2B3027}",
    ".footer-legal a{color:#2B3027}",
    "@media(min-width: 768px){.head-main .btn-utility{color:#3F4A3C;fill:#3F4A3C;border:1px solid #3F4A3C}.head-main .badge{color:#3F4A3C}.head-banners .head-banner-item{border-left:1px solid rgba(63,74,60,0.1)}.textbanner-shadow:hover{box-shadow:0 1px 10px rgba(43,48,39,0.2)}}"
    ].join("");
    function place() {
      var s = document.getElementById(ID);
      if (!s) { s = document.createElement("style"); s.id = ID; s.appendChild(document.createTextNode(CSS)); }
      var ref = document.querySelector("link[rel='stylesheet'][href*='dart-style-colors']");
      if (!ref) { var all = document.querySelectorAll("link[rel='stylesheet'][href*='/themes/']"); ref = all.length ? all[all.length - 1] : null; }
      if (ref && ref.parentNode) { if (ref.nextSibling !== s) ref.parentNode.insertBefore(s, ref.nextSibling); }
      else if (!s.parentNode) (document.head || document.documentElement).appendChild(s);
    }
    place();
    document.addEventListener("DOMContentLoaded", place);
    window.addEventListener("load", place);
  })();

  /* ---------- H04 · UTILIDADES ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function ej(arr) { return (arr || []).filter(function (x) { return !(x && x.ej && HC.ejemplos === false); }); }
  function css(id, text) {
    if (document.getElementById(id)) return;
    var s = document.createElement("style"); s.id = id; s.appendChild(document.createTextNode(text));
    (document.head || document.documentElement).appendChild(s);
  }
  function plata(n) {
    n = Math.round(n || 0);
    try { return "$" + n.toLocaleString("es-AR", { maximumFractionDigits: 0 }); }
    catch (e) { return "$" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  }
  var REDUCIR = false;
  try { REDUCIR = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.2 2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.3 6 20.6l1.3-6.7-5-4.7 6.8-.8z"/></svg>';
  function stars(n) {
    var r = Math.max(0, Math.min(5, Math.round(n || 5))), s = "";
    for (var i = 0; i < 5; i++) s += '<i class="' + (i < r ? "on" : "") + '">' + STAR + "</i>";
    return '<span class="dh-stars" role="img" aria-label="' + r + ' de 5 estrellas">' + s + "</span>";
  }
  var ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CROSS = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>';
  function cta(txt, cls, href) {
    return '<a class="dh-btn ' + (cls || "") + '" href="' + esc(href || URLP) + '">' + esc(txt || HC.ctaTexto) + ARROW + "</a>";
  }
  /* imagen con plan B: si no carga, queda un recuadro con la leyenda */
  function foto(src, alt, leyenda) {
    if (!src) return '<span class="dh-ph"><span>' + esc(leyenda || "Foto") + "</span></span>";
    return '<img data-dh-img src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy" draggable="false" data-ley="' + esc(leyenda || "Foto") + '">';
  }
  function planB(root) {
    root.querySelectorAll("img[data-dh-img]").forEach(function (im) {
      function fallo() {
        var ph = document.createElement("span"); ph.className = "dh-ph";
        ph.innerHTML = "<span>" + esc(im.getAttribute("data-ley") || "Foto") + "</span>";
        if (im.parentNode) im.parentNode.replaceChild(ph, im);
      }
      if (im.complete && im.naturalWidth === 0) fallo(); else im.addEventListener("error", fallo);
    });
  }
  function inicial(n) { return esc(String(n || "?").trim().charAt(0).toUpperCase()); }
  /* aparición suave: arranca VISIBLE y solo anima lo que está más abajo */
  function aparecer(root) {
    if (REDUCIR || !("IntersectionObserver" in window)) return;
    var els = root.querySelectorAll(".dh-rv");
    els.forEach(function (e) {
      var r = e.getBoundingClientRect();
      if (r.top > (window.innerHeight || 800)) e.classList.add("dh-espera");
    });
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.remove("dh-espera"); io.unobserve(x.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ==========================================================================
     H05 · ESTILO DEL HOME
     Una revista de cuidado personal en lino y salvia: títulos en Marcellus
     con una palabra en miel, mucho aire y las fotos reales del kit.
     Todo vive dentro de #duna-home y #dh-pie: no toca el tema.
     ========================================================================== */
  var CSS = [
    "#duna-home,#dh-pie{--s:#3F4A3C;--s2:#2E3529;--sc:#B7C4AA;--sc2:#E3E9DC;--l:#F4F0E8;--l2:#F6F3EC;--l3:#EAE3D5;--m:#C9965F;--mo:#8E6232;--mc:#D9AE79;--t:#2B3027;--g:#5E6359;--g2:#6E7368;--b:#FFFFFF;--rojo:#9C4A3A;--rojoF:#F1E6E2;--disp:'Marcellus',Georgia,'Times New Roman',serif;--sans:'Nunito Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-family:var(--sans);color:var(--t);-webkit-font-smoothing:antialiased}",
    "#duna-home{background:var(--b);width:100%;clear:both;overflow-x:clip}",
    "#duna-home *,#dh-pie *{box-sizing:border-box}",
    "#duna-home img,#dh-pie img{max-width:100%}",
    "#duna-home a,#dh-pie a{color:inherit}",
    "#duna-home .dh-in,#dh-pie .dh-in{max-width:1140px;margin:0 auto;padding-inline:18px;position:relative}",
    "#duna-home .dh-sec{padding-block:68px;position:relative}",
    "#duna-home .dh-lino{background:var(--l2)}",
    "#duna-home .dh-osc{background:var(--s);color:var(--l)}",
    "#duna-home .dh-kick{font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--mo);margin:0 0 12px}",
    "#duna-home .dh-osc .dh-kick{color:var(--mc)}",
    "#duna-home .dh-h2{font-family:var(--disp);font-weight:400;font-size:clamp(30px,6.4vw,48px);line-height:1.1;margin:0 0 14px;color:var(--t);text-wrap:balance}",
    "#duna-home .dh-h2 em,#duna-home .dh-h1 em{font-style:normal;color:var(--mo)}",
    "#duna-home .dh-osc .dh-h2{color:var(--l)}#duna-home .dh-osc .dh-h2 em{color:var(--mc)}",
    "#duna-home .dh-sub{font-size:17px;line-height:1.6;color:var(--g);margin:0 0 30px;max-width:580px;text-wrap:pretty}",
    "#duna-home .dh-osc .dh-sub{color:rgba(244,240,232,.86)}",
    "#duna-home .dh-head{text-align:center}#duna-home .dh-head .dh-sub{margin-inline:auto}",
    "#duna-home .dh-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:54px;padding:16px 26px;border-radius:14px;background:var(--s);color:var(--l)!important;font-family:var(--sans);font-size:16.5px;font-weight:800;text-decoration:none!important;letter-spacing:.01em;box-shadow:0 16px 28px -18px rgba(46,53,41,.95);position:relative;overflow:hidden;transition:transform .15s ease,background .2s ease}",
    "#duna-home .dh-btn:hover{background:var(--s2)}#duna-home .dh-btn:active{transform:scale(.98)}",
    "#duna-home .dh-btn:after{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;background:linear-gradient(105deg,transparent 20%,rgba(255,255,255,.22) 50%,transparent 80%);transform:skewX(-15deg);animation:dh-brillo 3.6s ease-in-out infinite}",
    "@keyframes dh-brillo{0%{left:-60%}45%{left:130%}100%{left:130%}}",
    "#duna-home .dh-btn--miel{background:#BF8A52;color:#fff!important}#duna-home .dh-btn--miel:hover{background:#A9773F}",
    "#duna-home .dh-link{display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:15px;color:var(--s)!important;text-decoration:underline;text-underline-offset:4px;text-decoration-color:var(--m)}",
    "#duna-home .dh-osc .dh-link{color:var(--mc)!important}",
    "#duna-home a:focus-visible,#duna-home button:focus-visible,#duna-home [tabindex]:focus-visible,#dh-pie a:focus-visible{outline:3px solid var(--m);outline-offset:3px}",
    "#duna-home .dh-stars{display:inline-flex;gap:2px;line-height:0;vertical-align:middle}",
    "#duna-home .dh-stars i{display:block;width:15px;height:15px;color:#E3DED2}#duna-home .dh-stars i.on{color:var(--m)}#duna-home .dh-stars svg{width:100%;height:100%;display:block}",
    "#duna-home .dh-ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:120px;background:repeating-linear-gradient(135deg,#ECEFE6 0 14px,#E3E8DC 14px 28px);color:var(--g);font-size:12px;font-weight:800;letter-spacing:1px;text-transform:uppercase;text-align:center;padding:10px}",
    "#duna-home .dh-rv{transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}",
    "#duna-home .dh-rv.dh-espera{opacity:0;transform:translateY(18px)}",
    "#duna-home .dh-cta-row{display:flex;flex-wrap:wrap;gap:14px 22px;align-items:center}",

    /* cinta de arriba */
    ".dh-cinta{background:#2E3529;color:#F4F0E8;overflow:hidden;font-family:'Nunito Sans',-apple-system,'Segoe UI',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;position:relative;z-index:5}",
    ".dh-cinta-t{display:flex;width:max-content;animation:dh-cinta 38s linear infinite}",
    ".dh-cinta span{display:inline-flex;align-items:center;gap:14px;padding:10px 0 10px 22px;white-space:nowrap}",
    ".dh-cinta span:after{content:'';width:5px;height:5px;border-radius:50%;background:#C9965F}",
    "@keyframes dh-cinta{to{transform:translateX(-50%)}}",

    /* 01 portada */
    "#duna-home .dh-hero{background:var(--l2);padding-block:34px 76px;position:relative;overflow:hidden}",
    "#duna-home .dh-hero-g{display:grid;grid-template-columns:minmax(0,1fr);grid-template-areas:'rate' 'h' 'v' 'txt';gap:0 56px;align-items:center}",
    "#duna-home .a-rate{grid-area:rate}#duna-home .a-h{grid-area:h}#duna-home .a-v{grid-area:v}#duna-home .a-txt{grid-area:txt}",
    "@media(min-width:900px){#duna-home .dh-hero{padding-block:60px 104px}#duna-home .dh-hero-g{grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);grid-template-areas:'rate v' 'h v' 'txt v';align-content:center}}",
    "#duna-home .dh-rate{display:inline-flex;align-items:center;gap:8px;background:var(--b);border:1px solid rgba(63,74,60,.14);border-radius:99px;padding:7px 14px 7px 10px;font-size:13.5px;font-weight:700;color:var(--t)!important;text-decoration:none!important;margin-bottom:18px;justify-self:start}",
    "#duna-home .dh-rate b{font-weight:800}",
    "#duna-home .dh-h1{font-family:var(--disp);font-weight:400;font-size:clamp(40px,10.5vw,74px);line-height:1.02;letter-spacing:-.01em;margin:0 0 6px;color:var(--t);text-wrap:balance}",
    "#duna-home .dh-lead{font-size:18px;line-height:1.6;color:var(--g);margin:6px 0 24px;max-width:520px;text-wrap:pretty}",
    "#duna-home .dh-lead b{color:var(--t)}",
    "#duna-home .dh-regalo{display:flex;align-items:center;gap:10px;margin:18px 0 0;font-size:14.5px;font-weight:700;color:var(--t)}",
    "#duna-home .dh-regalo img{width:34px;height:34px;border-radius:9px}",
    "#duna-home .dh-trust{display:flex;flex-wrap:wrap;gap:8px;list-style:none;margin:18px 0 0;padding:0}",
    "#duna-home .dh-trust li{display:inline-flex;align-items:center;gap:7px;background:var(--b);border-radius:99px;padding:8px 13px;font-size:13px;font-weight:700;color:var(--t)}",
    "#duna-home .dh-trust svg{width:17px;height:17px;color:var(--s)}",
    "#duna-home .dh-hero-dune{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:70px;display:block}",
    /* el kit, recortado sobre el lino */
    "#duna-home .dh-kitv{position:relative;width:100%;max-width:520px;margin:14px auto 22px;aspect-ratio:1/1}",
    "#duna-home .dh-kitv .sol{position:absolute;left:12%;top:6%;width:80%;aspect-ratio:1/1;border-radius:50%;background:radial-gradient(circle at 50% 45%,#EFE7D9,#E7DDCB 70%,rgba(231,221,203,0) 71%)}",
    "#duna-home .dh-kitv .som{position:absolute;border-radius:50%;background:radial-gradient(closest-side,rgba(46,53,41,.32),rgba(46,53,41,0))}",
    "#duna-home .dh-kitv .som.s1{left:7%;bottom:3%;width:38%;height:7%}#duna-home .dh-kitv .som.s2{right:-1%;bottom:1%;width:68%;height:10%}",
    "#duna-home .dh-kitv img{position:absolute;display:block;height:auto;filter:drop-shadow(0 18px 22px rgba(46,53,41,.22))}",
    "#duna-home .dh-kitv .pj{left:9%;bottom:6%;height:84%;width:auto;max-width:none}",
    "#duna-home .dh-kitv .pc{right:2%;bottom:4%;width:60%}",
    "#duna-home .dh-kitv .tag{position:absolute;left:0;bottom:3%;display:inline-flex;align-items:center;gap:6px;background:var(--m);color:var(--s2);font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding:6px 11px;border-radius:99px;box-shadow:0 10px 20px -14px rgba(46,53,41,.7)}",
    "#duna-home .dh-ing-chip{position:absolute;display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.95);border:1px solid rgba(63,74,60,.14);border-radius:99px;padding:6px 12px 6px 8px;font-size:12.5px;font-weight:800;color:var(--t);box-shadow:0 10px 20px -14px rgba(46,53,41,.7);animation:dh-flota 6s ease-in-out infinite}",
    "#duna-home .dh-ing-chip i{width:9px;height:9px;border-radius:50%;background:var(--m)}",
    "#duna-home .dh-ing-chip.c1{right:6%;top:5%}#duna-home .dh-ing-chip.c2{right:1%;top:25%;animation-delay:-1.5s}#duna-home .dh-ing-chip.c3{right:33%;top:14%;animation-delay:-3s}#duna-home .dh-ing-chip.c4{right:4%;bottom:-1%;animation-delay:-4.5s}",
    "@keyframes dh-flota{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}",
    "@media(min-width:900px){#duna-home .dh-kitv{margin:0 auto}}",

    /* 02 reseñas: dos cintas infinitas */
    "#duna-home .dh-rev{padding-block:46px 50px;background:var(--b)}",
    "#duna-home .dh-rev-h{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;font-size:14.5px;font-weight:700;color:var(--t);margin:0 0 20px;padding-inline:18px;text-align:center}",
    "#duna-home .dh-rev-v{overflow:hidden;padding-block:6px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}",
    "#duna-home .dh-rev-v+.dh-rev-v{margin-top:14px}",
    "#duna-home .dh-rev-t{display:flex;align-items:flex-start;gap:14px;width:max-content;animation:dh-cinta 90s linear infinite}",
    "#duna-home .dh-rev-v.inv .dh-rev-t{animation-direction:reverse;animation-duration:120s}",
    "#duna-home .dh-rev-v.lenta .dh-rev-t{animation-duration:140s}",
    "#duna-home .dh-rev-v:hover .dh-rev-t,#duna-home .dh-rev-v:focus-within .dh-rev-t,#duna-home .dh-rev-v.quieta .dh-rev-t{animation-play-state:paused}",
    "#duna-home .dh-rf{width:250px;flex:0 0 auto;background:var(--b);border:1px solid rgba(63,74,60,.12);border-radius:20px;overflow:hidden;box-shadow:0 14px 30px -24px rgba(46,53,41,.7)}",
    "#duna-home .dh-rf-f{position:relative;aspect-ratio:4/5;background:#ECEFE6}",
    "#duna-home .dh-rf-f img{width:100%;height:100%;object-fit:cover;display:block}",
    "#duna-home .dh-rf-f .dh-ph{position:absolute;inset:0}",
    "#duna-home .dh-rf-f .tag{position:absolute;left:10px;bottom:10px;background:rgba(46,53,41,.82);color:var(--l);font-size:10.5px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;padding:5px 10px;border-radius:99px}",
    "#duna-home .dh-rf-b{padding:12px 14px 14px;display:flex;flex-direction:column;gap:6px}",
    "#duna-home .dh-rf-b p{margin:0;font-size:13.5px;line-height:1.5;color:var(--t);display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",
    "#duna-home .dh-rf-b small,#duna-home .dh-rc small{font-size:12.5px;font-weight:700;color:var(--g)}",
    "#duna-home .dh-rc{width:300px;flex:0 0 auto;background:var(--l2);border-radius:18px;padding:16px 18px;display:flex;flex-direction:column;gap:8px}",
    "#duna-home .dh-rc p{margin:0;font-size:14.5px;line-height:1.5;color:var(--t)}",
    "#duna-home .dh-rc-top{display:flex;align-items:center;gap:10px}",
    "#duna-home .dh-av{flex:0 0 auto;width:34px;height:34px;border-radius:50%;background:var(--sc2);color:var(--s);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px}",

    /* 04 mapa del roce */
    "#duna-home .dh-zonas-t{display:flex;justify-content:center;gap:6px;background:var(--l3);border-radius:16px;padding:5px;max-width:460px;margin:0 auto 18px}",
    "#duna-home .dh-zt{flex:1 1 0;min-height:48px;border:0;border-radius:12px;background:transparent;font-family:var(--disp);font-size:20px;color:var(--g);cursor:pointer;transition:background .2s ease,color .2s ease}",
    "#duna-home .dh-zt[aria-selected='true']{background:var(--b);color:var(--t);box-shadow:0 4px 12px -8px rgba(46,53,41,.6)}",
    "#duna-home .dh-zp[hidden]{display:none!important}",
    "#duna-home .dh-zp{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:14px}",
    "#duna-home .dh-zc{border-radius:22px;padding:22px 20px}",
    "#duna-home .dh-zc h3{font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;margin:0 0 14px}",
    "#duna-home .dh-zc ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}",
    "#duna-home .dh-zc li{display:flex;gap:12px;align-items:flex-start;font-size:15.5px;line-height:1.55}",
    "#duna-home .dh-zc li i{flex:0 0 auto;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;font-style:normal;font-family:var(--disp);font-size:14px}",
    "#duna-home .dh-zc li i svg{width:13px;height:13px}",
    "#duna-home .dh-zc.por{background:var(--b);border:1px solid rgba(63,74,60,.12)}#duna-home .dh-zc.por h3{color:var(--mo)}#duna-home .dh-zc.por li{color:var(--t)}#duna-home .dh-zc.por li i{background:#F3EADF;color:var(--mo)}",
    "#duna-home .dh-zc.que{background:var(--s);color:var(--l)}#duna-home .dh-zc.que h3{color:var(--mc)}#duna-home .dh-zc.que li{color:rgba(244,240,232,.92)}#duna-home .dh-zc.que li i{background:var(--m);color:var(--s2)}",

    /* 09 la guía de regalo */
    "#duna-home .dh-guia{display:grid;grid-template-columns:minmax(0,1fr);gap:22px;align-items:center;background:var(--s);color:var(--l);border-radius:28px;padding:28px 24px;overflow:hidden;position:relative}",
    "@media(min-width:860px){#duna-home .dh-guia{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:40px;padding:40px 44px}}",
    "#duna-home .dh-tapa{position:relative;justify-self:center;width:min(230px,70%);aspect-ratio:3/4;border-radius:6px 14px 14px 6px;background:#2E3529;box-shadow:inset 6px 0 0 rgba(0,0,0,.18),0 26px 40px -24px rgba(0,0,0,.6);padding:22px 18px;display:flex;flex-direction:column;justify-content:space-between;transform:rotate(-4deg)}",
    "#duna-home .dh-tapa small{font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--mc)}",
    "#duna-home .dh-tapa b{font-family:var(--disp);font-weight:400;font-size:30px;line-height:1.05;color:var(--l)}",
    "#duna-home .dh-tapa b span{display:block;color:var(--mc)}",
    "#duna-home .dh-tapa svg{width:100%;height:34px;display:block}",
    "#duna-home .dh-guia h2{font-family:var(--disp);font-weight:400;font-size:clamp(28px,5.4vw,40px);line-height:1.1;margin:0 0 12px;color:var(--l);text-wrap:balance}",
    "#duna-home .dh-guia h2 em{font-style:normal;color:var(--mc)}",
    "#duna-home .dh-guia p{margin:0 0 16px;font-size:16px;line-height:1.6;color:rgba(244,240,232,.88)}",
    "#duna-home .dh-guia ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:10px}",
    "#duna-home .dh-guia li{display:flex;gap:10px;align-items:flex-start;background:rgba(244,240,232,.08);border-radius:14px;padding:12px 14px;font-size:14.5px;line-height:1.45;color:var(--l)}",
    "#duna-home .dh-guia li i{flex:0 0 auto;width:24px;height:24px;border-radius:50%;background:var(--m);color:var(--s2);display:flex;align-items:center;justify-content:center}",
    "#duna-home .dh-guia li i svg{width:13px;height:13px}",

    /* 04 roce */
    "#duna-home .dh-pasos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr));gap:12px}",
    "@media(min-width:600px){#duna-home .dh-paso{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}}",
    "@media(min-width:600px) and (max-width:979px){#duna-home .dh-pasos{grid-template-columns:repeat(3,minmax(0,1fr))}}",
    "@media(min-width:980px){#duna-home .dh-pasos{grid-template-columns:repeat(5,minmax(0,1fr))}#duna-home .dh-paso{padding:18px 15px}#duna-home .dh-paso h3{font-size:21px}#duna-home .dh-paso p{font-size:14.5px}}",
    "#duna-home .dh-paso{background:var(--l2);border-radius:20px;padding:20px 18px;border:1.5px solid transparent;transition:border-color .35s ease,transform .35s ease,box-shadow .35s ease,background .35s ease;cursor:pointer;text-align:left;font-family:var(--sans);color:var(--t)}",
    "@media(max-width:599px){#duna-home .dh-paso{display:grid;grid-template-columns:54px minmax(0,1fr);column-gap:14px;padding:16px}#duna-home .dh-paso-i{grid-row:span 3;margin:0}}",
    "#duna-home .dh-paso.on{background:var(--b);border-color:var(--m);transform:translateY(-4px);box-shadow:0 18px 34px -24px rgba(46,53,41,.7)}",
    "#duna-home .dh-paso-i{width:54px;height:54px;border-radius:16px;background:var(--b);display:flex;align-items:center;justify-content:center;margin-bottom:14px;color:var(--s)}",
    "#duna-home .dh-paso.on .dh-paso-i{background:var(--s);color:var(--l)}",
    "#duna-home .dh-paso-i svg{width:30px;height:30px}",
    "#duna-home .dh-paso small{display:block;font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--mo);margin-bottom:4px}",
    "#duna-home .dh-paso h3{font-family:var(--disp);font-weight:400;font-size:23px;line-height:1.15;margin:0 0 6px}",
    "#duna-home .dh-paso p{margin:0;font-size:15px;line-height:1.55;color:var(--g)}",

    /* 05 mitos */
    "#duna-home .dh-mitos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(250px,100%),1fr));gap:12px}",
    "#duna-home .dh-mito{background:var(--b);border-radius:20px;padding:22px 20px;border:1px solid rgba(63,74,60,.1);display:flex;flex-direction:column;gap:10px}",
    "#duna-home .dh-mito .et{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;padding:5px 10px;border-radius:99px;background:var(--rojoF);color:var(--rojo)}",
    "#duna-home .dh-mito .et svg{width:12px;height:12px}",
    "#duna-home .dh-mito h3{font-family:var(--disp);font-weight:400;font-size:22px;line-height:1.2;margin:0;color:var(--t)}",
    "#duna-home .dh-mito p{margin:0;font-size:15px;line-height:1.6;color:var(--g)}",
    "#duna-home .dh-mito.ok{background:var(--s);border-color:var(--s)}",
    "#duna-home .dh-mito.ok .et{background:var(--m);color:var(--s2)}#duna-home .dh-mito.ok h3{color:var(--l)}#duna-home .dh-mito.ok p{color:rgba(244,240,232,.88)}",

    /* 05B más fuerte no es mejor */
    "#duna-home .dh-vs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(330px,100%),1fr));gap:14px}",
    "#duna-home .dh-vs-c{border-radius:24px;padding:24px 22px}",
    "#duna-home .dh-vs-c h3{font-family:var(--disp);font-weight:400;font-size:24px;line-height:1.15;margin:0 0 16px}",
    "#duna-home .dh-vs-c ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}",
    "#duna-home .dh-vs-c li{display:flex;gap:12px;align-items:flex-start}",
    "#duna-home .dh-vs-c li i{flex:0 0 auto;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px}",
    "#duna-home .dh-vs-c li i svg{width:14px;height:14px}",
    "#duna-home .dh-vs-c li b{display:block;font-size:16px;font-weight:800;line-height:1.35}",
    "#duna-home .dh-vs-c li span{display:block;font-size:14.5px;line-height:1.55;margin-top:2px}",
    "#duna-home .dh-vs-c.no{background:#F5EFEC;border:1px solid #EBDDD7}",
    "#duna-home .dh-vs-c.no h3{color:var(--t)}#duna-home .dh-vs-c.no li i{background:var(--rojoF);color:var(--rojo)}#duna-home .dh-vs-c.no li b{color:var(--t)}#duna-home .dh-vs-c.no li span{color:var(--g)}",
    "#duna-home .dh-vs-c.si{background:var(--s);color:var(--l)}",
    "#duna-home .dh-vs-c.si h3{color:var(--l)}#duna-home .dh-vs-c.si li i{background:var(--m);color:var(--s2)}#duna-home .dh-vs-c.si li span{color:rgba(244,240,232,.86)}",
    "#duna-home .dh-vs-nota{margin:18px auto 0;text-align:center;font-size:13.5px;color:var(--g2);max-width:560px}",

    /* 06 ingredientes */
    "#duna-home .dh-ing{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;align-items:center}",
    "#duna-home .dh-ing-foto{position:relative;aspect-ratio:1/1;max-width:100%;display:flex;align-items:center;justify-content:center}",
    "#duna-home .dh-ing-foto:before{content:'';position:absolute;inset:6%;border-radius:50%;background:radial-gradient(circle at 50% 45%,#F6F0E4,#EAE3D5 70%)}",
    "#duna-home .dh-ing-foto img{position:relative;width:72%;height:auto;display:block;filter:drop-shadow(0 24px 26px rgba(46,53,41,.25))}",
    "#duna-home .dh-ing-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}",
    "@media(min-width:960px){#duna-home .dh-ing{grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) minmax(0,1fr);gap:22px}#duna-home .dh-ing-col{grid-template-columns:minmax(0,1fr)}#duna-home .dh-ing-foto{order:0}}",
    "@media(max-width:959px){#duna-home .dh-ing-foto{max-width:460px;margin:0 auto 6px;width:100%}#duna-home .dh-ing .dh-ing-foto{order:-1}}",
    "#duna-home .dh-ingc{background:var(--l2);border-radius:20px;padding:18px 16px;display:flex;flex-direction:column;gap:6px}",
    "#duna-home .dh-ingc .ic{width:46px;height:46px;border-radius:14px;background:var(--b);color:var(--s);display:flex;align-items:center;justify-content:center;margin-bottom:6px}",
    "#duna-home .dh-ingc .ic svg{width:28px;height:28px}",
    "#duna-home .dh-ingc small{font-size:11.5px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--mo)}",
    "#duna-home .dh-ingc h3{font-family:var(--disp);font-weight:400;font-size:22px;line-height:1.15;margin:0}",
    "#duna-home .dh-ingc p{margin:0;font-size:14.5px;line-height:1.55;color:var(--g)}",
    "#duna-home .dh-datos{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:22px;list-style:none;padding:0}",
    "#duna-home .dh-datos li{background:var(--b);border:1px solid rgba(63,74,60,.16);border-radius:99px;padding:9px 16px;font-size:14px;font-weight:800;color:var(--t)}",

    /* 07 rutina */
    "#duna-home .dh-rut{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:16px}",
    "#duna-home .dh-rut-c{background:var(--b);border-radius:24px;overflow:hidden;border:1px solid rgba(63,74,60,.1);display:grid;grid-template-columns:minmax(0,1fr)}",
    "@media(min-width:600px){#duna-home .dh-rut-c{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr)}}",
    "#duna-home .dh-rut-f{position:relative;aspect-ratio:1/1;max-width:100%;background:radial-gradient(circle at 50% 42%,#F7F2E8,#EAE3D5);display:flex;align-items:center;justify-content:center;padding:9%}",
    "#duna-home .dh-rut-f img{max-width:100%;max-height:100%;width:auto;height:auto;display:block;filter:drop-shadow(0 16px 18px rgba(46,53,41,.25))}",
    "#duna-home .dh-rut-f .tag{position:absolute;left:12px;top:12px;background:var(--m);color:var(--s2);font-size:11.5px;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding:5px 10px;border-radius:99px}",
    "#duna-home .dh-rut-b{padding:22px 20px;display:flex;flex-direction:column;gap:8px;justify-content:center}",
    "#duna-home .dh-rut-b .n{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:800;letter-spacing:1.6px;text-transform:uppercase;color:var(--mo)}",
    "#duna-home .dh-rut-b .n b{width:30px;height:30px;border-radius:50%;background:var(--s);color:var(--l);display:flex;align-items:center;justify-content:center;font-family:var(--disp);font-weight:400;font-size:16px;letter-spacing:0}",
    "#duna-home .dh-rut-b h3{font-family:var(--disp);font-weight:400;font-size:25px;line-height:1.15;margin:4px 0 0}",
    "#duna-home .dh-rut-b p{margin:0;font-size:15.5px;line-height:1.6;color:var(--g)}",
    "#duna-home .dh-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:10px;margin-top:16px}",
    "#duna-home .dh-tip{display:flex;gap:12px;align-items:flex-start;background:var(--sc2);border-radius:16px;padding:14px 16px;font-size:14.5px;line-height:1.55;color:var(--t)}",
    "#duna-home .dh-tip i{flex:0 0 auto;width:26px;height:26px;border-radius:50%;background:var(--s);color:var(--l);display:flex;align-items:center;justify-content:center}",
    "#duna-home .dh-tip i svg{width:14px;height:14px}",

    /* 08 tratamientos */
    "#duna-home .dh-packs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;max-width:780px;margin:0 auto}",
    "#duna-home .dh-pack{position:relative;display:flex;flex-direction:column;gap:6px;background:var(--b);border:1.5px solid rgba(63,74,60,.18);border-radius:22px;padding:24px 20px 20px;color:var(--t);text-decoration:none!important;transition:border-color .2s ease,transform .2s ease}",
    "#duna-home .dh-pack:hover{border-color:var(--s);transform:translateY(-3px)}",
    "#duna-home .dh-pack.top{border-color:var(--s);background:#F5F7F1;box-shadow:0 20px 36px -26px rgba(46,53,41,.9)}",
    "#duna-home .dh-pack-b{position:absolute;top:-12px;left:20px;background:var(--m);color:var(--s2);font-size:12px;font-weight:800;padding:5px 12px;border-radius:99px}",
    "#duna-home .dh-pack h3{font-family:var(--disp);font-weight:400;font-size:28px;line-height:1.1;margin:0}",
    "#duna-home .dh-pack .sub{font-size:14px;color:var(--g)}",
    "#duna-home .dh-pack .pr{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;margin-top:10px;font-variant-numeric:tabular-nums}",
    "#duna-home .dh-pack .pr b{font-size:26px;font-weight:800;letter-spacing:-.01em}",
    "#duna-home .dh-pack .pr s{font-size:14px;color:var(--g2)}",
    "#duna-home .dh-pack .xm{font-size:13.5px;font-weight:700;color:var(--s)}",
    "#duna-home .dh-pack .ah{align-self:flex-start;font-size:12.5px;font-weight:800;color:var(--mo);background:#F3EADF;border-radius:99px;padding:4px 10px}",
    "#duna-home .dh-pack .go{margin-top:auto;padding-top:14px;display:flex;align-items:center;gap:8px;font-weight:800;font-size:15px;color:var(--s)}",
    "#duna-home .dh-pack.top .go{color:var(--mo)}",
    "@media(max-width:599px){#duna-home .dh-packs{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 10px}#duna-home .dh-pack{padding:22px 14px 14px;border-radius:18px}#duna-home .dh-pack h3{font-size:23px}#duna-home .dh-pack .sub{font-size:12.5px;line-height:1.35}#duna-home .dh-pack .pr{flex-direction:column;align-items:flex-start;gap:0;margin-top:6px}#duna-home .dh-pack .pr b{font-size:21px}#duna-home .dh-pack .pr s{font-size:12.5px}#duna-home .dh-pack .xm{font-size:12.5px}#duna-home .dh-pack .ah{font-size:11.5px;padding:3px 8px}#duna-home .dh-pack .go{font-size:13.5px;padding-top:10px}#duna-home .dh-pack-b{left:12px;font-size:11px;padding:4px 9px}}",
    "#duna-home .dh-pack .gift{display:flex;align-items:center;gap:8px;margin-top:10px;padding:9px 11px;border-radius:11px;background:#F3EADF;color:var(--mo);font-size:13.5px;font-weight:800;line-height:1.3}",
    "#duna-home .dh-pack.top .gift{background:var(--m);color:var(--s2)}",
    "#duna-home .dh-pack .gift svg{width:17px;height:17px;flex:0 0 auto}",
    /* el pack de 1: fila chica, punteada, debajo de los dos grandes */
    "#duna-home .dh-pack.lite{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;align-items:center;gap:6px 16px;padding:16px 20px;background:transparent;border-style:dashed}",
    "#duna-home .dh-pack.lite .l{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 220px}",
    "#duna-home .dh-pack.lite h3{font-size:21px}",
    "#duna-home .dh-pack.lite .sub{font-size:13.5px}",
    "#duna-home .dh-pack .nog{display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:var(--g2);margin-top:2px}",
    "#duna-home .dh-pack .nog svg{width:13px;height:13px;flex:0 0 auto}",
    "#duna-home .dh-pack.lite .pr{margin:0}",
    "#duna-home .dh-pack.lite .pr b{font-size:20px}",
    "#duna-home .dh-pack.lite .go{margin:0;padding:0;font-size:14px}",
    "@media(max-width:599px){#duna-home .dh-pack .gift{font-size:12px;padding:7px 8px;gap:6px}#duna-home .dh-pack .gift svg{width:15px;height:15px}#duna-home .dh-pack.lite{padding:14px 16px}#duna-home .dh-pack.lite h3{font-size:19px}#duna-home .dh-pack.lite .pr b{font-size:18px}#duna-home .dh-pack.lite .go{font-size:13px}}",
    "#duna-home .dh-incl{margin:22px 0 0;text-align:center;font-size:15px;line-height:1.6;color:var(--g)}",
    "#duna-home .dh-incl b{color:var(--t)}",

    /* 09 garantía y preguntas */
    "#duna-home .dh-gf{display:grid;grid-template-columns:minmax(0,1fr);gap:22px;align-items:start}",
    "@media(min-width:900px){#duna-home .dh-gf{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:40px}}",
    "#duna-home .dh-gar{background:var(--b);border:1.5px dashed rgba(63,74,60,.45);border-radius:24px;padding:28px 24px;text-align:center}",
    "#duna-home .dh-gar svg{width:104px;height:104px;display:block;margin:0 auto 12px}",
    "#duna-home .dh-gar h3{font-family:var(--disp);font-weight:400;font-size:clamp(25px,4.5vw,30px);line-height:1.15;margin:0 0 10px}",
    "#duna-home .dh-gar p{margin:0;font-size:15.5px;line-height:1.65;color:var(--g)}",
    "#duna-home .dh-fq{background:var(--b);border-radius:16px;margin:0 0 9px;border:1px solid rgba(63,74,60,.13);overflow:hidden}",
    "#duna-home .dh-fq button{display:flex;justify-content:space-between;align-items:center;gap:12px;width:100%;min-height:56px;background:none;border:0;padding:16px 18px;font-family:var(--sans);font-size:16px;font-weight:800;color:var(--t);text-align:left;cursor:pointer;line-height:1.35}",
    "#duna-home .dh-fq button i{flex:0 0 auto;width:28px;height:28px;border-radius:50%;background:var(--l2);position:relative}",
    "#duna-home .dh-fq button i:before,#duna-home .dh-fq button i:after{content:'';position:absolute;top:50%;left:50%;width:12px;height:2px;margin:-1px 0 0 -6px;background:var(--s);border-radius:2px;transition:transform .3s ease}",
    "#duna-home .dh-fq button i:after{transform:rotate(90deg)}#duna-home .dh-fq.on button i:after{transform:rotate(0)}",
    "#duna-home .dh-fq-a{max-height:0;overflow:hidden;transition:max-height .4s ease}",
    "#duna-home .dh-fq-a p{margin:0;padding:0 18px 18px;font-size:15.5px;line-height:1.65;color:var(--g)}",

    /* 10 cierre */
    "#duna-home .dh-fin{text-align:center;padding-block:76px 84px;overflow:hidden}",
    "#duna-home .dh-fin h2{font-family:var(--disp);font-weight:400;font-size:clamp(40px,10vw,76px);line-height:1.02;margin:0 0 16px;color:var(--l);text-wrap:balance}",
    "#duna-home .dh-fin h2 span{display:block;color:var(--mc)}",
    "#duna-home .dh-fin p{font-size:18px;line-height:1.6;color:rgba(244,240,232,.88);margin:0 auto 28px;max-width:460px}",
    "#duna-home .dh-fin .firma{font-family:var(--disp);font-size:20px;color:var(--mc);margin:-10px 0 28px}",
    "#duna-home .dh-fin-dune{position:absolute;left:0;right:0;bottom:0;width:100%;height:80px;opacity:.2;pointer-events:none}",

    /* 11 pie de página */
    "#dh-pie{display:block;box-sizing:border-box;background:var(--l2);border-top:1px solid rgba(63,74,60,.1);margin:0;padding:52px 0 28px;width:100%;max-width:none;float:none;position:static;clear:both}",
    "#dh-pie .pie-g{display:grid;grid-template-columns:minmax(0,1fr);gap:30px}",
    "@media(min-width:800px){#dh-pie .pie-g{grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,1fr));gap:36px}}",
    "#dh-pie .pie-logo{display:block;width:170px;max-width:60%;margin:0 0 14px}",
    "#dh-pie .pie-logo img{width:100%;height:auto;display:block}",
    "#dh-pie .pie-logo-t{display:inline-flex;flex-direction:column;line-height:1;color:var(--s);text-decoration:none!important;margin:0 0 14px}",
    "#dh-pie .pie-logo-t small{font-size:10px;font-weight:700;letter-spacing:6px;margin:0 0 2px 3px}#dh-pie .pie-logo-t b{font-family:var(--disp);font-weight:400;font-size:46px}",
    "#dh-pie .pie-frase{margin:0;font-size:15px;line-height:1.6;color:var(--g);max-width:300px}",
    "#dh-pie h3{font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--mo);margin:0 0 12px}",
    "#dh-pie ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}",
    "#dh-pie li a,#dh-pie li span{display:inline-flex;align-items:center;gap:8px;min-height:36px;font-size:15px;font-weight:600;color:var(--t)!important;text-decoration:none!important}",
    "#dh-pie li a:hover{color:var(--mo)!important}",
    "#dh-pie li svg{width:18px;height:18px;color:var(--s)}",
    "#dh-pie .pie-sellos{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;margin:34px 0 0;padding:0;list-style:none}",
    "#dh-pie svg{fill:none}",
    "#dh-pie .pie-sellos li{display:inline-flex;align-items:center;gap:7px;background:var(--b);border:1px solid rgba(63,74,60,.12);border-radius:99px;padding:7px 13px;font-size:13px;font-weight:700;color:var(--t)}",
    "#dh-pie .pie-sellos svg{width:16px;height:16px;color:var(--s)}",
    "#dh-pie .pie-legal{margin-top:26px;padding-top:20px;border-top:1px solid rgba(63,74,60,.12);display:flex;flex-wrap:wrap;align-items:center;gap:10px 20px;font-size:13px;color:var(--g)}",
    "#dh-pie .pie-legal a{color:var(--g)!important;text-decoration:underline;text-underline-offset:3px}",
    "#dh-pie .pie-legal img{max-height:52px;width:auto;display:block}",
    "#dh-pie .pie-copy{margin-left:auto}",
    "@media(max-width:799px){#dh-pie .pie-copy{margin-left:0;width:100%}}",

    /* barra fija */
    "#dh-sticky{position:fixed;left:0;right:0;bottom:0;z-index:9990;background:rgba(255,255,255,.97);border-top:1px solid rgba(63,74,60,.12);box-shadow:0 -10px 30px -18px rgba(46,53,41,.6);padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:12px;transform:translateY(110%);transition:transform .35s ease;font-family:'Nunito Sans',-apple-system,'Segoe UI',sans-serif}",
    "#dh-sticky.on{transform:none}",
    "#dh-sticky .t{flex:1 1 auto;min-width:0;line-height:1.25}",
    "#dh-sticky .t b{display:block;font-size:14.5px;font-weight:800;color:#2B3027;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    "#dh-sticky .t span{font-size:12.5px;font-weight:700;color:#8E6232}",
    "#dh-sticky a{flex:0 0 auto;display:inline-flex;align-items:center;min-height:48px;padding:12px 20px;border-radius:12px;background:#3F4A3C;color:#F4F0E8!important;font-weight:800;font-size:15px;text-decoration:none!important}",
    "@media(min-width:900px){#dh-sticky{display:none}}",
    "@media(prefers-reduced-motion:reduce){#duna-home *,.dh-cinta-t{animation:none!important;transition:none!important}#duna-home .dh-rev-v{overflow-x:auto}.dh-cinta{overflow-x:auto}}"
  ].join("");

  /* ---------- íconos de línea ---------- */
  var I = {
    hojita: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14z"/><path d="M5 19c3-4 6-7 10-9"/></svg>',
    camion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
    escudo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/></svg>',
    tarjeta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/></svg>',
    candado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    roce: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 21c4-3 8 3 12 0s8-3 12 0"/><path d="M10 11H4m0 0 3-3M4 11l3 3M22 11h6m0 0-3-3m3 3-3 3"/></svg>',
    gota: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4c-5 7-8 11-8 15a8 8 0 0 0 16 0c0-4-3-8-8-15z"/><path d="M12 19a4 4 0 0 0 4 4"/></svg>',
    bacteria: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="5" y="6" width="12" height="6" rx="3" transform="rotate(-20 11 9)"/><rect x="15" y="17" width="12" height="6" rx="3" transform="rotate(25 21 20)"/><circle cx="9" cy="22" r="3"/><circle cx="23" cy="9" r="2.4"/><circle cx="26" cy="6.5" r="1.4"/></svg>',
    granito: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 24h7c2 0 3-9 6-9s4 9 6 9h7"/><circle cx="16" cy="12" r="1.6" fill="currentColor"/><path d="M11 9l-2-2M21 9l2-2M16 6V4"/></svg>',
    jabon: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="13" width="12" height="15" rx="3"/><path d="M10 13V9h6v4M13 9V5h5"/><circle cx="24.5" cy="12.5" r="2.4"/><circle cx="26.5" cy="20" r="1.7"/><circle cx="23" cy="6" r="1.5"/></svg>',
    hoja: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 28C10 20 14 12 24 4"/><path d="M12 20c-4-1-6-4-6-8 4 0 7 2 8 6M15 15c-1-4 0-8 4-10 1 4 0 8-3 10M18 11c3-2 7-2 9 0-2 3-6 4-9 2"/></svg>',
    lavanda: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 29V12"/><ellipse cx="16" cy="9" rx="2.2" ry="3"/><ellipse cx="12.6" cy="13.5" rx="2" ry="2.6" transform="rotate(-25 12.6 13.5)"/><ellipse cx="19.4" cy="13.5" rx="2" ry="2.6" transform="rotate(25 19.4 13.5)"/><ellipse cx="12.8" cy="18.5" rx="1.8" ry="2.4" transform="rotate(-25 12.8 18.5)"/><ellipse cx="19.2" cy="18.5" rx="1.8" ry="2.4" transform="rotate(25 19.2 18.5)"/><path d="M16 24c-3-1-5-3-6-5"/></svg>',
    pasto: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 29C15 20 14 11 10 3M16 29c1-8 3-15 8-23M16 29c0-7 0-14 1-20M12 29c-1-5-3-9-7-12M20 29c2-5 4-8 8-10"/></svg>',
    uva: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 9V4M16 6c2-2 5-2 7 0"/><circle cx="12" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="15" cy="17" r="3"/><circle cx="21" cy="17" r="3"/><circle cx="9" cy="17" r="3"/><circle cx="12" cy="22" r="3"/><circle cx="18" cy="22" r="3"/><circle cx="15" cy="27" r="2.6"/></svg>',
    brazo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.5 2.6 2.3 4.3 5 4.5"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M4 7l8 6 8-6"/></svg>'
  };
  var DUNA_SVG = '<svg class="dh-hero-dune" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 46 C200 10 380 62 600 34 S980 14 1200 36 V70 H0Z" fill="#FFFFFF"/></svg>';

  /* ---------- datos ---------- */
  var RES = ej(HC.resenas);
  var AD = ej(HC.antesDespues);
  var RT = HC.rating || {};
  var NOPS = RT.cantidadOpiniones ? Number(RT.cantidadOpiniones).toLocaleString("es-AR") : "";
  var PUNT = String(RT.puntuacion || "").replace(".", ",");
  function linkPack(p) { return URLP + (URLP.indexOf("?") === -1 ? "?" : "&") + "pack=" + encodeURIComponent(p.qty); }

  /* ==========================================================================
     SECCIONES
     ========================================================================== */
  function sec(id, cls, html) {
    var el = document.createElement("section"); el.id = id; el.className = cls || ""; el.innerHTML = html; return el;
  }

  /* ---------- 01 · PORTADA ---------- */
  function hero() {
    var rate = PUNT ? '<a class="dh-rate a-rate" href="#dh-resenas">' + stars(RT.puntuacion) + " <b>" + PUNT + "</b> · " + NOPS + " opiniones</a>" : "";
    return sec("dh-hero", "dh-hero",
      '<div class="dh-in dh-hero-g">' + rate +
      '<div class="a-h"><p class="dh-kick">Para los granitos de la cola, la espalda y los muslos</p>' +
      '<h1 class="dh-h1">Volvé a ponerte la malla <em>sin taparte.</em></h1></div>' +
      '<div class="a-v"><div class="dh-kitv"><span class="sol"></span><span class="som s1"></span><span class="som s2"></span>' +
      '<img class="pj" src="' + esc(IMG.jabon) + '" alt="Jabón líquido antibacterial de Duna, 150 ml">' +
      '<img class="pc" src="' + esc(IMG.crema) + '" alt="Crema Chau Granitos de Duna, pote de 100 ml">' +
      '<span class="tag" style="text-transform:none;letter-spacing:0;font-size:12px">Regalo desde el pack de 2</span>' +
      '<span class="dh-ing-chip c1"><i></i>Tea tree</span><span class="dh-ing-chip c2"><i></i>Lavanda</span><span class="dh-ing-chip c3"><i></i>Lemongrass</span><span class="dh-ing-chip c4"><i></i>Semilla de uva</span>' +
      "</div></div>" +
      '<div class="a-txt"><p class="dh-lead">Durante años pensé que era acné. No lo era. Creé Chau Granitos con <b>activos 100% naturales</b>, sin ácidos fuertes ni partículas que lijan, para la piel del cuerpo que vive tapada.</p>' +
      '<div class="dh-cta-row">' + cta() + '<a class="dh-link" href="#dh-roce">De dónde salen</a></div>' +
      '<p class="dh-regalo"><img src="' + ICO_JABON + '" alt="">Desde el pack de 2: jabón líquido de 150 ml + ebook de regalo</p>' +
      '<ul class="dh-trust"><li>' + I.hojita + "Activos 100% naturales</li><li>" + I.camion + "Envío gratis</li><li>" + I.escudo + "Garantía " + (HC.garantiaDias || 30) + " días</li><li>" + I.tarjeta + "3 cuotas sin interés</li></ul></div>" +
      "</div>" + DUNA_SVG);
  }

  /* ---------- 02 · RESEÑAS EN CINTAS INFINITAS ----------
     Arriba: las que tienen foto (antes y después + fotos de clientas).
     Abajo: las de texto. Corren en sentidos opuestos y se frenan al tocarlas. */
  function resenas() {
    var conFoto = [], usados = {};
    AD.forEach(function (p) {
      if (!p.foto) return;
      var match = RES.filter(function (r) { return r.t === p.texto; })[0];
      if (match) usados[match.n + "|" + match.t] = 1;
      conFoto.push({ n: p.nombre, edad: p.edad, c: match ? match.c : "", e: match ? match.e : 5, t: p.texto, foto: p.foto, ad: true });
    });
    RES.forEach(function (r) { if (r.foto) { conFoto.push(r); usados[r.n + "|" + r.t] = 1; } });
    var texto = RES.filter(function (r) { return !r.foto && !usados[r.n + "|" + r.t]; });
    if (!conFoto.length && !texto.length) return null;
    function cf(r) {
      return '<article class="dh-rf"><div class="dh-rf-f">' + foto(r.foto, (r.ad ? "Antes y después de " : "Foto de ") + r.n, r.ad ? "Antes y después" : "Foto de la clienta") +
        '<span class="tag">' + (r.ad ? "Antes y después" : "Foto de clienta") + "</span></div>" +
        '<div class="dh-rf-b">' + stars(r.e) + "<p>“" + esc(r.t) + "”</p><small>" + esc(r.n) + (r.edad ? ", " + esc(r.edad) : "") + (r.c ? " · " + esc(r.c) : "") + "</small></div></article>";
    }
    function ct(r) {
      return '<article class="dh-rc"><div class="dh-rc-top"><span class="dh-av">' + inicial(r.n) + "</span>" + stars(r.e) + "</div><p>“" + esc(r.t) + "”</p><small>" + esc(r.n) + (r.edad ? ", " + esc(r.edad) : "") + (r.c ? " · " + esc(r.c) : "") + "</small></article>";
    }
    /* las de texto se reparten en dos cintas: una corre a la derecha y la otra a la izquierda */
    var t1 = texto.filter(function (r, i) { return i % 2 === 0; }), t2 = texto.filter(function (r, i) { return i % 2 === 1; });
    if (!t2.length) t2 = t1;
    var A = conFoto.map(cf).join(""), B = t1.map(ct).join(""), C = t2.map(ct).join("");
    function cinta(html, cls, label) { return html ? '<div class="dh-rev-v ' + cls + '" tabindex="0" aria-label="' + label + '"><div class="dh-rev-t">' + html + html + "</div></div>" : ""; }
    return sec("dh-resenas", "dh-rev",
      '<p class="dh-rev-h">' + stars(5) + " " + (PUNT ? PUNT + " de 5 · " : "") + (NOPS ? NOPS + " opiniones de clientas" : "Lo que dicen ellas") + "</p>" +
      cinta(A, "lenta", "Reseñas con foto de clientas") + cinta(B, "inv", "Reseñas de clientas") + cinta(C, "", "Más reseñas de clientas") +
      '<p class="dh-legal" style="text-align:center;font-size:12.5px;color:#6E7368;margin:18px 18px 0">Resultados individuales: pueden variar según cada piel y la constancia de uso.</p>');
  }
  function resenasBind(el) {
    /* en el celular, tocar la cinta la frena; tocar de nuevo la suelta */
    el.querySelectorAll(".dh-rev-v").forEach(function (v) {
      v.addEventListener("click", function () { v.classList.toggle("quieta"); });
    });
  }

  /* ---------- 03 · DE DÓNDE SALEN LOS GRANITOS (5 pasos, el último es el jabón) ---------- */
  var PASOS = [
    [I.roce, "El roce", "La calza, el jean, las tiras del corpiño y las horas sentada rozan la piel todo el día."],
    [I.gota, "El sudor", "El calor y la transpiración quedan atrapados contra la piel."],
    [I.bacteria, "Bacterias y hongos", "La piel tapada, húmeda y caliente es el lugar ideal para que se multipliquen."],
    [I.granito, "El granito", "El poro se inflama: aparecen los granitos, la picazón y la textura áspera."],
    [I.jabon, "El jabón de siempre", "pH alto, perfume y desodorante: puede irritar más la piel. Al otro día, el ciclo arranca de nuevo."]
  ];
  function roce() {
    var li = PASOS.map(function (p, i) {
      return '<button type="button" class="dh-paso dh-rv" data-i="' + i + '"><span class="dh-paso-i">' + p[0] + "</span><small>Paso " + (i + 1) + "</small><h3>" + p[1] + "</h3><p>" + p[2] + "</p></button>";
    }).join("");
    return sec("dh-roce", "dh-sec",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Lo que nadie me explicó</p><h2 class="dh-h2">¿De dónde salen <em>los granitos</em>?</h2>' +
      '<p class="dh-sub">En la cola, la espalda y los muslos la piel vive tapada: ropa, sudor y roce todo el día. Y en la ducha, el jabón de siempre no ayuda. Así se forman:</p></div>' +
      '<div class="dh-pasos">' + li + "</div></div>");
  }
  function roceBind(el) {
    var ps = el.querySelectorAll(".dh-paso"), cur = 0, auto = !REDUCIR, t = null;
    function ir(i) { cur = i; ps.forEach(function (p, k) { p.classList.toggle("on", k === i); }); }
    ps.forEach(function (p) { p.addEventListener("click", function () { auto = false; clearInterval(t); ir(+p.getAttribute("data-i")); }); });
    ir(0);
    if (auto && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { clearInterval(t); t = setInterval(function () { if (auto) ir((cur + 1) % ps.length); }, 2400); }
        else clearInterval(t);
      }, { threshold: 0.3 });
      io.observe(el);
    }
  }

  /* ---------- 04 · MAPA DEL ROCE ----------
     Por qué aparecen en cada zona y qué hacer. Información que no está en
     la landing (sale de la guía de regalo). */
  var ZONAS = {
    cola: { nombre: "Cola",
      por: ["Horas sentada: el peso y el calor no dejan respirar la piel.", "Bombachas sintéticas y calzas que retienen el sudor.", "La malla o la ropa de gimnasio mojada que te dejás puesta."],
      que: ["Bombacha de algodón y levantarte a caminar cada hora.", "Sacate la malla o la calza mojada apenas puedas.", "Jabón en la ducha y crema a la noche, sin frotar."] },
    espalda: { nombre: "Espalda",
      por: ["Las tiras del corpiño y la mochila rozan siempre en el mismo lugar.", "El sudor del gimnasio queda atrapado bajo la remera.", "El acondicionador del pelo que cae por la espalda en la ducha."],
      que: ["Enjuagate el pelo primero y lavá la espalda al final.", "Remera de algodón y ducha apenas terminás de entrenar.", "Para ponerte la crema, usá un aplicador de espalda."] },
    muslos: { nombre: "Muslos",
      por: ["El roce entre los muslos al caminar, más con calor.", "El jean y las calzas ajustadas.", "Depilarte con una hoja gastada o en seco."],
      que: ["Un short de algodón debajo del vestido.", "Hoja nueva, espuma y a favor del pelo.", "La noche que te depilás, salteá la crema en esa zona."] }
  };
  function mapa() {
    var keys = ["cola", "espalda", "muslos"];
    var tabs = keys.map(function (k, i) { return '<button type="button" class="dh-zt" role="tab" id="dh-zt-' + k + '" aria-controls="dh-zp-' + k + '" aria-selected="' + (i === 0) + '" data-k="' + k + '">' + ZONAS[k].nombre + "</button>"; }).join("");
    var panes = keys.map(function (k, i) {
      var z = ZONAS[k];
      return '<div class="dh-zp" role="tabpanel" id="dh-zp-' + k + '" aria-labelledby="dh-zt-' + k + '"' + (i ? " hidden" : "") + ">" +
        '<div class="dh-zc por"><h3>Por qué salen en la ' + z.nombre.toLowerCase() + "</h3><ul>" + z.por.map(function (x, n) { return "<li><i>" + (n + 1) + "</i><span>" + esc(x) + "</span></li>"; }).join("") + "</ul></div>" +
        '<div class="dh-zc que"><h3>Qué podés hacer</h3><ul>' + z.que.map(function (x) { return "<li><i>" + CHECK + "</i><span>" + esc(x) + "</span></li>"; }).join("") + "</ul></div></div>";
    }).join("");
    return sec("dh-mapa", "dh-sec dh-lino",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">El mapa del roce</p><h2 class="dh-h2">Cada zona <em>tiene su porqué</em></h2>' +
      '<p class="dh-sub">Elegí dónde te salen y mirá qué los provoca ahí y qué podés cambiar desde hoy.</p></div>' +
      '<div class="dh-zonas-t" role="tablist" aria-label="Elegí la zona">' + tabs + "</div>" + panes + "</div>");
  }
  function mapaBind(el) {
    var tabs = el.querySelectorAll(".dh-zt");
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        var k = t.getAttribute("data-k");
        tabs.forEach(function (x) { x.setAttribute("aria-selected", x === t ? "true" : "false"); });
        el.querySelectorAll(".dh-zp").forEach(function (p) { p.hidden = p.id !== "dh-zp-" + k; });
      });
    });
  }

  /* ---------- 05 · MITOS ---------- */
  var MITOS = [
    [0, "“Es falta de higiene.”", "Pasa por el roce, el sudor y la piel tapada. Bañarte más no lo resuelve, y frotar lo empeora."],
    [0, "“Es el mismo acné de la cara.”", "La piel del cuerpo vive tapada y rozada. Por eso lo que te ponés en la cara no funciona en la cola, la espalda ni los muslos."],
    [0, "“Hay que exfoliar fuerte.”", "Frotar le suma roce a una piel que ya está irritada. Hay que limpiar suave, sin lastimar."],
    [1, "Con la rutina correcta, la piel se calma.", "Limpiar sin frotar, cuidar el poro de las bacterias y los hongos, y ser constante. Eso es lo que se nota."]
  ];
  function mitos() {
    var li = MITOS.map(function (m) {
      return '<div class="dh-mito dh-rv' + (m[0] ? " ok" : "") + '"><span class="et">' + (m[0] ? CHECK + "Verdad" : CROSS + "Mito") + "</span><h3>" + esc(m[1]) + "</h3><p>" + esc(m[2]) + "</p></div>";
    }).join("");
    return sec("dh-mitos", "dh-sec",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Lo que nadie te dice</p><h2 class="dh-h2">Mitos que te hicieron <em>sentir culpable</em></h2>' +
      '<p class="dh-sub">Yo creí todos. Por eso probé de todo y nada funcionaba.</p></div>' +
      '<div class="dh-mitos">' + li + "</div></div>");
  }

  /* ---------- 05B · MÁS FUERTE NO ES MEJOR ----------
     Comparación por INGREDIENTES, sin nombrar marcas (Ley de Lealtad
     Comercial). Cada frase dice lo que el ingrediente PUEDE hacer. */
  var AGRESIVOS = [
    ["Ácidos fuertes", "Salicílico o glicólico en alta concentración: pueden arder, resecar y dejar la piel sensible al sol."],
    ["Peróxido de benzoílo", "Reseca, irrita y decolora la ropa y las sábanas."],
    ["Exfoliantes con partículas", "Lijan una piel que ya está lastimada por el roce."],
    ["Alcohol y perfumes fuertes", "Resecan y pueden irritar las zonas sensibles."]
  ];
  var SUAVES = [
    ["Activos 100% naturales", "Tea tree, lavanda, lemongrass y aceite de semilla de uva."],
    ["Sin ácidos fuertes ni partículas", "Cuida el poro sin lijar ni quemar la piel."],
    ["Calma mientras cuida", "La lavanda y la semilla de uva calman y nutren la piel irritada."],
    ["Para usar todos los días", "Pensada para la constancia, que es lo que de verdad se nota."]
  ];
  function sinAgresion() {
    function li(x, ok) { return '<li><i>' + (ok ? CHECK : CROSS) + "</i><div><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></div></li>"; }
    return sec("dh-natural", "dh-sec dh-lino",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Lo que tu piel no necesita</p><h2 class="dh-h2">Más fuerte <em>no es mejor</em></h2>' +
      '<p class="dh-sub">Muchas cremas de farmacia y de primeras marcas atacan el granito con fórmulas agresivas. En una piel que ya vive irritada por el roce, eso puede empeorarla.</p></div>' +
      '<div class="dh-vs"><div class="dh-vs-c no dh-rv"><h3>Lo que usan muchas cremas comunes</h3><ul>' + AGRESIVOS.map(function (x) { return li(x, false); }).join("") + "</ul></div>" +
      '<div class="dh-vs-c si dh-rv"><h3>Lo que usa Chau Granitos</h3><ul>' + SUAVES.map(function (x) { return li(x, true); }).join("") + "</ul></div></div>" +
      '<p class="dh-vs-nota">Cada piel es distinta: la primera vez, probala en la parte de adentro del brazo y esperá 24 horas.</p></div>');
  }

  /* ---------- 06 · INGREDIENTES ---------- */
  var INGS = [
    [I.hoja, "Tea tree", "Antibacteriano y antimicótico", "Conocido por su acción contra bacterias y hongos: ayuda a cuidar el poro, donde empieza el granito."],
    [I.lavanda, "Lavanda", "Calma", "Calma la piel irritada por el roce y suma acción antibacteriana. Deja un aroma suave para la noche."],
    [I.pasto, "Lemongrass", "Equilibra", "Ayuda a controlar el sudor y la grasa, y acompaña al tea tree contra bacterias y hongos."],
    [I.uva, "Semilla de uva", "Nutre", "Aceite liviano y antioxidante: nutre y suaviza la piel áspera sin dejarla pegajosa."]
  ];
  function ingredientes() {
    function card(x) { return '<div class="dh-ingc dh-rv"><span class="ic">' + x[0] + "</span><small>" + esc(x[2]) + "</small><h3>" + esc(x[1]) + "</h3><p>" + esc(x[3]) + "</p></div>"; }
    return sec("dh-ingredientes", "dh-sec",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Qué tiene Chau Granitos</p><h2 class="dh-h2">Cuatro aceites naturales, <em>una sola tarea</em></h2>' +
      '<p class="dh-sub">Elegí ingredientes de la naturaleza que cuidan el poro sin frotar ni irritar.</p></div>' +
      '<div class="dh-ing"><div class="dh-ing-col">' + card(INGS[0]) + card(INGS[1]) + "</div>" +
      '<div class="dh-ing-foto dh-rv">' + foto(IMG.crema, "Crema Chau Granitos abierta, textura blanca", "Foto de la crema") + "</div>" +
      '<div class="dh-ing-col">' + card(INGS[2]) + card(INGS[3]) + "</div></div>" +
      '<ul class="dh-datos"><li>Activos 100% naturales</li><li>Sin ácidos fuertes</li><li>Pote de 100 ml</li><li>Cola, espalda y muslos</li><li>Uso externo</li><li>Una vez al día</li></ul></div>');
  }

  /* ---------- 07 · RUTINA EN 2 PASOS ---------- */
  function rutina() {
    function paso(n, img, alt, ley, tag, kick, titulo, texto) {
      return '<div class="dh-rut-c dh-rv"><div class="dh-rut-f">' + foto(img, alt, ley) + (tag ? '<span class="tag">' + tag + "</span>" : "") + "</div>" +
        '<div class="dh-rut-b"><span class="n"><b>' + n + "</b>" + kick + "</span><h3>" + titulo + "</h3><p>" + texto + "</p></div></div>";
    }
    function tip(t) { return '<div class="dh-tip"><i>' + CHECK + "</i><span>" + t + "</span></div>"; }
    return sec("dh-rutina", "dh-sec dh-lino",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Cómo se usa</p><h2 class="dh-h2">Dos pasos. <em>Una vez al día.</em></h2>' +
      '<p class="dh-sub">Sin kits de cinco productos ni rutinas complicadas. El jabón prepara la piel y la crema la cuida: cuando empecé a usar los dos juntos, el cambio se notó mucho más. Yo lo hago así, todas las noches:</p></div>' +
      '<div class="dh-rut">' +
      paso(1, IMG.jabon, "Jabón líquido antibacterial de Duna", "Foto del jabón", "Regalo desde el pack de 2", "En la ducha", "El jabón de tea tree y lavanda", "Lavá la zona con las manos y agua tibia, sin esponja ni guante exfoliante. Enjuagá y secá a toquecitos, sin refregar.") +
      paso(2, IMG.crema, "Crema Chau Granitos de Duna", "Foto de la crema", "", "Con la piel seca", "La crema Chau Granitos", "Una capa fina donde tengas granitos: la cola, la espalda o los muslos. Esperá un par de minutos a que se absorba y vestite.") +
      "</div>" +
      '<div class="dh-tips">' + tip("<b>La primera vez,</b> probá la crema en la parte de adentro del brazo y esperá 24 horas.") +
      tip("<b>Para la espalda,</b> pedí una mano o usá un aplicador de espalda.") +
      tip("<b>Lo que más importa es la constancia:</b> todas las noches, aunque la primera semana no veas cambios.") +
      tip("<b>¿Por qué no tu jabón de siempre?</b> Muchos, incluso de primeras marcas, tienen pH alto, perfume y desodorante: pueden irritar más la zona.") + "</div></div>");
  }

  /* ---------- 09 · LA GUÍA DE REGALO ---------- */
  function guia() {
    function li(t) { return "<li><i>" + CHECK + "</i><span>" + t + "</span></li>"; }
    return sec("dh-guia", "dh-sec",
      '<div class="dh-in"><div class="dh-guia dh-rv">' +
      '<div class="dh-tapa" aria-hidden="true"><small>Guía Chau Granitos</small><b>Piel lisa <span>para la malla</span></b>' +
      '<svg viewBox="0 0 200 34" preserveAspectRatio="none"><path d="M0 22 C40 6 80 30 120 16 S180 8 200 14 V34 H0Z" fill="#C9965F" opacity=".5"/></svg></div>' +
      '<div><p class="dh-kick">De regalo desde el pack de 2</p><h2>Todo lo que me hubiera gustado <em>saber antes</em></h2>' +
      "<p>La guía “" + esc(HC.ebookTitulo) + "” viene con los packs de 2 y de 3: te llega por WhatsApp o mail cuando confirmás tu compra. Es corta a propósito: la leés hoy y empezás esta noche.</p>" +
      "<ul>" + li("Tu rutina de 2 pasos y por qué van juntos") + li("Qué telas elegir y cuáles evitar") + li("Cómo depilarte sin que salgan granitos") + li("Qué hacer después del gimnasio y la pileta") + li("Un plan de 30 días para marcar cada noche") + li("Cuándo conviene consultar al médico") + "</ul></div></div></div>");
  }

  /* ---------- 10 · PACKS (llevan a la landing con el elegido) ----------
     Los packs con regalo (2 y 3) van en grande; el de 1 va abajo, en una
     fila chica que dice lo que no trae. */
  function oferta() {
    return sec("dh-oferta", "dh-sec",
      '<div class="dh-in"><div class="dh-head"><p class="dh-kick">Packs</p><h2 class="dh-h2">Comenzá <em>tu tratamiento</em></h2>' +
      '<p class="dh-sub">Envío gratis, 3 cuotas sin interés y garantía de ' + (HC.garantiaDias || 30) + " días en todos. Desde el pack de 2, el jabón y el ebook van de regalo.</p></div>" +
      '<div class="dh-packs"></div>' +
      '<p class="dh-incl">Tocá un pack y te llevo a la página de <b>Chau Granitos</b>, con ese pack ya elegido.</p></div>');
  }
  function norm(s) { return String(s || "").replace(/\s+/g, " ").trim().toLowerCase(); }
  function numero(x) {
    if (x == null || x === "") return null; if (typeof x === "number") return isNaN(x) ? null : x;
    var n = String(x).replace(/<[^>]*>/g, "").replace(/[^\d.,-]/g, "");
    if (n.indexOf(",") !== -1 && n.indexOf(".") !== -1) n = n.lastIndexOf(",") > n.lastIndexOf(".") ? n.replace(/\./g, "").replace(",", ".") : n.replace(/,/g, "");
    else if (n.indexOf(",") !== -1) { var p = n.split(","); n = p.length === 2 && p[1].length <= 2 ? p[0] + "." + p[1] : n.replace(/,/g, ""); }
    else if (n.indexOf(".") !== -1) { var q = n.split("."); if (q.length > 2 || q[q.length - 1].length === 3) n = n.replace(/\./g, ""); }
    var v = parseFloat(n); return isNaN(v) ? null : v;
  }
  function opcion(v) {
    var o = v && (v.option0 != null ? v.option0 : v.option_0 != null ? v.option_0 : v.values && v.values[0]);
    if (o && typeof o === "object") o = o.es || o.name || o.value || "";
    return norm(o);
  }
  function preciosVivos() {
    if (!window.fetch || !window.DOMParser || window.DUNA_HOME_PREVIEW) return Promise.resolve(null);
    return fetch(URLP, { credentials: "same-origin" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html"), nodo = doc.querySelector("[data-variants]");
      if (!nodo) throw new Error("sin data-variants");
      var d = JSON.parse(nodo.getAttribute("data-variants") || "[]");
      if (Object.prototype.toString.call(d) !== "[object Array]") d = Object.keys(d).map(function (k) { return d[k]; });
      var out = {};
      d.forEach(function (v) {
        var k = opcion(v); if (!k || out[k]) return;
        out[k] = { n: numero(v.price_number != null ? v.price_number : (v.price_short || v.price)), off: v.available === false || v.available === "false" || v.available === 0 };
      });
      return out;
    });
  }
  var I_GIFT = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9.5h18V13H3zM4.5 13h15v7.5h-15zM12 9.5v11" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 9.5S9.6 3.8 7.3 5.1C5.4 6.2 6.6 9.5 12 9.5Zm0 0s2.4-5.7 4.7-4.4c1.9 1.1.7 4.4-4.7 4.4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  var I_NO = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M6 18 18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  function pintarPacks(el, vivos) {
    var P = HC.packs || [], uno = null;
    var D = P.map(function (p) {
      var v = vivos && vivos[norm(p.match)];
      var n = v && v.n ? v.n : p.precio;
      if ((+p.qty || 0) === 1) uno = n;
      return { p: p, n: n, off: v ? v.off : false };
    });
    /* primero los packs con regalo, después el de 1 (lite) */
    var orden = D.filter(function (d) { return !d.p.lite; }).concat(D.filter(function (d) { return d.p.lite; }));
    el.querySelector(".dh-packs").innerHTML = orden.map(function (d) {
      var p = d.p, q = +p.qty || 1, tach = uno && q > 1 && uno * q > d.n ? uno * q : 0;
      var ah = tach ? "Ahorrás " + Math.round((1 - d.n / tach) * 100) + "%" : "";
      var abre = '<a class="dh-pack' + (p.destacado ? " top" : "") + (p.lite ? " lite" : "") + '" href="' + esc(linkPack(p)) + '"' + (d.off ? ' aria-disabled="true" style="opacity:.55"' : "") + ">";
      var go = '<span class="go">' + (d.off ? "Sin stock" : (p.lite ? "Elegir" : "Elegir este pack")) + ARROW + "</span></a>";
      if (p.lite) return abre +
        '<span class="l"><h3>' + esc(p.titulo) + '</h3><span class="sub">' + esc(p.sub || "") + "</span>" +
        (p.nota ? '<span class="nog">' + I_NO + esc(p.nota) + "</span>" : "") + "</span>" +
        '<span class="pr"><b>' + plata(d.n) + "</b></span>" + go;
      return abre +
        (p.badge ? '<span class="dh-pack-b">' + esc(p.badge) + "</span>" : "") +
        "<h3>" + esc(p.titulo) + '</h3><span class="sub">' + esc(p.sub || "") + "</span>" +
        '<span class="pr"><b>' + plata(d.n) + "</b>" + (tach ? "<s>" + plata(tach) + "</s>" : "") + "</span>" +
        (q > 1 ? '<span class="xm">' + plata(d.n / q) + " c/u</span>" : "") +
        (ah ? '<span class="ah">' + ah + "</span>" : "") +
        (p.regalo ? '<span class="gift">' + I_GIFT + esc(p.regalo) + "</span>" : "") +
        go;
    }).join("");
    return D;
  }

  /* ---------- 09 · GARANTÍA Y PREGUNTAS ---------- */
  function garantia() {
    var dias = HC.garantiaDias || 30;
    var SEAL = '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="56" fill="#3F4A3C"/><circle cx="60" cy="60" r="47" fill="none" stroke="#C9965F" stroke-width="2" stroke-dasharray="3 5"/><text x="60" y="58" text-anchor="middle" font-family="Marcellus,Georgia,serif" font-size="34" fill="#F4F0E8">' + dias + '</text><text x="60" y="78" text-anchor="middle" font-family="Nunito Sans,sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="#D9AE79">DÍAS</text></svg>';
    var fq = (HC.faq || []).map(function (q, i) {
      return '<div class="dh-fq"><button type="button" aria-expanded="false" aria-controls="dh-fq-' + i + '">' + esc(q[0]) + '<i aria-hidden="true"></i></button><div class="dh-fq-a" id="dh-fq-' + i + '"><p>' + esc(q[1]) + "</p></div></div>";
    }).join("");
    return sec("dh-faq", "dh-sec dh-lino",
      '<div class="dh-in dh-gf"><div class="dh-gar dh-rv">' + SEAL + "<h3>Sé lo que es comprar algo más y que no funcione.</h3><p>Por eso, si en " + dias + " días no te convence, escribinos y te devolvemos el dinero. Sin vueltas.</p></div>" +
      '<div><p class="dh-kick">Preguntas frecuentes</p><h2 class="dh-h2">Lo que <em>me preguntan</em></h2>' + fq + "</div></div>");
  }
  function faqBind(el) {
    el.querySelectorAll(".dh-fq").forEach(function (it) {
      var b = it.querySelector("button"), a = it.querySelector(".dh-fq-a");
      b.addEventListener("click", function () {
        var on = !it.classList.contains("on"); it.classList.toggle("on", on);
        b.setAttribute("aria-expanded", on ? "true" : "false"); a.style.maxHeight = on ? a.scrollHeight + "px" : "0";
      });
    });
  }

  /* ---------- 10 · CIERRE ---------- */
  function cierre() {
    return sec("dh-cierre", "dh-sec dh-osc dh-fin",
      '<div class="dh-in"><h2>Este verano,<span>animate a la malla.</span></h2>' +
      "<p>Yo pasé demasiados veranos tapándome. Ojalá a vos no te pase lo mismo.</p><p class=\"firma\">— La creadora de " + esc(MARCA) + "</p>" + cta(null, "dh-btn--miel") + "</div>" +
      '<svg class="dh-fin-dune" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 Q100 10 200 34 T400 26 V60 H0Z" fill="#C9965F"/></svg>');
  }

  /* ---------- 11 · PIE DE PÁGINA PROPIO ----------
     Copia del pie del tema los links legales (arrepentimiento, defensa del
     consumidor, data fiscal, términos) y recién ahí esconde el del tema. */
  var LEGAL = /arrepent|consumidor|defensa|reclamo|afip|arca\.gob|data ?fiscal|t[ée]rminos|condiciones|privacidad/i;
  function pieNativo() {
    var out = [];
    document.querySelectorAll("footer, [data-store='footer'], .js-footer, .js-footer-legal").forEach(function (f) {
      if (f.id === "dh-pie" || f.closest("#dh-pie") || out.indexOf(f) !== -1) return;
      out.push(f);
    });
    /* solo los de afuera: si uno está dentro de otro, alcanza con el de afuera */
    return out.filter(function (f) { return !out.some(function (o) { return o !== f && o.contains(f); }); });
  }
  function linksLegales(nativos) {
    var L = [], hrefs = {};
    nativos.forEach(function (f) {
      f.querySelectorAll("a[href]").forEach(function (a) {
        var txt = (a.textContent || "").replace(/\s+/g, " ").trim(), href = a.getAttribute("href") || "";
        var img = a.querySelector("img");
        if (!(LEGAL.test(txt) || LEGAL.test(href) || (img && LEGAL.test((img.getAttribute("alt") || "") + " " + (img.getAttribute("src") || ""))))) return;
        if (hrefs[href + txt]) return; hrefs[href + txt] = 1;
        var n = document.createElement("a"); n.href = a.href; n.target = a.target || ""; if (a.rel) n.rel = a.rel;
        if (img && !txt) { var im = document.createElement("img"); im.src = img.src; im.alt = img.alt || "Data fiscal"; n.appendChild(im); }
        else n.textContent = txt;
        L.push(n);
      });
    });
    return L;
  }
  function pie() {
    var P = HC.pie || {};
    if (P.activo === false) return null;
    var f = document.createElement("footer"); f.id = "dh-pie";
    var logo = IMG.logo ? '<a class="pie-logo" href="/" aria-label="' + esc(MARCA) + ', inicio"><img src="' + esc(IMG.logo) + '" alt="' + esc(MARCA) + ' Bodycare"></a>'
      : '<a class="pie-logo-t" href="/"><small>BODYCARE</small><b>' + esc(MARCA) + "</b></a>";
    var redes = [];
    if (P.instagram) redes.push('<li><a href="' + esc(P.instagram) + '" target="_blank" rel="noopener">' + I.ig + "Instagram</a></li>");
    if (P.tiktok) redes.push('<li><a href="' + esc(P.tiktok) + '" target="_blank" rel="noopener">' + I.tt + "TikTok</a></li>");
    if (P.whatsapp) redes.push('<li><a href="' + esc(P.whatsapp) + '" target="_blank" rel="noopener">' + I.wa + "WhatsApp</a></li>");
    f.innerHTML = '<div class="dh-in"><div class="pie-g">' +
      "<div>" + logo + '<p class="pie-frase">' + esc(P.frase || "") + "</p></div>" +
      '<nav aria-label="Duna"><h3>Duna</h3><ul><li><a href="' + esc(URLP) + '">Chau Granitos</a></li><li><a href="#dh-oferta">Packs</a></li><li><a href="#dh-ingredientes">Ingredientes</a></li><li><a href="#dh-natural">Por qué natural</a></li><li><a href="#dh-faq">Preguntas frecuentes</a></li></ul></nav>' +
      '<nav aria-label="Ayuda"><h3>Ayuda</h3><ul><li><span>' + I.camion + "Envío gratis a todo el país</span></li><li><span>" + I.escudo + "Garantía de " + (HC.garantiaDias || 30) + " días</span></li>" +
      (P.contactoURL ? '<li><a href="' + esc(P.contactoURL) + '">' + I.mail + "Contacto</a></li>" : "") + "</ul></nav>" +
      (redes.length ? '<nav aria-label="Redes"><h3>Seguinos</h3><ul>' + redes.join("") + "</ul></nav>" : "") +
      "</div>" +
      '<ul class="pie-sellos"><li>' + I.camion + "Envío gratis</li><li>" + I.tarjeta + "3 cuotas sin interés</li><li>" + I.candado + "Compra protegida</li></ul>" +
      '<div class="pie-legal"></div></div>';
    var legal = f.querySelector(".pie-legal");
    var nativos = pieNativo(), L = linksLegales(nativos);
    L.forEach(function (a) { legal.appendChild(a); });
    var copy = document.createElement("span"); copy.className = "pie-copy";
    copy.textContent = "© " + new Date().getFullYear() + " " + MARCA + " Bodycare";
    legal.appendChild(copy);
    var tieneArrep = L.some(function (a) { return /arrepent/i.test(a.textContent + " " + a.href); });
    if (P.ocultarPieNativo && tieneArrep) {
      nativos.forEach(function (n) { n.style.setProperty("display", "none", "important"); });
    } else if (window.console && nativos.length) {
      console.info("[Duna home] Dejo visible el pie del tema: no encontré el link del Botón de arrepentimiento para copiarlo.");
    }
    return f;
  }

  /* ---------- barra fija (celular) ---------- */
  function barra(desde) {
    var b = document.createElement("div"); b.id = "dh-sticky";
    b.innerHTML = '<div class="t"><b>Chau Granitos' + (desde ? " · desde " + plata(desde) : "") + "</b><span>Regalos desde el pack de 2</span></div><a href=\"" + esc(URLP) + "\">Comprar</a>";
    document.body.appendChild(b);
    var heroCta = document.querySelector("#dh-hero .dh-btn"), of = document.getElementById("dh-oferta"), pieEl = document.getElementById("dh-pie");
    var arriba = true, enOferta = false, enPie = false;
    function upd() { b.classList.toggle("on", !arriba && !enOferta && !enPie); }
    if ("IntersectionObserver" in window) {
      if (heroCta) new IntersectionObserver(function (e) { arriba = e[0].isIntersecting || e[0].boundingClientRect.top > 0; upd(); }).observe(heroCta);
      if (of) new IntersectionObserver(function (e) { enOferta = e[0].isIntersecting; upd(); }, { threshold: 0.15 }).observe(of);
      if (pieEl) new IntersectionObserver(function (e) { enPie = e[0].isIntersecting; upd(); }).observe(pieEl);
    }
    return b;
  }

  /* ==========================================================================
     H06 · MONTAJE
     ========================================================================== */
  function cabecera() {
    return document.querySelector("header.js-head-main") || document.querySelector(".js-head-main") || document.querySelector("header.head-main") ||
      document.querySelector("[data-store='head']") || document.querySelector("body > header") || document.querySelector("header:not(#dh-pie)");
  }
  function fuentes() {
    if (document.getElementById("dh-fuentes") || document.getElementById("vnx-fonts-duna")) return;
    var l = document.createElement("link"); l.id = "dh-fuentes"; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Marcellus&family=Nunito+Sans:wght@400;600;700;800&display=swap";
    document.head.appendChild(l);
  }
  function ocultarNativo(root) {
    if (!HC.ocultarNativo) return 0;
    var n = 0;
    try {
      document.querySelectorAll((HC.ocultarSelectores || []).join(",")).forEach(function (el) {
        if (el === root || root.contains(el) || el.contains(root) || el.closest("footer,header")) return;
        el.style.setProperty("display", "none", "important"); n++;
      });
    } catch (e) {}
    return n;
  }

  function montar() {
    if (document.getElementById("duna-home")) return;
    fuentes();
    css("dh-css", CSS);
    var root = document.createElement("div"); root.id = "duna-home";
    var head = cabecera();
    if (head && head.parentNode && head.parentNode !== document.documentElement) head.parentNode.insertBefore(root, head.nextSibling);
    else document.body.insertBefore(root, document.body.firstChild);

    /* cinta de arriba, sobre el encabezado */
    var msgs = (HC.cinta || []).map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
    if (msgs) {
      var c = document.createElement("div"); c.className = "dh-cinta"; c.setAttribute("aria-label", (HC.cinta || []).join(" · "));
      c.innerHTML = '<div class="dh-cinta-t" aria-hidden="true">' + msgs + msgs + msgs + msgs + "</div>";
      if (head && head.parentNode && head.parentNode !== document.documentElement) head.parentNode.insertBefore(c, head); else document.body.insertBefore(c, document.body.firstChild);
    }

    var partes = [hero(), resenas(), roce(), mapa(), mitos(), sinAgresion(), ingredientes(), rutina(), guia(), oferta(), garantia(), cierre()].filter(Boolean);
    partes.forEach(function (p) { root.appendChild(p); });
    var elPie = pie();
    if (elPie) root.parentNode.insertBefore(elPie, root.nextSibling);
    planB(root);

    if (root.querySelector("#dh-resenas")) resenasBind(root.querySelector("#dh-resenas"));
    roceBind(root.querySelector("#dh-roce"));
    mapaBind(root.querySelector("#dh-mapa"));
    faqBind(root.querySelector("#dh-faq"));
    var D = pintarPacks(root.querySelector("#dh-oferta"), null);
    var desde = Math.min.apply(null, D.map(function (d) { return d.n || Infinity; }));
    var sticky = barra(isFinite(desde) ? desde : 0);
    preciosVivos().then(function (vivos) {
      if (!vivos) return;
      var D2 = pintarPacks(root.querySelector("#dh-oferta"), vivos);
      var d2 = Math.min.apply(null, D2.map(function (d) { return d.n || Infinity; }));
      var tb = sticky.querySelector(".t b"); if (tb && isFinite(d2)) tb.textContent = "Chau Granitos · desde " + plata(d2);
    }).catch(function (e) { if (window.console) console.info("[Duna home] Precios de respaldo (no pude leer la ficha):", e && e.message); });
    aparecer(root);

    /* scroll suave para los links internos (#dh-...) */
    function suave(e) {
      var a = e.target.closest && e.target.closest("a[href^='#dh-']"); if (!a) return;
      var t = document.getElementById(a.getAttribute("href").slice(1)); if (!t) return;
      e.preventDefault(); t.scrollIntoView({ behavior: REDUCIR ? "auto" : "smooth", block: "start" });
    }
    root.addEventListener("click", suave);
    if (elPie) elPie.addEventListener("click", suave);

    var n = ocultarNativo(root);
    setTimeout(function () { ocultarNativo(root); }, 1200);
    if (window.console) console.info("[Duna home] Listo. Secciones nativas ocultas: " + n + ".");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", montar); else montar();
})();
