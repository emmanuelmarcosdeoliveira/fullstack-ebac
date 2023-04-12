const form = document.getElementById("form-telefone");
const imgCelular =
  '<img src="./imagens/celular-1.png" alt="telefone celular"/>';
const imgResidencial =
  '<img src="./imagens/residencial.png" alt="telefone residencial"/>';
const nome = [];
const numero = [];
let linhas = " ";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  somaTotalNumero();
  somaTotalTelefones();
});

function adicionaLinha() {
  const inputNomeCadastrado = document.getElementById("nome-cadastrado");
  const inputNumeroTelefone = document.getElementById("numero-telefone");
  const inputTipo = document.getElementById("tipo");

if(nome.includes(inputNomeCadastrado.value)) {
  alert(`O Nome ${inputNomeCadastrado.value} já foi cadastrado`);
} else {
  nome.push(inputNomeCadastrado.value);
  numero.push(inputNumeroTelefone.value);
  
  let linha = "<tr>";
  linha += `<td>${inputNomeCadastrado.value}</td>`;
  linha += `<td>${inputNumeroTelefone.value}</td>`;
  linha += `<td>${
      (Option.value == '<option value="Celular">Celular</option>',(Option.addEventListener = imgCelular))
    }` ||
    `<td>${
      (Option.value == '<option value="Residencial">Residencial</option>',
      (Option.addEventListener = imgResidencial))
    }`;
  
  linha += "</tr>";
  
  linhas += linha;
  
}
inputNomeCadastrado.value = "";
inputNumeroTelefone.value = "";
inputTipo.value = "";

}


function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function somaTotalNumero() {
 const numerofinal  = somaTotalTelefones();
 document.getElementById('total').innerHTML = numerofinal;
}

function somaTotalTelefones() {
  let somaNumero = 0
  for (let i = 0 ; i < numero.length; i++ )
  somaNumero += numero[i]
const tot  = numero.length
return numero.length
}