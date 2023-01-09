// variáveis base para teste
const salario = 4700;
const diasMes = 20;
const mesesAno = 10;
const totalDeMesesTrabalhados = 30;

// Regras:

// - Demissão sem justa causa
// saldo de salário;
// aviso prévio;
// 13ª terceiro salário proporcional;
// férias vencidas, acrescidas do adicional de 1/3;
// férias proporcionais, acrescidas do adicional de 1/3;
// multa de 40% do FGTS.

function calculaDemissaoSemJustaCausa() {

    let saldoSalario = calculaSaldoSalario(salario, diasMes);
    let avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salario);
    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salario, mesesAno);
    let feriasVencidas = calculaFeriasVencidas(salario);
    let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas);
    let multaRescisoria = calculaMultaRescisoria(salario, totalDeMesesTrabalhados);

    let demissaoSemJustaCausa = saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional + feriasVencidas + feriasProporcionais + multaRescisoria;

    return demissaoSemJustaCausa.toFixed(2);
}

console.log(`Demissão sem Justa Causa R$ ${calculaDemissaoSemJustaCausa()}`);

// - Demissão com justa causa
// saldo de salários;
// férias vencidas, acrescidas de 1/3.

function calculaDemissaoPorJustaCausa() {
    
    let saldoSalario = calculaSaldoSalario(salario, diasMes);
    let feriasVencidas = calculaFeriasVencidas(salario);

    let demissaoSemJustaCausa = saldoSalario + feriasVencidas;

    return demissaoSemJustaCausa.toFixed(2);
}

console.log(`Demissão por Justa Causa R$ ${calculaDemissaoPorJustaCausa()}`);

// - Pedido de demissão
// saldo de salário;
// 13ª terceiro salário proporcional;
// férias vencidas, acrescidas do adicional de 1/3;
// férias proporcionais, acrescidas do adicional de 1/3.

function calculaPedidoDeDemissao() {

    let saldoSalario = calculaSaldoSalario(salario, diasMes);
    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salario, mesesAno);
    let feriasVencidas = calculaFeriasVencidas(salario);
    let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas);

    let pedidoDeDemissao = saldoSalario + decimoTerceiroProporcional + feriasVencidas + feriasProporcionais;

    return pedidoDeDemissao.toFixed(2);
}

console.log(`Pedido de Demissão R$ ${calculaPedidoDeDemissao()}`);

// - Rescisão por culpa recíproca
// saldo de salário;
// metade do aviso prévio;
// metade do 13º salário proporcional;
// férias vencidas, acrescidas de 1/3, se houver;
// metade das férias proporcionais, acrescidas de 1/3;
// indenização de 20% dos depósitos do FGTS.

function calculaRescisaoPorCulpaReciproca() {

    let saldoSalario = calculaSaldoSalario(salario, diasMes);
    let avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salario) / 2);
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salario, mesesAno) / 2);
    let feriasVencidas = calculaFeriasVencidas(salario);
    let feriasProporcionais = (calculaFeriasProporcionais(mesesAno, feriasVencidas) / 2);
    let multaRescisoria = (calculaMultaRescisoria(salario, totalDeMesesTrabalhados) / 5);

    let rescisaoPorCulpaReciproca = saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional + feriasVencidas + feriasProporcionais + multaRescisoria;

    return rescisaoPorCulpaReciproca.toFixed(2);
}

console.log(`Rescisão por Culpa Recíproca R$ ${calculaRescisaoPorCulpaReciproca()}`);

// - Demissão por comum acordo
// saldo de salário;
// metade do aviso prévio;
// 13º salário proporcional;
// férias vencidas, acrescidas de 1/3;
// férias proporcionais, acrescidas de 1/3;
// multa de 20% do FGTS.

function calculaDemissaoPorComumAcordo() {

    let saldoSalario = calculaSaldoSalario(salario, diasMes);
    let avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salario) / 2);
    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salario, mesesAno);
    let feriasVencidas = calculaFeriasVencidas(salario);
    let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas);
    let multaRescisoria = (calculaMultaRescisoria(salario, totalDeMesesTrabalhados) / 5);

    let demissaoPorComumAcordo = saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional + feriasVencidas + feriasProporcionais + multaRescisoria;

    return demissaoPorComumAcordo.toFixed(2);
}

console.log(`Demissão por Comum Acordo R$ ${calculaDemissaoPorComumAcordo()}`);


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
    let feriasVencidas = salarioDigitado + (salarioDigitado / 3);
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

function calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria) {
    let total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIndenizado + multaRescisoria;
    console.log(typeof (total));
    return total.toFixed(2);
}