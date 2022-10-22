//Conexão com array de Filmes!
const Animacao = require("../src/data/Animacao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Animacao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Animacao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
