const validate = require('validate.js');

const Constraints = require('./validation/user');
const UtilsFunctions = require('../utils/utils');
const Constants = require('../utils/constants');
const UserRepository = require('../port/user/user_repository');

const User = {
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

      const response = await UserRepository.create(data);
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

      data.imc = data.peso / (data.altura * data.altura);

      const response = await UserRepository.update(data);
      if (response === []) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async login(data) {
    try {
      const validation = validate.validate(data, Constraints.login);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await UserRepository.auth(data.email, data.senha);
      if (response === null) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },
};
module.exports = User;