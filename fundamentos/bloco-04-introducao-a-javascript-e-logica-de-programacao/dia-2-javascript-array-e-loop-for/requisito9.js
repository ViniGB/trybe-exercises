// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array25 = [];
let div = [];

for (let i = 1; i <= 25; i += 1) {
  array25.push(i);
}

for (let y = 0; y < array25.length; y += 1) {
  div.push(array25[y] / 2);
}

console.log(div);
