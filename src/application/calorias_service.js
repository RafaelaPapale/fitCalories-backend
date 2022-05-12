const validate = require('validate.js');

const Constraints = require('./validation/calorias');
const UtilsFunctions = require('../utils/utils');
const Constants = require('../utils/constants');
const CaloriasRepository = require('../port/calorias/calorias_repository');

const Calorias = {
  async createCalorias(data) {
    try {
      const validation = validate.validate(data, Constraints.calorias);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      data.totalConsumido = 0;

      const response = await CaloriasRepository.create(data);
      if (response.code === 11000) {
        const result = Constants.ErrorDuplicate;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async updateCaloriasSoma(data, userId, caloria){
    try {
      const result = await CaloriasRepository.getCalorias(data, userId);

      if (result === null) {
        return Constants.ErrorNotFound;
      }

      const newData = {
        data, 
        userId,
      };
      newData.totalConsumido = result.totalConsumido + caloria;

      const response = await CaloriasRepository.update(newData);
      if (response.length === 0) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch(e){
      return e;
    }
  },

  async updateCaloriasSubtrai(data, userId, caloria){
    try {
      const result = await CaloriasRepository.getCalorias(data, userId);

      if (result === null) {
        return Constants.ErrorNotFound;
      }

      const newData = {
        data, 
        userId,
      };
      newData.totalConsumido = result.totalConsumido - caloria;

      const response = await CaloriasRepository.update(newData);
      if (response.length === 0) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch(e){
      return e;
    }
  },

  async getCalorias(data){
    try {
      const validation = validate.validate(data, Constraints.list);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await CaloriasRepository.getCalorias(data.data, data.userId);
      if (response.length === 0) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch(e){
      return e;
    }
  },
};
module.exports = Calorias;