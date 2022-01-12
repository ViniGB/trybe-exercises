// 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1)
    if (array[i] < array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return array;
}
console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
oddsAndEvens.sort( (a, b) => a - b );
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
