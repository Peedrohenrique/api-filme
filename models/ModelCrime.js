//Conexão com array de Filmes!
const crime = require("../src/data/crime.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = crime;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = crime.find((film) => film.id === parseInt(id));
    return filme;
  },
};
