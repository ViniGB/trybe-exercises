// Depois, faça uma pirâmide com n asteriscos de base:

const n = 5;
let jumpLine = '';

if (n > 1) {
  for (let i = 1; i <= n; i += 1) {
    jumpLine = ' ';
    for (let j = 0; j < n - i; j += 1) {
      jumpLine += ' ';
    }
    for (let y = 0; y < 2 * i - n; y += 1) {
      jumpLine += '*';
    }
    console.log(jumpLine);
  }
}