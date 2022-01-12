// 4 - Crie um código JavaScript com a seguinte especificação:
// - Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const mainString = 'Tryber x aqui!';
const parameter = 'Vinicius';

const change = (string, par) => {
  let splitString = string.split(' ');
  for (let i = 0; i < splitString.length; i += 1) {
    (splitString[i] === 'x') ? splitString[i] = par : splitString[i];
  }
  return `${splitString.join(' ')}`;
}
console.log(change(mainString, parameter));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const array = ['JavaScript', 'HTML', 'CSS', 'DOM', 'ES6'];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const newMainString = change(mainString, parameter);

const skillsInOrder = (par1, par2) => {
  let sortedArray = par2.sort();
  console.log(`${par1} Minhas cinco principais habilidades são:
  \u2022 ${sortedArray[0]};
  \u2022 ${sortedArray[1]};
  \u2022 ${sortedArray[2]};
  \u2022 ${sortedArray[3]};
  \u2022 ${sortedArray[4]}.`)
}
skillsInOrder(newMainString, array);
