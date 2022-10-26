//Conexão com array de Filmes!
const filmesAnimacao = require("../src/data/05-animacao.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmesAnimacao;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmesAnimacao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
