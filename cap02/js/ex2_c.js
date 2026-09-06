const form = document.querySelector("form")
const outEtiqueta = document.querySelector("#outEtiqueta")
const outPreco = document.querySelector("#outPreco")

form.addEventListener("submit", (e) => {
    const inProduto = form.inProduto.value
    const inPreco = Number(form.inPreco.value)

    valorTerceiroItem = inPreco * 0.5
    valorPromocao = inPreco * 2 + valorTerceiroItem

    outEtiqueta.innerText = `${inProduto} - Promoção: Leve 3 por R$ ${valorPromocao.toFixed(2)}`
    outPreco.innerText = `O 3 produto custa apenas R$: ${valorTerceiroItem.toFixed(2)}`

    e.preventDefault()
})