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

  async update(data) {
    try {
        const update = {
            nome: data.nome,
            idade: data.idade,
            altura: data.altura,
            peso: data.peso,
            senha: data.senha,
        };
        const options = { new: true };
        const filter = { id: data.id, email: data.email };
        const result = await ConsumoModel.findOneAndUpdate(filter, update, options).exec();
        if(result === null) return []
        return result.toObject();
    } catch (e) {
        return e;
    }
},

};

module.exports = ConsumoRepository;