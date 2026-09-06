const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")
const resp3 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = frm.inPreco.value

    const entrada = preco*0.5
    const parcela = preco*0.5 / 12
    
    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$ ${entrada}`
    resp3.innerText = `+ 12 x de R$ ${parcela}`

    e.preventDefault()
})