function main() {
  const salarioDigitado = 1000;
  const dataEntrada = new Date("2020-01-01");
  const dataSaida = new Date("2022-01-01");
  const diasMes = dataEntrada.getDate() + 1;
  const mesesAno = dataSaida.getMonth() + 1;
  const totalDeMesesTrabalhados = parseInt(calculaData(dataEntrada, dataSaida));
  const recebeAvisoPrevioIndenizado = true;
  const possuiFeriasVencidas = true;

  const total = document.getElementById("total");
  const resultado = calculaDemissaoSemJustaCausa(
    salarioDigitado,
    diasMes,
    mesesAno,
    totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado,
    possuiFeriasVencidas
  );
  total.innerHTML = resultado.toFixed(2);

  const saldoSalarioCalculado = document.getElementById(
    "salarioProporcionalCalculado"
  );
  const avisoPrevioIndenizadoCalculado = document.getElementById(
    "avisoPrevioCalculado"
  );
  const decimoTerceiroProporcionalCalculado = document.getElementById(
    "decimoTerceiroCalculado"
  );
  const feriasVencidasCalculada = document.getElementById(
    "feriasVencidasCalculada"
  );
  const feriasProporcionaisCalculada = document.getElementById(
    "feriasProporcionalCalculada"
  );
  const multaRescisoriaCalculada = document.getElementById(
    "multaRescisoriaCalculada"
  );

  aparecerResultado();
  pegarFeriasVencidasChecked();
  pegarAvisoPrevioChecked();
  pegarMotivoDaRescisaoChecked();
}

// funções que calculam o tipo de rescisão
function calculaDemissaoSemJustaCausa(
  salario,
  diasMes,
  mesesAno,
  totalDeMesesTrabalhados,
  recebeAvisoPrevioIndenizado,
  possuiFeriasVencidas
) {
  console.log(
    `salario ${salario} diasMes ${diasMes} mesesAno ${mesesAno} mesesTrabalhados ${totalDeMesesTrabalhados}`
  );

  let saldoSalario = parseFloat(calculaSaldoSalario(salario, diasMes));
  let avisoPrevioIndenizado = 0;
  let decimoTerceiroProporcional = parseFloat(
    calculaDecimoTerceiroProporcional(salario, mesesAno)
  );
  let feriasVencidas = 0;
  let feriasProporcionais = parseFloat(
    calculaFeriasProporcionais(mesesAno, feriasVencidas)
  );
  let multaRescisoria = parseFloat(
    calculaMultaRescisoria(salario, totalDeMesesTrabalhados)
  );

  if (recebeAvisoPrevioIndenizado) {
    avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salario));
  }

  if (possuiFeriasVencidas) {
    feriasVencidas = parseFloat(calculaFeriasVencidas(salario));
  }

  let demissaoSemJustaCausa =
    saldoSalario +
    avisoPrevioIndenizado +
    decimoTerceiroProporcional +
    feriasVencidas +
    feriasProporcionais +
    multaRescisoria;

  console.log(demissaoSemJustaCausa);

  return demissaoSemJustaCausa;
}

function calculaDemissaoPorJustaCausa() {
  let saldoSalario = calculaSaldoSalario(salario, diasMes);
  let feriasVencidas = calculaFeriasVencidas(salario);

  let demissaoSemJustaCausa = saldoSalario + feriasVencidas;

  return demissaoSemJustaCausa.toFixed(2);
}

function calculaPedidoDeDemissao() {
  let saldoSalario = calculaSaldoSalario(salario, diasMes);
  let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(
    salario,
    mesesAno
  );
  let feriasVencidas = 0;
  let feriasProporcionais = calculaFeriasProporcionais(
    mesesAno,
    feriasVencidas
  );

  if (possuiFeriasVencidas) {
    feriasVencidas = calculaFeriasVencidas(salario);
  }

  let pedidoDeDemissao =
    saldoSalario +
    decimoTerceiroProporcional +
    feriasVencidas +
    feriasProporcionais;

  return pedidoDeDemissao.toFixed(2);
}

function calculaRescisaoPorCulpaReciproca() {
  let saldoSalario = calculaSaldoSalario(salario, diasMes);
  let avisoPrevioIndenizado = 0;
  let decimoTerceiroProporcional =
    calculaDecimoTerceiroProporcional(salario, mesesAno) / 2;
  let feriasVencidas = 0;
  let feriasProporcionais =
    calculaFeriasProporcionais(mesesAno, feriasVencidas) / 2;
  let multaRescisoria =
    calculaMultaRescisoria(salario, totalDeMesesTrabalhados) / 5;

  if (recebeAvisoPrevioIndenizado) {
    avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salario) / 2;
  }

  if (possuiFeriasVencidas) {
    feriasVencidas = calculaFeriasVencidas(salario);
  }

  let rescisaoPorCulpaReciproca =
    saldoSalario +
    avisoPrevioIndenizado +
    decimoTerceiroProporcional +
    feriasVencidas +
    feriasProporcionais +
    multaRescisoria;

  return rescisaoPorCulpaReciproca.toFixed(2);
}

function calculaDemissaoPorComumAcordo() {
  let saldoSalario = calculaSaldoSalario(salario, diasMes);
  let avisoPrevioIndenizado = 0;
  let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(
    salario,
    mesesAno
  );
  let feriasVencidas = 0;
  let feriasProporcionais = calculaFeriasProporcionais(
    mesesAno,
    feriasVencidas
  );
  let multaRescisoria =
    calculaMultaRescisoria(salario, totalDeMesesTrabalhados) / 5;

  if (recebeAvisoPrevioIndenizado) {
    avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salario) / 2;
  }

  if (possuiFeriasVencidas) {
    feriasVencidas = calculaFeriasVencidas(salario);
  }

  let demissaoPorComumAcordo =
    saldoSalario +
    avisoPrevioIndenizado +
    decimoTerceiroProporcional +
    feriasVencidas +
    feriasProporcionais +
    multaRescisoria;

  return demissaoPorComumAcordo.toFixed(2);
}

// funções auxiliares
function calculaSaldoSalario(salarioDigitado, diasMes) {
  let saldoSalario = (salarioDigitado / 30) * diasMes;
  return saldoSalario;
}

function calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno) {
  let decimoTerceiro = (salarioDigitado / 12) * mesesAno;
  return decimoTerceiro;
}

function calculaFeriasVencidas(salarioDigitado) {
  let feriasVencidas = salarioDigitado + salarioDigitado / 3;
  return feriasVencidas;
}

function calculaFeriasProporcionais(mesesAno, feriasVencidas) {
  let feriasProporcionais = (feriasVencidas / 12) * mesesAno;
  return feriasProporcionais;
}

function calculaAvisoPrevioIndenizado(salario) {
  let avisoPrevioIndenizado = (salario / 30) * 33;
  return avisoPrevioIndenizado;
}

function calculaMultaRescisoria(salario, totalDeMesesTrabalhados) {
  let depositoMensalFGTS = salario * 0.08;
  let totalContribuicaoFGTS = depositoMensalFGTS * totalDeMesesTrabalhados;
  let multaRescisoria = totalContribuicaoFGTS * 0.4;
  return multaRescisoria;
}

function calculaData(date1, date2) {
  let start = Math.floor(date1 / (3600 * 24 * 1000));
  let end = Math.floor(date2 / (3600 * 24 * 1000));

  let daysDiff = end - start;
  let monthDiff = daysDiff / 30;
  return monthDiff.toFixed();
}

function aparecerResultado() {
  let salario = document.getElementById("salario").value;
  let startDate = document.getElementById("start_date").value;
  let endDate = document.getElementById("end_date").value;

  if (salario === "" || startDate === "" || endDate === "") {
    document.querySelector(".btn").disabled = true;
  } else {
    document.querySelector(".btn").disabled = false;
    document.querySelector(".results").style.visibility = "visible";
  }
}

function ocultarResultado() {
  document.querySelector(".results").style.visibility = "hidden";
}

function pegarFeriasVencidasChecked() {
  let feriasVencidas = document.getElementsByName("ferias-vencidas");

  var choices = [];
  for (var i = 0; i < feriasVencidas.length; i++) {
    if (feriasVencidas[i].checked) {
      choices.push(feriasVencidas[i].value);
    }
  }

  if (choices[0] === "nao-ferias-vencias") {
    console.log("Não férias vencidas");
  } else if (choices[0] === "sim-ferias-vencias") {
    console.log("Sim férias vencidas");
  }

  console.log(choices);
}

function pegarAvisoPrevioChecked() {
  let avisoPrevio = document.getElementsByName("aviso-previo");

  var choices = [];
  for (var i = 0; i < avisoPrevio.length; i++) {
    if (avisoPrevio[i].checked) {
      choices.push(avisoPrevio[i].value);
    }
  }

  if (choices[0] === "nao-aviso-previo") {
    console.log("Não aviso prévio");
  } else if (choices[0] === "sim-aviso-previo") {
    console.log("Sim aviso previo");
  }

  console.log(choices);
}

function pegarMotivoDaRescisaoChecked() {
  var motivoRescisao = document.getElementsByName("motivo-rescisao");

  var choices = [];
  for (var i = 0; i < motivoRescisao.length; i++) {
    if (motivoRescisao[i].checked) {
      choices.push(motivoRescisao[i].value);
    }
  }

  if (choices[0] === "sem-justa-causa") {
    console.log("Sem justa causa");
  } else if (choices[0] === "com-justa-causa") {
    console.log("Com justa causa");
  } else if (choices[0] === "pedido-de-demissao") {
    console.log("Pedido de demissão");
  } else if (choices[0] === "reciproca") {
    console.log("Reciproca");
  } else if (choices[0] === "acordo") {
    console.log("Acordo");
  }
  console.log(choices);
}
