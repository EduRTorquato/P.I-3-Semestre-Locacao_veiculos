const id_dados = document.getElementById("id_dados");

const id_sair = document.getElementById("id_sair");

const id_favoritos = document.getElementById("favoritos");



id_dados.addEventListener("click", function () {

    window.location = "../conta.html";
});

id_favoritos.addEventListener("click", function () {

    window.location = "favoritos.html";
})


id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})