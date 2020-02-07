const express = require('express');
const app = express();
const port = 3000;
const database = require('../database/index.js');
var cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/img', (req, res) => {
  database.fetch(Number(req.query.id), (err, data)=>{
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));