let res = document.getElementById("res")
let button = document.getElementById("button")
let buscar = document.getElementById("buscar")

buscar.addEventListener("click", (e) => {
    e.preventDefault()

    let servicoId = Number(document.getElementById("servicoId").value)
    
    let idCliente = document.getElementById("idCliente")
    let idVeiculo = document.getElementById("idVeiculo")
    let dataServico = document.getElementById("dataServico")
    let descricaoServico = document.getElementById("descricaoServico")
    let precoServico = document.getElementById("precoServico")

    fetch(`http://localhost:3000/servico/${servicoId}`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            idCliente.value = dados.idCliente
            idVeiculo.value = dados.idVeiculo
            dataServico.value = dados.dataServico
            descricaoServico.value = dados.descricaoServico
            precoServico.value = dados.precoServico
        })
})


button.addEventListener("click", (e)=>{
    e.preventDefault()

    let servicoId = Number(document.getElementById("servicoId").value)
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

    fetch(`http://localhost:3000/servico/${servicoId}`, {
        method: "PUT",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
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