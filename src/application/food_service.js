const validate = require('validate.js');

const Constraints = require('./validation/user');
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


      const response = await FoodRepository.create(data);
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

      const response = await FoodRepository.update(data);
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
module.exports = Food;