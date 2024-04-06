function prog1() {
    let color = prompt("¡Adivina los 6 posibles colores! \n Escribe un color");
    let mensaje = "Es correcto";

    if (color == "rojo") {
        mensaje;
    } else if (color == "anaranjado") {
        mensaje;
    } else if (color == "azul") {
        mensaje;
    } else if (color == "amarillo") {
        mensaje;
    } else if (color == "verde") {
        mensaje;
    } else if (color == "celeste") {
        mensaje;
    } else {
        mensaje = "¡Sigue Intentando!"
    }
    document.getElementById("resultado").innerHTML = mensaje;
}