const express = require('express');
const app = express();
const mysql =  require('mysql');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Senha123!',
  database: 'crud_locais',
});

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
})

app.post('/register', (req, res) => {
  const { img, titulo, descricao, cidade } = req.body;

  let SQL = "INSERT INTO locais (img, titulo, descricao, cidade) VALUES (?,?,?,?)";
  db.query(SQL, [img, titulo, descricao, cidade], (err, result) => {
    console.log(err);
  })
})

app.get(
  '/getCards', (req, res) => {
    let SQL = "SELECT * FROM locais";
    db.query(SQL, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    })
  }
)