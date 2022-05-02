const Consumo = require('../application/consumo_service');
const Utils = require('../utils/utils');

const route = '/consumo';

module.exports = (app) => {
  app.post(`${route}/create`, async (req, res) => {
    const response = await Consumo.createUser(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.put(`${route}/update`, async (req, res) => {
    const response = await Consumo.updateUser(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.post(`${route}/login`, async (req, res) => {
    const response = await Consumo.login(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
});
};