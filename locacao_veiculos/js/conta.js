
const id_alugados = document.getElementById("id_alugados");
const id_sair = document.getElementById("id_sair");
const id_favoritos = document.getElementById("id_favoritos");
const gestao_veiculos = document.getElementById("gestao_veiculos");
const adicionar_veiculos = document.getElementById("adicionar_veiculos");
const home = document.getElementById("home");

//BOTÃO SAVE DATA\\
const saveData = document.getElementById("saveData");



const email_id = document.getElementById("email_id");
const nome_id = document.getElementById("nome_id");
const linkPerfil_id = document.getElementById("linkPerfil_id");

//INPUTS IDS\\

const nomeCompleto_id = document.getElementById("nomeCompleto_id");
const emailDado_id = document.getElementById("emailDado_id");
const dataNascimento_id = document.getElementById("dataNascimento_id");
const genero_id = document.getElementById("genero_id");
const linkPng_id = document.getElementById("linkPng_id");

/////\\\\\\


//INPUTS ENDEREÇOS\\
const cep_id = document.getElementById("cep_id");
const endereco_id = document.getElementById("endereco_id");
const complemento_id = document.getElementById("complemento_id");
const numero_id = document.getElementById("numero_id");
const cidade_id = document.getElementById("cidade_id");
const inputState = document.getElementById("inputState");


exibeBotao();

setarDadosUser();


//FLUXO USUÁRIO
id_alugados.addEventListener('click', function () {
    window.location = "fluxo-conta-usuario/alugados.html";
})

id_favoritos.addEventListener("click", function () {
    window.location = "fluxo-conta-usuario/favoritos.html";
})

home.addEventListener("click", function () {
    window.location = "home.html";
})



// FLUXO DE ADMIN 
adicionar_veiculos.addEventListener("click", function () {
    window.location = "fluxo-conta-admin/addcar.html";
})

gestao_veiculos.addEventListener("click", function () {
    window.location = "fluxo-conta-admin/pedidos.html"
})


//LOGOUT
id_sair.addEventListener("click", function () {
    sessionStorage.clear;
    window.location = "loginCadastro.html";
})


//FUNÇÃO DE VERIFICAÇÃO
function exibeBotao() {
    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user.is_admin == 0) {
        gestao_veiculos.style = 'display: none';
        adicionar_veiculos.style = 'display: none';

    } else {
        adicionar_veiculos.style = 'display: block';
        gestao_veiculos.style = 'display: block';
        id_alugados.style = 'display: none';
        id_favoritos.style = 'display: none';
    }
}

//Setar dados
function setarDadosUser() {

    const dados = JSON.parse(sessionStorage.getItem("user"));

    email_id.innerText = dados.email;
    nome_id.innerText = dados.nome;
    linkPerfil_id.setAttribute("src", dados.foto_perfil);


    //INPUT DE DADOS\\
    nomeCompleto_id.setAttribute("value", dados.nome);
    emailDado_id.setAttribute("value", dados.email);
    dataNascimento_id.setAttribute("value", dados.data_nasc);
    genero_id.setAttribute("value", dados.genero);
    //VALIDAÇÃO GÊNERO\\
    dados.genero == null ? genero_id.setAttribute("value", '') : genero_id.setAttribute("value", dados.genero);


    //VALIDAÇÃO FOTO DE PERFIL\\
    dados.foto_perfil == null ? linkPerfil_id.setAttribute("src", '../img/do-utilizador.png') : linkPng_id.setAttribute("value", dados.foto_perfil);
    dados.cep == null ? cep_id.setAttribute("value", '') : cep_id.setAttribute("value", dados.cep);
    dados.endereco == null ? endereco_id.setAttribute("value", '') : endereco_id.setAttribute("value", dados.endereco);
    dados.complemento == null ? complemento_id.setAttribute("value", '') : complemento_id.setAttribute("value", dados.complemento);
    dados.numero == null ? numero_id.setAttribute("value", '') : numero_id.setAttribute("value", dados.numero);
    dados.cidade == null ? cidade_id.setAttribute("value", '') : cidade_id.setAttribute("value", dados.cidade);

    console.log(dados);
}

function salvarDados() {

    const user = JSON.parse(sessionStorage.getItem("user"));

    const dadosUsuario = {
        cep: cep_id.value,
        cidade: cidade_id.value,
        complemento: complemento_id.value,
        data_nasc: dataNascimento_id.value,
        email: emailDado_id.value,
        endereco: endereco_id.value,
        estado: inputState.value,
        foto_perfil: linkPerfil_id.getAttribute("src"),
        genero: genero_id.value,
        id: user.id,
        is_admin: user.is_admin,
        nome: nomeCompleto_id.value,
        numero: numero_id.value,
        senha: user.senha
    }

    console.log(dadosUsuario);
}


saveData.addEventListener("click", async function (event) {
    // salvarDados();

    const user = JSON.parse(sessionStorage.getItem("user"));

    event.preventDefault();

    // Criar um objeto com os dados do usuário
    const dadosUsuario = {
        cep: cep_id.value,
        cidade: cidade_id.value,
        complemento: complemento_id.value,
        data_nasc: dataNascimento_id.value,
        email: emailDado_id.value,
        endereco: endereco_id.value,
        estado: inputState.value,
        foto_perfil: linkPng_id.value,
        genero: genero_id.value,
        id: user.id,
        is_admin: user.is_admin,
        nome: nomeCompleto_id.value,
        numero: numero_id.value,
        senha: user.senha
    }

    console.log(dadosUsuario);

    {
        // Chamar a API para cadastrar o usuário
        await fetch("http://localhost:8080/user", {
            method: "PUT",
            body: JSON.stringify(dadosUsuario),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error("Algo deu errado");
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Dados alterados!",
                    showConfirmButton: false,
                    timer: 1500
                });

                getUserData();
                setarDadosUser();

            }
            // return response.json();
        }).catch((error) => {
            console.error(error);
            console.error("Tá errado hein");
        });
    }



})

async function getUserData() {

    console.log(JSON.parse(sessionStorage.getItem("user")).email);

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