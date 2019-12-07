const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Implement properly in real app

app.post('/api/cakes', (req, res) => {
  const newCake = Object.assign({
    id: uuid()
  }, req.body.cake);
  
  res.send(newCake);
});

app.put('/api/cakes:id', (req, res) => {
  res.send('updated cake');
});

app.delete('/api:id', (req, res) => {
  res.send('delete cakes');
});

app.listen(port, () => console.log(`Listening on port ${port}`));