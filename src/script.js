///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!


// O seu código deve ser feito no arquivo script.js na área em destaque;


// Crie uma função chamada Calculadora, essa função deve receber três parâmetros: dois serão números utilizados na conta e o último será a operação a ser feita;


// Os valores recebidos por parâmetro serão strings, então se necessário converta para outro tipo de dado;


// Use o  parâmetro "operador" como a opção de operação escolhida pelo usuário;


// Crie caminhos diferentes para cada operação ("+","-","*","/","e") e salve o resultado em uma variável;


// Para a operação de exponenciação, você deve multiplicar o primeiro número por ele mesmo a quantidade de vezes igual ao segundo número (Utilize um loop);


// Sua função deve retornar o resultado.


// Ex.: Entrada => num1 = 2, num2 = 3; Saída => resultado = 2*2*2 = 8


let resultado

function Calculadora(num1, num2, operador) {

  let number1 = Number(num1)
  let number2 = Number(num2)

  switch (operador) {
    case "+":
      resultado = (number1 + number2)

      if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO"
        visor.value = "ERRO"
      } else {
        return resultado
      }

      break;

    case "-":
      resultado = (number1 - number2)

      if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO"
        visor.value = "ERRO"
      } else {
        return resultado
      }

      break;

    case "*":
      resultado = (number1 * number2)

      if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO"
        visor.value = "ERRO"
      } else {
        return resultado
      }

      break;

    case "/":
      resultado = (number1 / number2)

      if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO"
        visor.value = "ERRO"
      } else {
        return resultado
      }

      break;

    case "e":

      resultado = 1

      for (let index = 0; index < number2; index++) {

        resultado = resultado * number1

      }

      if (resultado === undefined || resultado > 1000000) {
        resultado = "ERRO"
        visor.value = "ERRO"
      } else {
        return resultado
      }
      break;

    default:
      alert("Default")
      break;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}