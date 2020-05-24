require('dotenv').config();

const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');
const accessTokenSecret = process.env.JWT_SECRET;

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
        console.log('ROWS[0] = ', rows[0]);
        const data = {
          ...rows[0],
          iat: Math.floor(Date.now() / 1000) - 30,
          exp: Math.floor(Date.now() / 1000) + (60 * 60)
        };
        data.password = 'REDACTED';
        console.log('data?', data);
    
        const token = jwt.sign(data, accessTokenSecret, (err, user) => {
          if (!err){
            console.log('user: ', user);
          } else {
            return res.status(403).send('Incorrect email or password');
          }
        });
        res.json({
          message: 'login successful - proud of you',
          token
        });
      });
  });
};

module.exports = {
  signup,
  login
};
