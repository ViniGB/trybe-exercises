// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const n = 5;
let jumpLine = '';

if (n > 0) {
  for (let i = 1; i <= n; i += 1) {
    jumpLine += '*';
    console.log(jumpLine);
  }
}