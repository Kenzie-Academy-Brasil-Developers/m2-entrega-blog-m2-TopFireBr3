

class Api {

  // ----------------------------------------LOGIN------------------------------------------------ //
  static perfil = []
  static userId = ""
  static token = ""
  static listaApi = []


  
  static async createUser(data) {
    const response = await fetch(
      "https://api-blog-m2.herokuapp.com/user/register",
      {
        method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
        headers: {
          "Content-Type": "application/json" // Indica o tipo de dado da requisição
        },
        body: JSON.stringify(data), // Informando as informações do usuário
      })
      .then((res) =>  res.json())
      .then((res) => {
        if (res.status) {
          return false
        } else if (res.id) {
          return true
        }
        // localStorage.setItem("api.token",JSON.stringify("text"))
      })
      .catch((error) => error);
    return response;
  }
  
  static async login(data) {
    const token = await fetch(
      "https://api-blog-m2.herokuapp.com/user/login",
      {
        method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
        headers: {
          "Content-Type": "application/json", // Indica o tipo de dado da requisição
        },
        body: JSON.stringify(data), // Informando as informações do usuário
      })
      .then((res) => res.json())
      .then((res) => {

        // console.log(res.userId)
        // console.log(res.token)
        localStorage.setItem("token", res.token)
        localStorage.setItem("userId", res.userId)
        
        if (res.userId !== undefined) {
          Api.userId = res.userId
          Api.token = res.token
          Api.listaUsuario(res.userId, res.token)
          location.replace("./src/page/PaginaInicial.html")
        } else {
          
        }
      })
      .catch((error) => {
        return false
      });

      return token;

  }
  
  static async listaUsuario() {
    
    const response = await fetch(
      `https://api-blog-m2.herokuapp.com/user/${localStorage.getItem("userId")}`,
      {
        method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}` // Adicionamos um token de acesso validado pelo header Authorization
        }
      })
      
      .then((res) => res.json())
      .then((res) => res
      // perfil+=res
      // console.log(perfil)
        // console.log(Api.token)
        
        )
        .catch((error) => error);
        
        return response;
      }

      static async listarPost() {
        
        let response = await fetch(`https://api-blog-m2.herokuapp.com/post/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
        })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          this.listaApi = res.data
          // console.log(this.listaApi)
        })
        return response
        
      }
  
  // ----------------------------------------POSTE------------------------------------------------ //
  
  static async newPost(data) {

    let response = await fetch("https://api-blog-m2.herokuapp.com/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("idPost", res.id))
    
    .catch((error) => error);
    // let resposta = await response.json()
    
    // console.log(`${localStorage.getItem("idPost")}`)
    // console.log(`${localStorage.getItem("token")}`)
    
    return response
  }
  
      
      static async getPrivate() {
        const response = await fetch(
          `https://api-blog-m2.herokuapp.com/user/${Api.token}`,
          {
            method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
              "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
            }
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => error);
      
        return response;
      }

      static async editarPoste(data,id) {

        let response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(data)
        })
        return response
    
      }
      static async deletarPost(id) {

        const response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`, {
          method: "DELETE",
          headers: {
            "authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
      
        console.log("Deletou")
        return response
      }
      static async logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        localStorage.removeItem("idPost")
  }
}

await Api.listarPost()





export { Api }

