function prog1(){
    let numero = prompt("Ingrese un número");
    let mensaje;

    if (numero >= 0){
        mensaje = "El número es positivo: " + numero;
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if (numero < 0){
        mensaje = "El número es negativo: " + numero;
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else {
        mensaje = "Ingrese un número válido"
        document.getElementById("resultado").innerHTML = mensaje;
    }
}