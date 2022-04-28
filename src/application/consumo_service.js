
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

};
module.exports = Consumo;