const mostrar = document.querySelector("#mostrar");
const botones = document.querySelectorAll("button.numero, button.operador");
const limpiar = document.querySelector("#limpiar")

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            mostrar.value = eval(mostrar.value);
        } else {
            mostrar.value += btn.id;
        }
    })    
})

limpiar.addEventListener("click", () => {
    mostrar.value = "";
});