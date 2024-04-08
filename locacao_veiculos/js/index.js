











const finalizaCadastro = document.getElementById('finalizaCadastro');

const idImg = document.getElementById('id_imagem');

const idCompra = document.getElementById('id_comprar');

const idAluga = document.getElementById('id_alugar');

const idServicos = document.getElementById('id_servicos');

const idAjuda = document.getElementById('id_ajuda');

idImg.addEventListener('click', function(){
    window.location.pathname="/locacao_veiculos/paginas/detalhes.html";
} )

finalizaCadastro.addEventListener('click', function(){
    console.log('FUNCIONANDO')
    window.location.pathname="/locacao_veiculos/paginas/home.html";
} )


idCompra.addEventListener('click', function(){
    console.log('COMPRAR')
 } );

idAluga.addEventListener('click', function(){
   console.log('ALUGAR')
} )

idAjuda.addEventListener('click', function(){
   console.log('AJUDA')
} )

idServicos.addEventListener('click', function(){
   console.log('SERVICOS')
} )

const backButton = document.querySelector('.back-button');
const root = document.documentElement;

backButton.addEventListener('click', function() {
    root.scrollTo({top: 0, behavior: 'smooth'});
    console.log('voltando')
    window.location.pathname="/locacao_veiculos/paginas/home.html";
});
window.addEventListener('scroll', () => {
   if(window.pageYOffset > 100) {
       backButton.classList.add('show-button');
   } else {
       backButton.classList.remove('show-button');
   }
});

idCriarConta.addEventListener('click', function(){
    console.log('Criar')
    window.location.pathname="/locacao_veiculos"
 } )
 





