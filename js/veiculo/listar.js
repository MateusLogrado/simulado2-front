let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/veiculo`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            let html = `<table border="1" cellpadding="8">
             <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Fabricante</th>
            </tr>`


            dados.forEach(dad => {
                html += `            <tr>
                <td>${dad.placa}</td>
                <td>${dad.modelo}</td>
                <td>${dad.fabricante}</td>
            </tr>`
            })

            html += `</table>`
            res.innerHTML = html
        })
})