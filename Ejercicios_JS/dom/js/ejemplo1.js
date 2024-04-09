const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const btn = document.querySelector("#btn");

btn.addEventListener("click", sumar);
const resultadoP = document.createElement("p");
const mainElement = document.querySelector("main");
mainElement.appendChild(resultadoP)

function sumar() {
    const resultadoSuma = parseInt(num1.value) + parseInt(num2.value);
    resultadoP.innerText = resultadoSuma;
}