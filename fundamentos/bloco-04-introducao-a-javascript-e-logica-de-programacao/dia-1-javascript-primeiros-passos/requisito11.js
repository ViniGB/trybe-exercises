// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 10000;
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let aliquotaMaxINSS;
let INSS;
let IR;
let aliquotaIR;
let parcelaIR;
let parcelaDeduzida;

if (salarioBruto < 0) {
  console.log('Salário inválido');
} else if (salarioBruto <= 1556.94) {
  aliquotaINSS = 0.08;
  INSS = salarioBruto * aliquotaINSS;
  salarioBase = salarioBruto - INSS;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  aliquotaINSS = 0.09;
  INSS = salarioBruto * aliquotaINSS;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  aliquotaINSS = 0.11;
  INSS = salarioBruto * aliquotaINSS;
} else if (salarioBruto > 5189.82) {
  aliquotaMaxINSS = 570.88
  salarioBase = salarioBruto - aliquotaMaxINSS;
}

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
  parcelaIR = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  aliquotaIR = 0.075;
  parcelaIR = 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  aliquotaIR = 0.15;
  parcelaIR = 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  aliquotaIR = 0.225;
  parcelaIR = 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = 0.275;
  parcelaIR = 869.36;
}

IR = salarioBase * aliquotaIR;
parcelaDeduzida = IR - parcelaIR;
salarioLiquido = salarioBase - parcelaDeduzida;
console.log('Resultado: R$ ' + salarioLiquido.toFixed(2));
