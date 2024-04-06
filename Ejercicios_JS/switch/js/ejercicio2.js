function prog2() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de euros"))
    let mensaje;

    switch (true) {
        case (cantidad >= 100 && cantidad <= 300):
            mensaje = "tiene un descuento del 5%, su nuevo total es: " + (cantidad * 0.95);
            break;
        case (cantidad > 300 && cantidad <= 500):
            mensaje = "tiene un descuento del 10%, su nuevo total es: " + (cantidad * 0.90);
            break;
        case (cantidad > 600):
            mensaje = "tiene un descuento del 15%, su nuevo total es: " + (cantidad * 0.85);
            break;
        default:
            mensaje = "No hay descuento"
    }
    document.getElementById("resultado").innerHTML = mensaje;
}