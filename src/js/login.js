
import { Api } from "../models/Api.js"

const body = document.querySelector("body")
const main = document.createElement("main")
body.append(main)

main.innerHTML = `

<form>
<h3>Login</h3>
<input type="gmail" placeholder="Gmail" name="gmail"  >
<input type="senha" placeholder="Senha" name="senha" >
<button id="login">Login</button>
<button id="cadastrar">Cadastrar</button>
</form>
`


function rota() {
    const formulario = document.forms[0]
    return {
        "email": formulario[0].value,
        "password": formulario[1].value
    }
}



const login = document.getElementById("login")
const cadastrar = document.getElementById("cadastrar")

login.addEventListener("click", async (event) => {
    event.preventDefault()

    // console.log(Api.perfil)
    await Api.login(rota())

    console.log("foi")

})
cadastrar.addEventListener("click", (event) => {

    event.preventDefault()
    location.replace("./src/page/cadastro.html")
    console.log("foi")
})