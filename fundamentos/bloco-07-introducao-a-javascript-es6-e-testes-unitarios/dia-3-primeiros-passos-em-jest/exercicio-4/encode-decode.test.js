const encode = string => {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      newString += '1';
    } else if (string[index] === 'e') {
      newString += '2';
    } else if (string[index] === 'i') {
      newString += '3';
    } else if (string[index] === 'o') {
      newString += '4';
    } else if (string[index] === 'u') {
      newString += '5';
    } else {
      newString += string[index];
    }
  }
  return newString;
}

const decode = string => {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      newString += 'a';
    } else if (string[index] === '2') {
      newString += 'e';
    } else if (string[index] === '3') {
      newString += 'i';
    } else if (string[index] === '4') {
      newString += 'o';
    } else if (string[index] === '5') {
      newString += 'u';
    } else {
      newString += string[index];
    }
  }
  return newString;
}

describe('4 - Para as funções encode e decode crie os seguintes testes em Jest:', () => {
  it('1. Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('4. Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('Quero que esse teste passe')).toBe('Q52r4 q52 2ss2 t2st2 p1ss2');
    expect(decode('Q52r4 q52 2ss2 t2st2 p1ss2')).toBe('Quero que esse teste passe');
  });
  it('5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('12345')).toHaveLength(5);
    expect(decode('Q52r4 q52 2ss2 t2st2 p1ss2')).toHaveLength(26);
  });
});