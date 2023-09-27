const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'jdtest',
  password: 'juan1234',
  database: 'Platesuro',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/restaurants', (req, res) => {
  const query = 'SELECT * FROM Restaurant where logo is not null';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
      console.log(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
