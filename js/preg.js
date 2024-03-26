class preg {
    constructor(p, resp, op1, op2, op3) {
        this.p = p;
        this.resp = resp;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;
    }
    op() {
        return [this.resp, this.op1, this.op2, this.op3].sort((a, b) => Math.random() - 0.5);
    }
}
// uno=new preg("El sistema electoral para determinar las personas que ocuparan cargos publicos:","Sufragio","Adagio","Naufragio","Prestigio");
uno = new preg(
    "¿ Cuántos son los Protocolos de riesgo que la unidad operativa debe Socializar al personal?",
    "6",
    "5",
    "3",
    "11"
);
// dos=new preg("Una persona famelica esta:","Hambrienta","Furiosa","Asustada","Irritable");
dos = new preg(
    "¿ Cuáles son los protocolos que se socializan en la unidad operativa?",
    "Ingreso y salida de niños, ingreso de personas ajenas, permanencia en zonas recreativas, Desarrollo de salidas pedagógicas, extravió y muerte.",
    "Ingreso y salida del personal, ingreso de familias.",
    "Protocolo para recibir, saludar, escuchar y responder a la comunidad educativa.",
    "Protocolos de higiene y alimentación de niñas y niños."
);
// tres=new preg("Son las membranas movibles cubiertas de piel que resguardan los ojos:","Parpados","Pupilas","Cejas","Anteojos");
tres = new preg(
    "¿Quiénes son los responsables de las salidas pedagógicas?",
    "Auxiliar de enfermería, administradora, jefe y sub jefe de brigada, docentes y auxiliares de aula.",
    "Vigilante, personal de servicios y cocina.",
    "Padres de familia y acudientes.",
    "Niñas y niños. "
);
// cuatro=new preg("El albinismo se presenta por la carencia de:","Pigmentación","Vitamina A","Oxígeno","Calcio");
cuatro = new preg(
    "¿Cuál es el objetivo del protocolo SALIDAS PEDAGOGICAS?",
    "Garantizar la seguridad de las niñas y niñas al realizar una salida pedagógica, dando cumplimiento a la planeación programada.",
    "Hacer partícipe a las familias en estos desplazamientos.",
    "Descuidar a las niñas y niños.",
    "Velar por la integridad en las niñas y niños en otros espacios."
);
// cinco=new preg("¿Cual de estos instrumentos mide la densidad de los aceites?","Oleómetro","Micrómetro","Dinamómetro","Holometro");
cinco = new preg(
    "¿Qué materiales son indispensables en LAS SALIDAS PEDAGOGICAS?",
    "Botiquín T.A, Documentos de los niños, Autorización firmada por la flia, listado de asistencia, carné, formato R. accidentalidad y soporte de póliza.",
    "Botiquín, carpeta, onces y carné de identificación.",
    "Lista de asistencia, soporte de póliza y autorización de las familias. ",
    "Ninguna es correcta."
);
// seis=new preg("Según el refran, ¿quien es ciego?","El amor","El odio","La envidia","La esperanza");
seis = new preg(
    "¿Cuáles son algunas tareas en UNA SALIDA PEDAGOGICA?",
    "Definir un plan bajo un documento escrito, verificar el estado del bus y documentos al día del conductor, ingresar a las niñas y niños al jardín verificando que estén en su totalidad.",
    "Divulgar la salida a personas extrañas del jardín sin previa autorización de las familias.",
    "Salir sin dar aviso a la administradora en un bus descompuesto y sin papeles.",
    "Ninguna de las anteriores."
);
// siete=new preg("¿Quien dirigió la película El Padrino en 1972?","Francis Ford Copolla","Federico Fellini","Roman Polanski","Franco Zeffirelli");
siete = new preg(
    "¿Cuál es el objetivo del protocolo ZONAS RECREATIVAS?",
    "Dar uso apropiado, cumpliendo con las normas establecidas con el fin de minimizar los riesgos de accidentalidad.",
    "Brindar seguridad a las niñas y niños en espacios amplios como zonas verdes del jardín.",
    "Jugar con las niñas y niños de manera libre, espontanea dentro de la institución educativa .",
    "Todas las anteriores."
);
// ocho=new preg("¿Con que material esculpió Miguel Angel La Piedad ubicada en el Vaticano?","Marmol","Madera","Yeso","Bronce");
ocho = new preg(
    "¿Qué resultados se esperan en el protocolo de LAS ZONAS RECREATIVAS?",
    "Mitigar el riesgo de accidentalidad en el momento que las niñas y niños den uso a las zonas recreativas",
    "Mayor accidentalidad",
    "Mitigar el riesgo de accidentalidad a las afueras del jardín ",
    "Todas las anteriores "
);
// nueve=new preg("El timbal es un instrumento de:","Percusion","Viento Metal","Viento madera","Cuerda");
nueve = new preg(
    "¿Cuáles son las tareas antes de visitar LA ZONA RECREATIVA?",
    "Inspeccionar, verificar, delimitar, realizar, establecer, registrar y acordar normas.",
    "Correr, jugar, comer, reunirse varios grupos",
    "No tener en cuenta horarios ni planeación pedagógica",
    "Ninguna de las anteriores "
);
// diez=new preg("En la mitología griega, Eros es considerado el dios del:","Amor","Odio","Miedo","Trabajo");
diez = new preg(
    "¿Cuáles son las tareas antes de estar en la zona recreativa?",
    "Inspeccionar, delimitar, realizar procesos de limpieza, establecer horarios y establecer normas con niños y niñas.",
    "Ingresar orientar y jugar libremente.",
    "Inspeccionar, contar la cobertura de los niños y controlarlos.",
    "Ninguna de las anteriores."
);
// once=new preg("Al periódico que se publica en horas de la tarde, se denomina:","Vespertino","Matutino","Clandestino","Pristino");
once = new preg(
    "Después de pasar tiempo en la zona recreativa, las niñas y niños deben:",
    "Realizar lavado de manos y Garantizar que los espacios queden organizados y limpios.",
    "Ir al aula de inmediato y compartir sus experiencias.",
    "Realizar lavado de manos e ir al comedor.",
    "Ninguna de las anteriores."
);
// doce=new preg("Las Vegas es una ciudad estadounidense que queda en:","Nevada"," Oklahoma","Arizona","Colorado");
doce = new preg(
    "Durante la prestación del servicio se acerca un acudiente a retirar a un menor de la unidad operativa, pero este no cuenta con identificación (cédula o carné del jardín) que medidas se debe tomar frente a dicha situación.",
    "Reporto a la administradora, se explica al acudiente que debe traer documento, dejando por escrito la situación.",
    "Todas las respuestas son correctas.",
    "Le colaboro al acudiente por que la conozco, acompañándola hasta la puerta del jardín para que logre pasar los filtros de seguridad.",
    "Se deja ingresar, realizando la novedad acorde para la entrega del menor."
);
// trece=new preg("¿Cual de estos animales es un rumiante?","La vaca","La ardilla","El caracol","El loro");
trece = new preg(
    "Una vez detectada la ausencia de la niña o el niño, se debe informar de inmediato a:",
    "La administradora",
    "Los acudientes del menor",
    "La policía",
    "Ninguna de las anteriores "
);
// catorce=new preg("Es el paso del agua del estado líquido al estado gaseoso:","Evaporación","Licuefacción","Sublimación","Solidificación");
catorce = new preg(
    "Durante la jornada ocurre una situación en particular con un niño o niña de la unidad operativa que esta comprometiendo la vida del menor que debo hacer.",
    "Solicito el apoyo de la auxiliar de enfermería y/o docentes capacitadas en primeros auxilios.",
    "Me desmayo.",
    "Corro.",
    "Espero que la situación retorne a la normalidad por cuenta propia."
);
// quince
quince = new preg(
    "Durante la prestación del servicio en la unidad operativa, cuales de las siguientes acciones me permite un cuidado especial de los niños y niñas.",
    "En las instalaciones del jardín tomar asistencia al ingreso y verificar la presencia de las niñas y niños antes de la salida.",
    "Tomar asistencia a las 4:00 pm.",
    "Recibir a los niños y niñas sin carné pasando por alto la novedad correspondiente.",
    "Todas son correctas."
);
// diezyseis
diezyseis = new preg(
    "Durante el ingreso y salida de las niñas y niños, ¿cuáles pueden ser los riesgos de extravío?",
    "Todas son correctas.",
    "Hacer entrega del niño o niña a una persona no autorizada por el padre para su retiro.",
    "No conocer los protocolos establecidos.",
    "No realizar conteo durante los traslados en la unidad operativa."
);
// diezysiete
diezysiete = new preg(
    "Durante la jornada es necesario tener en cuenta las siguientes características de los niños y niñas.",
    "Cambios que presenten durante la permanencia en el jardín infantil en relación a su estado de ánimo, salud, alimentación o signo de alarma.",
    "Debo tener en cuenta que todos los días son diferentes y por eso los niños se comportan de diferentes formas, omitiendo algún signo de alarma.",
    "Ignoro al niño o niña porque pienso que está llamando la atención de las maestras o está haciendo una “ pataleta”.",
    "Espero a que la jornada laboral se termine y vía WhatsApp le notificó al acudiente lo que percibí."
);
// diezyocho
diezyocho = new preg(
    "Durante la jornada ocurre una situación en particular con un niño o niña de la unidad operativa que está comprometiendo la vida del menor ¿Que debo hacer?",
    "Solicito el apoyo de la auxiliar de enfermería y/o docentes capacitadas en primeros auxilios.",
    "Me desmayo.",
    "Corro.",
    "Espero que la situación retorne a la normalidad por cuenta propia."
);
// diezyocho
diezyocho = new preg(
    "¿Porqué es importante conocer la historia social de los niños y niñas?",
    "Permiten a las maestras y al talento humano conocer aquellas limitaciones o situaciones particular que pueden poner en riesgo la vida de los niños y niñas.",
    "Es importante conocer la historia de la familia para contarla a las compañeras a modo de chisme.",
    "No es un documento fundamental en la prestación del servicio.",
    "Ninguna de las anteriores."
);
// diezynueve
diezynueve = new preg(
    "Llega el niño o niña al jardín con un acompañante, ¿Qué se debe tener en cuenta?",
    "El guarda de seguridad debe estar acompañado por una o dos docentes en la puerta, verificando su llegada con un adulto.",
    "Tanto el guarda como la maestra dejan ingresar al niño o niña con un menor de edad.",
    "Pueden ingresar niño o niña, acudiente y mascotas. ",
    "El niño o niña ingresa solo hasta llegar a su salón."
);
// veinte
veinte = new preg(
    "Llega el niño o niña del fin semana sin el carné y con una contusión o hematoma al salón:",
    "La maestra pregunta al acudiente que le sucedió, luego lo lleva hacia la zona de primeros auxilios para que lo revisen y de esta manera la enfermera haga la respectiva novedad.",
    "La maestra pregunta al acudiente que le sucedió y posteriormente lo deja ingresar.",
    "La maestra pregunta al acudiente que le sucedió y adicional a esto lo escribe en la novedad.",
    "La maestra devuelve al acudiente junto con el niño o niña para traer el carné. "
);
// veinte
veinte = new preg(
    "Un niño o niña llega a la unidad operativa a las 9:45 am debido a una cita médica. ¿Qué se debe hacer?",
    "La maestra recibe el niño o niña, solicita el soporte de cita médica y escribe la observación en el formato de novedades.",
    "La maestra recibe el niño o niña en el salón y pregunta cómo le fue en la cita médica.",
    "La maestra recibe el niño o niña e ingresa al salón.",
    "La maestra recibe el niño o niña y se queda hablando con el acudiente por mas de 20 minutos."
);
// veintiuno
veintiuno = new preg(
    "Un niño o niña es llevado después del horario establecido en varias ocasiones sin previa autorización de la administradora. ¿Qué hacer en este caso?",
    "Más de 3 veces consecutivas se debe citar al padre o madre de familia con la psicóloga para hacer la respectiva reflexión junto con el acta.",
    "Más de 3 veces consecutivas, la maestra hace la novedad escrita sugiriendo a la familia que no vuelva a ocurrir.",
    "Se deja pasar por alto la situación.",
    "Se activa ruta con ICBF por negligencia y maltrato."
);
// veintidos
veintidos = new preg(
    "Es viernes y se debe hacer fumigación a la unidad operativa. ¿Qué se debe hacer al ingreso?",
    "El guarda solicita la documentación , registra los equipos, o material en la minuta y el ingreso lo autoriza la administradora.",
    "El guarda lleva de la mano a la persona hasta la administración del jardín para que no se pierda.",
    "El guarda pregunta a la persona cual es el procedimiento que va a realizar.",
    "El guarda hace un recorrido con la persona para mostrarle el jardin"
);
// veintitres
veintitres = new preg(
    "Se levanto el piso caucho de algunos salones y necesitan observar ¿Qué se debe tener en cuenta?",
    "Los niños y niñas deben estar acompañados de manera permanente por la maestra.",
    "Los niños y niñas deben estar sentados para que la persona pueda trabajar.",
    "El personal externo puede hacer recorridos innecesarios en la unidad operativa.",
    "Los niños y niñas indican a la persona que parte del piso se levantó."
);
// veinticuatro
veinticuatro = new preg(
    "Al terminar el recorrido o visita del jardín ¿Qué se debe hacer?",
    "Se revisa la maleta y se registra la hora de salida junto con la firma.",
    "El guarda se despide deseándole buena tarde.",
    "El visitante pasa por la administración dando un informe de lo sucedido.",
    "El visitante toma las llaves, abre la reja y sale sin avisar."
);
// veinticinco
veinticinco = new preg(
    "¿Cuáles considera usted que serían los riesgos de permitir el ingreso a personas ajenas al jardín?",
    "Todas las opciones son correctas.",
    "Que el personal ajeno sufra un accidente o incidente.",
    "Que el personal ajeno atente contra la seguridad e integridad de todos los que están dentro de la unidad operativa.",
    "Que el personal ajeno dañe o hurte algún bien material de la institución."
);
const preguntas = [
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
    doce,
    trece,
    catorce,
    quince,
    diezyseis,
    diezysiete,
    diezyocho,
    diezynueve,
    veinte,
    veintiuno,
    veintidos,
    veintitres,
    veinticuatro,
    veinticinco
].sort((a, b) => Math.random() - 0.5);
//Funciones necesarias para el juego
//ventana de comoddines y mensajes
function aparecer_ventana() {
    ventana.style.transform = "scale(1)";
    document.getElementById(identificacion).style.display = "block";
    clearInterval(intrv);
}

btn_comodin.onclick = () => {
    ventana.style.transform = "scale(0)";
    document.getElementById(identificacion).style.display = "none";
    if (identificacion == "resp_correcta") {
        cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());
    }
    temporizador();
}
//funcion para cambiar la pregunta p=pregunta r=array con las respuestas
function cambiar_pregunta(p, r) {
    pregunta.innerText = p;
    for (var i = 0; i < 4; i++) {
        respuestas[i].innerText = r[i];
    }
    cont_tiempo = 31;
}
//Mensaje Ganador
function felicidades() {
    ventana2.style.transform = "scale(1)";
    victoria.style.display = "inline-block";
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}
//Mensaje Perdedor
function perder() {
    if (sonar) {
        intro.muted = true;
        m_perdiste.play();
    }
    ventana2.style.transform = "scale(1)";
    clearInterval(intrv);
    victoria.innerHTML = "¡Haz perdido! Intenta nuevamente";
    victoria.style.display = "inline-block";
    document.getElementById("img_vent").setAttribute("src", "medios/img/perder.png");
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}
//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());

for (let i = 0; i < respuestas.length; i++) {
    resp[i].onclick = () => {
        if (respuestas[i].innerText == preguntas[nivel].resp) {
            identificacion = "resp_correcta";
            if (sonar) m_correcto.play();
            nivel++;
            pasaste.innerText = "Pasaste al nivel:" + (nivel + 1);
            aparecer_ventana();
            recompenza = recompenza + 10000 * (nivel);
            if (nivel > preguntas.length - 1) {
                dinero_ganado = recompenza;
                felicidades();
            } else {
                //cada vez supera un nivel (5preguntas)
                if ((nivel) % 5 == 0) {
                    dinero_ganado = recompenza;
                    dinero.innerText = dinero_ganado;
                }
            }
        } else perder();
    }
}
//Comodines de ayuda a la resolución de las preguntas
cont_comodin.addEventListener("click", (e) => {
    if (e.target.classList.contains("comodines")) {
        e.target.style.backgroundColor = "gray";
    }
    if (amigo == false & e.target.classList.contains("icon-phone")) {
        amigo = true;
        identificacion = "llamar";
        aparecer_ventana();
        document.getElementById("correcto").innerText = preguntas[nivel].resp;
    } else if (publico == false & e.target.classList.contains("icon-users")) {
        publico = true;
        identificacion = "audiencia";
        aparecer_ventana();
        for (var i = 0; i < 4; i++) {
            if (respuestas[i].innerText == preguntas[nivel].resp) barra[i].value = "70";
        }
    } else if (mitad == false & e.target.classList.contains("mitad")) {
        mitad = true;
        let aux1 = 0;
        for (var i = 0; i < 4 & aux1 < 2; i++) {
            if (respuestas[i].innerText != preguntas[nivel].resp) {
                aux1++;
                respuestas[i].innerText = "";
            }
        }
    }
});
//Botones para rendirse o terminar el juego
rendirse.onclick = () => {
    ventana2.style.transform = "scale(1)";
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}
//Una vez termina el juego se recarga la pagina y vuelve al inicio
terminar.onclick = () => { 
    location.reload();
}