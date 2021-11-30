// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

const n = 5;
let jumpLine = '';

for (let i = 0; i < n; i += 1) {
  jumpLine += '*';
  console.log(jumpLine);
}