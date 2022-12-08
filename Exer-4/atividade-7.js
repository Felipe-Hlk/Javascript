var custodeFabrica = parseFloat(prompt("Digite o valor do fabrica do veiculo desejado:"));
var custoFinal = ((custodeFabrica * (28/100)) + (custodeFabrica * (45/100)) + custodeFabrica);
console.log("O custo de seu Veiculo após o cauculo de custos de distribuidor e de impostos é de: " + custoFinal);