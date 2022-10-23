//Conexão com array de Filmes!
const documentario = require("../src/data/03-documentario.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = documentario;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = documentario.find((film) => film.id === parseInt(id));
    return filme;
  },
};
