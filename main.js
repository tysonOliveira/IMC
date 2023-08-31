var _a;
(_a = document.getElementById("calcular")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    event.preventDefault();
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");
    var valorPeso = peso === null || peso === void 0 ? void 0 : peso.value;
    var valorAltura = altura === null || altura === void 0 ? void 0 : altura.value;
    console.log(valorPeso, valorAltura);
    // valorPeso >= '700' ? verificaPeso() : peso.value = "";
    // valorAltura >= '3' ? verificaAltura() : altura.value = "";
    var imc = calculoIMC(Number(valorPeso), Number(valorAltura));
    switch (true) {
        case imc < 18.5:
            imprime("Abaixo do peso");
            break;
        case imc >= 18.5 && imc <= 24.9:
            imprime("Peso normal");
            break;
        case imc >= 25 && imc <= 29.9:
            imprime("Sobrepeso");
            break;
        case imc >= 30 && imc <= 34.9:
            imprime("Obesidade grau 1");
            break;
        case imc >= 35 && imc <= 39.9:
            imprime("Obesidade grau 2");
            break;
        case imc > 40:
            imprime("Obesidade grau 3");
            break;
        default:
            imprime("Valor inválido");
    }
});
function verificaAltura() {
    console.log("altura invalida");
}
function verificaPeso() {
    console.log("Peso invalido");
}
function calculoIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
function imprime(text) {
    var element = document.getElementsByTagName("p");
    if (element.length > 0) {
        var indexElement = 0;
        if (indexElement >= 0 && indexElement < element.length) {
            element[indexElement].remove();
        }
    }
    var elemento_pai = document.querySelector(".backgroundTable");
    // Criar elemento
    var titulo = document.createElement('p');
    titulo.classList.add("result");
    // Criar o nó de texto
    var texto = document.createTextNode(text);
    // Anexar o nó de texto ao elemento p
    titulo.appendChild(texto);
    // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(titulo);
}