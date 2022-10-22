//Conexão com array de Filmes!
const Comedia = require("../src/data/Comedia.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Comedia;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Comedia.find((film) => film.id === parseInt(id));
    return filme;
  },
};
