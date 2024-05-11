const id_dados = document.getElementById("id_dados");
const id_sair = document.getElementById("id_sair");
const id_favoritos = document.getElementById("favoritos");
const home = document.getElementById("home");


//DADOS PERFIL\\
const email_id = document.getElementById("email_id");
const nome_id = document.getElementById("nome_id");
const linkPerfil_id = document.getElementById("linkPerfil_id");

getUserData();
setarDadosUser();
getPedidos();


//VAI PRA CONTA
id_dados.addEventListener("click", function () {

    window.location = "../conta.html";
});

home.addEventListener("click", function () {
    window.location = "../home.html";
})

//VAI PARA FAVORITOS
id_favoritos.addEventListener("click", function () {

    window.location = "favoritos.html";
})


//
id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

async function getUserData() {
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

async function getPedidos() {
    const id = JSON.parse(sessionStorage.getItem("user")).id;

    const endpointMontado = `http://localhost:8080/aluguel/customized/${id}`;

    console.log(endpointMontado);

    await fetch(endpointMontado).then(response => {
        if (response.ok) {

        }
        return response.json();
    }).then((data) => {

        console.log(data);

        criaDados(transformarEmObjetos(data));


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

function transformarEmObjetos(array) {
    let objetos = [];

    console.log(array)
    // Percorre o array
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        // Cria um objeto para cada posição do array
        let objeto = {
            nome: item[0],
            is_aprovado: item[1],
            dataInicio: item[2],
            dataDevolucao: item[3],
            is_aprovado: item[4],
            motivo: item[5]
        };

        // Adiciona o objeto ao array de objetos
        objetos.push(objeto);
    }

    return objetos;
}

var listaPedidos = document.getElementById("informations");

function criaDados(dados) {
    
    console.log('ENTRANDO EM CRIAR DADOS')

    console.log(dados)

    dados.forEach(function (dado) {


            var divCards = document.getElementById("divCards"); // Cria uma nova div
            var cardAlugado = document.createElement("div"); // Cria uma nova div
            var divNova = document.createElement("div"); // Cria uma nova div
            var nomeCarro = document.createElement("h1"); //Cria a div de imagem
            var motivoCarro = document.createElement("p"); //Cria a div para abranger os textos
            var dataCarro = document.createElement("p"); //Cria a div para abranger os textos

            var divStatus = document.createElement("div"); // Cria uma nova div
            var textStatus = document.createElement("h1");

            // APPEND BY textCard
            cardAlugado.classList.add("cardAlugado");
            divStatus.classList.add("statusNegado");
            textStatus.classList.add("textStatus");
            divNova.style = "padding: 10px";

            if(dado.is_aprovado == 1){
                divStatus.classList.add("statusAprovado");
                textStatus.classList.add("textApproved");
                textStatus.innerText = "Aprovado";
            }else if(dado.is_aprovado == 0){
                divStatus.classList.add("statusNegado");
                textStatus.classList.add("textDenied");
                textStatus.innerText = "Negado";
            }else{
                divStatus.classList.add("statusPendente");
                textStatus.classList.add("textPendente");
                textStatus.innerText = "Pendente";
            }
            

            nomeCarro.innerText = dado.nome;
            motivoCarro.innerText = dado.motivo
            dataCarro.innerText = dado.dataInicio;


   

            listaPedidos.appendChild(divCards); // Monta o HTML 
            divCards.appendChild(cardAlugado);
            cardAlugado.appendChild(divNova);
            divNova.appendChild(nomeCarro);
            divNova.appendChild(motivoCarro);
            divNova.appendChild(dataCarro);
            cardAlugado.appendChild(divStatus);
            divStatus.appendChild(textStatus);


        
    });
}