//Conexão com array de Filmes!
<<<<<<< HEAD:models/ModelAcao.js
const acao = require("../src/data/acao.json");
=======
const filmesComedia = require("../src/data/filmesComedia.json");
>>>>>>> parent of 4cc6107 (add more movies):models/ModelFilmesComedia.js

module.exports = {
  //Pegar Todos os filmes do Array!
  getAll() {
<<<<<<< HEAD:models/ModelAcao.js
    const film = acao;
=======
    const film = filmesComedia;
>>>>>>> parent of 4cc6107 (add more movies):models/ModelFilmesComedia.js
    return film;
  },

  //Pegar apenas um filme do Array!
  getFindOne(id) {
<<<<<<< HEAD:models/ModelAcao.js
    const filme = acao.find((film) => film.id === parseInt(id));
=======
    const filme = filmesComedia.find((film) => film.id === id);
>>>>>>> parent of 4cc6107 (add more movies):models/ModelFilmesComedia.js
    return filme;
  },
};
