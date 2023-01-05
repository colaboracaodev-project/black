let salario = 4700;
let mesesTrabalhadosNoAno = 10;

function calculaDecimoTerceiroProporcional(salario, mesesTrabalhadosNoAno) {
    let decimoTerceiroProporcional = (salario / 12) * mesesTrabalhadosNoAno;
    return decimoTerceiroProporcional.toFixed(2);
}

console.log(`Décimo Terceiro Proporcional ${calculaDecimoTerceiroProporcional(salario,mesesTrabalhadosNoAno)}`);