// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Não é o que pediu, fiz de outro modo.

const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

const returnResult = (number, action) => {
  if (number === action) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(returnResult(5, getRandomNumber()));
