
const idAluga = document.getElementById('id_alugar');

const idServicos = document.getElementById('id_servicos');

const id_perfil = document.getElementById('id_perfil');

const logoutLogin = document.getElementById("logoutLogin");

const user = document.getElementById("user");

getUserPic();



const buttonConfirm = document.getElementById("confirmInterest");

const dataInicio_id = document.getElementById("dataInicio_id");
const dataFinal_id = document.getElementById("dataFinal_id");
const motivo_id = document.getElementById("motivo_id");
const mensagem = document.getElementById("messageId");

// ITENS DETALHE
const cidadeId = document.getElementById("cidadeid");
const kmid = document.getElementById("kmid");
const cambioid = document.getElementById("cambioid");
const carroceriaid = document.getElementById("carroceriaid");
const anoid = document.getElementById("anoid");
const finalplacaid = document.getElementById("finalplacaid");
const corid = document.getElementById("corid");
const trocaid = document.getElementById("trocaid");


//FEATURES DO VEÍCULO
const alarmid = document.getElementById("alarmid");
const travasid = document.getElementById("travasid");
const computadorid = document.getElementById("computadorid");
const ar_condicionadoid = document.getElementById("ar_condicionadoid");
const desembacadorid = document.getElementById("desembacadorid");
const controleid = document.getElementById("controleid");
const absid = document.getElementById("absid");
const sensorid = document.getElementById("sensorid");
const descricaoId = document.getElementById("descricaoId");
const primeiroNome = document.getElementById("primeiroNome");
const segundoNome = document.getElementById("segundoNome");

const first_imageid = document.getElementById("first_imageid");
const second_imageid = document.getElementById("second_imageid");
const third_imageid = document.getElementById("third_imageid");

const precoId = document.getElementById("precoId");

getCar();

function getCar() {
    var dado = JSON.parse(sessionStorage.getItem("carro"));

    console.log(dado);

    var nomeVeiculo = dado.nome.split(' ');

    console.log(nomeVeiculo);

    // DADOS DE DETALHES
    cidadeId.innerText = dado.cidade;
    kmid.innerText = dado.km;
    cambioid.innerText = dado.cambio;
    carroceriaid.innerText = dado.carroceria;
    anoid.innerText = dado.ano;
    corid.innerText = dado.cor;
    trocaid.innerText = dado.aceito_troca;
    descricaoId.innerText = dado.descricao;
    primeiroNome.innerText = nomeVeiculo[0];
    precoId.innerText = "R$" + dado.vehicle_price;

    first_imageid.setAttribute("src", dado.first_image);
    second_imageid.setAttribute("src", dado.second_image);
    third_imageid.setAttribute("src", dado.third_image);

    // NOME COMPOSTO
    !nomeVeiculo[1] ?  segundoNome.innerText = '' :  segundoNome.innerText = nomeVeiculo[1];

    //VERIFICAÇÕES DE CLASSES E ATRIBUIÇÕES
    dado.alarme == 1 ? alarmid.classList.add('itemsVehicle') : alarmid.classList.add('itemsVehicleNegative');
    dado.travas == 1 ? travasid.classList.add('itemsVehicle') : travasid.classList.add('itemsVehicleNegative');
    dado.computador_ab == 1 ? computadorid.classList.add('itemsVehicle') : computadorid.classList.add('itemsVehicleNegative');
    dado.ar_condicionado == 1 ? ar_condicionadoid.classList.add('itemsVehicle') : ar_condicionadoid.classList.add('itemsVehicleNegative');
    dado.desembacador == 1 ? desembacadorid.classList.add('itemsVehicle') : desembacadorid.classList.add('itemsVehicleNegative');
    dado.controle_tracao == 1 ? controleid.classList.add('itemsVehicle') : controleid.classList.add('itemsVehicleNegative');
    dado.freio_abs == 1 ? absid.classList.add('itemsVehicle') : absid.classList.add('itemsVehicleNegative');
    dado.sensor == 1 ? sensorid.classList.add('itemsVehicle') : sensorid.classList.add('itemsVehicleNegative');


}


function getUserPic(){
    const userData = JSON.parse(sessionStorage.getItem("user"));

    console.log(userData);


    if(userData){
        user.setAttribute("src", userData.foto_perfil);
        userData.foto_perfil == null ? user.setAttribute("src", '../img/do-utilizador.png') : user.setAttribute("value", userData.foto_perfil);
    }else{
        console.log("Teste")
    }

    console.log(user);
}


buttonConfirm.addEventListener("click", function () {

    const userData = JSON.parse(sessionStorage.getItem("user"));
    var carro = JSON.parse(sessionStorage.getItem("carro"));

   

    


    if (JSON.parse(sessionStorage.getItem("user")) == null) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Faça o login para confirmar interesse.",
            showConfirmButton: false,
            timer: 1500
        });
    } else if( dataInicio_id.value == '' || dataFinal_id.value == '' || motivo_id.value == '' ){
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Preencha os campos necessários para demonstrar interesse.",
            showConfirmButton: false,
            timer: 1500
        });

    }else {

        const objetoInteresse = {
            motivo: motivo_id.value,
            observacao: mensagem.value,
            carro_id: carro.id,
            user_id: userData.id,
            data_inicio: dataInicio_id.value,
            data_devolucao: dataFinal_id.value,
            is_approved: 2
        }

        console.log(objetoInteresse);
        
     fetch("http://localhost:8080/aluguel", {
            method: "POST",
            body: JSON.stringify(objetoInteresse),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error("Email ou senha incorretos");
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Interesse confirmado!",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
            return response.json();
        }).catch((error) => {
            console.error(error);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Interesse demonstrado.",
                showConfirmButton: false,
                timer: 1500
            });
        });

    }

});

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