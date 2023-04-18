$('div.conteudo #tel').mask('(00) - 00000-0000'),
$('div.container #cpf').mask('000-000-000.00'),
$('div.container #cep').mask('000-00-000' ,{
  placeholder: '000-00-000'
})


const form = document.getElementById("form");
form.addEventListener('submit', function(e){
e.preventDefault();
})
