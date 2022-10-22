//Conexão com array de Filmes!
const Filmes = require("../src/data/filmes.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Filmes;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Filmes.find((film) => film.id === parseInt(id));
    return filme;
  },
};
