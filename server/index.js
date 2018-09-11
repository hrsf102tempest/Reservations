const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const { addRes } = require('../db/app');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));


const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
