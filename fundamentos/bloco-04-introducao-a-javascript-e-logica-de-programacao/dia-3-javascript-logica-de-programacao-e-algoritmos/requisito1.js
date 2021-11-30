// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

const n = 5;
let jumpLine = '';

if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    jumpLine = ' ';
    for (let j = 0; j < n; j += 1) {
      jumpLine += '*';
    }
    console.log(jumpLine);
  }
}
