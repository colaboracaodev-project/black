function limparCamposInput() {
  document.querySelector('input[type="number"]').value = "";
  document.querySelector('input[type="date"]').value = "";
  document.querySelector('input[name="fimTrabalho"]').value = "";

  let feriasVencidas = document.getElementsByName("ferias-vencidas");
  for (let i = 0; i < feriasVencidas.length; i++) {
    feriasVencidas[i].checked = false;
  }

  let motivoRescisao = document.getElementsByName("motivo-rescisao");
  for (let i = 0; i < motivoRescisao.length; i++) {
    motivoRescisao[i].checked = false;
  }
}
