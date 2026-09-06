const prompt = require("prompt-sync")()
const valorDaCompra = Number(prompt("Qual o valor da compra?"))
let numeroDeParcelas
if (valorDaCompra >= 20*1) {
    numeroDeParcelas = 1
}
if (valorDaCompra >= 20*2) {
    numeroDeParcelas = 2
}
if (valorDaCompra >= 20*3) {
    numeroDeParcelas = 3
}
if (valorDaCompra >= 20*4) {
    numeroDeParcelas = 4
}
if (valorDaCompra >= 20*5) {
    numeroDeParcelas = 5
}
if (valorDaCompra >= 20*6) {
    numeroDeParcelas = 6
}
console.log(`O número de parcelas é ${numeroDeParcelas}.`)
