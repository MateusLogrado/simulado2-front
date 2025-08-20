let button = document.getElementById("button")
let res = document.getElementById("res")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let placa = document.getElementById("placa").value
    let modelo = document.getElementById("modelo").value
    let fabricante = document.getElementById("fabricante").value

    const valores = {
        placa: placa,
        modelo: modelo,
       fabricante: fabricante
    }

    fetch(`http://localhost:3000/veiculo`, {
        method: "POST",
        headers: { 
            "content-type":"application/json" 
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(()=>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Fabricante</th>
            </tr>
            <tr>
                <td>${placa}</td>
                <td>${modelo}</td>
                <td>${fabricante}</td>
            </tr>
        </table>`
    })
})