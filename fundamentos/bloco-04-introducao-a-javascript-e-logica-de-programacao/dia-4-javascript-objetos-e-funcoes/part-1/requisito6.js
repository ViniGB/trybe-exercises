// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let fullname = `${leitor.nome} ${leitor.sobrenome}`;
let getLivrosFavoritos = leitor.livrosFavoritos[0];
console.log(`O livro favorito de ${fullname} se chama '${getLivrosFavoritos.titulo}'`);