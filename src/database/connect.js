const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'github',
});

conn.query(`
  CREATE TABLE IF NOT EXISTS points (
    point_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    items VARCHAR(255) NOT NULL,
    PRIMARY KEY (point_id)
  )
`);

module.exports = conn;
