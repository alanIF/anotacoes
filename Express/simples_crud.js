const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

let data = [];

// create
app.post('/data', (req, res) => {
  const item = req.body;
  data.push(item);
  res.send('Item created');
});

// read
app.get('/data', (req, res) => {
  res.json(data);
});

// update
app.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const item = req.body;
  data[id] = item;
  res.send('Item updated');
});

// delete
app.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  data.splice(id, 1);
  res.send('Item deleted');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});