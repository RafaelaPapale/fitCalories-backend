const validate = require('validate.js');

const Constraints = require('../application/validation');
const UtilsFunctions = require('../utils/utils');
const Constants = require('../utils/constants');
const ConsumoRepository = require('../port/repository');

const Consumo = {
  async createUser(data) {
    try {
      const validation = validate.validate(data, Constraints.create);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      data.id = UtilsFunctions.generateUuid();
      data.imc = data.peso / (data.altura * data.altura);

      const response = await ConsumoRepository.create(data);
      if (response.code === 11000) {
        const result = Constants.ErrorDuplicate;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async updateUser(data) {
    try {
      const validation = validate.validate(data, Constraints.update);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await ConsumoRepository.update(data);
      if (response === null) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async auth(data) {
    try {
      const validation = validate.validate(data, Constraints.auth);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await ConsumoRepository.auth(data.email, data.senha);

      if (response === null) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      delete response.senha;
      return response;
    } catch (error) {
      return error;
    }
  },
};
module.exports = Consumo;