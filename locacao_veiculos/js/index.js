getUserData();

chamar();





const idAluga = document.getElementById('id_alugar');

const idServicos = document.getElementById('id_servicos');

const id_perfil = document.getElementById('id_perfil');

const logoutLogin = document.getElementById("logoutLogin");

const no_vehicle = document.getElementById("no_vehicle");



verificarDados();

var carros = [];


id_perfil.addEventListener('click', function () {
    if (JSON.parse(sessionStorage.getItem("user")) == null) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Para acessar o perfil, faça o login!",
            showConfirmButton: false,
            timer: 1500
        });
    } else {

        window.location = "conta.html";
    }
})

logoutLogin.addEventListener('click', function () {
    sessionStorage.clear();
    window.location = "loginCadastro.html";
})

const root = document.documentElement;

async function getUserData(){

   console.log(JSON.parse(sessionStorage.getItem("user")).email);

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


async function chamar() {
    // Chamar a API para cadastrar o usuário
    await fetch("http://localhost:8080/cars").then(response => {
        if (response.ok) {

        }
        return response.json();
    }).then((data) => {

        console.log(data);

        if(data.length == 0){
            no_vehicle.innerText = "Aguarde, estamos adicionando novos veículos!";
        }

        carros = data;
        criaCards(carros);


    }).catch((error) => {
        console.error(error);
    });
}

var listaDivs = document.getElementById("container");


async function setarDados(dados) {
    sessionStorage.setItem("carro", JSON.stringify(dados));
    window.location = "detalhes.html";
}


function criaCards(dados) {
    dados.forEach(function (dado) {
        var divCard = document.createElement("divCard"); // Cria uma nova div
        var img = document.createElement("img"); //Cria a div de imagem
        var textCard = document.createElement("div"); //Cria a div para abranger os textos

        //APPEND BY textCard
        var title = document.createElement("h1"); // Título do card
        var description = document.createElement("p"); // Descrição do card
        var line = document.createElement("hr"); // HR que separa o preço
        var price = document.createElement("p"); // Preço


        img.classList.add("imgCard"); // Adiciona a classe CSS para estilizar a div
        divCard.classList.add("card");
        textCard.classList.add("textCard");
        description.classList.add("legend");
        line.classList.add("line");
        price.classList.add("price");



        img.setAttribute("src", dado.link_png)
        title.innerHTML = dado.nome;
        description.innerText = dado.descricao;
        price.innerText = "R$ " + dado.vehicle_price
        divCard.onclick = function () { setarDados(dado) };




        listaDivs.appendChild(divCard); // Monta o HTML 
        divCard.appendChild(img);
        divCard.appendChild(textCard);
        textCard.appendChild(title);
        textCard.appendChild(description);
        textCard.appendChild(line);
        textCard.appendChild(price);


    });
}

async function verificarDados() {
    if (JSON.parse(sessionStorage.getItem("user")) == null) {
        logoutLogin.innerText = "Login"
    }
}




