let res = document.getElementById("res")
let button = document.getElementById("button")

button.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/compra`, {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            let html = `<table border="1" cellpadding="8">
             <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
            </tr>`


            dados.forEach(dad => {
                html += `            <tr>
                <td>${dad.nome}</td>
                <td>${dad.telefone}</td>
                <td>${dad.email}</td>
            </tr>`

                console.log(dad)
            })

            html += `</table>`
            res.innerHTML = html
        })
})