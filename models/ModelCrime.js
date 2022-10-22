//Conexão com array de Filmes!
const Crime = require("../src/data/Crime.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Crime;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Crime.find((film) => film.id === parseInt(id));
    return filme;
  },
};
