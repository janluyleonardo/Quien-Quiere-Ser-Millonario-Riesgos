const intro = document.getElementById("inicio");
const boton = document.getElementById("boton");
const m_correcto = document.getElementById("m_correcto");
const m_perdiste = document.getElementById("m_perdiste");
//Botones
const info = document.getElementById("info");
const jugar = document.getElementById("jugar");
//VAriables del temporizador
var cont_tiempo = 30;
const t = document.getElementById("timer");
var stop = true;
var intrv;
//modal de info
const modal = document.getElementById("informacion");
const cerrar_modal = document.getElementById("cerrar");
//Silenciar
const silencio = document.getElementById("silenciar");
var sonar = true;
//Juego
const logo = document.getElementById("logo");
const bloque_juego = document.getElementById("pregunta-zona");
//preguntas
var pregunta = document.getElementById("preg");
var respuestas = document.getElementsByClassName("respuesta");
var resp = document.getElementsByClassName("resp");
const pasaste = document.getElementById("pasaste");
var nivel = 0;
//Comodines
const comodines = document.getElementsByClassName("comodines");
const cont_comodin = document.getElementById("comodin");
var amigo = false;
var publico = false;
var mitad = false;
const btn_comodin = document.getElementById("seguir")
var identificacion;
const ventana = document.getElementById("ventana");
var barra = document.getElementsByTagName("progress");
//rendirse
const rendirse = document.getElementById("rendirse");
const ventana2 = document.getElementById("ventana2");
const terminar = document.getElementById("terminar");
const victoria = document.getElementById("victoria");
//Variables de recompensa
var recompenza = 0;
var dinero_ganado = 0;
const ganado = document.getElementById("ganado");
const dinero = document.getElementById("dinero")
