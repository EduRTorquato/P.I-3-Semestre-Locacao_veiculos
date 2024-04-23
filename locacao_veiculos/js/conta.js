
const id_alugados = document.getElementById("id_alugados");

const id_sair = document.getElementById("id_sair");

const id_favoritos = document.getElementById("id_favoritos");

const gestao_veiculos = document.getElementById("gestao_veiculos");

const adicionar_veiculos = document.getElementById("adicionar_veiculos");

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

exibeBotao();

setarDadosUser();



//FLUXO USUÁRIO
id_alugados.addEventListener('click', function () {
    window.location = "fluxo-conta-usuario/alugados.html";
})

id_favoritos.addEventListener("click", function(){
    window.location = "fluxo-conta-usuario/favoritos.html";
})


// FLUXO DE ADMIN 
adicionar_veiculos.addEventListener("click", function(){
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
function setarDadosUser(){

    const dados = JSON.parse(sessionStorage.getItem("user"));

    email_id.innerText = dados.email;
    nome_id.innerText = dados.nome;
    linkPerfil_id.setAttribute("src", dados.foto_perfil);

    nomeCompleto_id.setAttribute("value", dados.nome);
    emailDado_id.setAttribute("value",  dados.email);
    dataNascimento_id.setAttribute("value", dados.data_nasc);
    genero_id.setAttribute("value", dados.genero);
    
    dados.foto_perfil == null ? linkPerfil_id.setAttribute("src", '../img/do-utilizador.png') : linkPng_id.setAttribute("value", dados.foto_perfil);
    //linkPng_id.setAttribute("value", dados.foto_perfil);

   console.log(dados)

}