//Conexão com array de Filmes!
const acao = require("../src/data/acao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = acao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = acao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
