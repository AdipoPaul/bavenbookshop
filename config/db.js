const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '34.42.56.189',
  user: 'root',
  password: 'root',
  database: 'bookshop',
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
