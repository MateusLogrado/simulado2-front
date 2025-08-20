let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let codCliente = Number(document.getElementById("codCliente").value)

    fetch(`http://localhost:3000/cliente/${codCliente}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
        .then(resp => {
            if (resp.status === 204) {
                res.innerHTML = "Cliente apagado com sucesso"
            }
        })
        .then()
})