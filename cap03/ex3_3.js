const prompt = require("prompt-sync")()
const salario = Number(prompt("Salario R$: "))
const tempo = Number(prompt("Tempo em anos: "))
const quadrienios = Math.floor(tempo / 4)
const salarioFinal = salario*(quadrienios/100) + salario
console.log(`Esse funcionario tem ${quadrienios} quadrienios e possui R$ ${salarioFinal.toFixed(2)} de salário.`)