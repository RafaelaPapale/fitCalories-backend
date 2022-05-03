const { FoodModel } = require('../../infraestructure/database');

const FoodRepository = {
  async createFood(data) {
    try {
      const model = new FoodModel(data);
      const response = await model.save();
      return response.toObject();
    } catch (e) {
      return e;
    }
  },

  async updateFood(data) {
    try {
      const update = {
        nome: data.nome,
        caloria: data.caloria,
        quantidade: data.quantidade,

      };
      const options = { new: true };
      const filter = { id: data.id };
      const result = await FoodModel.findOneAndUpdate(filter, update, options).exec();
      if (result === null) return []
      return result.toObject();
    } catch (e) {
      return e;
    }
  },


};

module.exports = FoodRepository;