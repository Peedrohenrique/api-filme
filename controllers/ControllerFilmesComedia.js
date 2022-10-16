//const filmes = require("../src/data/filmes.json");
const ModelFilmesComedia = require("../models/ModelFilmesComedia");

module.exports = {
  async getAll(req, res) {
    try {
      const filmes = await ModelFilmesComedia.getAll();
      return res.status(200).json(filmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async getFindOne(req, res) {
    const { id } = req.params;
    try {
      const filme = await ModelFilmesComedia.getFindOne(id);
      return res.status(200).json(filme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
