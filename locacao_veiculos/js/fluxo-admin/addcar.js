const id_sair = document.getElementById("id_sair");

const dados = document.getElementById("dados");

const gestao_veiculos = document.getElementById("gestao_veiculos");
const home = document.getElementById("home");
const email_id = document.getElementById("email_id");
const nome_id = document.getElementById("nome_id");
const linkPerfil_id = document.getElementById("linkPerfil_id");
const addVehicle = document.getElementById("addVehicle");

//CAMPOS PARA ADIÇÃO DE VEÍCULOS\\
const nome = document.getElementById("nome");
const ano = document.getElementById("ano");
const cidade = document.getElementById("cidade");
const km = document.getElementById("km");
const vehicle_photo = document.getElementById("vehicle_photo");
const cambio = document.getElementById("cambio");
const carroceria = document.getElementById("carroceria");
const cor = document.getElementById("cor");
const final_placa = document.getElementById("final_placa");
const aceito_troca = document.getElementById("aceito_troca");
const preco = document.getElementById("preco");
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const foto3 = document.getElementById("foto3");
// CHECKBOX \\
const alarme = document.getElementById("alarme");
const travas = document.getElementById("travas");
const freioabs = document.getElementById("freioabs");
const computador = document.getElementById("computador");
const arcondicionado = document.getElementById("arcondicionado");
const sensor = document.getElementById("sensor");
const desembacador = document.getElementById("desembacador");
const controle = document.getElementById("controle");

const descricao = document.getElementById("descricao");




exibeBotao();
getUserData();
setarDadosUser();


id_sair.addEventListener("click", function () {

    sessionStorage.clear;
    window.location = "../loginCadastro.html";
})

dados.addEventListener("click", function () {

    window.location = "../conta.html"
})

home.addEventListener("click", function () {
    window.location = "../home.html";
})


gestao_veiculos.addEventListener("click", function () {

    window.location = "pedidos.html"
})


function exibeBotao() {
    const user = JSON.parse(sessionStorage.getItem("user"))
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

        console.log(data);

        sessionStorage.setItem("user", JSON.stringify(data));


    }).catch((error) => {
        console.error(error);
    });

}

addVehicle.addEventListener("click", function () {


    var alarmvalue = alarme.checked ? 1 : 0;
    var travasvalue = travas.checked ? 1 : 0;
    var freiovalue = freioabs.checked ? 1 : 0;
    var computadorvalue = computador.checked ? 1 : 0;
    var arcondicionadovalue = arcondicionado.checked ? 1 : 0;
    var desembacadorvalue = desembacador.checked ? 1 : 0;
    var controlevalue = controle.checked ? 1 : 0;
    var sensorvalue = sensor.checked ? 1 : 0;

    // console.log("NOME: "  + nome.value);
    // console.log("ANO: "  + ano.value);
    // console.log("CIDADE: "  + cidade.value);
    // console.log("KM: "  + km.value);

    // console.log("VEÍCULO FOTO: "  + vehicle_photo.value);
    // console.log("CAMBIO: "  + cambio.value);
    // console.log("CARROCERIA: "  + carroceria.value);
    // console.log("COR: "  + cor.value);
    // console.log("FINAL DA PLACA: "  + final_placa.value);
    // console.log("ACEITA TROCA: "  + aceito_troca.value);
    // console.log("PREÇO: "  + preco.value);
    // console.log("FOTO 1: "  + foto1.value);
    // console.log("FOTO 2: "  + foto2.value);
    // console.log("FOTO 3: "  + foto3.value);

    // console.log("ALARME: "  + alarmvalue);
    // console.log("TRAVAS: "  + travasvalue);
    // console.log("FREIO ABS: "  + freiovalue);
    // console.log("COMPUTADOR DE BORDO: "  + computadorvalue);
    // console.log("AR CONDICIONADO: "  + arcondicionadovalue);
    // console.log("DESEMBAÇADOR TRASEIRO: "  + desembacadorvalue);
    // console.log("CONTROLE DE ESTABILIDADE: "  + controlevalue);
    // console.log("SENSOR DE ESTACIONAMENTO: "  + sensorvalue);

    // console.log("DESCRIÇÃO: "  + descricao.value);

    objectCarrro = {
        "vehicle_price": preco.value,
        "nome": nome.value,
        "link_png": vehicle_photo.value,
        "cidade": cidade.value,
        "km": km.value,
        "cambio": cambio.value,
        "carroceria": carroceria.value,
        "ano": ano.value,
        "final_placa": final_placa.value,
        "cor": cor.value,
        "aceito_troca": aceito_troca.value,
        "alarme": alarmvalue,
        "travas": travasvalue,
        "freio_abs": freiovalue,
        "computador_ab": computadorvalue,
        "ar_condicionado": arcondicionadovalue,
        "sensor": sensorvalue,
        "desembacador": desembacadorvalue,
        "controle_tracao": controlevalue,
        "descricao": descricao.value,
        "first_image": foto1.value,
        "second_image": foto2.value,
        "third_image": foto3.value
    }

    console.log(objectCarrro);

    // Chamar a API para cadastrar o usuário
 fetch("http://localhost:8080/cars", {
        method: "POST",
        body: JSON.stringify(objectCarrro),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error("Não foi possível");
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Carro adicionado!",
                showConfirmButton: false,
                timer: 1500
            });

           
        }
        return response.json();
    }).catch((error) => {
        console.error(error);
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Não foi possível adicionar o veículo!",
            showConfirmButton: false,
            timer: 1500
        });
    });



})

function setarDadosUser() {
    const dados = JSON.parse(sessionStorage.getItem("user"));

    email_id.innerText = dados.email;
    nome_id.innerText = dados.nome;
    dados.foto_perfil == null ? linkPerfil_id.setAttribute("src", '../../img/do-utilizador.png') : linkPerfil_id.setAttribute("src", dados.foto_perfil);
}