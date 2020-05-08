const mysql = require('mysql');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');

const createUser = (req, res) => {
  const {firstName, lastName} = req.body;
  let sql = 'INSERT INTO users (first_name, last_name) VALUES (?, ?)';
  sql = mysql.format(sql, [firstName, lastName]);

  pool.query(sql, (error, results) => {
    if (error) return handleSQLError(res, error);
    return res.json({ newId: results.insertId});
  });
}

const updateUserById = (req, res) => {
  const {firstName, lastName} = req.body;
  let sql = 'UPDATE users SET first_name=?, last_name=? WHERE id=?';
  sql = mysql.format(sql, [firstName, lastName, req.params.id]);
  
  pool.query(sql, (error, results) => {
    if (err) return handleSQLError(res, error);
    return res.status(204).send(`updated user: ${firstName} ${lastName}`);
  });
}

module.exports = {
  createUser,
  updateUserById
};
