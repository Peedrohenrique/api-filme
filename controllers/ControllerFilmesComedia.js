//const filmes = require("../src/data/filmes.json");
<<<<<<< HEAD
<<<<<<< HEAD:controllers/ControllerDocumentario.js
const modelDocumentario = require("../models/ModelDocumentario");
=======
const ModelFilmesComedia = require("../models/ModelFilmesComedia");
>>>>>>> parent of 4cc6107 (add more movies):controllers/ControllerFilmesComedia.js
=======
const ModelFilmesComedia = require("../models/ModelFilmesComedia");
>>>>>>> parent of 4cc6107 (add more movies)

module.exports = {
  async getAll(req, res) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD:controllers/ControllerDocumentario.js
      const filmes = await modelDocumentario.getAll();
=======
      const filmes = await ModelFilmesComedia.getAll();
>>>>>>> parent of 4cc6107 (add more movies):controllers/ControllerFilmesComedia.js
=======
      const filmes = await ModelFilmesComedia.getAll();
>>>>>>> parent of 4cc6107 (add more movies)
      return res.status(200).json(filmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async getFindOne(req, res) {
    const { id } = req.params;
    try {
<<<<<<< HEAD
<<<<<<< HEAD:controllers/ControllerDocumentario.js
      const filme = await modelDocumentario.getFindOne(id);
=======
      const filme = await ModelFilmesComedia.getFindOne(id);
>>>>>>> parent of 4cc6107 (add more movies):controllers/ControllerFilmesComedia.js
=======
      const filme = await ModelFilmesComedia.getFindOne(id);
>>>>>>> parent of 4cc6107 (add more movies)
      return res.status(200).json(filme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
