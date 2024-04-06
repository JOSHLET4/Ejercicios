function prog3() {
    let nombre = prompt("Ingrese su nombre");
    let pais = prompt("Ingrese su país");
    let edad = prompt("Ingrese su edad");
    let mensaje;

    if (edad >= 18) {
        mensaje = "Hola " + nombre + " eres mayor de edad: " + edad + " años";
    } else if (edad > 0) {
        mensaje = "Hola " + nombre + " eres menor de edad: " + edad + " años";
    } else {
        mensaje = "Introduzca datos válidos"
    }
    document.getElementById("resultado").innerHTML = mensaje;
}