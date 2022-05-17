import { Api } from "../models/Api.js"
const body = document.querySelector("body")
const main = document.createElement("main")
body.append(main)

main.innerHTML=`
<form>
<h3>Cadastro</h3>
<input placeholder="Nome de usuário" id="nome" >
<input type="gmail" placeholder="Gmail" id="arroz" >
<input placeholder="Foto de perfil" id="foto" >
<input type="senha" placeholder="Senha" id="senha" >
<button id="cadastrar">Cadastrar</button>
<button id="login">Login</button>
</form>
`
const formulario1 = document.querySelector("form")



const cadastrar = document.getElementById("cadastrar")
const login = document.getElementById("login")


cadastrar.addEventListener("click", async(event) => {
    event.preventDefault()
    const arr = await Api.createUser({"username": formulario1[0].value, "email": formulario1[1].value, "avatarUrl": formulario1[2].value, "password": formulario1[3].value})
    console.log(arr)
    if (arr === true) {
        alert("Cadastro concluído")
    } else {
        alert("Usuário já cadastrado")
    }
    location.replace("/index.html")
})
login.addEventListener("click", (event) => {
    event.preventDefault()
    location.replace("/index.html")
})
