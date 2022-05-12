const { CaloriesModel } = require('../../infraestructure/database');

const CaloriasRepository = {
  async create(data) {
    try {
      const model = new CaloriesModel(data);
      const response = await model.save();
      return response.toObject();
    } catch (e) {
      return e;
    }
  },

  async getCalorias(data, userId) {
    try {
      const response = await CaloriesModel.findOne({ data, userId });
      if (response === null) return response;
      return response.toObject();
    } catch (e) {
      return e;
    }
  },

  async update(data) {
    try {
      const update = {
        totalConsumido: data.totalConsumido,
      };
      const options = { new: true };
      const filter = { userId: data.userId, data: data.data };
      const result = await CaloriesModel.findOneAndUpdate(filter, update, options).exec();
      if (result === null) return []
      return result.toObject();
    } catch (e) {
      return e;
    }
  },
};

module.exports = CaloriasRepository;