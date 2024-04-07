function prog3() {
    let contra1 = prompt("Escriba una contraseña");
    let contra2 = prompt("Escriba de nuevo la contraseña");

    while (contra1 != contra2) {
        alert("Las contraseñas no coinciden");
        contra1 = prompt("Escriba una contraseña");
        contra2 = prompt("Escriba de nuevo la contraseña");
    }
    document.getElementById("resultado").innerHTML = "Es correcto, las contraseñas coinciden.";
}