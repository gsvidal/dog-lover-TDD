const express = require('express');
const { pets } = require('./data');
const cors = require('cors');

const app = express();
const port = '4066';

app.use(cors());

app.get('/pets', async (req, res) => {
  return res.json(pets);
});

app.listen(port, () => {
  console.log(`listening to port ${port} You can now view pet-lover API
  in the browser.
  
  Local:
  http://localhost:${port}/pets`);
});
