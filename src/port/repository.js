const { ConsumoModel } = require('../infraestructure/database');

const ConsumoRepository = {
  async create(data) {
    try {
      const model = new ConsumoModel(data);
      const response = await model.save();
      return response.toObject();
    } catch (e) {
      return e;
    }
  },
};

module.exports = ConsumoRepository;