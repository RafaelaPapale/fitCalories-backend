const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../port/user/user_api')(app);
require('../port/food/food_api')(app);

module.exports = app;