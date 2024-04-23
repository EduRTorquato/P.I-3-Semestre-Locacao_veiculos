
const id_alugados = document.getElementById("id_alugados");

const id_sair = document.getElementById("id_sair");

const id_favoritos = document.getElementById("id_favoritos");

const gestao_veiculos = document.getElementById("gestao_veiculos");

const adicionar_veiculos = document.getElementById("adicionar_veiculos");

exibeBotao();



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

    console.log("É admin?");
    console.log(user.is_admin);

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