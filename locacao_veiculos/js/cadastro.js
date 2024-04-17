const formCadastro = document.getElementById("form-cadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");



formCadastro.addEventListener("click", (event) => {

    event.preventDefault();

    // Criar um objeto com os dados do usuário
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    };

    if (usuario.email == '' || usuario.nome == '' || usuario.senha == '') {


        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Preencha os campos vazios!",
            showConfirmButton: false,
            timer: 1500
        });

    } else {
        // Chamar a API para cadastrar o usuário
        fetch("http://localhost:8080/user", {
            method: "POST",
            body: JSON.stringify(usuario),
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
                    title: "Usuário Cadastrado!",
                    showConfirmButton: false,
                    timer: 1500
                });

                document.getElementById("reg-log").checked = false;

            }
            return response.json();
        }).catch((error) => {
            console.error(error);
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Esse email já existe!",
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
});




// ======================= LOGIN ======================= \\ 

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("click", (event) => {
    event.preventDefault();

    // Obter os valores dos campos
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    // Criar um objeto com os dados do usuário
    const usuario = {
        email,
        senha,
    };

    if (usuario.email == '' || usuario.senha == '') {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Preencha os campos",
            showConfirmButton: false,
            timer: 1500
        });

    } else {
        // Chamar a API para fazer login
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Email ou senha incorretos");
                }
                return response.json();
            })
            .then(data => {
                // Redirecionar para outra página após o login bem-sucedido
                window.location.href = "home.html";
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: "top-end",
                    icon: "warning",
                    title: "Email ou senha inválidos!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }
});
