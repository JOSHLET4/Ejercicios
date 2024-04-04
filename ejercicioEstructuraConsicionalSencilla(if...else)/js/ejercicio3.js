function prog3(){
    let nombre = prompt("Ingrese su nombre");
    let pais = prompt("Ingrese su país");
    let edad = prompt("Ingrese su edad");
    let mensaje;

    if(edad >= 18){
        mensaje = "Hola " + nombre + " eres de " + pais + " y eres mayor de edad: " + edad + " años";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else if(edad > 0){
        mensaje = "Hola " + nombre + " eres de " + pais + " y eres menor de edad: " + edad + " años";
        document.getElementById("resultado").innerHTML = mensaje;
    }
    else{
        mensaje = "Introduzca datos válidos"
        document.getElementById("resultado").innerHTML = mensaje;
    }
}