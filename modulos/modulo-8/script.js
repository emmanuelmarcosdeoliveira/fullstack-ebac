const form = document.getElementById("form-atividade");
const imgAprovado =
  '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputnomeAtividade = document.getElementById("atv");
  const inputnotaAtividade = document.getElementById("natv");

  atividades.push(inputnomeAtividade.value);
  notas.push(parseFloat(inputnotaAtividade.value));

  let linha = "<tr>";
  linha += `<td>${inputnomeAtividade.value}</td>`;
  linha += `<td>${inputnotaAtividade.value}</td>`;
  linha += `<td>${
    inputnotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += "</tr>";

  linhas += linha;
  inputnomeAtividade.value = "";
  inputnotaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = caculaMediaFinal();
  console.log(media);
}

function caculaMediaFinal() {
  let somaDasNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
