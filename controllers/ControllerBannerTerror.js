const modelBannerTerror = require("../models/modelBannerTerror");

module.exports = {
  async getAll(req, res) {
    try {
      const bannerTerror = await modelBannerTerror.getAll();
      return res.status(200).json(bannerTerror);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
