
const id_sair = document.getElementById("id_sair");

const dados = document.getElementById("dados");


const adicionar_veiculos = document.getElementById("adicionar_veiculos");


exibeBotao();


id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

dados.addEventListener("click", function(){

    window.location = "../conta.html"
})

adicionar_veiculos.addEventListener("click", function(){

    window.location = "addcar.html"
})


function exibeBotao () {

    const user = JSON.parse(sessionStorage.getItem("user"))

    console.log(user);

    console.log(user.is_admin);

}