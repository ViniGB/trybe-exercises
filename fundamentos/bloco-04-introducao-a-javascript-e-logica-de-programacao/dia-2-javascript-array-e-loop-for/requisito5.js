// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = 0;

for (let i of numbers) {
  max = Math.max(max, i);
}

console.log(max);