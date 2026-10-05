
'use strict';
// Cada pregunta: categoría, enunciado, respuesta correcta, distractores y explicación.
const QUESTIONS = [
 {
  "cat": "g",
  "text": "¿Cuál es la capital de Francia?",
  "answer": "París",
  "other": [
   "Roma",
   "Madrid",
   "Berlín"
  ],
  "explanation": "París es la capital de Francia.",
  "set": 1,
  "difficulty": "facil",
  "id": 0
 },
 {
  "cat": "g",
  "text": "¿Cuál es el océano más extenso del planeta?",
  "answer": "Océano Pacífico",
  "other": [
   "Océano Atlántico",
   "Océano Índico",
   "Océano Ártico"
  ],
  "explanation": "El Pacífico es el océano de mayor superficie.",
  "set": 1,
  "difficulty": "facil",
  "id": 1
 },
 {
  "cat": "g",
  "text": "¿Quién escribió Don Quijote de la Mancha?",
  "answer": "Miguel de Cervantes",
  "other": [
   "Pablo Neruda",
   "Gabriel García Márquez",
   "William Shakespeare"
  ],
  "explanation": "Miguel de Cervantes publicó la primera parte de Don Quijote en 1605.",
  "set": 1,
  "difficulty": "facil",
  "id": 2
 },
 {
  "cat": "g",
  "text": "¿Qué planeta es conocido como el planeta rojo?",
  "answer": "Marte",
  "other": [
   "Venus",
   "Júpiter",
   "Mercurio"
  ],
  "explanation": "Marte presenta un color rojizo asociado a los óxidos de hierro de su superficie.",
  "set": 1,
  "difficulty": "facil",
  "id": 3
 },
 {
  "cat": "g",
  "text": "¿Qué instrumento se utiliza para observar estrellas y planetas lejanos?",
  "answer": "Telescopio",
  "other": [
   "Microscopio",
   "Termómetro",
   "Barómetro"
  ],
  "explanation": "Un telescopio permite observar objetos lejanos, incluidos cuerpos celestes.",
  "set": 1,
  "difficulty": "facil",
  "id": 4
 },
 {
  "cat": "c",
  "text": "¿Qué material se combina con el hormigón para formar hormigón armado?",
  "answer": "Acero",
  "other": [
   "Vidrio",
   "Madera",
   "Plástico"
  ],
  "explanation": "El hormigón resiste bien la compresión y las barras de acero aportan resistencia a la tracción.",
  "set": 1,
  "difficulty": "facil",
  "id": 5
 },
 {
  "cat": "c",
  "text": "¿Cuál es la función principal de una fundación?",
  "answer": "Transmitir las cargas de la estructura al terreno",
  "other": [
   "Decorar la fachada",
   "Ventilar los recintos",
   "Conducir agua potable"
  ],
  "explanation": "Las fundaciones transmiten las cargas al suelo y ayudan a controlar los asentamientos.",
  "set": 1,
  "difficulty": "facil",
  "id": 6
 },
 {
  "cat": "c",
  "text": "¿Qué elemento estructural suele ser vertical y transmitir cargas hacia la fundación?",
  "answer": "Una columna",
  "other": [
   "Una ventana",
   "Una canaleta",
   "Una baranda"
  ],
  "explanation": "Las columnas reciben cargas de otros elementos y las transmiten hacia los niveles inferiores.",
  "set": 1,
  "difficulty": "facil",
  "id": 7
 },
 {
  "cat": "c",
  "text": "¿Qué representa una vista en planta de un edificio?",
  "answer": "Una vista desde arriba obtenida mediante un corte horizontal",
  "other": [
   "Una vista de la fachada",
   "Una fotografía del terreno",
   "Una vista desde abajo"
  ],
  "explanation": "La planta permite identificar la distribución de recintos, muros y circulaciones.",
  "set": 1,
  "difficulty": "facil",
  "id": 8
 },
 {
  "cat": "t",
  "text": "¿Qué mide un aforo vehicular?",
  "answer": "La cantidad de vehículos que pasa durante un período",
  "other": [
   "La temperatura del pavimento",
   "El peso de una vereda",
   "La altura de un semáforo"
  ],
  "explanation": "Un aforo contabiliza vehículos en un punto o sección durante un intervalo de tiempo.",
  "set": 1,
  "difficulty": "facil",
  "id": 9
 },
 {
  "cat": "g",
  "text": "¿Qué país tiene como capital a Ottawa?",
  "answer": "Canadá",
  "other": [
   "Australia",
   "Nueva Zelanda",
   "Irlanda"
  ],
  "explanation": "Ottawa es la capital de Canadá.",
  "difficulty": "media",
  "set": 1,
  "id": 10
 },
 {
  "cat": "g",
  "text": "¿Qué civilización construyó Chichén Itzá?",
  "answer": "La maya",
  "other": [
   "La inca",
   "La romana",
   "La egipcia"
  ],
  "explanation": "Chichén Itzá es una ciudad de la civilización maya en la península de Yucatán.",
  "difficulty": "media",
  "set": 1,
  "id": 11
 },
 {
  "cat": "g",
  "text": "¿Qué componente de la sangre transporta principalmente oxígeno?",
  "answer": "Glóbulos rojos",
  "other": [
   "Plaquetas",
   "Glóbulos blancos",
   "Linfocitos"
  ],
  "explanation": "La hemoglobina de los glóbulos rojos transporta oxígeno.",
  "difficulty": "media",
  "set": 1,
  "id": 12
 },
 {
  "cat": "g",
  "text": "¿Qué gas es el más abundante en la atmósfera terrestre?",
  "answer": "Nitrógeno",
  "other": [
   "Oxígeno",
   "Dióxido de carbono",
   "Hidrógeno"
  ],
  "explanation": "El nitrógeno representa aproximadamente el 78% del aire seco.",
  "difficulty": "media",
  "set": 1,
  "id": 13
 },
 {
  "cat": "g",
  "text": "¿Qué continente alberga la cordillera del Himalaya?",
  "answer": "Asia",
  "other": [
   "Europa",
   "África",
   "Oceanía"
  ],
  "explanation": "El Himalaya se encuentra en Asia.",
  "difficulty": "media",
  "set": 1,
  "id": 14
 },
 {
  "cat": "c",
  "text": "¿Cuál es el objetivo principal del curado del hormigón?",
  "answer": "Favorecer la hidratación del cemento conservando condiciones adecuadas",
  "other": [
   "Secarlo lo más rápido posible",
   "Extraer todo el cemento",
   "Sustituir las armaduras"
  ],
  "explanation": "El curado mantiene condiciones de humedad y temperatura que permiten desarrollar propiedades del hormigón.",
  "difficulty": "media",
  "set": 1,
  "id": 15
 },
 {
  "cat": "c",
  "text": "¿Qué diferencia al mortero del hormigón convencional?",
  "answer": "El mortero no incluye normalmente árido grueso",
  "other": [
   "El mortero no utiliza aglomerante",
   "El hormigón nunca contiene agua",
   "El mortero contiene siempre barras de acero"
  ],
  "explanation": "El mortero habitual contiene aglomerante, agua y árido fino; el hormigón incorpora además árido grueso.",
  "difficulty": "media",
  "set": 1,
  "id": 16
 },
 {
  "cat": "c",
  "text": "¿Qué efecto suele tener agregar agua en exceso al hormigón sin cambiar el cemento?",
  "answer": "Disminuir su resistencia y aumentar su porosidad",
  "other": [
   "Aumentar siempre su resistencia",
   "Eliminar la necesidad de curado",
   "Convertirlo en hormigón armado"
  ],
  "explanation": "Una mayor relación agua/cemento suele dejar más poros y reducir la resistencia.",
  "difficulty": "media",
  "set": 1,
  "id": 17
 },
 {
  "cat": "t",
  "text": "¿Qué describe el intervalo entre buses o headway?",
  "answer": "El tiempo entre el paso de dos buses consecutivos",
  "other": [
   "El ancho de sus puertas",
   "La longitud total de la ruta",
   "El tiempo de vida del motor"
  ],
  "explanation": "El intervalo es la separación temporal entre servicios consecutivos en un punto.",
  "difficulty": "media",
  "set": 1,
  "id": 18
 },
 {
  "cat": "t",
  "text": "¿Qué es la partición modal de los viajes?",
  "answer": "La distribución de viajes entre modos de transporte",
  "other": [
   "La división del motor en piezas",
   "El reparto de semáforos por calle",
   "La separación del pavimento en capas"
  ],
  "explanation": "La partición modal describe cómo se distribuyen los desplazamientos entre modos como caminar, bus o automóvil.",
  "difficulty": "media",
  "set": 1,
  "id": 19
 },
 {
  "cat": "g",
  "text": "Según la segunda ley de Kepler, ¿qué ocurre con la línea que une un planeta con el Sol?",
  "answer": "Barre áreas iguales en tiempos iguales",
  "other": [
   "Barre distancias iguales en tiempos iguales",
   "Mantiene una longitud constante",
   "Siempre apunta al centro de la elipse"
  ],
  "explanation": "La segunda ley de Kepler establece la igualdad de áreas barridas en intervalos de tiempo iguales.",
  "difficulty": "dificil",
  "set": 1,
  "id": 20
 },
 {
  "cat": "g",
  "text": "¿En qué dos disciplinas recibió Marie Curie premios Nobel?",
  "answer": "Física y Química",
  "other": [
   "Medicina y Física",
   "Química y Literatura",
   "Medicina y Química"
  ],
  "explanation": "Marie Curie recibió el Nobel de Física en 1903 y el de Química en 1911.",
  "difficulty": "dificil",
  "set": 1,
  "id": 21
 },
 {
  "cat": "g",
  "text": "¿Qué proceso intercambia material genético entre cromosomas homólogos durante la meiosis?",
  "answer": "Entrecruzamiento",
  "other": [
   "Traducción",
   "Gemación",
   "Fagocitosis"
  ],
  "explanation": "El entrecruzamiento permite intercambio de segmentos entre cromosomas homólogos y contribuye a la variabilidad genética.",
  "difficulty": "dificil",
  "set": 1,
  "id": 22
 },
 {
  "cat": "g",
  "text": "¿Qué tipo de límite entre placas tectónicas se caracteriza por su separación?",
  "answer": "Divergente",
  "other": [
   "Convergente",
   "Transformante",
   "Estacionario"
  ],
  "explanation": "En los límites divergentes las placas se separan; puede formarse nueva corteza.",
  "difficulty": "dificil",
  "set": 1,
  "id": 23
 },
 {
  "cat": "g",
  "text": "¿Qué base nitrogenada está presente en el ARN y reemplaza a la timina del ADN?",
  "answer": "Uracilo",
  "other": [
   "Adenina",
   "Guanina",
   "Citosina"
  ],
  "explanation": "El ARN utiliza uracilo donde el ADN utiliza timina.",
  "difficulty": "dificil",
  "set": 1,
  "id": 24
 },
 {
  "cat": "c",
  "text": "¿Qué distingue la ductilidad de la resistencia de un material?",
  "answer": "La ductilidad permite deformación plástica antes de la rotura",
  "other": [
   "La ductilidad mide solo el peso",
   "La resistencia elimina toda deformación",
   "Ambas significan exactamente lo mismo"
  ],
  "explanation": "La ductilidad describe capacidad de deformación plástica; la resistencia describe capacidad de soportar esfuerzos.",
  "difficulty": "dificil",
  "set": 1,
  "id": 25
 },
 {
  "cat": "c",
  "text": "¿Por qué las vigas suelen ser más altas en la dirección de la flexión principal?",
  "answer": "La distribución del material respecto del eje mejora la rigidez a flexión",
  "other": [
   "La altura elimina las cargas",
   "El ancho deja de influir en cualquier propiedad",
   "La altura vuelve innecesarios los apoyos"
  ],
  "explanation": "La geometría de la sección influye fuertemente en su rigidez a flexión, especialmente la distribución del material lejos del eje neutro.",
  "difficulty": "dificil",
  "set": 1,
  "id": 26
 },
 {
  "cat": "c",
  "text": "¿Qué fenómeno puede causar la falla de una columna esbelta comprimida antes de agotar su resistencia a compresión?",
  "answer": "Pandeo",
  "other": [
   "Evaporación",
   "Capilaridad",
   "Abrasión superficial"
  ],
  "explanation": "El pandeo es una pérdida de estabilidad que produce deformación lateral en un elemento comprimido.",
  "difficulty": "dificil",
  "set": 1,
  "id": 27
 },
 {
  "cat": "t",
  "text": "¿Qué diferencia la confiabilidad del tiempo de viaje de su valor promedio?",
  "answer": "La confiabilidad considera la variación y predictibilidad entre viajes",
  "other": [
   "La confiabilidad mide solo la distancia",
   "El promedio describe todas las variaciones por sí solo",
   "La confiabilidad equivale a la velocidad máxima legal"
  ],
  "explanation": "Una ruta puede tener un promedio aceptable y, aun así, tiempos muy variables e impredecibles.",
  "difficulty": "dificil",
  "set": 1,
  "id": 28
 },
 {
  "cat": "t",
  "text": "¿Qué es el flujo de saturación en una intersección semaforizada?",
  "answer": "La tasa de descarga de una cola durante verde bajo condiciones definidas",
  "other": [
   "La cantidad de vehículos estacionados en todo el barrio",
   "La velocidad máxima de un bus",
   "El tiempo total de luz roja"
  ],
  "explanation": "El flujo de saturación caracteriza la descarga sostenida de vehículos en cola cuando disponen de verde.",
  "difficulty": "dificil",
  "set": 1,
  "id": 29
 },
 {
  "cat": "g",
  "text": "¿Qué cordillera recorre gran parte del límite entre Chile y Argentina?",
  "answer": "Cordillera de los Andes",
  "other": [
   "Los Alpes",
   "El Himalaya",
   "Los Pirineos"
  ],
  "explanation": "La cordillera de los Andes se extiende por el oeste de Sudamérica.",
  "set": 2,
  "difficulty": "facil",
  "id": 30
 },
 {
  "cat": "g",
  "text": "¿Cuál de estos animales es un mamífero?",
  "answer": "Delfín",
  "other": [
   "Tiburón",
   "Cocodrilo",
   "Pingüino"
  ],
  "explanation": "Los delfines son mamíferos: respiran aire y alimentan a sus crías con leche.",
  "set": 2,
  "difficulty": "facil",
  "id": 31
 },
 {
  "cat": "g",
  "text": "¿Cuántos minutos tiene una hora?",
  "answer": "Sesenta",
  "other": [
   "Treinta",
   "Cien",
   "Noventa"
  ],
  "explanation": "Una hora equivale a sesenta minutos.",
  "set": 2,
  "difficulty": "facil",
  "id": 32
 },
 {
  "cat": "g",
  "text": "¿Qué país tiene forma de bota en los mapas?",
  "answer": "Italia",
  "other": [
   "Portugal",
   "Grecia",
   "Noruega"
  ],
  "explanation": "La península italiana tiene una forma que recuerda a una bota.",
  "set": 2,
  "difficulty": "facil",
  "id": 33
 },
 {
  "cat": "g",
  "text": "¿Qué poeta chilena recibió el Premio Nobel de Literatura en 1945?",
  "answer": "Gabriela Mistral",
  "other": [
   "Violeta Parra",
   "Isabel Allende",
   "María Luisa Bombal"
  ],
  "explanation": "Gabriela Mistral recibió el Premio Nobel de Literatura en 1945.",
  "set": 2,
  "difficulty": "facil",
  "id": 34
 },
 {
  "cat": "c",
  "text": "¿En qué unidad se expresa habitualmente la resistencia a compresión del hormigón?",
  "answer": "Megapascales (MPa)",
  "other": [
   "Kilómetros por hora (km/h)",
   "Litros (L)",
   "Metros cuadrados (m²)"
  ],
  "explanation": "La resistencia es una fuerza por unidad de área. El MPa equivale a un millón de pascales.",
  "set": 2,
  "difficulty": "facil",
  "id": 35
 },
 {
  "cat": "c",
  "text": "¿Qué es una viga?",
  "answer": "Un elemento estructural que suele resistir cargas mediante flexión",
  "other": [
   "Una tubería de drenaje",
   "Una capa de pintura",
   "Un equipo de excavación"
  ],
  "explanation": "Las vigas reciben cargas y las transmiten a sus apoyos, normalmente trabajando a flexión y corte.",
  "set": 2,
  "difficulty": "facil",
  "id": 36
 },
 {
  "cat": "c",
  "text": "¿Por qué se compacta el suelo antes de construir un relleno de apoyo?",
  "answer": "Para reducir vacíos y mejorar su comportamiento",
  "other": [
   "Para aumentar sus huecos",
   "Para cambiar su color",
   "Para eliminar toda su humedad"
  ],
  "explanation": "La compactación aumenta la densidad del suelo y puede mejorar su capacidad de soporte.",
  "set": 2,
  "difficulty": "facil",
  "id": 37
 },
 {
  "cat": "c",
  "text": "¿Qué es una losa en un edificio?",
  "answer": "Un elemento estructural que forma pisos o cubiertas",
  "other": [
   "Un equipo de excavación",
   "Una instalación eléctrica",
   "Una pintura"
  ],
  "explanation": "Las losas reciben cargas y las transmiten a vigas, muros o columnas.",
  "set": 2,
  "difficulty": "facil",
  "id": 38
 },
 {
  "cat": "t",
  "text": "¿Qué elemento ayuda a una persona en silla de ruedas a pasar de la vereda a la calzada?",
  "answer": "Un rebaje de solera accesible",
  "other": [
   "Una barrera alta",
   "Un escalón adicional",
   "Una zanja"
  ],
  "explanation": "El rebaje permite salvar el desnivel; su pendiente y continuidad deben facilitar el desplazamiento.",
  "set": 2,
  "difficulty": "facil",
  "id": 39
 },
 {
  "cat": "g",
  "text": "¿En qué año comenzó la Revolución Francesa?",
  "answer": "1789",
  "other": [
   "1776",
   "1810",
   "1848"
  ],
  "explanation": "La Revolución Francesa comenzó en 1789.",
  "difficulty": "media",
  "set": 2,
  "id": 40
 },
 {
  "cat": "g",
  "text": "¿Qué organelo se asocia con la producción de ATP mediante respiración celular?",
  "answer": "Mitocondria",
  "other": [
   "Ribosoma",
   "Lisosoma",
   "Aparato de Golgi"
  ],
  "explanation": "Las mitocondrias producen gran parte del ATP en células eucariotas mediante respiración celular.",
  "difficulty": "media",
  "set": 2,
  "id": 41
 },
 {
  "cat": "g",
  "text": "¿Quién escribió La metamorfosis?",
  "answer": "Franz Kafka",
  "other": [
   "Jorge Luis Borges",
   "Ernest Hemingway",
   "Fiódor Dostoievski"
  ],
  "explanation": "La metamorfosis es una obra de Franz Kafka, publicada en 1915.",
  "difficulty": "media",
  "set": 2,
  "id": 42
 },
 {
  "cat": "g",
  "text": "¿Qué escala mineralógica ordena la dureza por resistencia al rayado?",
  "answer": "Escala de Mohs",
  "other": [
   "Escala Celsius",
   "Escala de Beaufort",
   "Escala de pH"
  ],
  "explanation": "La escala de Mohs compara la capacidad de un mineral para rayar a otro.",
  "difficulty": "media",
  "set": 2,
  "id": 43
 },
 {
  "cat": "g",
  "text": "¿Qué parte de una flor produce el polen?",
  "answer": "La antera",
  "other": [
   "El pétalo",
   "El sépalo",
   "El ovario"
  ],
  "explanation": "Las anteras forman parte de los estambres y producen polen.",
  "difficulty": "media",
  "set": 2,
  "id": 44
 },
 {
  "cat": "c",
  "text": "¿Qué representa un corte vertical en un plano de un edificio?",
  "answer": "La vista de su interior al seccionarlo verticalmente",
  "other": [
   "La vista desde arriba sin sección",
   "El recorrido de un vehículo",
   "Solo la fachada exterior"
  ],
  "explanation": "Un corte vertical permite observar alturas, niveles y relaciones entre elementos interiores.",
  "difficulty": "media",
  "set": 2,
  "id": 45
 },
 {
  "cat": "c",
  "text": "¿Qué deformación tiende a provocar un asentamiento diferencial entre apoyos?",
  "answer": "Distorsión y posibles grietas",
  "other": [
   "Un descenso idéntico sin distorsión",
   "Un aumento uniforme del peso",
   "La desaparición de las cargas"
  ],
  "explanation": "Si los apoyos se asientan de manera distinta, la estructura puede distorsionarse y agrietarse.",
  "difficulty": "media",
  "set": 2,
  "id": 46
 },
 {
  "cat": "c",
  "text": "¿Qué propiedad relaciona esfuerzo y deformación unitaria en el rango elástico lineal?",
  "answer": "Módulo de elasticidad",
  "other": [
   "Densidad",
   "Conductividad térmica",
   "Porosidad"
  ],
  "explanation": "La ley de Hooke relaciona esfuerzo y deformación mediante el módulo de elasticidad E.",
  "difficulty": "media",
  "set": 2,
  "id": 47
 },
 {
  "cat": "t",
  "text": "¿Qué se entiende por demora de control en una intersección?",
  "answer": "El tiempo adicional de viaje asociado al control de la intersección",
  "other": [
   "El tiempo de mantenimiento de una luminaria",
   "Solo el tiempo de estacionamiento",
   "El tiempo de construcción de la calle"
  ],
  "explanation": "La demora de control incluye efectos como desacelerar, esperar y acelerar debido al control de tránsito.",
  "difficulty": "media",
  "set": 2,
  "id": 48
 },
 {
  "cat": "t",
  "text": "¿Qué diferencia hay entre flujo y densidad de tránsito?",
  "answer": "El flujo cuenta vehículos por tiempo y la densidad por longitud",
  "other": [
   "Ambos miden kilómetros por hora",
   "El flujo mide vehículos estacionados y la densidad pasajeros",
   "La densidad siempre es igual a la velocidad"
  ],
  "explanation": "El flujo suele expresarse en veh/h y la densidad en veh/km.",
  "difficulty": "media",
  "set": 2,
  "id": 49
 },
 {
  "cat": "g",
  "text": "¿Quién pintó Las meninas?",
  "answer": "Diego Velázquez",
  "other": [
   "Francisco de Goya",
   "El Greco",
   "Bartolomé Murillo"
  ],
  "explanation": "Las meninas es una obra de Diego Velázquez conservada en el Museo del Prado.",
  "difficulty": "dificil",
  "set": 2,
  "id": 50
 },
 {
  "cat": "g",
  "text": "¿Cuál es la función principal de una enzima?",
  "answer": "Acelerar una reacción química sin consumirse de forma neta",
  "other": [
   "Cambiar cualquier elemento químico en otro",
   "Eliminar toda necesidad de energía",
   "Almacenar toda la información genética"
  ],
  "explanation": "Las enzimas actúan como catalizadores biológicos y reducen la energía de activación.",
  "difficulty": "dificil",
  "set": 2,
  "id": 51
 },
 {
  "cat": "g",
  "text": "¿Qué distingue al fenotipo del genotipo?",
  "answer": "El fenotipo son características observables influidas por genes y ambiente",
  "other": [
   "El fenotipo es solo la secuencia de ADN",
   "El genotipo cambia siempre con la alimentación",
   "Ambos se refieren únicamente al color de ojos"
  ],
  "explanation": "El genotipo corresponde a la constitución genética; el fenotipo incluye su expresión y la influencia del ambiente.",
  "difficulty": "dificil",
  "set": 2,
  "id": 52
 },
 {
  "cat": "g",
  "text": "¿Qué representa el número atómico de un elemento?",
  "answer": "El número de protones de su núcleo",
  "other": [
   "El número de neutrones",
   "La suma de protones y neutrones",
   "La masa en gramos de un átomo"
  ],
  "explanation": "El número atómico identifica al elemento por la cantidad de protones.",
  "difficulty": "dificil",
  "set": 2,
  "id": 53
 },
 {
  "cat": "g",
  "text": "¿Qué mide la entropía en la termodinámica estadística?",
  "answer": "La multiplicidad de configuraciones microscópicas compatibles con un estado",
  "other": [
   "La masa total de un planeta",
   "La velocidad de una onda sonora",
   "El número de protones de un átomo"
  ],
  "explanation": "La entropía se relaciona con las maneras microscópicas de realizar un estado macroscópico.",
  "difficulty": "dificil",
  "set": 2,
  "id": 54
 },
 {
  "cat": "c",
  "text": "¿Cuál es la diferencia entre rigidez y resistencia estructural?",
  "answer": "La rigidez se relaciona con deformarse; la resistencia con soportar esfuerzos sin fallar",
  "other": [
   "Ambas describen exclusivamente el peso",
   "Una gran rigidez garantiza cualquier resistencia",
   "La resistencia indica solo la temperatura"
  ],
  "explanation": "Una estructura puede ser rígida sin ser suficientemente resistente, o resistente y relativamente flexible.",
  "difficulty": "dificil",
  "set": 2,
  "id": 55
 },
 {
  "cat": "c",
  "text": "¿Por qué una carga excéntrica puede ser más exigente para una columna que una carga centrada?",
  "answer": "Porque genera flexión además de compresión",
  "other": [
   "Porque elimina la compresión",
   "Porque reduce siempre el peso propio",
   "Porque convierte toda carga en tracción pura"
  ],
  "explanation": "La excentricidad introduce una acción de flexión junto a la carga axial.",
  "difficulty": "dificil",
  "set": 2,
  "id": 56
 },
 {
  "cat": "c",
  "text": "¿Qué es la fluencia lenta o creep del hormigón?",
  "answer": "El aumento de deformación con el tiempo bajo una carga sostenida",
  "other": [
   "La evaporación instantánea de toda el agua",
   "La recuperación inmediata de toda deformación",
   "La corrosión exclusiva del moldaje"
  ],
  "explanation": "El hormigón puede seguir deformándose con el tiempo bajo esfuerzos sostenidos.",
  "difficulty": "dificil",
  "set": 2,
  "id": 57
 },
 {
  "cat": "t",
  "text": "¿Qué puede ocurrir si una cola llena el espacio disponible hasta la intersección anterior?",
  "answer": "Bloquear movimientos aguas arriba",
  "other": [
   "Eliminar toda demora de la red",
   "Duplicar automáticamente la capacidad",
   "Hacer innecesarios los semáforos"
  ],
  "explanation": "El desbordamiento de cola puede interferir con una intersección anterior y propagar la congestión.",
  "difficulty": "dificil",
  "set": 2,
  "id": 58
 },
 {
  "cat": "t",
  "text": "¿Por qué se pueden agrupar buses de una misma línea aunque salgan separados?",
  "answer": "Las demoras y la acumulación de pasajeros pueden amplificar las diferencias de intervalo",
  "other": [
   "Porque todos sus conductores viajan a idéntica velocidad",
   "Porque los pasajeros siempre se reparten por igual",
   "Porque el intervalo no cambia durante el recorrido"
  ],
  "explanation": "Un bus atrasado encuentra más pasajeros y puede demorarse más; el siguiente puede alcanzarlo.",
  "difficulty": "dificil",
  "set": 2,
  "id": 59
 },
 {
  "cat": "g",
  "text": "¿Qué idioma se habla mayoritariamente en Brasil?",
  "answer": "Portugués",
  "other": [
   "Francés",
   "Italiano",
   "Español"
  ],
  "explanation": "El portugués es el idioma oficial de Brasil.",
  "set": 3,
  "difficulty": "facil",
  "id": 60
 },
 {
  "cat": "g",
  "text": "¿Cuántos días tiene febrero en un año bisiesto?",
  "answer": "Veintinueve",
  "other": [
   "Veintiocho",
   "Treinta",
   "Treinta y uno"
  ],
  "explanation": "Los años bisiestos tienen un día adicional en febrero.",
  "set": 3,
  "difficulty": "facil",
  "id": 61
 },
 {
  "cat": "g",
  "text": "¿En qué país se originaron los Juegos Olímpicos de la Antigüedad?",
  "answer": "Grecia",
  "other": [
   "Egipto",
   "China",
   "India"
  ],
  "explanation": "Los juegos antiguos se celebraban en Olimpia, Grecia.",
  "set": 3,
  "difficulty": "facil",
  "id": 62
 },
 {
  "cat": "g",
  "text": "¿Qué instrumento tiene teclas blancas y negras y cuerdas en su interior?",
  "answer": "Piano",
  "other": [
   "Flauta",
   "Trompeta",
   "Tambor"
  ],
  "explanation": "En un piano acústico, las teclas accionan martillos que golpean cuerdas.",
  "set": 3,
  "difficulty": "facil",
  "id": 63
 },
 {
  "cat": "g",
  "text": "¿Cuál es la capital de Argentina?",
  "answer": "Buenos Aires",
  "other": [
   "Montevideo",
   "Lima",
   "Quito"
  ],
  "explanation": "Buenos Aires es la capital de Argentina.",
  "set": 3,
  "difficulty": "facil",
  "id": 64
 },
 {
  "cat": "c",
  "text": "¿Para qué se utiliza un vibrador en el hormigón fresco?",
  "answer": "Para ayudar a compactarlo y reducir aire atrapado",
  "other": [
   "Para cortar el acero",
   "Para agregar pintura",
   "Para enfriar el suelo"
  ],
  "explanation": "La vibración facilita la compactación y reduce vacíos.",
  "set": 3,
  "difficulty": "facil",
  "id": 65
 },
 {
  "cat": "c",
  "text": "¿Qué indica una cota en un plano?",
  "answer": "Una dimensión o medida",
  "other": [
   "El nombre del constructor",
   "El costo total de la obra",
   "La cantidad de obreros"
  ],
  "explanation": "Las cotas indican dimensiones y distancias entre elementos.",
  "set": 3,
  "difficulty": "facil",
  "id": 66
 },
 {
  "cat": "c",
  "text": "¿Para qué sirve una canaleta en una cubierta?",
  "answer": "Para recoger y conducir agua de lluvia",
  "other": [
   "Para sostener columnas",
   "Para mezclar cemento",
   "Para medir el suelo"
  ],
  "explanation": "La canaleta conduce el agua hacia las bajadas de aguas lluvias.",
  "set": 3,
  "difficulty": "facil",
  "id": 67
 },
 {
  "cat": "c",
  "text": "¿Qué mezcla se utiliza habitualmente para unir ladrillos?",
  "answer": "Mortero",
  "other": [
   "Pintura",
   "Asfalto",
   "Aceite"
  ],
  "explanation": "El mortero une las unidades de albañilería y ayuda a distribuir cargas.",
  "set": 3,
  "difficulty": "facil",
  "id": 68
 },
 {
  "cat": "t",
  "text": "¿Qué es el transporte intermodal de carga?",
  "answer": "Un traslado que combina más de un modo de transporte",
  "other": [
   "El uso exclusivo de automóviles",
   "Una vía solo peatonal",
   "Un traslado sin vehículos"
  ],
  "explanation": "Puede combinar, por ejemplo, camión, tren y barco.",
  "set": 3,
  "difficulty": "facil",
  "id": 69
 },
 {
  "cat": "g",
  "text": "¿Qué científico formuló las leyes clásicas del movimiento y la gravitación universal?",
  "answer": "Isaac Newton",
  "other": [
   "Charles Darwin",
   "Gregor Mendel",
   "Louis Pasteur"
  ],
  "explanation": "Newton formuló tres leyes del movimiento y la ley de gravitación universal.",
  "difficulty": "media",
  "set": 3,
  "id": 70
 },
 {
  "cat": "g",
  "text": "¿Qué estrecho conecta el océano Atlántico con el mar Mediterráneo?",
  "answer": "Estrecho de Gibraltar",
  "other": [
   "Estrecho de Magallanes",
   "Estrecho de Bering",
   "Estrecho de Ormuz"
  ],
  "explanation": "El estrecho de Gibraltar conecta el Atlántico con el Mediterráneo.",
  "difficulty": "media",
  "set": 3,
  "id": 71
 },
 {
  "cat": "g",
  "text": "¿Qué caracteriza a una solución con pH menor que 7 a 25 °C?",
  "answer": "Es ácida",
  "other": [
   "Es neutra",
   "Es necesariamente salada",
   "Es básica"
  ],
  "explanation": "A 25 °C, un pH menor que 7 indica una solución ácida.",
  "difficulty": "media",
  "set": 3,
  "id": 72
 },
 {
  "cat": "g",
  "text": "¿Quién compuso Las cuatro estaciones?",
  "answer": "Antonio Vivaldi",
  "other": [
   "Ludwig van Beethoven",
   "Wolfgang Amadeus Mozart",
   "Frédéric Chopin"
  ],
  "explanation": "Las cuatro estaciones es un conjunto de conciertos de Vivaldi.",
  "difficulty": "media",
  "set": 3,
  "id": 73
 },
 {
  "cat": "g",
  "text": "¿Qué movimiento artístico se asocia con Claude Monet?",
  "answer": "Impresionismo",
  "other": [
   "Cubismo",
   "Surrealismo",
   "Pop art"
  ],
  "explanation": "Claude Monet es uno de los principales representantes del impresionismo.",
  "difficulty": "media",
  "set": 3,
  "id": 74
 },
 {
  "cat": "c",
  "text": "¿Qué es una junta de dilatación en una construcción?",
  "answer": "Una separación que permite movimientos relativos entre partes",
  "other": [
   "Una unión que prohíbe todo movimiento térmico",
   "Una pintura resistente al agua",
   "Una técnica de mezcla de cemento"
  ],
  "explanation": "Las juntas permiten acomodar movimientos, por ejemplo por cambios térmicos, y reducir daños asociados.",
  "difficulty": "media",
  "set": 3,
  "id": 75
 },
 {
  "cat": "c",
  "text": "¿Qué función cumple una barrera de vapor en una envolvente?",
  "answer": "Limitar la difusión de vapor de agua",
  "other": [
   "Sustituir la estructura",
   "Evacuar agua por una canaleta",
   "Generar ventilación natural"
  ],
  "explanation": "Una barrera de vapor limita el paso de vapor; su ubicación depende del diseño y del clima.",
  "difficulty": "media",
  "set": 3,
  "id": 76
 },
 {
  "cat": "c",
  "text": "¿Qué representa un diagrama de Gantt?",
  "answer": "Actividades y su duración en el tiempo",
  "other": [
   "La resistencia del hormigón",
   "El esfuerzo axial por área",
   "La ubicación de grietas en un muro"
  ],
  "explanation": "El diagrama de Gantt organiza actividades en una escala temporal.",
  "difficulty": "media",
  "set": 3,
  "id": 77
 },
 {
  "cat": "t",
  "text": "¿Qué es una matriz origen-destino?",
  "answer": "Una tabla de viajes entre zonas de origen y destino",
  "other": [
   "Un listado de patentes",
   "Un inventario de neumáticos",
   "Un plano de señalización"
  ],
  "explanation": "La matriz registra viajes de cada zona de origen a cada zona de destino.",
  "difficulty": "media",
  "set": 3,
  "id": 78
 },
 {
  "cat": "t",
  "text": "¿Qué significa la capacidad de una vía bajo condiciones definidas?",
  "answer": "El máximo flujo que puede atender de manera sostenible",
  "other": [
   "El número total de calles de una ciudad",
   "La velocidad legal máxima",
   "La cantidad de vehículos que caben estacionados"
  ],
  "explanation": "La capacidad se refiere al flujo atendible por unidad de tiempo bajo condiciones específicas.",
  "difficulty": "media",
  "set": 3,
  "id": 79
 },
 {
  "cat": "g",
  "text": "¿Qué significa que un átomo sea un isótopo de otro del mismo elemento?",
  "answer": "Tienen igual número de protones y distinto número de neutrones",
  "other": [
   "Tienen siempre distinto número de protones",
   "No comparten ninguna propiedad química",
   "Uno carece necesariamente de electrones"
  ],
  "explanation": "Los isótopos pertenecen al mismo elemento, pero difieren en su cantidad de neutrones.",
  "difficulty": "dificil",
  "set": 3,
  "id": 80
 },
 {
  "cat": "g",
  "text": "¿Por qué hay estaciones del año en la Tierra?",
  "answer": "Por la inclinación del eje terrestre y la traslación",
  "other": [
   "Principalmente por la distancia variable al Sol",
   "Por los eclipses de Luna",
   "Por cambios en el tamaño del Sol"
  ],
  "explanation": "La inclinación del eje cambia la incidencia solar y la duración del día a lo largo de la órbita.",
  "difficulty": "dificil",
  "set": 3,
  "id": 81
 },
 {
  "cat": "g",
  "text": "¿Por qué un eclipse solar no ocurre en cada luna nueva?",
  "answer": "La órbita lunar está inclinada respecto del plano de la órbita terrestre",
  "other": [
   "La Luna no gira alrededor de la Tierra",
   "El Sol deja de emitir luz en luna nueva",
   "La Tierra pierde su sombra cada mes"
  ],
  "explanation": "La inclinación de la órbita lunar hace que la alineación necesaria no se produzca en cada luna nueva.",
  "difficulty": "dificil",
  "set": 3,
  "id": 82
 },
 {
  "cat": "g",
  "text": "¿Qué distingue a una célula procariota de una eucariota?",
  "answer": "No tiene núcleo rodeado por membrana",
  "other": [
   "No contiene material genético",
   "No tiene membrana celular",
   "Siempre es más grande"
  ],
  "explanation": "En las procariotas el ADN no está encerrado en un núcleo delimitado por membrana.",
  "difficulty": "dificil",
  "set": 3,
  "id": 83
 },
 {
  "cat": "g",
  "text": "¿Qué significa que una especie sea endémica de una región?",
  "answer": "Que su distribución natural está restringida a esa región",
  "other": [
   "Que puede encontrarse naturalmente en todos los continentes",
   "Que es necesariamente una especie introducida",
   "Que todos sus individuos migran cada año"
  ],
  "explanation": "El endemismo se refiere a una distribución natural limitada a un área geográfica.",
  "difficulty": "dificil",
  "set": 3,
  "id": 84
 },
 {
  "cat": "c",
  "text": "¿Qué es la retracción del hormigón?",
  "answer": "Una disminución de volumen que puede ocurrir sin carga externa",
  "other": [
   "Un aumento permanente de volumen por cualquier carga",
   "La plastificación de las barras de acero",
   "La desaparición del cemento"
  ],
  "explanation": "La retracción puede relacionarse con secado y procesos internos del hormigón, y puede generar fisuras si está restringida.",
  "difficulty": "dificil",
  "set": 3,
  "id": 85
 },
 {
  "cat": "c",
  "text": "¿Qué riesgo plantea una junta fría no prevista en el hormigonado?",
  "answer": "Una discontinuidad que puede perjudicar la unión entre etapas de colocación",
  "other": [
   "Una mejora garantizada de la adherencia",
   "La eliminación de toda fisuración",
   "La sustitución de la armadura"
  ],
  "explanation": "Si la colocación se interrumpe y el material previo endurece, la unión con la etapa siguiente puede necesitar un tratamiento adecuado.",
  "difficulty": "dificil",
  "set": 3,
  "id": 86
 },
 {
  "cat": "c",
  "text": "¿Qué caracteriza a una actividad de la ruta crítica de un proyecto?",
  "answer": "Retrasarla puede retrasar el término del proyecto si no se cambia el programa",
  "other": [
   "Siempre es la actividad más cara",
   "Siempre requiere más trabajadores",
   "Puede retrasarse indefinidamente sin efectos"
  ],
  "explanation": "En la programación habitual, las actividades críticas no disponen de holgura total que permita retrasarlas sin afectar el plazo final.",
  "difficulty": "dificil",
  "set": 3,
  "id": 87
 },
 {
  "cat": "t",
  "text": "¿Por qué una onda de congestión puede desplazarse hacia atrás mientras los vehículos avanzan?",
  "answer": "Porque la transición entre estados de tránsito se propaga en dirección distinta a los vehículos",
  "other": [
   "Porque todos los autos circulan en reversa",
   "Porque la calle cambia físicamente de sentido",
   "Porque las ruedas dejan de girar"
  ],
  "explanation": "La propagación de una perturbación del tránsito no tiene por qué coincidir con la dirección del movimiento vehicular.",
  "difficulty": "dificil",
  "set": 3,
  "id": 88
 },
 {
  "cat": "t",
  "text": "¿Qué es el desfase entre semáforos coordinados?",
  "answer": "La separación temporal entre puntos de referencia de sus ciclos",
  "other": [
   "La distancia física entre postes",
   "El número de focos de cada semáforo",
   "El cambio de color de la pintura vial"
  ],
  "explanation": "Los desfases organizan la relación temporal entre semáforos para favorecer la progresión de vehículos.",
  "difficulty": "dificil",
  "set": 3,
  "id": 89
 },
 {
  "cat": "g",
  "text": "¿Qué deporte utiliza una canasta y un balón que se bota con la mano?",
  "answer": "Básquetbol",
  "other": [
   "Voleibol",
   "Tenis",
   "Rugby"
  ],
  "explanation": "En el básquetbol se busca encestar el balón en la canasta rival.",
  "set": 4,
  "difficulty": "facil",
  "id": 90
 },
 {
  "cat": "g",
  "text": "¿Cuál es el satélite natural de la Tierra?",
  "answer": "La Luna",
  "other": [
   "Marte",
   "El Sol",
   "Venus"
  ],
  "explanation": "La Luna es el satélite natural de la Tierra.",
  "set": 4,
  "difficulty": "facil",
  "id": 91
 },
 {
  "cat": "g",
  "text": "¿Cuál de estos animales pone huevos?",
  "answer": "Gallina",
  "other": [
   "Gato",
   "Perro",
   "Caballo"
  ],
  "explanation": "Las gallinas son aves y se reproducen mediante huevos.",
  "set": 4,
  "difficulty": "facil",
  "id": 92
 },
 {
  "cat": "g",
  "text": "¿Qué país alberga las pirámides de Guiza?",
  "answer": "Egipto",
  "other": [
   "Marruecos",
   "India",
   "Turquía"
  ],
  "explanation": "Las pirámides de Guiza están en Egipto.",
  "set": 4,
  "difficulty": "facil",
  "id": 93
 },
 {
  "cat": "g",
  "text": "¿Qué sentido se relaciona principalmente con los oídos?",
  "answer": "Audición",
  "other": [
   "Visión",
   "Olfato",
   "Gusto"
  ],
  "explanation": "Los oídos permiten percibir sonidos y también participan en el equilibrio.",
  "set": 4,
  "difficulty": "facil",
  "id": 94
 },
 {
  "cat": "c",
  "text": "¿Qué es una excavación?",
  "answer": "La remoción de suelo para generar un espacio o alcanzar una profundidad",
  "other": [
   "La pintura de una superficie",
   "La instalación de luminarias",
   "La mezcla de áridos"
  ],
  "explanation": "Las excavaciones se utilizan, por ejemplo, para fundaciones y zanjas.",
  "set": 4,
  "difficulty": "facil",
  "id": 95
 },
 {
  "cat": "c",
  "text": "¿Qué herramienta permite comprobar si una superficie está horizontal?",
  "answer": "Nivel de burbuja",
  "other": [
   "Serrucho",
   "Llave inglesa",
   "Alicate"
  ],
  "explanation": "El nivel de burbuja permite verificar horizontalidad o verticalidad según su orientación.",
  "set": 4,
  "difficulty": "facil",
  "id": 96
 },
 {
  "cat": "c",
  "text": "¿Qué es una zapata de fundación?",
  "answer": "Una base que distribuye cargas al suelo",
  "other": [
   "Una cubierta de techo",
   "Un tipo de ventana",
   "Una tubería eléctrica"
  ],
  "explanation": "Las zapatas son fundaciones superficiales que distribuyen las cargas sobre un área del terreno.",
  "set": 4,
  "difficulty": "facil",
  "id": 97
 },
 {
  "cat": "t",
  "text": "¿Qué es una rotonda?",
  "answer": "Una intersección con circulación alrededor de una isla central",
  "other": [
   "Una vía férrea recta",
   "Una fundación circular",
   "Un estacionamiento subterráneo"
  ],
  "explanation": "Las rotondas organizan los movimientos alrededor de una isla central.",
  "set": 4,
  "difficulty": "facil",
  "id": 98
 },
 {
  "cat": "t",
  "text": "¿En qué unidad se expresa habitualmente la velocidad de un vehículo?",
  "answer": "Kilómetros por hora",
  "other": [
   "Vehículos por hora",
   "Metros cuadrados",
   "Toneladas por litro"
  ],
  "explanation": "La velocidad relaciona distancia recorrida con tiempo.",
  "set": 4,
  "difficulty": "facil",
  "id": 99
 },
 {
  "cat": "g",
  "text": "¿Qué país se conoció históricamente como Persia?",
  "answer": "Irán",
  "other": [
   "Irak",
   "Siria",
   "Jordania"
  ],
  "explanation": "Persia es el nombre histórico asociado a Irán.",
  "difficulty": "media",
  "set": 4,
  "id": 100
 },
 {
  "cat": "g",
  "text": "¿Qué molécula almacena la información genética en las células?",
  "answer": "ADN",
  "other": [
   "ATP",
   "Glucosa",
   "Hemoglobina"
  ],
  "explanation": "El ADN contiene la información genética celular.",
  "difficulty": "media",
  "set": 4,
  "id": 101
 },
 {
  "cat": "g",
  "text": "¿Qué unidad del Sistema Internacional mide energía?",
  "answer": "Julio (J)",
  "other": [
   "Vatio (W)",
   "Pascal (Pa)",
   "Amperio (A)"
  ],
  "explanation": "El julio mide energía; el vatio mide potencia.",
  "difficulty": "media",
  "set": 4,
  "id": 102
 },
 {
  "cat": "g",
  "text": "¿Quién pintó Guernica?",
  "answer": "Pablo Picasso",
  "other": [
   "Claude Monet",
   "Diego Rivera",
   "Henri Matisse"
  ],
  "explanation": "Guernica es una obra de Pablo Picasso realizada en 1937.",
  "difficulty": "media",
  "set": 4,
  "id": 103
 },
 {
  "cat": "g",
  "text": "¿Qué científico propuso la teoría de la deriva continental?",
  "answer": "Alfred Wegener",
  "other": [
   "Gregor Mendel",
   "Louis Pasteur",
   "Antoine Lavoisier"
  ],
  "explanation": "Wegener propuso que los continentes habían estado unidos y se habían desplazado con el tiempo.",
  "difficulty": "media",
  "set": 4,
  "id": 104
 },
 {
  "cat": "c",
  "text": "¿Qué caracteriza a una estructura isostática estable?",
  "answer": "Sus reacciones se determinan con las ecuaciones de equilibrio",
  "other": [
   "No tiene apoyos",
   "No recibe cargas",
   "Todas sus uniones son rígidas"
  ],
  "explanation": "En una estructura isostática estable, el equilibrio es suficiente para hallar las reacciones.",
  "difficulty": "media",
  "set": 4,
  "id": 105
 },
 {
  "cat": "c",
  "text": "¿Qué es la relación agua/cemento, expresada usualmente para una mezcla?",
  "answer": "Masa de agua dividida por masa de cemento",
  "other": [
   "Volumen de áridos dividido por longitud de la viga",
   "Masa de acero dividida por masa de agua",
   "Área de moldaje dividida por espesor"
  ],
  "explanation": "La relación agua/cemento usa las masas de agua y cemento de la mezcla.",
  "difficulty": "media",
  "set": 4,
  "id": 106
 },
 {
  "cat": "c",
  "text": "¿Qué ensayo de laboratorio estudia compactación del suelo para distintas humedades?",
  "answer": "Ensayo Proctor",
  "other": [
   "Ensayo de asentamiento del hormigón",
   "Ensayo de tracción del acero",
   "Ensayo de iluminación"
  ],
  "explanation": "El ensayo Proctor relaciona humedad y densidad seca para una energía de compactación definida.",
  "difficulty": "media",
  "set": 4,
  "id": 107
 },
 {
  "cat": "t",
  "text": "¿Qué mide la ocupación de un servicio de transporte respecto de su capacidad?",
  "answer": "El grado de utilización de las plazas disponibles",
  "other": [
   "Solo la longitud de su recorrido",
   "La velocidad de su motor",
   "La cantidad de semáforos de su ruta"
  ],
  "explanation": "La ocupación permite describir qué parte de la capacidad de transporte está siendo utilizada.",
  "difficulty": "media",
  "set": 4,
  "id": 108
 },
 {
  "cat": "t",
  "text": "¿Qué suele ocurrir si la demanda de un acceso supera de forma sostenida su capacidad de atención?",
  "answer": "La cola tiende a crecer",
  "other": [
   "La espera desaparece automáticamente",
   "La capacidad siempre aumenta por sí sola",
   "Todos los vehículos reducen su tamaño"
  ],
  "explanation": "Si ingresan más vehículos de los que pueden salir, se acumulan vehículos en espera.",
  "difficulty": "media",
  "set": 4,
  "id": 109
 },
 {
  "cat": "g",
  "text": "¿Qué cambio de estado lleva directamente de sólido a gas?",
  "answer": "Sublimación",
  "other": [
   "Condensación",
   "Fusión",
   "Solidificación"
  ],
  "explanation": "La sublimación es el paso directo de sólido a gas sin una fase líquida intermedia.",
  "difficulty": "dificil",
  "set": 4,
  "id": 110
 },
 {
  "cat": "g",
  "text": "¿Qué establece el principio de exclusión de Pauli para los electrones de un átomo?",
  "answer": "No pueden compartir todos sus números cuánticos",
  "other": [
   "Todos deben ocupar el mismo estado",
   "Todos carecen de carga",
   "El núcleo no puede contener neutrones"
  ],
  "explanation": "El principio impide que dos electrones ocupen el mismo estado cuántico completo.",
  "difficulty": "dificil",
  "set": 4,
  "id": 111
 },
 {
  "cat": "g",
  "text": "¿Por qué las ondas sonoras no se propagan por el vacío?",
  "answer": "Necesitan un medio material para transmitir la perturbación",
  "other": [
   "Su velocidad en el vacío es infinita",
   "La luz absorbe siempre todo sonido",
   "Solo existen en medios líquidos"
  ],
  "explanation": "El sonido es una onda mecánica y necesita un medio material para propagarse.",
  "difficulty": "dificil",
  "set": 4,
  "id": 112
 },
 {
  "cat": "g",
  "text": "¿Qué indica un corrimiento al rojo cosmológico en la luz de galaxias lejanas?",
  "answer": "El alargamiento de sus longitudes de onda por la expansión del universo",
  "other": [
   "Que toda galaxia es roja",
   "Que la luz viaja más lento en el vacío",
   "Que las estrellas han dejado de emitir"
  ],
  "explanation": "La expansión del universo estira las longitudes de onda de la luz durante su viaje.",
  "difficulty": "dificil",
  "set": 4,
  "id": 113
 },
 {
  "cat": "g",
  "text": "¿Qué efecto tiene un inhibidor competitivo sobre una enzima?",
  "answer": "Compite con el sustrato por el sitio activo",
  "other": [
   "Destruye necesariamente toda la enzima",
   "Transforma el ADN de cualquier célula",
   "Sustituye siempre al producto final"
  ],
  "explanation": "Un inhibidor competitivo ocupa el sitio activo e interfiere con la unión del sustrato.",
  "difficulty": "dificil",
  "set": 4,
  "id": 114
 },
 {
  "cat": "c",
  "text": "¿Qué puede provocar la reacción álcali-sílice en un hormigón susceptible con humedad disponible?",
  "answer": "Expansión y fisuración",
  "other": [
   "Una reducción garantizada de la porosidad",
   "La eliminación de cualquier retracción",
   "La transformación del acero en cemento"
  ],
  "explanation": "La reacción produce un gel que puede expandirse al incorporar humedad y generar fisuración.",
  "difficulty": "dificil",
  "set": 4,
  "id": 115
 },
 {
  "cat": "c",
  "text": "¿Por qué la carbonatación puede favorecer la corrosión de armaduras cuando alcanza el acero?",
  "answer": "Reduce la alcalinidad que ayuda a mantener su protección pasiva",
  "other": [
   "Convierte el acero en árido grueso",
   "Aumenta siempre el recubrimiento",
   "Elimina permanentemente la humedad"
  ],
  "explanation": "La reducción de alcalinidad puede despasivar el acero; la corrosión también depende de condiciones como humedad y oxígeno.",
  "difficulty": "dificil",
  "set": 4,
  "id": 116
 },
 {
  "cat": "c",
  "text": "¿Qué es la licuefacción de un suelo durante un sismo?",
  "answer": "La pérdida importante de resistencia por aumento de presión de poros en un suelo susceptible",
  "other": [
   "La fusión del suelo por calor volcánico",
   "El endurecimiento instantáneo de cualquier roca",
   "La eliminación de todo el agua subterránea"
  ],
  "explanation": "En ciertos suelos granulares saturados, el aumento de presión de poros reduce el esfuerzo efectivo y la resistencia.",
  "difficulty": "dificil",
  "set": 4,
  "id": 117
 },
 {
  "cat": "t",
  "text": "¿Qué distingue a la capacidad de un acceso semaforizado del flujo de saturación?",
  "answer": "La capacidad considera la proporción de tiempo útil disponible para atender vehículos",
  "other": [
   "Son siempre iguales sin importar el semáforo",
   "La capacidad describe solo vehículos estacionados",
   "El flujo de saturación mide peatones por superficie"
  ],
  "explanation": "El flujo de saturación caracteriza la descarga en condiciones definidas; la capacidad incorpora el tiempo efectivo de atención.",
  "difficulty": "dificil",
  "set": 4,
  "id": 118
 },
 {
  "cat": "t",
  "text": "¿Qué es el bombeo de finos en un pavimento rígido?",
  "answer": "La expulsión de agua y material fino por juntas o bordes bajo cargas repetidas",
  "other": [
   "La colocación de asfalto sobre una señal",
   "La expansión térmica de una baranda",
   "El transporte de áridos en camiones"
  ],
  "explanation": "El bombeo puede remover material de apoyo y contribuir al deterioro de un pavimento de hormigón.",
  "difficulty": "dificil",
  "set": 4,
  "id": 119
 }
].map((q,id)=>({...q,id}));
const $=id=>document.getElementById(id);
let round=[],index=0,hits=0,answered=false,history=[];
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function show(view){['setup','game','results'].forEach(id=>$(id).hidden=id!==view);}
function start(){const pool=QUESTIONS.filter(q=>q.set===Number($('set').value));round=['facil','media','dificil'].flatMap(d=>shuffle(pool.filter(q=>q.difficulty===d)));index=0;hits=0;history=[];show('game');render();}
function setName(number){return Number(number)===4?'FINAL':`Set ${number}`;}
function render(){answered=false;const q=round[index];const names={facil:'Fácil',media:'Media',dificil:'Difícil'};$('difficulty').textContent=`${names[q.difficulty]} · ${index<10?'1–10':index<20?'11–20':'21–30'}`;$('difficulty').dataset.level=q.difficulty;$('position').textContent=`${index+1} / ${round.length}`;$('position').setAttribute('aria-label',`${setName(q.set)}, pregunta ${index+1} de ${round.length}`);$('hits').textContent=hits;$('points').textContent=hits*100;setProgress(index/round.length*100);$('badge').textContent=q.cat==='g'?'🌎 Cultura general':q.cat==='c'?'🏗️ Construcción':'🚦 Transporte';$('question').textContent=q.text;$('options').replaceChildren();$('feedback').hidden=true;$('next').hidden=true;shuffle([q.answer,...q.other]).forEach((value,i)=>{const b=document.createElement('button');b.className='option';b.dataset.answer=value;const letter=document.createElement('span');letter.className='letter';letter.textContent='ABCD'[i];const label=document.createElement('span');label.textContent=value;b.append(letter,label);b.addEventListener('click',()=>answer(value));$('options').append(b);});$('question').focus();}
function setProgress(value){$('fill').style.width=`${value}%`;$('progress').setAttribute('aria-valuenow',Math.round(value));}
function answer(selected){if(answered)return;answered=true;const q=round[index],correct=selected===q.answer;if(correct)hits++;history.push({q,selected,correct});for(const b of $('options').children){b.disabled=true;if(b.dataset.answer===q.answer){b.classList.add('correct');b.lastChild.textContent+=' · Correcta';}else if(b.dataset.answer===selected){b.classList.add('wrong');b.lastChild.textContent+=' · Tu respuesta';}}$('hits').textContent=hits;$('points').textContent=hits*100;setProgress((index+1)/round.length*100);$('feedback').className=correct?'feedback':'feedback error';$('feedback-title').textContent=correct?'✓ ¡Correcto! +100 puntos':'Una oportunidad para aprender';$('explanation').textContent=q.explanation;$('feedback').hidden=false;$('next').textContent=index===round.length-1?'Ver resultados':'Siguiente pregunta';$('next').hidden=false;$('next').focus();}
function finish(){show('results');const ratio=hits/round.length;$('result-title').textContent=ratio>=.8?'¡Gran trabajo de ingeniería!':ratio>=.5?'¡Vas por buen camino!':'¡Sigue construyendo conocimientos!';$('final-score').textContent=`${hits*100} puntos`;$('final-detail').textContent=`${setName(round[0].set)} · ${hits} de ${round.length} respuestas correctas · ${Math.round(ratio*100)}% de aciertos`;$('result-message').textContent='Cada partida es una nueva oportunidad para aprender.';$('review-list').replaceChildren();history.forEach(({q,selected,correct},i)=>{const details=document.createElement('details'),summary=document.createElement('summary');summary.textContent=`${correct?'✓':'✗'} ${i+1}. ${q.text}`;details.append(summary);for(const text of [`Tu respuesta: ${selected}`,`Respuesta correcta: ${q.answer}`,q.explanation]){const p=document.createElement('p');p.textContent=text;details.append(p);}$('review-list').append(details);});$('result-title').focus();}
$('start').addEventListener('click',start);$('next').addEventListener('click',()=>{if(!answered)return;if(index===round.length-1)finish();else{index++;render();}});$('leave').addEventListener('click',()=>{if(confirm('¿Salir de la partida? Se perderá el progreso actual.')){show('setup');$('start').focus();}});$('again').addEventListener('click',start);$('settings').addEventListener('click',()=>{show('setup');$('set-'+$('set').value).focus();});

function selectSet(number){$('set').value=String(number);for(let n=1;n<=4;n++)$('set-'+n).setAttribute('aria-pressed',String(n===number));$('start').textContent=`Jugar ${Number(number)===4?'FINAL':'set '+number}`;}
for(let n=1;n<=4;n++)$('set-'+n).addEventListener('click',()=>selectSet(n));
selectSet(1);
