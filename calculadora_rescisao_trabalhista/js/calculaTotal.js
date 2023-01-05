// Esta função receberá como parâmetro saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado e multaRescisoria

// Formulas: total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIndenizado + multaRescisoria

// Retorno: total

// variáveis para teste:
let saldoSalario = 4700;
let feriasVencidas = 4700 + (4700 / 3);
let feriasProporcionais = 3000;
let decimoTerceiroProporcional = 2500;
let avisoPrevioIndenizado = 4700 + ((4700/30) * 3);
let multaRescisoria = 4000;


// função que soma os retornos das funções auxiliares e retorna o total
function calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria) {
    let total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIndenizado + multaRescisoria;
    return total.toFixed(2);
}

console.log(`Total R$: ${calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIndenizado, multaRescisoria)}`);