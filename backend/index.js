import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fullstackraquel',
});

server.get('/produtos', (req, res) => {
  connection.query(
    'SELECT * FROM fullstackraquel.produto pro JOIN fullstackraquel.categoria cat ON pro.id_categoria = cat.id',
    (error, result) => {
      res.json(result ? result : error);
    }
  );
});

server.get('/mensagens', (req, res) => {
  connection.query(
    'SELECT * FROM comentarios order by id desc',
    (error, result) => {
      res.json(result ? result : error);
    }
  );
});

server.post('/mensagens', (req, res) => {
  const { nome, msg } = req.body;
  connection.query(
    `INSERT INTO comentarios (nome, msg) values ('${nome}', '${msg}')`,
    (error, result) => {
      error && res.json(error);
      result && res.status(201).json(result);
    }
  );
});

server.listen(3001);
