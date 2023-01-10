// criar função calculaSaldoSalario() 
// recebe como parametro salario, dias trabahados no ultimo mes
// formula: saldoSalario = (salario/30) *  dias trabahados no ultimo mes; 
// deve retornar o resultado do calculo

let salario = 3000;
let diasMes = 10;

function calculaSaldoSalario(salario, diasMes) {
    let salarioProporcional = (salario/30) * diasMes; 
    return salarioProporcional;
}

console.log(calculaSaldoSalario(salario,diasMes));