//Conexão com array de Filmes!
const bannerTerror = require("../src/data/bannerTerror.json");

module.exports = {
  //Pegar Todos os Banner do Array!
  getAll() {
    const film = bannerTerror;
    return film;
  },
};
