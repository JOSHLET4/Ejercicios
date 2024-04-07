function prog2(){
    let ingresa = prompt("¿Desea terminar el programa? SI");

    while (ingresa != "SI"){
        ingresa = prompt("¿Desea terminar el programa? SI");
    }
    document.getElementById("resultado").innerHTML = "Ha cerrado el programa";
}