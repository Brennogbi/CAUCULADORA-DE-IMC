const buttonconvert = document.querySelector(".bnt")

const alturainput = document.querySelector(".altura")
const pesoinput = document.querySelector(".peso1")
const resultadodiv = document.querySelector(".seu-imc")








function coverterimc(){

    const alturaValor = parseFloat(alturainput.value); // Converte para número
    const pesoValor = parseFloat(pesoinput.value); // Converte para número
    const imc = pesoValor / (alturaValor * alturaValor); // Calcula o IMC
   
  
    // Exibe o IMC com duas casas decimais
    resultadodiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}<br>`;


    if (imc < 18.5) {
        resultadodiv.innerHTML += "Você está abaixo do peso.";
    }  if (imc >= 18.5 && imc < 25) {
        resultadodiv.innerHTML += "Você está com o peso ideal.";
    } if (imc >= 25 && imc < 30) {
        resultadodiv.innerHTML += "Você está com excesso de peso.";
    }  if (imc >= 30) {
        resultadodiv.innerHTML += "Você está com obesidade.";
    }

}
buttonconvert.addEventListener("click", coverterimc)
