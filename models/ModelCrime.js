//Conexão com array de Filmes!
const filmesDeCrime = require("../src/data/07-crime.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = filmesDeCrime;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = filmesDeCrime.find((film) => film.id === parseInt(id));
    return filme;
  },
};
