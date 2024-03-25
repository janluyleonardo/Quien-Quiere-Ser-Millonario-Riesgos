
function sonido_boton() {
    if (sonar) {
        boton.play();
    }
}
//Funcion temporizador regresivo:
function temporizador() {
    intrv = setInterval(() => {
        if (!stop) {
            cont_tiempo = cont_tiempo - 1;
            if (cont_tiempo >= 0) {
                t.innerText = cont_tiempo;
            } else {
                clearInterval(intrv);
                cont_tiempo = 0;
                t.innerText = cont_tiempo;
                t.style.color = "red";
                perder();
            }
        }
    }, 1000);
}
//Botones
document.onclick = () => {
    intro.play();
    intro.volume = 0.3;
}

jugar.addEventListener("click", () => {
    sonido_boton();
    jugar.classList.add("desaparecer");
    logo.classList.add("animacionLogo");
    jugar.style.display = "none";
    setInterval(() => {
        logo.style.display = "none";
        bloque_juego.classList.add("comenzar");
        //temporizador
        stop = false;
    }, 2000);
    temporizador();
})

info.addEventListener("click", () => {
    sonido_boton();
    modal.classList.remove("nomostrar");
})

silencio.addEventListener("click", () => {
    sonido_boton();
    if (sonar == true) {
        intro.muted = true;
    } else intro.muted = false;
    sonar = !sonar;
    silencio.classList.toggle("nosonar");
    silencio.classList.toggle("icon-volume-mute2");
});

cerrar_modal.onclick = function () {
    modal.classList.add("nomostrar");
}