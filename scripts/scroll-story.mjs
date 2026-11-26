const stories = {
  portal: {
    title: 'Un escritorio, muchas formas de hacer.',
    chapters: [
      ['Un sistema para el día a día', 'Nodalix OS reúne escritorio, ajustes y actualizaciones en un solo sistema.'],
      ['Herramientas para cada tarea', 'Escucha con Vinilo, edita por capas con Lienzo y simula fluidos con Vortia.'],
      ['Un lenguaje visual común', 'Las aplicaciones comparten el diseño de Nodalia y también funcionan por separado.'],
    ],
    next: 'aplicaciones',
  },
  vortia: {
    title: 'De una forma a un campo de flujo.',
    chapters: [
      ['Dibuja la geometría', 'Define la forma de la tobera y el dominio donde vas a simular el flujo.'],
      ['Divide el dominio en celdas', 'Genera la malla y revisa su calidad antes de ejecutar el cálculo.'],
      ['Lee el campo de velocidad', 'Ejecuta el caso con OpenFOAM e inspecciona el resultado en el visor 3D.'],
    ],
    next: 'funciones',
  },
  brujula: {
    title: 'Un navegador que se adapta a ti.',
    chapters: [
      ['Empieza en blanco', 'Una nueva pestaña con tu buscador y tus marcadores, sin ruido.'],
      ['Hazlo tuyo', 'Cambia el tema, el color de acento y el marco desde las preferencias. Los cambios se ven al momento.'],
      ['Añade extensiones', 'Instala extensiones de Chromium y revisa lo que podrán hacer antes de aceptarlas.'],
    ],
    next: 'funciones',
  },
  vinilo: {
    title: 'Así empieza una sesión de escucha.',
    chapters: [
      ['Elige la fuente', 'Busca en tus archivos locales o en los catálogos compatibles desde Vinilo.'],
      ['Pon la música en marcha', 'Abre el reproductor para ver la portada y controlar la reproducción.'],
      ['Decide qué suena después', 'Abre la cola desde el reproductor para ver y ordenar las próximas pistas.'],
    ],
    next: 'funciones',
  },
  lienzo: {
    title: 'Una imagen, capa a capa.',
    chapters: [
      ['Empieza por la imagen', 'Abre un documento y trabaja sobre la imagen de base.'],
      ['Añade un ajuste', 'Una capa de curvas permite cambiar los tonos conservando la imagen original.'],
      ['Revisa la composición', 'El resultado combina la imagen y sus ajustes. Cada capa sigue siendo editable.'],
    ],
    next: 'funciones',
  },
  forja: {
    title: 'Del primer trazo al plano impreso.',
    chapters: [
      ['Dibuja desde la línea de comandos', 'Escribe una orden, marca dos puntos y sigue con coordenadas relativas o polares.'],
      ['Empieza desde Inicio', 'Dibujos nuevos en pulgadas o milímetros, un ejemplo y los recientes, en el Inicio que comparten las aplicaciones de ingeniería.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el dibujo.'],
    ],
    next: 'funciones',
  },
  toma: {
    title: 'Del metraje al montaje.',
    chapters: [
      ['Monta', 'Coloca los clips en la línea de tiempo y ajusta cada corte al fotograma con el monitor de programa.'],
      ['Empieza desde Inicio', 'Abre tus medios, metraje de ejemplo o un proyecto de ejemplo, en el Inicio que comparten las aplicaciones creativas.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el proyecto.'],
    ],
    next: 'funciones',
  },
  anima: {
    title: 'Del boceto al movimiento.',
    chapters: [
      ['Anima', 'Dibuja en el escenario y da movimiento con fotogramas clave, interpolaciones y papel cebolla en la línea de tiempo.'],
      ['Empieza desde Inicio', 'Crea un documento, abre los recientes o una escena de ejemplo, en el Inicio que comparten las aplicaciones creativas.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar la escena.'],
    ],
    next: 'funciones',
  },
  trama: {
    title: 'De la idea a la interfaz.',
    chapters: [
      ['Diseña', 'Monta pantallas con marcos y auto layout, componentes y estilos, y conviértelas en un prototipo.'],
      ['Empieza desde Inicio', 'Crea un archivo, abre los recientes o un ejemplo, en el Inicio que comparten las aplicaciones creativas.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el diseño.'],
    ],
    next: 'funciones',
  },
  pliego: {
    title: 'De la retícula a la imprenta.',
    chapters: [
      ['Maqueta', 'Compón páginas con retículas, marcos de texto enlazados, estilos e imágenes, y expórtalas a PDF o EPUB.'],
      ['Empieza desde Inicio', 'Abre los recientes, la revista de ejemplo o un documento nuevo del tamaño que necesites, en el Inicio que comparten las aplicaciones creativas.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el documento.'],
    ],
    next: 'funciones',
  },
  agora: {
    title: 'Conversaciones que son tuyas.',
    chapters: [
      ['Conversa', 'Canales, mensajes directos, hilos y reacciones, en tiempo real y en tu propio servidor.'],
      ['Cifrado de extremo a extremo', 'Solo los dispositivos del canal leen los mensajes. Compara sus huellas en persona para estar seguros.'],
      ['Trabaja a tu manera', 'Cambia al tema claro, oscuro o de alto contraste, en español o en inglés.'],
    ],
    next: 'funciones',
  },
  torno: {
    title: 'Del boceto a la pieza.',
    chapters: [
      ['Modela', 'Boceta con restricciones, extruye y revoluciona; cada paso queda en la línea de tiempo.'],
      ['Empieza con un ejemplo', 'Inicio reúne los diseños nuevos, los recientes y piezas de ejemplo listas para abrir.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el diseño.'],
    ],
    next: 'funciones',
  },
  pluma: {
    title: 'De la primera curva al cartel.',
    chapters: [
      ['Dibuja en la mesa de trabajo', 'Trazos, formas, texto y degradados sobre una o varias mesas de trabajo.'],
      ['Empieza desde Inicio', 'Tus archivos recientes y los tamaños más habituales para empezar uno nuevo.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el documento.'],
    ],
    next: 'funciones',
  },
  letra: {
    title: 'De la primera línea al documento.',
    chapters: [
      ['Escribe', 'Texto, estilos, listas, tablas e imágenes, con la cinta siempre a mano.'],
      ['Ajusta', 'Elige el tema, los controles de ventana, el idioma y el tamaño de la interfaz en Preferencias.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el documento.'],
    ],
    next: 'funciones',
  },
  celdas: {
    title: 'De los datos a la respuesta.',
    chapters: [
      ['Organiza', 'Tablas con estilo, filtros, formato condicional y gráficos que siguen a los datos.'],
      ['Empieza desde Inicio', 'Un libro en blanco, plantillas listas para usar y tus libros recientes.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el libro.'],
    ],
    next: 'funciones',
  },
  lamina: {
    title: 'De la idea a la sala.',
    chapters: [
      ['Construye', 'Diapositivas con diseños, temas, formas, imágenes y gráficos, ordenadas por secciones.'],
      ['Ajusta', 'Elige el tema, los controles de ventana y cómo se comporta la edición en Preferencias.'],
      ['Presenta', 'A pantalla completa, con notas del orador y la diapositiva siguiente a la vista.'],
    ],
    next: 'funciones',
  },
  pulso: {
    title: 'De la idea al movimiento.',
    chapters: [
      ['Anima', 'Compón capas, añade fotogramas clave y efectos, y ajusta el ritmo en la línea de tiempo.'],
      ['Empieza desde Inicio', 'Crea una composición, abre el proyecto de demostración o parte de una plantilla, en el Inicio que comparten las aplicaciones creativas.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el proyecto.'],
    ],
    next: 'funciones',
  },
  papel: {
    title: 'Del documento a la firma.',
    chapters: [
      ['Lee', 'Pestañas, miniaturas y búsqueda, con todas las herramientas a un lado.'],
      ['Empieza desde Inicio', 'Las herramientas recomendadas, las que anclas y tus documentos recientes.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar el documento.'],
    ],
    next: 'funciones',
  },
  luz: {
    title: 'Del raw a la foto revelada.',
    chapters: [
      ['Revela', 'Ajusta la luz, el color y las curvas de cada foto; el original no se toca nunca.'],
      ['Ordena', 'Álbumes, palabras clave, banderas y estrellas, y toda tu biblioteca en una cuadrícula.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma sin cerrar la biblioteca.'],
    ],
    next: 'funciones',
  },
  buzon: {
    title: 'De la bandeja a la respuesta.',
    chapters: [
      ['Lee', 'Todas tus cuentas en una bandeja, con las conversaciones agrupadas y las etiquetas a la vista.'],
      ['Ajusta', 'Temas, tamaño del texto, controles de ventana e icono de la aplicación, en Ajustes.'],
      ['A tu manera', 'Cambia al tema claro u oscuro sin cerrar nada.'],
    ],
    next: 'funciones',
  },
  hito: {
    title: 'De la tarea al hito.',
    chapters: [
      ['Organiza', 'Reparte el trabajo en un tablero por columnas, con responsable, fecha y prioridad, y mira el progreso del proyecto arriba.'],
      ['Empieza desde Inicio', 'Crea un proyecto en blanco o parte de una plantilla: lanzamiento de producto, proyecto de cliente, sprint o evento.'],
      ['Trabaja a tu manera', 'Cambia al tema claro o a otro idioma y abre una tarea sin perder el tablero de vista.'],
    ],
    next: 'funciones',
  },
  codigo: {
    title: 'De la carpeta al error corregido.',
    chapters: [
      ['Abre una carpeta', 'El explorador respeta .gitignore y muestra el estado de git; salta a cualquier archivo con la apertura rápida.'],
      ['Escribe con comodidad', 'Varios cursores, resaltado en 15 lenguajes y archivos de un millón de líneas que se desplazan sin esfuerzo.'],
      ['Corrige al momento', 'Con un servidor de lenguaje instalado, los errores se subrayan mientras escribes; la calidad y la seguridad se analizan en local y un clic te lleva al sitio exacto.'],
    ],
    next: 'funciones',
  },
  orbe: {
    title: 'De la escena al juego.',
    chapters: [
      ['Compón la escena', 'Un árbol de nodos, un inspector y visores 2D y 3D para colocar cada pieza.'],
      ['Dale comportamiento', 'Escribe scripts, anima y depura con el editor de scripts, el de animación y el depurador.'],
      ['Pruébalo', 'Un renderizador moderno, física, audio y navegación, con el editor en el diseño de Nodalia.'],
    ],
    next: 'funciones',
  },
  circuito: {
    title: 'Una familia de herramientas de ingeniería.',
    chapters: [
      ['Parte de Nodalia Engineering', 'Circuito se une a Torno, Vortia y Forja en la familia de ingeniería de Nodalia.'],
      ['El mismo diseño', 'Los mismos menús, iconos y controles que ya conoces de las demás aplicaciones de ingeniería.'],
      ['Primera versión en camino', 'Cuando se publique, aparecerá aquí y en la lista de Nodalia Launcher.'],
    ],
    next: 'funciones',
  },
  abaco: {
    title: 'Una familia de herramientas de ingeniería.',
    chapters: [
      ['Parte de Nodalia Engineering', 'Ábaco se une a Torno, Vortia y Forja en la familia de ingeniería de Nodalia.'],
      ['El mismo diseño', 'Los mismos menús, iconos y controles que ya conoces de las demás aplicaciones de ingeniería.'],
      ['Primera versión en camino', 'Cuando se publique, aparecerá aquí y en la lista de Nodalia Launcher.'],
    ],
    next: 'funciones',
  },
  launcher: {
    title: 'De la lista a la app instalada.',
    chapters: [
      ['Elige', 'Todas las aplicaciones de Nodalia en una lista, con la versión que tienes de cada una.'],
      ['Instala', 'Descarga el instalador de tu sistema y de tu procesador, comprueba su suma SHA-256 y lo instala donde corresponde.'],
      ['Mantén al día', 'Te avisa de cada versión nueva y puede instalarla por ti.'],
    ],
    next: 'funciones',
  },
  nodalix: {
    title: 'Del escritorio a los ajustes.',
    chapters: [
      ['Abre tu espacio de trabajo', 'El escritorio y el dock te dan acceso a tus aplicaciones.'],
      ['Cambia lo necesario al vuelo', 'Abre los ajustes rápidos desde la barra superior.'],
      ['Actualiza desde un solo sitio', 'Configuración reúne actualizaciones del sistema, paquetes, aplicaciones y firmware.'],
    ],
    next: 'funciones',
  },
};

export function scrollStory(id, apps, { e, safeUrl }) {
  const { title, chapters, next } = stories[id];
  const app = apps.find((item) => item.id === id);
  const picture = (product, index) => {
    const [url] = product.previews[index];
    const localPath = new URL(url).pathname;
    // Screenshots the site serves itself load from the same origin; the rest come from GitHub.
    const src = product.localScreens.some((file) => localPath === `/${product.id}${file}`) ? e(localPath) : safeUrl(url);
    return `<img src="${src}" alt="" loading="lazy" decoding="async"/>`;
  };
  const screenshot = (index, className) => `<figure class="story-screen ${className}">${picture(app, index)}</figure>`;
  const plate = (name) => {
    const product = apps.find((item) => item.id === name);
    return `<figure class="story-plate story-plate--${name}">${picture(product, 0)}<figcaption translate="no">${e(product.name)}</figcaption></figure>`;
  };
  // An app with no screenshots yet shows its own icon, large, until its first release brings real ones.
  const iconVisual = () => `<div class="story-icon"><img src="${safeUrl(app.icon)}" alt="" loading="lazy" decoding="async"/></div>`;
  const visuals = {
    portal: () => `<div class="story-contact-sheet">
      ${plate('nodalix')}${plate('vinilo')}${plate('lienzo')}${plate('vortia')}
      <img class="story-imprint" src="/nodalia-wordmark.svg" alt="" width="118" height="30"/>
    </div>`,
    vortia: () => `<canvas class="story-drawing" data-story-canvas="nozzle"></canvas>${screenshot(0, 'story-vortia-result')}`,
    brujula: () => `<div class="story-browser">${screenshot(0, 'story-brujula-newtab')}${screenshot(1, 'story-brujula-looks')}${screenshot(2, 'story-brujula-extensions')}</div>`,
    vinilo: () => `<div class="story-turntable"><div class="story-disc"></div><div class="story-arm"></div></div><div class="story-sources">
      <span>Este equipo</span><span translate="no">Apple Music</span><span translate="no">Spotify</span>
      <span translate="no">YouTube Music</span><span translate="no">Tidal</span>
    </div><div class="story-player">${screenshot(0, 'story-vinilo-player')}${screenshot(1, 'story-vinilo-queue')}</div>`,
    lienzo: () => `<div class="story-print"><div class="story-print-paper">${picture(app, 0)}</div>
      <div class="story-print-proof">${picture(app, 0)}</div><div class="story-print-edge"></div>
    </div><canvas class="story-curve" data-story-canvas="curve"></canvas>
      ${screenshot(1, 'story-lienzo-curves')}`,
    forja: () => `<div class="story-drafting">${screenshot(0, 'story-forja-model')}<span class="story-forja-cursor"></span>${screenshot(1, 'story-forja-home')}${screenshot(2, 'story-forja-light')}</div>`,
    toma: () => `<div class="story-artboard">${screenshot(0, 'story-toma-dark')}${screenshot(2, 'story-toma-home')}${screenshot(1, 'story-toma-light')}</div>`,
    anima: () => `<div class="story-artboard">${screenshot(0, 'story-anima-dark')}${screenshot(2, 'story-anima-home')}${screenshot(1, 'story-anima-light')}</div>`,
    trama: () => `<div class="story-artboard">${screenshot(0, 'story-trama-dark')}${screenshot(2, 'story-trama-home')}${screenshot(1, 'story-trama-light')}</div>`,
    pliego: () => `<div class="story-artboard">${screenshot(0, 'story-pliego-dark')}${screenshot(2, 'story-pliego-home')}${screenshot(1, 'story-pliego-light')}</div>`,
    agora: () => `<div class="story-artboard">${screenshot(0, 'story-agora-dark')}${screenshot(2, 'story-agora-home')}${screenshot(1, 'story-agora-light')}</div>`,
    torno: () => `<div class="story-artboard">${screenshot(0, 'story-torno-dark')}${screenshot(2, 'story-torno-home')}${screenshot(1, 'story-torno-light')}</div>`,
    pluma: () => `<div class="story-artboard">${screenshot(0, 'story-pluma-dark')}${screenshot(2, 'story-pluma-home')}${screenshot(1, 'story-pluma-light')}</div>`,
    letra: () => `<div class="story-artboard">${screenshot(0, 'story-letra-dark')}${screenshot(2, 'story-letra-prefs')}${screenshot(1, 'story-letra-light')}</div>`,
    celdas: () => `<div class="story-artboard">${screenshot(0, 'story-celdas-dark')}${screenshot(2, 'story-celdas-home')}${screenshot(1, 'story-celdas-light')}</div>`,
    buzon: () => `<div class="story-artboard">${screenshot(0, 'story-buzon-dark')}${screenshot(2, 'story-buzon-settings')}${screenshot(1, 'story-buzon-light')}</div>`,
    hito: () => `<div class="story-artboard">${screenshot(0, 'story-hito-dark')}${screenshot(2, 'story-hito-home')}${screenshot(1, 'story-hito-light')}</div>`,
    lamina: () => `<div class="story-artboard">${screenshot(0, 'story-lamina-dark')}${screenshot(2, 'story-lamina-prefs')}${screenshot(1, 'story-lamina-light')}</div>`,
    pulso: () => `<div class="story-artboard">${screenshot(0, 'story-pulso-dark')}${screenshot(2, 'story-pulso-home')}${screenshot(1, 'story-pulso-light')}</div>`,
    luz: () => `<div class="story-artboard">${screenshot(0, 'story-luz-dark')}${screenshot(2, 'story-luz-home')}${screenshot(1, 'story-luz-light')}</div>`,
    papel: () => `<div class="story-artboard">${screenshot(0, 'story-papel-dark')}${screenshot(2, 'story-papel-home')}${screenshot(1, 'story-papel-light')}</div>`,
    launcher: () => `<ul class="story-launcher">${apps.filter((item) => item.id !== 'launcher' && item.id !== 'nodalix').map((item) => `<li><img src="${safeUrl(item.icon)}" alt="" loading="lazy" decoding="async"/><span translate="no">${e(item.name)}</span></li>`).join('')}</ul>`,
    nodalix: () => `<div class="story-monitor">${screenshot(0, 'story-desktop')}${screenshot(1, 'story-settings')}
      <span class="story-system-cursor"></span>${screenshot(2, 'story-updates')}</div>`,
  };
  return `<section id="demostracion" class="scroll-story scroll-story--${id}" data-scroll-story="${id}" aria-labelledby="story-title">
    <div class="story-pin" data-story-pin>
      <div class="container story-layout">
        <header class="story-heading">
          <h2 id="story-title">${e(title)}</h2>
        </header>
        <div class="story-stage" aria-hidden="true">${(visuals[id] ?? iconVisual)()}</div>
        <div class="story-details">
          <div class="story-progress" aria-hidden="true">${chapters.map(() => '<i></i>').join('')}</div>
          <ol class="story-chapters">${chapters.map(([name, description], i) => `
            <li data-story-chapter="${i + 1}"><h3>${e(name)}</h3><p>${e(description)}</p></li>`).join('')}
          </ol>
          <a class="story-skip text-link" href="#${next}">Saltar la demostración <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </div>
  </section>`;
}
