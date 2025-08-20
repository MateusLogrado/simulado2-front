let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let codVeiculo = Number(document.getElementById("codVeiculo").value)

    fetch(`http://localhost:3000/veiculo/${codVeiculo}`, {
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