function prog2() {
    let transporte = prompt("Ingresa tu transporte: \n 1. auto\n 2. tren\n 3. bicicleta\n 4. motocicleta\n 5. autobus");
    let mensaje;

    if (transporte == "auto") {
        mensaje = "Buen Viaje :D";
    }
    else if (transporte == "tren") {
        mensaje = "Recuerda llevar dinero para tu pasaje :D";
    }

    else if (transporte == "bicicleta") {
        mensaje = "Buen Viaje :D";
    }

    else if (transporte == "motocicleta") {
        mensaje = "Buen Viaje :D";
    }

    else if (transporte == "autobus") {
        mensaje = "Recuerda llevar dinero para tu pasaje :D";
    }

    else {
        mensaje = "Ingresa un dato válido";
    }
    document.getElementById("resultado").innerHTML = mensaje;
}