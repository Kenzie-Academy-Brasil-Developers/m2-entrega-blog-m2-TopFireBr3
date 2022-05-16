
import { Api } from "/src/models/Api.js"

const body = document.querySelector("body")
const main = document.createElement("main")
body.append(main)

main.innerHTML = `

<h3>Login</h3>
<input type="gmail" placeholder="Gmail" name="gmail" value="ggabriel.p2003@gmail.com.br">
<input type="senha" placeholder="Senha" name="senha" value="33625539">
<button id="login">Login</button>
<button id="cadastrar">Cadastrar</button>
`
const gmail = document.getElementsByName("gmail")[0].value
const senha = document.getElementsByName("senha")[0].value


let data = {
    "email": gmail,
    "password": senha
}


const login = document.getElementById("login")
const cadastrar = document.getElementById("cadastrar")

login.addEventListener("click", async(event) => {
    event.preventDefault()

    // console.log(Api.perfil)
    Api.login(data)

    console.log("foi")
    
})
cadastrar.addEventListener("click", (event) => {
    
    event.preventDefault()
    location.replace("./src/page/cadastro.html")
    console.log("foi")
})