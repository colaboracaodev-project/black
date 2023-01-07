function manipulaDOM() {
    let salarioDigitado = parseFloat(document.getElementById("salario").value);
    let diasMes = parseFloat(document.getElementById("dias-trabalhados").value);
    let mesesAno = parseFloat(document.getElementById("meses-trabalhados-ano").value);
    let totalMesesTrabalhados = parseFloat(document.getElementById("total-de-meses-trabalhados").value);
    
    let saldoSalario = calculaSaldoSalario(salarioDigitado, diasMes);
    console.log("saldoSalario: " + saldoSalario);
    
    let feriasVencidas = calculaFeriasVencidas(salarioDigitado);
    console.log("feriasVencidas: " + feriasVencidas);

    let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas); 
    console.log("feriasProporcionais: " + feriasProporcionais);

    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno);
    console.log("decimoTerceiro: " + decimoTerceiroProporcional);

    let avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salarioDigitado);
    console.log("avisoPrevio: " + avisoPrevioIndenizado);
    
    let multaRescisoria = calculaMultaRescisoria(salarioDigitado, totalMesesTrabalhados); 
    console.log("multaRescisoria: " + multaRescisoria);
    
    let total = calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional,avisoPrevioIndenizado, multaRescisoria);
    console.log("Total: " + total);

    document.getElementById('resultado').innerHTML += "<br> Total: R$ " + Number(total.toFixed(2)) + "<br>";
}