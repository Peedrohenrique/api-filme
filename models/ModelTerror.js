//Conexão com array de Filmes!
const Terror = require("../src/data/Terror.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Terror;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Terror.find((film) => film.id === parseInt(id));
    return filme;
  },
};
