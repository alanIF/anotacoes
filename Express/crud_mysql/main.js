const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const users = require('./user');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'crud_sample'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server started on port 3000');
});