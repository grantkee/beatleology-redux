const mysql = require('mysql');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');

const getQuestion = (req, res) => {
  let sql = 'SELECT * FROM questions WHERE id = ?'
  sql = mysql.format(sql, [req.params.id]);
}