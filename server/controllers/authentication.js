require('dotenv').config();

const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');
const accessTokenSecret = process.env.JWT_SECRET;
// const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
// const refreshTokens = [];

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
  console.log('Req body', req.body);
  let sql = 'SELECT * FROM usersCredentials WHERE email = ?';
  sql = mysql.format(sql, [email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(400).send('Incorrect email or password');

    const hash = rows[0].password;
    bcrypt.compare(password, hash)
    .then(result => {
      if (!result) return res.status(400).send('Incorrect email or password');
      const data = {
        ...rows[0],
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      };
      data.password = 'REDACTED';
  
      const accessToken = jwt.sign(data, accessTokenSecret);
      // const refreshToken = jwt.sign(data, accessTokenSecret);

      // refreshTokens.push(refreshToken);

      res.json({
        message: 'login successful - proud of you',
        data: data,
        accessToken,
        // refreshToken,
      });
    });
  });
};

module.exports = {
  signup,
  login
};
