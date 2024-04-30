
const id_sair = document.getElementById("id_sair");

const dados = document.getElementById("dados");

const adicionar_veiculos = document.getElementById("adicionar_veiculos");
const home = document.getElementById("home");

//DADOS PERFIL\\
const email_id = document.getElementById("email_id");
const nome_id = document.getElementById("nome_id");
const linkPerfil_id = document.getElementById("linkPerfil_id");



exibeBotao();
getPedidos();
getUserData();
setarDadosUser();

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

home.addEventListener("click", function () {
    window.location = "../home.html";
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

        console.log(data)

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
            linkPng: item[6],
            is_approved: item[7]
        };

        // Adiciona o objeto ao array de objetos
        objetos.push(objeto);
    }

    return objetos;
}

var listaPedidos = document.getElementById("infos");

function criaDados(dados) {

    dados.forEach(function (dado) {

        if (dado.is_approved == 0) {

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



            nomePessoa.innerText = dado.nome;
            nomeCarro.innerText = dado.carro;
            dataCarro.innerText = dado.dataInicio + " - " + dado.dataDevolucao;

            buttonYes.onclick = function () { getAluguelData(dado.id) };
            buttonNo.onclick = function () { getAluguelData(dado.id) }





            listaPedidos.appendChild(divPedido); // Monta o HTML 
            divPedido.appendChild(nomePessoa);
            divPedido.appendChild(nomeCarro);
            divPedido.appendChild(dataCarro);
            divPedido.appendChild(botoes);
            botoes.appendChild(buttonYes);
            botoes.appendChild(buttonNo);


        }
    });
}


async function getUserData() {
    const email = JSON.parse(sessionStorage.getItem("user")).email;

    const endpointMontado = `http://localhost:8080/user/email/${email}`;

    console.log(endpointMontado);

    await fetch(endpointMontado).then(response => {
        if (response.ok) {

        }
        return response.json();
    }).then((data) => {

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


//Conseguir dados do aluguel para alterá-los
async function getAluguelData(id) {

    const endpointMontado = `http://localhost:8080/aluguel/${id}`;


    await fetch(endpointMontado).then(response => {
        if (response.ok) {
            return response.json();
        }

    }).then((data) => {

        console.log(data);

        aprovarDados(data);

        // sessionStorage.setItem("user", JSON.stringify(data));


    }).catch((error) => {
        console.error(error);
    });

}


async function aprovarDados(dados) {

    dados.is_approved = 1;

    console.log(dados);

    // Chamar a API para cadastrar o usuário
    await fetch("http://localhost:8080/aluguel", {
        method: "PUT",
        body: JSON.stringify(dados),
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
        }
        // return response.json();
    }).catch((error) => {
        console.error(error);
        console.error("Tá errado hein");
    });

}
