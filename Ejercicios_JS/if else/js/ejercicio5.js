function prog5(){
    let opcion = prompt("Escriba lo que desea beber: \n 1. vino \n 2. cerveza \n 3. refresco \n 4. agua")
    let mensaje;

    if (opcion == "vino" || opcion == "cerveza"){
        mensaje = "BIENVENIDO A LA BARRA"
    } else if (opcion == "refresco" || opcion == "agua"){
        mensaje = "BIENVENIDO A LA TIENDA"
    } else {
        mensaje = "ingrese una opción válida"
    }
    document.getElementById("resultado").innerHTML = mensaje;
}