// 1 - Crie uma função que receba um número e retorne seu fatorial.
// - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const factorial = number => {
  let aux = 1;
  if (number === 0) {
    return 1;
  } else {
    for (let i = number; i >= 1; i -= 1) {
      aux = aux * i;
    }
    return aux;
  }
}
console.log(factorial(6));

// - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial2 = number => { return (number !== 1) ? number * factorial2(number - 1) : 1 };
console.log(factorial2(6));
