// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = Infinity;

for (let i of numbers) {
  max = Math.min(max, i);
}

console.log(max);