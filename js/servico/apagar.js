let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let codServico = Number(document.getElementById("codServico").value)

    fetch(`http://localhost:3000/servico/${codServico}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                res.innerHTML = "Serviço apagado com sucesso"
            }
        })
        .then()
})