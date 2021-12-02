// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function showHighestIndex(array) {

  let maxValue = -Infinity; //used to guarantee max value return

    for (let i of array) {
      maxValue = Math.max(maxValue, i); //returns max value between maxValue and i
    }
  console.log(array.indexOf(maxValue)); //shows index of maxValue in array
}

showHighestIndex([2, 3, 6, 7, 10, 1]);