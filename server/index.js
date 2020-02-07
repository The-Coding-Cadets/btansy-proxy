const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));