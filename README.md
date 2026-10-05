# Trivia ICT · Cultura general e ingeniería

Trivia con 120 preguntas únicas de nivel sencillo, organizadas en cuatro sets seleccionables de 30 preguntas. Cada set contiene 15 preguntas de cultura general y 15 de ingeniería. Los sets 1, 2 y 3 incluyen 10 de construcción y 5 de transporte; el set 4 incluye 9 de construcción y 6 de transporte. En total: 60 de cultura general, 39 de construcción y 21 de transporte.

Cada partida recorre el set completo, mezclando preguntas y alternativas. Incluye 100 puntos por acierto, explicaciones y repaso final. Puedes repetir el mismo set o elegir otro al terminar.

## Abrir la trivia

Descomprime el ZIP y abre `index.html` en un navegador. Conserva `styles.css`, `app.js` y los logos junto al HTML. No necesita instalación, servidor, fuentes externas ni conexión a internet.

## Publicar en GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub, por ejemplo `trivia-ingenieria`.
2. Usa **Add file → Upload files** y sube `index.html`, `styles.css`, `app.js`, este `README.md` y los tres logos directamente a la raíz del repositorio. Si descargaste el ZIP, descomprímelo primero.
3. Guarda los archivos con **Commit changes**.
4. Abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Elige la rama `main`, la carpeta `/ (root)` y pulsa **Save**.
7. Cuando termine la publicación, GitHub mostrará la URL de la página. Habitualmente tiene el formato `https://TU-USUARIO.github.io/trivia-ingenieria/`.

Puedes usar un repositorio público para publicar con GitHub Free. La disponibilidad en repositorios privados depende del plan. No hay que configurar un proceso de compilación.

## Cambiar las preguntas

El banco `QUESTIONS` está dentro de `app.js`. Cada objeto contiene `cat` (g: cultura, c: construcción, t: transporte), `text`, `answer`, `other` (tres distractores), `explanation` y `set` (1 a 4). Mantén 30 preguntas por set, con 15 de cultura y 15 de ingeniería, y cuatro alternativas distintas por pregunta.

El puntaje y la partida viven en el navegador durante la sesión. Esta versión no incluye cuentas, clasificación compartida ni partidas sincronizadas entre dispositivos.

## Logos de los centros de alumnos

Los archivos deben estar en la misma carpeta que `index.html`, conservando exactamente estos nombres (incluidos espacios y mayúsculas):

- `Logo ICTRA.png`
- `LOGO ICC.png`
- `LOGO CEE ICN PNG.png`

El ZIP incluye los tres archivos originales, la página HTML, su diseño en `styles.css` y su lógica en `app.js`. El HTML los carga mediante rutas relativas; no están incrustados. Para verlos al abrir el HTML localmente, conserva los logos junto a él.

## Diseño

Interfaz de concurso en azul oscuro y naranja, selección de sets mediante tarjetas, logos destacados y pantallas de juego y resultados adaptables al ancho de pantalla. Los controles de selección funcionan con teclado y muestran el set elegido. No requiere herramientas de compilación.
