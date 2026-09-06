const form = document.querySelector("form")
const out = document.querySelector("h2")

form.addEventListener("submit", (e) => {
    const valor = Number(form.inValor.value)
    const tempo = Number(form.inTempo.value)

    tempoTotal = Math.ceil(tempo / 15)
    valorTotal = tempoTotal * valor

    out.innerText = `Valor a Pagar R$: ${valorTotal}`

    e.preventDefault()
})