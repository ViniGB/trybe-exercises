// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const split = names.reduce((acc, curr) => acc + curr).split('');
  const upperCaseA = split.reduce((acc, curr) => {
    if (curr === 'A') {
      return acc + curr;
    }
    return acc;
  }, '');

  const lowerCaseA = split.reduce((acc, curr) => {
    if (curr === 'a') {
      return acc + curr;
    }
    return acc;
  }, '');

  return `A count: ${upperCaseA.length}, a count: ${lowerCaseA.length}`;
}

console.log(containsA());