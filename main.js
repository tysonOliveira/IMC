var _a;
(_a = document.getElementById("calcular")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
    event.preventDefault();
    var peso = document.getElementById("peso");
    var altura = document.getElementById("altura");
    var inputPeso = Number(peso === null || peso === void 0 ? void 0 : peso.value);
    var inputAltura = Number(altura === null || altura === void 0 ? void 0 : altura.value);
    if (inputPeso < 0 || inputPeso > 700) {
        throw new Error("O peso deve estar entre 0 e 700.");
    }
    if (inputAltura < 0 || inputAltura > 3) {
        throw new Error("A altura deve estar entre 0 e 3.");
    }
    var imc = calculoIMC(inputPeso, inputAltura);
    validaIMC(imc);
});
function calculoIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
function validaIMC(imc) {
    switch (true) {
        case imc < 18.5:
            imprime("Abaixo do peso", "#FFFF00");
            break;
        case imc >= 18.5 && imc <= 24.9:
            imprime("Peso normal", "#00FA9A");
            break;
        case imc >= 25 && imc <= 29.9:
            imprime("Sobrepeso", "#FFFF00");
            break;
        case imc >= 30 && imc <= 34.9:
            imprime("Obesidade grau 1", "#FFA500");
            break;
        case imc >= 35 && imc <= 39.9:
            imprime("Obesidade grau 2", "#FF8C00");
            break;
        case imc > 40:
            imprime("Obesidade grau 3", "#FF4500");
            break;
        default:
            imprime("Valor inválido", "#B22222");
    }
}
function imprime(text, cor) {
    var element = document.getElementsByTagName("p");
    //exclui elemento se ele existir
    if (element.length > 0) {
        var indexElement = 0;
        if (indexElement >= 0 && indexElement < element.length) {
            element[indexElement].remove();
        }
    }
    var elemento_pai = document.querySelector(".backgroundTable");
    // Criar elemento
    var titulo = document.createElement('p');
    titulo.style.backgroundColor = cor;
    // Criar o nó de texto
    var texto = document.createTextNode(text);
    // Anexar o nó de texto ao elemento p
    titulo.appendChild(texto);
    // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
    elemento_pai.appendChild(titulo);
}
