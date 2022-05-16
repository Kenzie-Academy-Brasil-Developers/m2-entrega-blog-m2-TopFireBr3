import { Api } from "../models/Api.js"
const body = document.querySelector("body")

const a = await Api.listaUsuario()
const { username, avatarUrl } = a
// console.log(a)


body.innerHTML = `
<header>
<img src="${avatarUrl}" alt="${username}" id="header__imagem">
<div id="header">
<h3 id="header__perfil">${username}</h3>
</div>
</header>
<main id="principal">
<section id="conteudo">
<form id="botoes">
<div>
<textarea type="text" size="83px" placeholder="Rescreva o seu post!" id="inputAdicionar" name=""></textarea>
</div>

</form>
</section>
</main>
`
const informacoes = Api.listaApi

function novo() {
const div = document.getElementById("botoes")
            const editar = document.createElement("button")
            
            editar.innerText = "editar"
            div.appendChild(editar)
            informacoes.forEach(elen => {
        if (elen.owner.id === localStorage.getItem("userId")) {
            console.log(elen.id)
            editar.id = `${elen.id}`

            
            editar.addEventListener("click", async (event) => {
                
                event.preventDefault()
                await Api.editarPoste({newContent:`${formulario[0].value}`}, localStorage.getItem("post"))
                console.log(formulario[0].value)
                localStorage.removeItem("post")
                location.replace("/src/page/PaginaInicial.html")
            })
        }
    })
}
novo()
const formulario = document.querySelector("form")
const editar = document.getElementById("header__editar")
console.log(editar)