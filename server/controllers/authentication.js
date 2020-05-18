const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');

//use bcrypt
const saltRounds = 10;

const signup = (req, res) => {
  const {firstName, lastName, username, email, password} = req.body;
  console.log('body', req.body);
  let sql = "BEGIN; INSERT INTO users (first_name, last_name) VALUES (?, ?); INSERT INTO usersCredentials (id, username, email, password) VALUES (LAST_INSERT_ID(), ?, ?, ?); COMMIT;"

  bcrypt.hash(password, saltRounds, (err, hash) => {
    sql = mysql.format(sql, [firstName, lastName, username, email, hash]);

    pool.query(sql, (err, results) => {
      if (err){
        if (err.code === 'ER_DUP_ENTRY') return res.status(400).send('Sorry, that username is unavailable');
        return handleSQLError(res, err);
      }
      return res.send('Signup Successful!');
    });
  });
};

const login = (req, res) => {
  const {email, password} = req.body;
  let sql = 'SELECT * FROM usersCredentials WHERE email = ?';
  sql = mysql.format(sql, [email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(400).send('Incorrect email or password');

    const hash = rows[0].password;
    bcrypt.compare(password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Incorrect email or password');
        const data = {...rows[0]};
        data.password = 'REDACTED';
    
        const token  = jwt.sign(data, 'secret');
        res.json({
          message: 'login successful',
          token
        });
      });
  });
};

module.exports = {
  signup,
  login
};
