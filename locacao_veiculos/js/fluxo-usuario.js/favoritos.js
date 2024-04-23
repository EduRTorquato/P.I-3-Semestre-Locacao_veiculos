const id_dados = document.getElementById("id_dados");

const id_alugados = document.getElementById("id_alugados");

const id_sair = document.getElementById("id_sair");



id_dados.addEventListener("click", function () {

    window.location = "../conta.html";
});

id_alugados.addEventListener("click", function(){

    window.location = "alugados.html";
})


id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})