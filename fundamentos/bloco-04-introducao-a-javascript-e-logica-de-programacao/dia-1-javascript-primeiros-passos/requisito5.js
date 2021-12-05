// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 30;
const b = 30;
const c = 120;
const sum = a + b + c;

if (a < 0 || b < 0 || c < 0) {
  console.log("Erro em ângulo")
} else if (sum === 180) {
  console.log("true");
} else {
  console.log("false");
}