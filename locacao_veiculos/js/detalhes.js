

const buttonConfirm = document.getElementById("confirmInterest");

const nome = document.getElementById("nomeId");
const email = document.getElementById("emailId");
const telefone = document.getElementById("telId");
const mensagem = document.getElementById("messageId");


buttonConfirm.addEventListener("click", function () {

    if (nome.value == '' || email.value == '' || telefone.value == '') {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Preencha os campos necessários!",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Interesse Confirmado!",
            showConfirmButton: false,
            timer: 1500
        });

        console.log(nome.value);
        console.log(email.value);
        console.log(mensagem.value);
        console.log(telefone.value);
    }



});