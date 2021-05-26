const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

// assets
server.use(express.static('public'));

// Configuração Nunjucks
nunjucks.configure('src/view', {
  express: server,
  noCache: false,
});

// Apresenta page Home
server.get('/', (request, response) => {
  return response.render('home.html');
});

// Apresentação da page Create
server.get('/create', (request, response) => {
  return response.render('create.html');
});

// Apresentação da page Points
server.get('/points', (request, response) => {
  return response.render('points.html');
});

server.listen(3333, () => console.log('# Server start'));
