//Conexão com array de Filmes!
const Romance = require("../src/data/Romance.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = Romance;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = Romance.find((film) => film.id === parseInt(id));
    return filme;
  },
};
