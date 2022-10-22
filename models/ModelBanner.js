//Conexão com array de Filmes!
const Banner = require("../src/data/banner.json");

module.exports = {
  //Pegar Todos os Banner do Array!
  getAll() {
    const film = Banner;
    return film;
  },
};
