const validate = require('validate.js');

const Constraints = require('./validation/food');
const UtilsFunctions = require('../utils/utils');
const Constants = require('../utils/constants');
const FoodRepository = require('../port/food/food_repository');

const Food = {
  async createFood(data) {
    try {
      const validation = validate.validate(data, Constraints.create);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      data.id = UtilsFunctions.generateUuid();

      const response = await FoodRepository.createFood(data);
      if (response.code === 11000) {
        const result = Constants.ErrorDuplicate;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async updateFood(data) {
    try {
      const validation = validate.validate(data, Constraints.update);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await FoodRepository.updateFood(data);
      if (response === []) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async listFood(data) {
    try {
      const validation = validate.validate(data, Constraints.list);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await FoodRepository.listFood(data);
      if (response === []) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },

  async deleteFood(data) {
    try {
      const validation = validate.validate(data, Constraints.delete);
      if (validation) {
        const response = Constants.ErrorValidation;
        response.message = validation;
        return response;
      }

      const response = await FoodRepository.deleteFood(data);
      if (response === []) {
        const result = Constants.ErrorNotFound;
        return result;
      }
      return response;
    } catch (error) {
      return error;
    }
  },
};
module.exports = Food;