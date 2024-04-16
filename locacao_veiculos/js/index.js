
chamar();



const idImg = document.getElementById('id_imagem');

const idCompra = document.getElementById('id_comprar');

const idAluga = document.getElementById('id_alugar');

const idServicos = document.getElementById('id_servicos');

const idAjuda = document.getElementById('id_ajuda');

var carros = [];

idImg.addEventListener('click', function () {
    window.location.pathname = "/locacao_veiculos/paginas/detalhes.html";
})



idCompra.addEventListener('click', function () {
    console.log('COMPRAR')
});

idAluga.addEventListener('click', function () {
    console.log('ALUGAR')
})

idAjuda.addEventListener('click', function () {
    console.log('AJUDA')
})

idServicos.addEventListener('click', function () {
    console.log('SERVICOS')
})

const root = document.documentElement;


function chamar() {

    // Chamar a API para cadastrar o usuário
    fetch("http://localhost:8080/cars").then(response => {
        if (response.ok) {
           
        }
        return response.json();
    }).then((data) =>{

        carros = data;
        criaCards(carros);


    }).catch((error) => {
        console.error(error);
    });
}

var listaDivs = document.getElementById("container");



function criaCards(dados){
    dados.forEach(function(dado) {
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
        divCard.onclick = function() { console.log(dado); };

        

        
        listaDivs.appendChild(divCard); // Monta o HTML 
        divCard.appendChild(img);
        divCard.appendChild(textCard);
        textCard.appendChild(title);
        textCard.appendChild(description);
        textCard.appendChild(line);
        textCard.appendChild(price);


    });
}




