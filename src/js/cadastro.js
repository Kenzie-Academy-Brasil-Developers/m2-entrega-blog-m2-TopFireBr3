import { Api } from "../models/Api.js"
const body = document.querySelector("body")
const main = document.createElement("main")
body.append(main)

main.innerHTML=`

<h3>Cadastro</h3>
<input placeholder="Nome de usuário" name="nome" value="arroz6">
<input type="gmail" placeholder="Gmail" name="arroz" value="arroz6@gmail.com.br">
<input placeholder="Foto de perfil" name="foto" value="https://github.com/phmc99.png">
<input type="senha" placeholder="Senha" name="senha" value="arroz6">
<button id="cadastrar">Cadastrar</button>
<button id="login">Login</button>
`
const gmail = document.getElementsByName("arroz")[0].value
const senha = document.getElementsByName("senha")[0].value
const foto = document.getElementsByName("foto")[0].value
const nome = document.getElementsByName("nome")[0].value


let data2 = {
    "email": gmail,
    "password": senha,
    "username": nome,
	"avatarUrl": foto
}


const cadastrar = document.getElementById("cadastrar")
const login = document.getElementById("login")


cadastrar.addEventListener("click", async(event) => {
    event.preventDefault()
    const arr = await Api.createUser(data2)
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
