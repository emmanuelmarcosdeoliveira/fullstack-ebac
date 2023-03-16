const form = document.getElementById("compare-number");
const opcao1 = document.getElementById("numero-A");
const opcao2 = document.getElementById("numero-B");
const correto = document.getElementById("verificado");
const incorreto = document.getElementById("error");

function verificaNumero(opcao1, opcao2) {
  return opcao2 > opcao1;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let validarForm = verificaNumero(opcao1.valueAsNumber, opcao2.valueAsNumber);
  if (validarForm) {
    correto.style.display = "block";
    opcao1.value = "";
    opcao2.value = "";
  }
});
opcao2.addEventListener("keyup", function (e) {
  let validarForm = verificaNumero(opcao1.valueAsNumber, opcao2.valueAsNumber);
  if (!validarForm) {
    incorreto.style.display = "block";
    correto.style.display = "none";
  } else {
    incorreto.style.display = "none";
  }
});
