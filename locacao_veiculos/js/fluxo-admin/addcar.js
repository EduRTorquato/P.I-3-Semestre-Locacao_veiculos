const id_sair = document.getElementById("id_sair");

const dados = document.getElementById("dados");

const gestao_veiculos = document.getElementById("gestao_veiculos");


exibeBotao();


id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

dados.addEventListener("click", function(){

    window.location = "../conta.html"
})

gestao_veiculos.addEventListener("click", function(){

    window.location = "pedidos.html"
})


function exibeBotao () {

    const user = JSON.parse(sessionStorage.getItem("user"))

    console.log(user);

    console.log(user.is_admin);

}