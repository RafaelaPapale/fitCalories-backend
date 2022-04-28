const Consumo = require('../application/consumo_service');
const Utils = require('../utils/utils');

const route = '/consumo';

module.exports = (app) => {
  app.post(`${route}/create`, async (req, res) => {
    const response = await Consumo.createUser(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });
};