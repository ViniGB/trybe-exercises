const techList = (array, name) => {
  let arraySort = array.sort();
  let object = [];

  for (let i = 0; i < arraySort.length; i += 1) {
    object.push({
      tech: arraySort[i],
      name: name,
    });
  }
  const message = (array.length === 0) ? 'Vazio!' : object;
  return message;
}

module.exports = techList;