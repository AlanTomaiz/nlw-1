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
  const data = request.body;
  const insertData = [data.photo, data.items, data.name, data.address, data.number, data.state, data.city];

  mysql.query(`
  INSERT INTO points (photo, items, name, address, number, state, city) VALUES (?, ?, ?, ?, ?, ?, ?)
  `, insertData, (error) => {
    if (error) {
      return response.status(400).send({ status: 'error', message: 'Deu ruim.' });
    }

    return response.send({ status: 'success' });
  });
});

// Apresentação da page Points
server.get('/points', (request, response) => {
  const { search } = request.query;

  mysql.query(`SELECT * FROM points WHERE city LIKE '%${search}%' OR state LIKE '%${search}%'`, (error, data) => {
    if (error) {
      return response.render('points.html', { points: [] });
    }

    return response.render('points.html', { points: data });
  });
});

server.listen(3333, () => console.log('# Server start'));
