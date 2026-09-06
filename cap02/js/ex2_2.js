const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const titulo = frm.valueTitulo.value
    const duracao = frm.valueDuracao.value

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    console.log(titulo)
    console.log(duracao)

    resp.innerHTML = `${titulo}</br></br>${horas} hora(s) e ${minutos} minuto(s).`
    
    e.preventDefault()
})