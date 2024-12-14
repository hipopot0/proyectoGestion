const express = require('express');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar con MongoDB:', err));

app.get('/api/products', (req, res) => {
  mysqlConnection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener productos de MySQL');
      return;
    }
    res.json(results);
  });
});

app.get('/api/comments', (req, res) => {
  const Comment = mongoose.model('Comment', { text: String, rating: Number });

  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(500).send('Error al obtener comentarios de MongoDB'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
