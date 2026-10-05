
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
 },
 {
  "cat": "g",
  "text": "¿Cuántos lados tiene un hexágono?",
  "answer": "Seis",
  "other": [
   "Cinco",
   "Siete",
   "Ocho"
  ],
  "explanation": "Un hexágono es un polígono de seis lados.",
  "set": 1,
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "set": 1
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
  "set": 1
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
  "set": 1
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
  "set": 1
 },
 {
  "cat": "g",
  "text": "¿Cuál es el 15% de 200?",
  "answer": "30",
  "other": [
   "15",
   "20",
   "35"
  ],
  "explanation": "El cálculo es 200 × 0,15 = 30.",
  "difficulty": "media",
  "set": 1
 },
 {
  "cat": "c",
  "text": "Una losa mide 5 m por 4 m y tiene 0,15 m de espesor. ¿Cuál es su volumen?",
  "answer": "3 m³",
  "other": [
   "2 m³",
   "5 m³",
   "30 m³"
  ],
  "explanation": "El volumen es 5 × 4 × 0,15 = 3 m³.",
  "difficulty": "media",
  "set": 1
 },
 {
  "cat": "c",
  "text": "Una carga de 20 kN actúa sobre un área de 2 m². ¿Cuál es la presión media?",
  "answer": "10 kPa",
  "other": [
   "40 kPa",
   "10 MPa",
   "20 Pa"
  ],
  "explanation": "La presión es fuerza dividida por área: 20/2 = 10 kN/m² = 10 kPa.",
  "difficulty": "media",
  "set": 1
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
  "set": 1
 },
 {
  "cat": "t",
  "text": "Un bus pasa cada 10 minutos. ¿Cuál es su frecuencia?",
  "answer": "6 buses por hora",
  "other": [
   "10 buses por hora",
   "12 buses por hora",
   "4 buses por hora"
  ],
  "explanation": "La frecuencia es 60/10 = 6 buses por hora.",
  "difficulty": "media",
  "set": 1
 },
 {
  "cat": "t",
  "text": "Un vehículo recorre 90 km en 1,5 horas. ¿Cuál es su velocidad media?",
  "answer": "60 km/h",
  "other": [
   "45 km/h",
   "90 km/h",
   "135 km/h"
  ],
  "explanation": "La velocidad media es distancia dividida por tiempo: 90/1,5 = 60 km/h.",
  "difficulty": "media",
  "set": 1
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
  "set": 1
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
  "set": 1
 },
 {
  "cat": "g",
  "text": "Una urna tiene 3 bolas rojas y 2 azules. Se extraen dos sin reposición. ¿Cuál es la probabilidad de que ambas sean rojas?",
  "answer": "3/10",
  "other": [
   "9/25",
   "2/5",
   "3/5"
  ],
  "explanation": "La probabilidad es (3/5) × (2/4) = 3/10.",
  "difficulty": "dificil",
  "set": 1
 },
 {
  "cat": "g",
  "text": "Si todos los A son B y ningún B es C, ¿qué conclusión es necesariamente cierta?",
  "answer": "Ningún A es C",
  "other": [
   "Todos los C son A",
   "Todos los B son A",
   "Algunos A son C"
  ],
  "explanation": "Como A está contenido en B y B no tiene elementos en C, A tampoco tiene elementos en C.",
  "difficulty": "dificil",
  "set": 1
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
  "set": 1
 },
 {
  "cat": "c",
  "text": "Una viga simplemente apoyada de 6 m tiene una carga central de 12 kN. ¿Cuál es su momento flector máximo?",
  "answer": "18 kN·m",
  "other": [
   "12 kN·m",
   "36 kN·m",
   "72 kN·m"
  ],
  "explanation": "Las reacciones son 6 kN; el momento máximo en el centro es 6 × 3 = 18 kN·m.",
  "difficulty": "dificil",
  "set": 1
 },
 {
  "cat": "c",
  "text": "Para una sección rectangular, I = b·h³/12. Si se duplica h manteniendo b, ¿cómo cambia I?",
  "answer": "Se multiplica por 8",
  "other": [
   "Se multiplica por 2",
   "Se multiplica por 4",
   "Se divide por 2"
  ],
  "explanation": "La altura está elevada al cubo: 2³ = 8.",
  "difficulty": "dificil",
  "set": 1
 },
 {
  "cat": "c",
  "text": "En el modelo de Euler, Pcr = π²EI/(KL)². Si se duplica L y lo demás no cambia, ¿qué ocurre con Pcr?",
  "answer": "Se reduce a un cuarto",
  "other": [
   "Se duplica",
   "Se reduce a la mitad",
   "Se cuadruplica"
  ],
  "explanation": "La carga crítica es inversamente proporcional a L², por lo que pasa a Pcr/4.",
  "difficulty": "dificil",
  "set": 1
 },
 {
  "cat": "t",
  "text": "Usando q = k·v, con densidad de 25 veh/km y velocidad de 40 km/h, ¿cuál es el flujo?",
  "answer": "1.000 veh/h",
  "other": [
   "625 veh/h",
   "1.600 veh/h",
   "65 veh/h"
  ],
  "explanation": "El flujo es 25 × 40 = 1.000 veh/h, con magnitudes compatibles del mismo flujo de tránsito.",
  "difficulty": "dificil",
  "set": 1
 },
 {
  "cat": "t",
  "text": "En un modelo simplificado, la saturación es 1.800 veh/h y el verde efectivo 30 s de un ciclo de 90 s. ¿Cuál es la capacidad?",
  "answer": "600 veh/h",
  "other": [
   "900 veh/h",
   "1.200 veh/h",
   "1.800 veh/h"
  ],
  "explanation": "La capacidad es s × g/C = 1.800 × 30/90 = 600 veh/h.",
  "difficulty": "dificil",
  "set": 1
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "set": 2
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
  "set": 2
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
  "set": 2
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
  "set": 2
 },
 {
  "cat": "g",
  "text": "¿Cuál es la suma de los ángulos interiores de un triángulo en un plano?",
  "answer": "180°",
  "other": [
   "90°",
   "270°",
   "360°"
  ],
  "explanation": "En geometría euclidiana, los ángulos interiores de un triángulo suman 180°.",
  "difficulty": "media",
  "set": 2
 },
 {
  "cat": "c",
  "text": "En un plano a escala 1:50, una pared mide 8 cm. ¿Cuánto mide realmente?",
  "answer": "4 m",
  "other": [
   "0,4 m",
   "8 m",
   "40 m"
  ],
  "explanation": "8 cm × 50 = 400 cm = 4 m.",
  "difficulty": "media",
  "set": 2
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
  "set": 2
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
  "set": 2
 },
 {
  "cat": "t",
  "text": "En 20 minutos pasan 300 vehículos. ¿Cuál es el flujo equivalente por hora?",
  "answer": "900 veh/h",
  "other": [
   "600 veh/h",
   "300 veh/h",
   "1.200 veh/h"
  ],
  "explanation": "Una hora contiene tres intervalos de 20 minutos: 300 × 3 = 900 veh/h.",
  "difficulty": "media",
  "set": 2
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
  "set": 2
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
  "set": 2
 },
 {
  "cat": "g",
  "text": "Una población se duplica cada 3 horas. Si comienza con 100 individuos, ¿cuántos hay tras 9 horas?",
  "answer": "800",
  "other": [
   "300",
   "600",
   "900"
  ],
  "explanation": "Ocurren tres duplicaciones: 100 × 2³ = 800.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "g",
  "text": "¿Cuántas diagonales tiene un hexágono?",
  "answer": "9",
  "other": [
   "6",
   "12",
   "15"
  ],
  "explanation": "Un polígono de n lados tiene n(n − 3)/2 diagonales: 6 × 3/2 = 9.",
  "difficulty": "dificil",
  "set": 2
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
  "set": 2
 },
 {
  "cat": "g",
  "text": "Una cantidad aumenta 20% y después disminuye 20%. ¿Cómo queda respecto de la original?",
  "answer": "4% menor",
  "other": [
   "Igual",
   "4% mayor",
   "20% menor"
  ],
  "explanation": "Los factores se multiplican: 1,20 × 0,80 = 0,96, equivalente a una reducción del 4%.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "c",
  "text": "Una viga simplemente apoyada de 4 m recibe 5 kN/m en toda su longitud. Con Mmax = wL²/8, ¿cuál es Mmax?",
  "answer": "10 kN·m",
  "other": [
   "5 kN·m",
   "20 kN·m",
   "40 kN·m"
  ],
  "explanation": "Se obtiene 5 × 4²/8 = 10 kN·m.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "c",
  "text": "Una columna recibe 120 kN sobre 0,02 m². ¿Cuál es su esfuerzo axial medio?",
  "answer": "6 MPa",
  "other": [
   "0,6 MPa",
   "60 MPa",
   "2,4 MPa"
  ],
  "explanation": "120/0,02 = 6.000 kN/m² = 6.000 kPa = 6 MPa.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "c",
  "text": "Una viga en voladizo tiene flecha δ = PL³/(3EI). Si L se duplica, manteniendo lo demás, ¿cómo cambia δ?",
  "answer": "Se multiplica por 8",
  "other": [
   "Se multiplica por 2",
   "Se multiplica por 4",
   "Se reduce a la mitad"
  ],
  "explanation": "La flecha depende del cubo de L, por lo que el factor es 2³ = 8.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "t",
  "text": "Una cola comienza con 10 vehículos. Durante 30 s llegan 0,5 veh/s y salen 0,3 veh/s de forma constante. ¿Cuántos quedan?",
  "answer": "16 vehículos",
  "other": [
   "6 vehículos",
   "10 vehículos",
   "25 vehículos"
  ],
  "explanation": "La cola aumenta (0,5 − 0,3) × 30 = 6 vehículos; termina con 16.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "t",
  "text": "Un bus tarda 50 min en ida, 40 min en vuelta y 10 min en descansos por ciclo. Con salidas cada 10 min, ¿cuántos buses se requieren en un modelo ideal sin reserva?",
  "answer": "10 buses",
  "other": [
   "5 buses",
   "9 buses",
   "12 buses"
  ],
  "explanation": "El tiempo de ciclo es 100 min; la flota mínima ideal es 100/10 = 10 buses.",
  "difficulty": "dificil",
  "set": 2
 },
 {
  "cat": "g",
  "text": "¿Cuál de estos números es primo?",
  "answer": "Siete",
  "other": [
   "Ocho",
   "Nueve",
   "Diez"
  ],
  "explanation": "El siete solo tiene como divisores positivos al uno y a sí mismo.",
  "set": 3,
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "set": 3
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
  "set": 3
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
  "set": 3
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
  "set": 3
 },
 {
  "cat": "g",
  "text": "¿Cuál es la mediana de 2, 4, 7, 9 y 13?",
  "answer": "7",
  "other": [
   "4",
   "9",
   "6"
  ],
  "explanation": "Con cinco datos ordenados, la mediana es el tercer valor: 7.",
  "difficulty": "media",
  "set": 3
 },
 {
  "cat": "c",
  "text": "Una sección rectangular mide 0,20 m por 0,30 m. ¿Cuál es su área?",
  "answer": "0,06 m²",
  "other": [
   "0,6 m²",
   "0,006 m²",
   "0,50 m²"
  ],
  "explanation": "El área es 0,20 × 0,30 = 0,06 m².",
  "difficulty": "media",
  "set": 3
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
  "set": 3
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
  "set": 3
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
  "set": 3
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
  "set": 3
 },
 {
  "cat": "g",
  "text": "Un isótopo tiene vida media de 8 años. Si comienza con 80 g, ¿cuánto queda tras 24 años?",
  "answer": "10 g",
  "other": [
   "20 g",
   "26,7 g",
   "40 g"
  ],
  "explanation": "Transcurren tres vidas medias: 80 × (1/2)³ = 10 g.",
  "difficulty": "dificil",
  "set": 3
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
  "set": 3
 },
 {
  "cat": "g",
  "text": "Se lanzan dos dados justos de seis caras. ¿Cuál es la probabilidad de obtener suma 7?",
  "answer": "1/6",
  "other": [
   "1/12",
   "1/3",
   "7/36"
  ],
  "explanation": "Hay seis resultados favorables entre 36 pares posibles: 6/36 = 1/6.",
  "difficulty": "dificil",
  "set": 3
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
  "set": 3
 },
 {
  "cat": "g",
  "text": "En un mapa a escala 1:250.000, dos puntos distan 6 cm. ¿Cuál es su distancia representada en línea recta?",
  "answer": "15 km",
  "other": [
   "1,5 km",
   "150 km",
   "2,5 km"
  ],
  "explanation": "6 × 250.000 = 1.500.000 cm = 15 km.",
  "difficulty": "dificil",
  "set": 3
 },
 {
  "cat": "c",
  "text": "Dos barras axiales del mismo material y longitud tienen áreas A y 2A. Bajo la misma fuerza y con δ = PL/(EA), ¿cómo se comparan sus alargamientos?",
  "answer": "La barra de área 2A se alarga la mitad",
  "other": [
   "Ambas se alargan igual",
   "La de área 2A se alarga el doble",
   "La de área A se alarga la mitad"
  ],
  "explanation": "El alargamiento es inversamente proporcional al área, si los demás datos se mantienen.",
  "difficulty": "dificil",
  "set": 3
 },
 {
  "cat": "c",
  "text": "Una viga de 8 m, apoyada en sus extremos, recibe 16 kN a 2 m del apoyo izquierdo. ¿Cuál es la reacción derecha?",
  "answer": "4 kN",
  "other": [
   "8 kN",
   "12 kN",
   "16 kN"
  ],
  "explanation": "Tomando momentos en el apoyo izquierdo: Rd × 8 = 16 × 2, de donde Rd = 4 kN.",
  "difficulty": "dificil",
  "set": 3
 },
 {
  "cat": "c",
  "text": "Dos actividades de 4 y 6 días se realizan en paralelo; ambas deben terminar antes de otra de 3 días. Sin restricciones adicionales, ¿cuál es la duración mínima?",
  "answer": "9 días",
  "other": [
   "7 días",
   "10 días",
   "13 días"
  ],
  "explanation": "Las actividades paralelas demoran como máximo 6 días; luego se agregan 3 días: 9 en total.",
  "difficulty": "dificil",
  "set": 3
 },
 {
  "cat": "t",
  "text": "Se recorre la mitad de una ruta a 30 km/h y la otra mitad a 60 km/h. Sin paradas, ¿cuál es la velocidad media total?",
  "answer": "40 km/h",
  "other": [
   "45 km/h",
   "50 km/h",
   "35 km/h"
  ],
  "explanation": "Para distancias iguales, la media es 2v1v2/(v1+v2) = 40 km/h.",
  "difficulty": "dificil",
  "set": 3
 },
 {
  "cat": "t",
  "text": "En un modelo sin pérdidas, un acceso necesita 800 veh/h y tiene saturación de 2.000 veh/h. ¿Qué fracción mínima del ciclo requiere de verde efectivo?",
  "answer": "40%",
  "other": [
   "25%",
   "60%",
   "80%"
  ],
  "explanation": "Con capacidad s × g/C, se necesita g/C = 800/2.000 = 0,40.",
  "difficulty": "dificil",
  "set": 3
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
  "difficulty": "facil"
 },
 {
  "cat": "g",
  "text": "¿Qué figura tiene todos sus puntos a igual distancia de un centro en un plano?",
  "answer": "Circunferencia",
  "other": [
   "Triángulo",
   "Rectángulo",
   "Trapecio"
  ],
  "explanation": "La circunferencia está formada por puntos a una distancia constante de su centro.",
  "set": 4,
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "difficulty": "facil"
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
  "set": 4
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
  "set": 4
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
  "set": 4
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
  "set": 4
 },
 {
  "cat": "g",
  "text": "Un producto cuesta 80 unidades y tiene 25% de descuento. ¿Cuál es su precio final?",
  "answer": "60 unidades",
  "other": [
   "55 unidades",
   "65 unidades",
   "75 unidades"
  ],
  "explanation": "El descuento es 80 × 0,25 = 20; el precio final es 80 − 20 = 60.",
  "difficulty": "media",
  "set": 4
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
  "set": 4
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
  "set": 4
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
  "set": 4
 },
 {
  "cat": "t",
  "text": "Un bus lleva 48 pasajeros y tiene capacidad para 60. ¿Cuál es su ocupación respecto de esa capacidad?",
  "answer": "80%",
  "other": [
   "60%",
   "75%",
   "90%"
  ],
  "explanation": "La ocupación es 48/60 × 100 = 80%.",
  "difficulty": "media",
  "set": 4
 },
 {
  "cat": "t",
  "text": "Una vía permite 1.200 veh/h y recibe 900 veh/h. ¿Cuál es la relación demanda/capacidad?",
  "answer": "0,75",
  "other": [
   "1,33",
   "0,25",
   "0,90"
  ],
  "explanation": "La relación es 900/1.200 = 0,75.",
  "difficulty": "media",
  "set": 4
 },
 {
  "cat": "g",
  "text": "Un reloj atrasa 2 minutos por hora real. Si se ajusta a las 08:00, ¿qué indica seis horas reales después?",
  "answer": "13:48",
  "other": [
   "14:12",
   "13:58",
   "14:00"
  ],
  "explanation": "En seis horas pierde 12 minutos; a las 14:00 reales indica 13:48.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "g",
  "text": "¿Cuál es el menor entero positivo divisible por 6, 8 y 12?",
  "answer": "24",
  "other": [
   "12",
   "48",
   "96"
  ],
  "explanation": "El mínimo común múltiplo usa 2³ y 3: 8 × 3 = 24.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "g",
  "text": "La media de cuatro números es 10. Si se agrega el número 20, ¿cuál es la nueva media?",
  "answer": "12",
  "other": [
   "10",
   "15",
   "14"
  ],
  "explanation": "La suma inicial es 40; (40 + 20)/5 = 12.",
  "difficulty": "dificil",
  "set": 4
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
  "set": 4
 },
 {
  "cat": "g",
  "text": "¿Cuál es la probabilidad de obtener exactamente dos caras en tres lanzamientos de una moneda justa?",
  "answer": "3/8",
  "other": [
   "1/8",
   "1/2",
   "3/4"
  ],
  "explanation": "Hay tres secuencias con dos caras entre ocho secuencias equiprobables.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "c",
  "text": "Una sección rectangular tiene momento M constante y esfuerzo máximo σ = Mc/I. Al duplicar su altura manteniendo el ancho, ¿qué ocurre con σ?",
  "answer": "Se reduce a un cuarto",
  "other": [
   "Se reduce a la mitad",
   "Se duplica",
   "Se mantiene igual"
  ],
  "explanation": "La distancia c se duplica y la inercia I se multiplica por ocho: el esfuerzo pasa a 2/8 = 1/4.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "c",
  "text": "En una sección rectangular, una fuerza axial pasa por el centroide. Si la fuerza se aplica excéntricamente una distancia e, ¿qué solicitación adicional aparece?",
  "answer": "Un momento de magnitud P·e",
  "other": [
   "Una fuerza adicional de magnitud P/e",
   "Una reducción automática de masa",
   "Una desaparición del esfuerzo axial"
  ],
  "explanation": "Una carga excéntrica equivale a una fuerza axial y un momento P × e.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "c",
  "text": "Se requieren 2 m³ de mezcla por pieza para 6 piezas y se agrega un 5% de margen sobre el volumen neto. ¿Cuánto se solicita?",
  "answer": "12,6 m³",
  "other": [
   "12,05 m³",
   "13,2 m³",
   "10,8 m³"
  ],
  "explanation": "El volumen neto es 12 m³; con 5% adicional: 12 × 1,05 = 12,6 m³.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "t",
  "text": "Los cuatro conteos de 15 min son 200, 250, 300 y 250 vehículos. Con FHP = volumen horario/(4 × máximo conteo), ¿cuál es FHP?",
  "answer": "0,8333 aproximadamente",
  "other": [
   "1,2000",
   "0,2500",
   "1,0000"
  ],
  "explanation": "El volumen es 1.000; FHP = 1.000/(4 × 300) = 0,8333 aproximadamente.",
  "difficulty": "dificil",
  "set": 4
 },
 {
  "cat": "t",
  "text": "En un sistema estable, L = λW. Si llegan 120 pasajeros/h y esperan en promedio 5 min, ¿cuántos pasajeros hay en promedio en la espera?",
  "answer": "10 pasajeros",
  "other": [
   "24 pasajeros",
   "60 pasajeros",
   "600 pasajeros"
  ],
  "explanation": "Se convierte 5 min a 1/12 h: L = 120 × 1/12 = 10 pasajeros.",
  "difficulty": "dificil",
  "set": 4
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
