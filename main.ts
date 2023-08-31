

document.getElementById("calcular")?.addEventListener("click", (event) => {
  event.preventDefault();
  const peso = document.getElementById("peso") as HTMLInputElement;
  const altura = document.getElementById("altura") as HTMLInputElement;

  const valorPeso = peso?.value;
  const valorAltura = altura?.value;

  console.log(valorPeso, valorAltura);

  const imc = calculoIMC(Number(valorPeso), Number(valorAltura));

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
})

function calculoIMC(peso: number, altura: number): number {
  let imc = peso / (altura * altura);
  return imc;
}

function imprime(text: string) {
  const element = document.getElementsByTagName("p") as HTMLCollectionOf<HTMLParagraphElement>;

  if (element.length > 0) {
    const indexElement = 0;
    if (indexElement >= 0 && indexElement < element.length) {
      element[indexElement].remove();
    }
  }

  var elemento_pai = document.querySelector(".backgroundTable");

  // Criar elemento
  var titulo = document.createElement('p');

  // Criar o nó de texto
  var texto = document.createTextNode(text);

  // Anexar o nó de texto ao elemento p
  titulo.appendChild(texto);

  // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
  elemento_pai!.appendChild(titulo);
}