const formCadastro = document.getElementById("formCadastro");

formCadastro.addEventListener("click", (event) => {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log(nome, senha, email);

})

const usuario = {
    nome, 
    email,
    senha
}

/*fetch("http://localhost:8080/usuarios", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .catch((error) =>{
    console.error(error);
    alert("Erro ao cadastrar usuário");
});
*/


// ================= LOGIN ===================\\
 
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("click", (event) => {

    event.preventDefault();

    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    console.log(emailLogin, senhaLogin);
})

const usuarioLogin = {
    emailLogin,
    senhaLogin
}




// fetch("http://localhost:8080/usuarios", {
//     method: "POST",
//     body: JSON.stringify(usuario),
//     headers: {
//         "Content-Type": "application/json"
//     }
//     })
//     .catch((error) =>{
//     console.error(error);
//     alert("Erro ao cadastrar usuário");
// });
