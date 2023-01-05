// Esta função não receberá parâmetros, não terá retorno e deverá manipular o DOM a fim de pegar os valores do formulário html, chamar as funções listadas abaixo, depois calcular o total a ser pago e carregar o resultado no html.

// Funções a serem chamadas:
// let totais = 0;
// calculaSaldoSalario(salarioDigitado, diasMes)
// calculaFeriasVencidas(salarioDigitado)
// calculaFeriasProporcionais(mesesAno, feriasVencidas)
// calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno)
// calculaAvisoPrevioIndenizado(salarioDigitado)
// calculaMultaRescisoria(salarioDigitado, mesesTrabalhados)
// calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria)

// Após chamar as funções acima, pegar o resultado da função calculaTotal() e carregar no HTML.

function manipulaDOM() {
    const salarioDigitado = 4700;
    const mesesAno = 10;
    const diasMes = 20;
    const mesesTrabalhados = 34;

    // const salarioDigitado = document.getElementById('salario').value;
    // const mesesAno = document.getElementById('mesesTrabalhadosAno').value;
    // const diasMes = document.getElementById('diasTrabalhadosMes').value;
    // const mesesTrabalhados = document.getElementById('tempoTotalMes').value;
    const resultado = document.getElementById('resultado');

    let total = 4700;
    // let saldoSalario = calculaSaldoSalario(salarioDigitado, diasMes)
    // let feriasVencidas = calculaFeriasVencidas(salarioDigitado)
    // let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas)
    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno)
    // let avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salarioDigitado)
    // let multaRescisoria = calculaMultaRescisoria(salarioDigitado, mesesTrabalhados)
    // total = calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria)

    // return total.toFixed(2);
    // console.log(saldoSalario);
    // console.log(feriasVencidas);
    // console.log(feriasProporcionais);
    console.log(decimoTerceiroProporcional);
    // console.log(avisoPrevioIndenizado);
    // console.log(multaRescisoria);
    // console.log(total);

    resultado.innerHTML = total;

}

console.log(`Total R$ ${manipulaDOM()}`);

// Funções auxiliares
// função que soma os retornos das funções auxiliares e retorna o total
function calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria) {
    let total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIndenizado + multaRescisoria;
    return total.toFixed(2);
}

// função para calcular decimoTerceiroProporcional
function calculaDecimoTerceiroProporcional(salario, mesesTrabalhadosNoAno) {
    let decimoTerceiroProporcional = (salario / 12) * mesesTrabalhadosNoAno;
    return decimoTerceiroProporcional.toFixed(2);
}