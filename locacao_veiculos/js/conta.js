
const id_alugados = document.getElementById("id_alugados");

const id_sair = document.getElementById("id_sair");

const id_favoritos = document.getElementById("favoritos");


id_alugados.addEventListener('click', function () {
    window.location = "fluxo-conta-usuario/alugados.html";
})

id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "loginCadastro.html";
})
