//Conexão com array de Filmes!
const filmesAcao = require("../src/data/acao.json");
const filmes = require("../src/data/filmes.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmes;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmes.find((film) => film.id === parseInt(id));
    return filme;
  },

  //Pegar Todos os filmes de Ação do Array!
  getAllAcao() {
    const film = filmesAcao;
    return film;
  },

  //Pegar apenas um filme de Ação do Array!
  getFindOneAcao(id) {
    const filme = filmesAcao.find((film) => film.id === parseInt(id));
    return filme;
  },
};
