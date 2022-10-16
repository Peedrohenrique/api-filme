//Conexão com array de Filmes!
const filmesComedia = require("../src/data/filmesComedia.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmesComedia;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmesComedia.find((film) => film.id === id);
    return filme;
  },
};
