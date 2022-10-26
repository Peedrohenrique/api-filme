//Conexão com array de Filmes!
const romance = require("../src/data/04-romance.json");

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
    const film = romance;
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
    const filme = romance.find((film) => film.id === parseInt(id));
    return filme;
  },
};
