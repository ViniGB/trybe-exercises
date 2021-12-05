// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

const n = 17;
let aux = 0;

if (n > 0) {
  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) {
      aux += 1;
    }
  }
  if (aux === 2) {
    console.log(n + ' is prime');
  } else {
    console.log(n + ' is not prime');
  }
} else {
  console.log('Choose another number');
}