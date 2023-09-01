document.getElementById("calcular")?.addEventListener("click", (event) => {
  event.preventDefault();
  const peso = document.getElementById("peso") as HTMLInputElement;
  const altura = document.getElementById("altura") as HTMLInputElement;

  const inputPeso = Number(peso?.value);
  const inputAltura = Number(altura?.value);

  if (inputPeso < 0 || inputPeso > 700) {
    throw new Error("O peso deve estar entre 0 e 700.");
  }

  if (inputAltura < 0 || inputAltura > 3) {
    throw new Error("A altura deve estar entre 0 e 3.");
  }

  const imc = calculoIMC(inputPeso, inputAltura);

  validaIMC(imc);
})

function calculoIMC(peso: number, altura: number): number {
  let imc = peso / (altura * altura);
  return imc;
}

function validaIMC(imc: number) {
  switch (true) {
    case imc > 40:
      imprime("Obesidade grau 3", "#FF4500");
      break;
    case imc >= 35:
      imprime("Obesidade grau 2", "#FF8C00");
      break;
    case imc >= 30:
      imprime("Obesidade grau 1", "#FFA500");
      break;
    case imc >= 25:
      imprime("Sobrepeso", "#FFFF00");
      break;
    case imc >= 18.5:
      imprime("Peso normal", "#00FA9A");
      break;
    case imc < 18.5:
      imprime("Abaixo do peso", "#FFFF00");
      break;
    default:
      imprime("Valor inválido", "#B22222");
  }
}

function imprime(text: string, cor: string) {
  const element = document.getElementsByTagName("p") as HTMLCollectionOf<HTMLParagraphElement>;
  var elemento_pai = document.querySelector(".backgroundTable") as HTMLDivElement;

  //Verifica se existe um elemento e o exclui
  if (element.length > 0) {
    const indexElement = 0;
    if (indexElement >= 0 && indexElement < element.length) {
      element[indexElement].remove();
    }
  }


  // Criar elemento
  var titulo = document.createElement('p');

  titulo.style.backgroundColor = cor;

  // Criar o nó de texto
  var texto = document.createTextNode(text);

  // Anexar o nó de texto ao elemento p
  titulo.appendChild(texto);

  // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
  elemento_pai!.appendChild(titulo);
}