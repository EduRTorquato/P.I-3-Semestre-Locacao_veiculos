const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("click", (event) => {






    // Obter os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;


    // Criar um objeto com os dados do usuário
    const usuario = {
        nome,
        email,
        senha,
    };

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

});

// ======================= LOGIN ======================= \\ 

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("click", (event) => {
    event.preventDefault();

    // Obter os valores dos campos
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    // Criar um objeto com os dados do usuário
    const usuarioLogin = {
        emailLogin,
        senhaLogin,
    };

    // Chamar a API para fazer login
    fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify(usuarioLogin),
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
            alert("Erro ao fazer login!");
        });
});
