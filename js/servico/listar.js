let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/servico`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            let html = `<table border="1" cellpadding="8">
                  <tr>
                      <th>ID Cliente</th>
                      <th>ID Veiculo</th>
                      <th>Data Serviço</th>
                      <th>Descrição</th>
                      <th>Preço</th>
                  </tr>`


            dados.forEach(dad => {
                html += `               <tr>
                        <td>${dad.idCliente}</td>
                        <td>${dad.idVeiculo}</td>
                        <td>${dad.dataServico}</td>
                        <td>${dad.descricaoServico}</td>
                        <td>${dad.precoServico}</td>
                    </tr>`
            })

            html += `</table>`
            res.innerHTML = html
        })
})