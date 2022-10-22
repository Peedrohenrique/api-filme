//Conexão com array de Filmes!
const Documentario = require("../src/data/documentario.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Documentario;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Documentario.find((film) => film.id === parseInt(id));
    return filme;
  },
};
