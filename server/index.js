const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/app');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('/businesses/:business_id', (req, res) => {
  const busId = req.params.business_id;
  db.getData(busId, (results) => {
    console.log('getData : Got the goods!');
    res.status(200).send(results);
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
