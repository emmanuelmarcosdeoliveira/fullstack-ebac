const form = document.getElementById("form-telefone");
const imgCelular = '<img src="./imagens/celular-1.png" alt="telefone celular"/>';
const imgResidencial = '<img src="./imagens/residencial.png" alt="telefone residencial"/>';

let linhas = " ";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const inputNomeCadastrado = document.getElementById("nome-cadastrado");
  const inputNumeroTelefone = document.getElementById("numero-telefone");
  const inputTipo = document.getElementById("tipo")

  let linha = "<tr>";
  linha += `<td>${inputNomeCadastrado.value}</td>`;
  linha += `<td>${inputNumeroTelefone.value}</td>`;
  linha += `<td>${inputTipo.value}</td>`;
  
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNomeCadastrado.value = "";
  inputNumeroTelefone.value = "";
  inputTipo.value = "";
});
