function prog1(){
    let respuesta = prompt("¿Desea continuar? sí/no");

    while (respuesta === "sí"){
        respuesta = prompt("¿Desea continuar? sí/no");
    }
    document.getElementById("resultado").innerHTML = "Ha cerrado el programa";
}