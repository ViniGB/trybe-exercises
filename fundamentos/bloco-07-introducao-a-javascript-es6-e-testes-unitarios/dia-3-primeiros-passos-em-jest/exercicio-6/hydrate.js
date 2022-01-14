const hydrate = string => {
  let numberString = string.replace(/[^1-9]/g, ''); 
  let count = 0;

  for (let i = 0; i < numberString.length; i += 1) {
    count += +numberString[i];
  }
  const message = (count === 1) ? `${count} copo de água` : `${count} copos de água`;
  return message;
}

console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));

module.exports = hydrate;
