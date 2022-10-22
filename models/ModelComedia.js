//Conexão com array de Filmes!
const comedia = require("../src/data/comedia.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = comedia;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = comedia.find((film) => film.id === parseInt(id));
    return filme;
  },
};
