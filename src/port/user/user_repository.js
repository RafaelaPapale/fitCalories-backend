const { UserModel } = require('../../infraestructure/database');

const UserRepository = {
  async create(data) {
    try {
      const model = new UserModel(data);
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
      const filter = { email: data.email };
      const result = await UserModel.findOneAndUpdate(filter, update, options).exec();
      if (result === null) return []
      return result.toObject();
    } catch (e) {
      return e;
    }
  },

  async auth(email, senha) {
    try {
      const response = await UserModel.findOne({ email, senha });
      if (response === null) return response;
      return response.toObject();
    } catch (e) {
      return e;
    }
  },

};

module.exports = UserRepository;