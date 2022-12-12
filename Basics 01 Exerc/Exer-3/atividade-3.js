var usuarioDolar = parseFloat(prompt("Digite o valor em dolares que você deseja converter:"));
var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar atual:"));
var dolarConvertido = usuarioDolar * cotacaoDolar;
console.log("O valor em reais segundo a contação atual é de:" + dolarConvertido.toFixed(2));