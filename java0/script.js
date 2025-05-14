
function exibeDados () {

window.alert("Olá, mundo!");

document.getElementById("resposta").innerHTML = "Resposta de saída: Esse é meu novo segundo código javascript"
document.getElementById("resposta2").innerHTML = window.confirm("Você está gostando do curso?");

document.getElementById("caixa").innerHTML = "O nome digitado foi: " + window.prompt("Qual seu nome: ");
}