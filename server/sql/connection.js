require ('dotenv').config();

const mysql = require('mysql');

class Connection {
  constructor(){
    if (!this.pool){
      console.log('making connection...');
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.SQL_HOST,
        user: process.env.SQL_JUNKIE,
        password: process.env.SQL_SECRET,
        database: process.env.SQL_DB,
        port: process.env.SQL_PORT,
        multipleStatements: process.env.SQL_MS,
      });
      return this.pool;
    }
    return this.pool;
  };
};

const instance = new Connection();

module.exports = instance;
