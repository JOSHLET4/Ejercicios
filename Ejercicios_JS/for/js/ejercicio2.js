function prog2() {
    let num = prompt("Ingresa un número");
    let conteo;
    let mensaje = '';

    for (conteo = num; conteo > 0; conteo--) {
        mensaje += conteo + ", ";

    }
    mensaje += conteo;
    document.getElementById("resultado").innerHTML = mensaje;
}