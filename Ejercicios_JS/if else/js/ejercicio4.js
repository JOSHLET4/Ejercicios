function prog4(){
    let num = parseInt(prompt("Ingresa un número del 1 al 4"));
    let mensaje;

    if (num == 2){
        mensaje = "Haz acertado";
    } else{
        mensaje = "Te haz equivocado";
    }
    document.getElementById("resultado").innerHTML = mensaje;
}