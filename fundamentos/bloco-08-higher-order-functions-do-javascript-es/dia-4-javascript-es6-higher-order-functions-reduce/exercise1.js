const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const flattenedMatrix = arrays.reduce((acc, curr) => acc.concat(curr),[]);
  return flattenedMatrix;
}

console.log(flatten());
