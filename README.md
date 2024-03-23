# P.I-3-Semestre-Locacao_veiculos
Repositório para guardar arquivos referentes ao projeto Integrador do 3º Semestre da Faculdade

//botão de retornar pagina
<button class="back-button">Back</button>
.back-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
}

.show-button {
    opacity: 1;
    transform: translateY(0);
}
const backButton = document.querySelector('.back-button');
const root = document.documentElement;

backButton.addEventListener('click', () => {
    root.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        backButton.classList.add('show-button');
    } else {
        backButton.classList.remove('show-button');
    }
});





