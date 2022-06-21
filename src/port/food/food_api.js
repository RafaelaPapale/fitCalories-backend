const Consumo = require('../../application/food_service');
const Utils = require('../../utils/utils');

const route = '/food';

module.exports = (app) => {
  app.post(`${route}/create`, async (req, res) => {
    console.log('res', req.body)
    const response = await Consumo.createFood(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.put(`${route}/update`, async (req, res) => {
    const response = await Consumo.updateFood(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.patch(`${route}/list`, async (req, res) => {
    const response = await Consumo.listFood(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.post(`${route}/delete`, async (req, res) => {
    const response = await Consumo.deleteFood(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });
};