// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function showLowestIndex(array) {

  let minValue = +Infinity; //used to guarantee min value return

    for (let i of array) {
      minValue = Math.min(minValue, i); //returns min value between minValue and i
    }
  console.log(array.indexOf(minValue)); //shows index of minValue in array
}

showLowestIndex([2, 4, 6, 7, 10, 0, -3]);