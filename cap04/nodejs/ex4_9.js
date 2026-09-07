const prompt = require("prompt-sync")()
const numero = Number(prompt("Qual é o numero?"))
if (numero > 999 || numero < 100) {
  console.log("Erro! O número deve ser uma centena.")
  return
}
const centena = Math.floor(numero / 100)
const dezena = Math.floor(numero/10) - centena*10
const unidade = numero - centena*100 - dezena*10
const novoNumero = unidade*100 + dezena*10 + centena
console.log(`Cent: ${centena} Dez:${dezena} Unid: ${unidade}`)
console.log(`Ò número invertido é ${novoNumero}`)
