// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peça = 'REI';
let lowerPeça = peça.toLowerCase();

switch (lowerPeça) {
  case 'peão':
    console.log('Movimenta-se apenas uma casa para frente, e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo');
    break;

  case 'rei':
    console.log('Move-se em todas as direções, somente uma casa de cada vez');
    break;
  
  case 'rainha':
    console.log('Move-se ao longo da horizontal, vertical e diagonais, mas não pode pular outras peças');
    break;

  case 'bispo':
    console.log('Move-se ao longo da diagonal. Não pode pular outras peças');
    break;

  case 'cavalo':
    console.log('Movimenta-se em forma de L, com duas casas no sentido horizontal, e uma na vertical, ou vice-versa');
    break;

  case 'torre':
    console.log('Movimenta-se pela vertical ou horizontal. Não pode pular outras peças');
    break;

  default:
    console.log('Peça inválida');
    break;
}