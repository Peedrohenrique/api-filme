//Conexão com array de Filmes!
const banner = require("../src/data/banner.json");

module.exports = {
  //Pegar Todos os Banner do Array!
  getAll() {
    const film = banner;
    return film;
  },
};
