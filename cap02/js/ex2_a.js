const form = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    const inMedicamento = form.inMedicamento.value
    const inPreco = Number(form.inPreco.value)

    const valorDescontado = inPreco - (inPreco - Math.floor(inPreco))

    resp1.innerText = `Promoção de ${inMedicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valorDescontado}`

    e.preventDefault()
})