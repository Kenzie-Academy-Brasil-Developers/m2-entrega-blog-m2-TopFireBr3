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
        <button id="header__logout">Logout</button>
    </div>
</header>

<main id="principal">

    <section id="conteudo">
        
    </section>
    <section id="tudo">
    
    </section>
</main>
`
async function posts() {
    const conteudo = document.getElementById("conteudo")
    const tudo = document.getElementById("tudo")
    const informacoes = Api.listaApi
    conteudo.innerHTML = `
    <form id="formulario">
        <div>
            <textarea type="text" size="83px" placeholder="Comece seu post incrível!" id="inputAdicionar" name=""></textarea>
        </div>
        <button id="formulario__adicionar">+</button>
    </form>
        `
    console.log(informacoes)
    informacoes.forEach((elen) => {
        // const { id, username, avatarUrl } = elen.owner.
        console.log(elen.createdAt)
        
        const p2 = document.createElement("p")
        const section = document.createElement("section")
        const img = document.createElement("img")
        const figure = document.createElement("figure")
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const b = document.createElement("b")
        const p1 = document.createElement("textarea")
        
        section.classList="posts"
        img.src = `${elen.owner.avatarUrl}`
        img.alt = `${elen.owner.avatarUrl}`
        img.classList = "posts__figure__imgPost"
        div1.id = "posts__text"
        b.innerText = `${elen.owner.username}`
        p1.innerText = `${elen.post}`
        p1.id = "posts__text__text1"
        div2.id = "botoes"
        div2.classList = "posts__botoes"
        p2.classList = "posts__botoes__data1"
        p2.innerText= `${elen.createdAt}`
        
        tudo.appendChild(section)
        section.append(figure, div1, div2)
        figure.appendChild(img)
        div1.append(b, p1)
        div2.append(p2)
        
        
        
        // tudo.innerHTML += `        
        //     <section class="posts">
        //     <figure>
        //     <img src="${avatarUrl}" alt="${username}" class="posts__figure__imgPost">
        //     </figure>
        //     <div id="posts__text">
        //     <b>${username}</b>
        //     <p id="posts__text__text1">${post}</p>
        //     </div>
        //     <div class="botoes" id="botoes">
            
        //     </div>
        //     </section>
        //     `
        
        
    
        if (elen.owner.id === localStorage.getItem("userId")) {
            
            const p2 = document.createElement("p")
            const button1 = document.createElement("button")
            const button2 = document.createElement("button")

            button1.classList.add("posts__botoes__editar", 'editar')
            button1.name = "editar"
            button1.id = `${elen.id}`
            button1.innerText = "Editar"
            button2.classList.add("posts__botoes__apagar", 'apagar')
            button2.name = "apagar"
            button2.id = `${elen.id}`
            button2.innerText = "Apagar"

            p2.classList = "posts__botoes__data"
            p2.innerText= `${elen.createdAt}`
            
            div2.innerHTML=''

            div2.append(button1, button2, p2)

            button2.addEventListener("click", async (event) => {
                const targetEvent = event.target.id
                event.preventDefault()
                console.log(targetEvent)
                Api.deletarPost(targetEvent)
            })

            button1.addEventListener("click", async (event) => {
                
                localStorage.setItem("post", `${event.target.id}`) 
                
                event.preventDefault()
                location.replace("/src/page/editar.html")
            })
        } 
    })
}
posts()



// const obj = {
//     "content": formulario[0].value,
// }
// const textInput = document.getElementById("inputAdicionar")

const formulario = document.getElementById("formulario")
const adicionar = document.getElementById("formulario__adicionar")


const logout = document.getElementById("header__logout")


// addEventListener("click",(event)=> { 
//     const targetEvent = event.target.id
//     console.log(targetEvent)   
// })

adicionar.addEventListener("click", async (event) => {
    event.preventDefault()
    console.log(formulario[0].value)
    
    Api.newPost({'content':formulario[0].value })
})

logout.addEventListener("click", async (event) => {
    event.preventDefault()
    Api.logout()
    location.replace("/index.html")
})

