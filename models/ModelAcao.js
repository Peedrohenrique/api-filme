//Conexão com array de Filmes!
const filmesDeAcao = require("../src/data/01-acao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmesDeAcao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmesDeAcao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
