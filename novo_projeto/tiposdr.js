let rec01 = document.getElementById("rec01");
let rec02 = document.getElementById("rec02");
let rec03 = document.getElementById("rec03");
let rec04 = document.getElementById("rec04");
let rec05 = document.getElementById("rec05");

document.getElementById("botao").onclick = function () {
  if (rec01.checked) {
    console.log(demissaoSemJustaCausa());
    let demissaoSemJustaCausa = function() {
      return demissaoSemJustaCausa.toFixed();
    }
  } else (rec02.checked) {
    console.log(demissaoPorJustaCausa());
    let demissaoPorJustaCausa = function() {
      return demissaoPorJustaCausa.toFixed();
    }
  } else (rec03.checked) {
    console.log(pedidoDeDemissao());
    let pedidoDeDemissao = function() {
      return pedidoDeDemissao.toFixed();
    }
  } else (rec04.checked) {
    console.log(recisaoPorCulpaReciproca());
    let recisaoPorCulpaReciproca = function() {
      return recisaoPorCulpaReciproca.toFixed();
    }
  } else (rec05.checked) {
    console.log(demissaoPorComumAcordo());
    let demissaoPorComumAcordo = function() {
      return demissaoPorComumAcordo.toFixed();
    }
  }
};