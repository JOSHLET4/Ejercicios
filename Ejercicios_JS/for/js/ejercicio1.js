function prog1() {
    let letra = prompt("Ingrese una letra");
    let numero = parseInt(prompt("ingrese por cuanto desea multipicar la letra"));
    let mensaje = '';

    for (let conteo = 1; conteo <= numero; conteo++) {
        mensaje += letra;
    }
    document.getElementById("resultado").innerHTML = mensaje;
}