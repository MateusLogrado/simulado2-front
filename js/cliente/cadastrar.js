let button = document.getElementById("button")
let res = document.getElementById("res")

button.addEventListener("click", (e)=>{
    e.preventDefault()

    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value

    const valores = {
        nome: nome,
        telefone: telefone,
        email: email
    }

    fetch(`http://localhost:3000/cliente`, {
        method: "POST",
        headers: { 
            "content-type":"application/json" 
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(dad =>{
        res.innerHTML = `
                <table border="1" cellpadding="8">
            <tr>
                <th>nome</th>
                <th>telefone</th>
                <th></th>
            </tr>
            <tr>
                <td>${dad.nome}</td>
                <td>${dad.telefone}</td>
                <td>${dad.email}</td>
            </tr>
        </table>`
    })
})