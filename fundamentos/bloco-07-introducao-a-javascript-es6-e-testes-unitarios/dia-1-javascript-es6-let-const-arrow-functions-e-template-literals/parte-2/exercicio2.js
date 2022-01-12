// 2-  Crie uma função que receba uma frase e retorne qual a maior palavra.

const highestLengthWord = word => { return word.split(' ').sort( (a, b) => b.length - a.length )[0] };
console.log(highestLengthWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
