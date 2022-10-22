//const filmes = require("../src/data/filmes.json");
const modelfilmes = require("../models/ModelFilmes");

module.exports = {
  async getAll(req, res) {
    try {
      const filmes = await modelfilmes.getAll();
      return res.status(200).json(filmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async getFindOne(req, res) {
    const { id } = req.params;
    try {
      const filme = await modelFilmes.getFindOne(id);
      return res.status(200).json(filme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
