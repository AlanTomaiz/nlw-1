const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('./database/connect');
const server = express();

server.use(express.json());

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

// Cadastro de pontos
server.post('/create', (request, response) => {
  const data = Object.values(request.body).map(item => item);

  mysql.query(`
  INSERT INTO points (items, name, address, number, state, city) VALUES (?, ?, ?, ?, ?, ?)
  `, data, (error) => {
    if (error) {
      console.log(error);

      return response.send({ status: 'error', message: 'Deu ruim.' });
    }

    return response.send({ status: 'success' });
  });
});

// Apresentação da page Points
server.get('/points', (request, response) => {
  return response.render('points.html');
});

server.listen(3333, () => console.log('# Server start'));
