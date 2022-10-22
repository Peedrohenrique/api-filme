//Conexão com array de Filmes!
const Acao = require("../src/data/acao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Acao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Acao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
