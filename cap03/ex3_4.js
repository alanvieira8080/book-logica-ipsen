const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt("Peso da Racao (kg): "))
const consumoDiario = Number(prompt("Consumo diário (gr): "))
const duracao = Math.floor(pesoRacao*1000 / consumoDiario)
const sobra = pesoRacao*1000 % consumoDiario
console.log(`Duracao: ${duracao} dias`)
console.log(`Sobra: ${sobra} gr`)