function prog3() {
    let mes = parseInt(prompt("Ingrese el número del mes para consultar la estación a la que pertenece"))
    let mensaje;

    switch (mes) {
        case 12:
        case 1:
        case 2:
            mensaje = "Mes: " + mes + " Estación del año: Invierno";
            break;
        case 3:
        case 4:
        case 5:
            mensaje = "Mes: " + mes + " Estación del año: Primavera";
            break;
        case 6:
        case 7:
        case 8:
            mensaje = "Mes: " + mes + " Estación del año: Verano";
            break;
        case 9:
        case 10:
        case 11:
            mensaje = "Mes: " + mes + " Estación del año: Otoño";
            break;
        default:
            mensaje = "Ingrese un mes válido";
            break;
    }
    document.getElementById("resultado").innerHTML = mensaje;
}