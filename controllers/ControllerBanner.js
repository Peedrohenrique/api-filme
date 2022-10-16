//const filmes = require("../src/data/filmes.json");
const ModelBanner = require("../models/ModelBanner");

module.exports = {
  async getAll(req, res) {
    try {
      const banner = await ModelBanner.getAll();
      return res.status(200).json(banner);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
