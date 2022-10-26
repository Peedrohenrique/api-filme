//Conexão com array de Filmes!
const filmesDeTerror = require("../src/data/08-terror.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmesDeTerror;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmesDeTerror.find((film) => film.id === parseInt(id));
    return filme;
  },
};
