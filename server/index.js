//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const { handleFetch } = require('./handleFetch.js');

dotenv.config();

const { API_KEY } = process.env;

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

app.get('/api/gifs', async (req, res) => {
  const { limit } = req.query;

  if (limit && !limit > 0) {
    return res.status(400).json({ error: 'Invalid limit' });
  }

  const [data, error] = await handleFetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${
      limit || 3
    }`
  );

  if (error) {
    return res.status(503).json(error);
  }

  res.status(200).json(data);
});

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
