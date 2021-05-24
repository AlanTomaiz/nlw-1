const express = require('express');
const server = express();

// assets
server.use(express.static('public'));

// Apresenta page Home
server.get('/', (request, response) => {
  response.sendFile(`${__dirname}/view/home.html`);
});

// Apresentação da page Create
server.get('/create', (request, response) => {
  response.sendFile(`${__dirname}/view/create.html`);
});

// Apresentação da page Points
server.get('/points', (request, response) => {
  response.sendFile(`${__dirname}/view/points.html`);
});

server.listen(3333, () => console.log('# Server start'));
