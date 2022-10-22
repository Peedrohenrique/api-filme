//Conexão com array de Filmes!
const terror = require("../src/data/terror.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = terror;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = terror.find((film) => film.id === parseInt(id));
    return filme;
  },
};
