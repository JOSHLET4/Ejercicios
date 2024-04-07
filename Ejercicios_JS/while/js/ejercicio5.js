function prog5(){
    let numero = 50;
    let mensaje = '';

    while (numero > 0) {
        mensaje += numero + " ";
        numero -= 1;
        document.getElementById("resultado").innerHTML = mensaje;
    }
}