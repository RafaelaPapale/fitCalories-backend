const Calorias = require('../../application/calorias_service');
const Utils = require('../../utils/utils');

const route = '/calorias';

module.exports = (app) => {
  app.post(`${route}/create`, async (req, res) => {
    const response = await Calorias.createCalorias(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });

  app.get(`${route}/list`, async (req, res) => {
    const response = await Calorias.getCalorias(req.body);
    res.status(Utils.responseStatus(response.name));
    res.json(response);
  });
};