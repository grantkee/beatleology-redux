const mysql = require('mysql');
const pool = require('../sql/connection');
const {handleSQLError} = require('../sql/error');

const getQuestion = (req, res) => {
  let sql = 'SELECT q.question, a.answer_type, a.content FROM answers a INNER JOIN questions q ON q.id = a.question_id WHERE q.id = ?'
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getQuestion
};