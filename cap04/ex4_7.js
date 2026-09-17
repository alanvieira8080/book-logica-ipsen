const prompt = require("prompt-sync")()
const numeroPessoas = Number(prompt("Há quantas pessoas para entrada? "))
const numeroPeixes = Number(prompt("Quantos peixes foram capturados? "))
if (numeroPeixes > numeroPessoas) {
    const valor = numeroPessoas * 20 + (numeroPeixes - numeroPessoas) * 12
    console.log(`O valor a se pagar pelos ${numeroPeixes} é R$ ${valor}.`)
} else {
    const valor = numeroPessoas * 20
    console.log(`O valor a se pagar pelos ${numeroPeixes} é R$ ${valor}.`)
}