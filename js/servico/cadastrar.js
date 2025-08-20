let button = document.getElementById("button")
let res = document.getElementById("res")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let idCliente = document.getElementById("idCliente").value
    let idVeiculo = document.getElementById("idVeiculo").value
    let dataServico = document.getElementById("dataServico").value
    let descricaoServico = document.getElementById("descricaoServico").value
    let precoServico = document.getElementById("precoServico").value

    const valores = {
        idCliente: idCliente,
        idVeiculo: idVeiculo,
        dataServico: dataServico,
        descricaoServico: descricaoServico,
        precoServico: precoServico
    }

    fetch(`http://localhost:3000/servico`, {
        method: "POST",
        headers: { 
            "content-type":"application/json" 
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then( ()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>ID Cliente</th>
                <th>ID Veiculo</th>
                <th>Data Serviço</th>
                <th>Descrição</th>
                <th>Preço</th>
            </tr>
            <tr>
                <td>${idCliente}</td>
                <td>${idVeiculo}</td>
                <td>${dataServico}</td>
                <td>${descricaoServico}</td>
                <td>${precoServico}</td>
            </tr>
        </table>`
    })
})