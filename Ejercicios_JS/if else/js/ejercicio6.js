function prog6() {
    let num = parseInt(prompt("Ingrese un número para saber si es par o no es par"));
    let mensaje = '';

    if (num % 2 == 0) {
        mensaje = "¡El número es par!"
    } else {
        mensaje = "¡El número es impar!"
    }
    document.getElementById("resultado").innerHTML = mensaje;
}