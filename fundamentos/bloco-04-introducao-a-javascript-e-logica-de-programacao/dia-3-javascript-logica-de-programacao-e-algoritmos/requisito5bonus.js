// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

const n = 7;
let jumpLine = '';

if (n >= 1) {
  // loop to create N x rows 
  for (let i = 1; i <= n; i += 1) {
    jumpLine = ' ';
    // loop to print N x spaces with (n - i) as reference
    for (let j = 0; j < n - i; j += 1) {
      jumpLine += ' ';
    }
    // loop to print all * in first and last rows
    for (let y = 0; y < 2 * i - n; y += 1) {
      if (i === 1 || i === n) {
        jumpLine += '*';
    } else { // prints * for first and last elements of current row, and space in between
      if (y === 0 || y === 2 * i - (n + 1)) {
        jumpLine += '*';
      } else {
        jumpLine += ' ';
      }
    }
  }
    console.log(jumpLine);
  }
}