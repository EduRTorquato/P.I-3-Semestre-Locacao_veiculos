const id_dados = document.getElementById("id_dados");
const id_sair = document.getElementById("id_sair");
const id_favoritos = document.getElementById("favoritos");
const home = document.getElementById("home");


//DADOS PERFIL\\
const email_id = document.getElementById("email_id");
const nome_id = document.getElementById("nome_id");
const linkPerfil_id = document.getElementById("linkPerfil_id");

getUserData();
setarDadosUser();


//VAI PRA CONTA
id_dados.addEventListener("click", function () {

    window.location = "../conta.html";
});

home.addEventListener("click", function () {
    window.location = "../home.html";
})

//VAI PARA FAVORITOS
id_favoritos.addEventListener("click", function () {

    window.location = "favoritos.html";
})


//
id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

async function getUserData() {
    const email = JSON.parse(sessionStorage.getItem("user")).email;

    const endpointMontado = `http://localhost:8080/user/email/${email}`;

    console.log(endpointMontado);

    await fetch(endpointMontado).then(response => {
        if (response.ok) {

        }
        return response.json();
    }).then((data) => {

        console.log(data);

        sessionStorage.setItem("user", JSON.stringify(data));


    }).catch((error) => {
        console.error(error);
    });

}

function setarDadosUser() {
    const dados = JSON.parse(sessionStorage.getItem("user"));

    email_id.innerText = dados.email;
    nome_id.innerText = dados.nome;
    linkPerfil_id.setAttribute("src", dados.foto_perfil);
}