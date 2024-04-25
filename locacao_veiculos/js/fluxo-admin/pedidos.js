
const id_sair = document.getElementById("id_sair");

const dados = document.getElementById("dados");

const adicionar_veiculos = document.getElementById("adicionar_veiculos");



exibeBotao();
getPedidos();

id_sair.addEventListener("click", function () {
    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

dados.addEventListener("click", function () {
    window.location = "../conta.html"
})

adicionar_veiculos.addEventListener("click", function () {
    window.location = "addcar.html"
})


function exibeBotao() {
    const user = JSON.parse(sessionStorage.getItem("user"))
}

async function getPedidos() {

    // Chamar a API para cadastrar o usuário
    await fetch("http://localhost:8080/aluguel/customized").then(response => {
        if (response.ok) {

        }
        return response.json();
    }).then((data) => {

        alugueis = data;
        criaDados(transformarEmObjetos(alugueis));

    }).catch((error) => {
        console.error(error);
    });

}

function transformarEmObjetos(array) {
    let objetos = [];

    // Percorre o array
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        // Cria um objeto para cada posição do array
        let objeto = {
            id: item[0],
            nome: item[1],
            carro: item[2],
            preco: item[3],
            dataInicio: item[4],
            dataDevolucao: item[5],
            linkPng: item[6]
        };

        // Adiciona o objeto ao array de objetos
        objetos.push(objeto);
    }

    return objetos;
}

var listaPedidos = document.getElementById("infos");

function criaDados(dados) {
    dados.forEach(function (dado) {
        var divPedido = document.createElement("div"); // Cria uma nova div
        var nomePessoa = document.createElement("p"); //Cria a div de imagem
        var nomeCarro = document.createElement("p"); //Cria a div para abranger os textos
        var dataCarro = document.createElement("p"); //Cria a div para abranger os textos

        var botoes = document.createElement("div");
        var dataCarro = document.createElement("i"); 
        var buttonYes = document.createElement("i");
        var buttonNo = document.createElement("i");
        
        //APPEND BY textCard

        divPedido.classList.add("pedidos"); // Adiciona a classe CSS para estilizar a div
        nomePessoa.classList.add("nomeCarroPedido");
        nomeCarro.classList.add("nomeCarroPedido");
        dataCarro.classList.add("nomeCarroPedido");
        botoes.classList.add("buttonIcons");
        buttonYes.classList.add("bi-check-circle");
        buttonNo.classList.add("bi-x-circle");
        buttonYes.classList.add("iconAccept");
        buttonNo.classList.add("iconRecuse");


        console.log(dado);

        nomePessoa.innerText = dado.nome;
        nomeCarro.innerText = dado.carro;
        dataCarro.innerText = dado.dataInicio + " - " + dado.dataDevolucao;




        listaPedidos.appendChild(divPedido); // Monta o HTML 
        divPedido.appendChild(nomePessoa);
        divPedido.appendChild(nomeCarro);
        divPedido.appendChild(dataCarro);
        divPedido.appendChild(botoes);
        botoes.appendChild(buttonYes);
        botoes.appendChild(buttonNo);


    });
}
