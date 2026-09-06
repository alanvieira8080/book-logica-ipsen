const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const valuePreco = Number(frm.inPreco.value)
    const valueConsumo = Number(frm.inConsumo.value)

    const valorTotal = valuePreco / 1000 * valueConsumo

    resp.innerText = `Valor a Pagar é R$ ${valorTotal.toFixed(2)}`
})