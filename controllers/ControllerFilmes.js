//const filmes = require("../src/data/filmes.json");
<<<<<<< HEAD
<<<<<<< HEAD
const modelFilmes = require("../models/ModelFilmes");
=======
const modelfilmes = require("../models/ModelFilmes");
>>>>>>> parent of 4cc6107 (add more movies)
=======
const modelfilmes = require("../models/ModelFilmes");
>>>>>>> parent of 4cc6107 (add more movies)

module.exports = {
  async getAll(req, res) {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const filmes = await modelFilmes.getAll();
=======
      const filmes = await modelfilmes.getAll();
>>>>>>> parent of 4cc6107 (add more movies)
=======
      const filmes = await modelfilmes.getAll();
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
<<<<<<< HEAD
      const filme = await modelFilmes.getFindOne(id);
=======
      const filme = await modelfilmes.getFindOne(id);
>>>>>>> parent of 4cc6107 (add more movies)
=======
      const filme = await modelfilmes.getFindOne(id);
>>>>>>> parent of 4cc6107 (add more movies)
      return res.status(200).json(filme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
