function prog4() {
    let conteo = 0;
    let mensaje = '';

    while (conteo <= 100) {
        mensaje += conteo + " ";
        conteo += 2;
        document.getElementById("resultado").innerHTML = mensaje;
    }
}