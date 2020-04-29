const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/jokes', require('./crud')(models.Jokes));

app.listen(port, () => console.log(`Listening on port ${port}`));