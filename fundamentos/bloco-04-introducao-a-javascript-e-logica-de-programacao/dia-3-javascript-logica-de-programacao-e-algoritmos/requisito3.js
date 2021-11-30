// 3- Agora inverta o lado do triângulo.

const n = 5;
let jumpLine = '';

if (n > 0) {
  for (let i = 1; i <= n; i += 1) {
    jumpLine = '';
    for (let j = 0; j < n - i; j += 1) {
      jumpLine += ' ';
    }
    for (let y = 0; y < i; y += 1) {
      jumpLine += '*';
    }
    console.log(jumpLine);
  }
}