function prog3() {
    let tabla = prompt("Ingresa el numero de la tabla de multiplicar");
    let resultado;
    let conteo;
    let mensaje = '';

    for (conteo = 1; conteo <= 10; conteo++) {
        resultado = tabla * conteo;
        mensaje += tabla + " x " + conteo + " = " + resultado + "<br>";
    }
    document.getElementById("resultado").innerHTML = mensaje;
}