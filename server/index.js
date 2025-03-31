//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');

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

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 