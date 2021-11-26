// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

const valorCusto = 400;
const valorVenda = 1000;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Valor inválido');
} else {
  lucroTotal = lucro * 1000;
  console.log(lucroTotal);
}