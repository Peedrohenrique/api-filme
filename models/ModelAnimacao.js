//Conexão com array de Filmes!
const animacao = require("../src/data/animacao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = animacao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = animacao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
