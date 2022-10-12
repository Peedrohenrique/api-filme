//Conexão com array de Filmes!
const filmes = require("../src/data/filmes.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmes;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmes.find((film) => film.id === id);
    return filme;
  },
};
