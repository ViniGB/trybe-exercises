// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const notaPercentual = -10;

if (notaPercentual < 0 || notaPercentual > 100) {
  console.log('Nota inválida');
} else if (notaPercentual >= 90) {
  console.log('A'); 
} else if (notaPercentual >= 80 && notaPercentual < 90) {
  console.log('B');
} else if (notaPercentual >= 70 && notaPercentual < 80) {
  console.log('C');
} else if (notaPercentual >= 60 && notaPercentual < 70) {
  console.log('D');
} else if (notaPercentual >= 50 && notaPercentual < 60) {
  console.log('E');
} else {
  console.log('F');
}