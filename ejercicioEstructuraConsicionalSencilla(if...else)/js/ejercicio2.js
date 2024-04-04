function prog2(){
    let transporte = prompt("Ingresa tu transporte");
    let mensaje;

    if (transporte == "auto"){
        mensaje = "Buen Viaje :D";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if (transporte == "tren"){
        mensaje = "Recuerda llevar dinero para tu pasaje :D";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if (transporte == "bicicleta"){
        mensaje = "Buen Viaje :D";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if (transporte == "motocicleta"){
        mensaje = "Buen Viaje :D";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if (transporte == "autobus"){
        mensaje = "Recuerda llevar dinero para tu pasaje :D";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else {
        mensaje = "Ingresa un dato válido";
        document.getElementById("resultado").innerHTML = mensaje;
    }
}