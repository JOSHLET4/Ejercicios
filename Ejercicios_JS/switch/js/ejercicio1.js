function prog1() {
    let opcion = prompt("Seleccione su menú: \n 1. carne \n 2. pescado \n 3. verduras");
    let mensaje;

    switch (opcion) {
        case "carne":
            mensaje = "La bebida para su menú será vino tinto";
            break;
        case "pescado":
            mensaje = "La bebida para su menú será vino blanco";
            break;
        case "verduras":
            mensaje = "La bebida para su menú será agua";
            break;
        default:
            mensaje = "Elija carne, pescado o verduras";
            break;
    }
    document.getElementById("resultado").innerHTML = mensaje;
}