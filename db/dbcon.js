let mysql = require('mysql');
let config = require('../db/dbinfo').local;

module.exports = () => {
  return {
    init: () => {
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
      })
    },

    test_open: (con) => {
      con.connect((err) => {
        if(err) console.log("mysql connection error : "+err);
        else console.log("mysql is connected");
      })
    }
  }
};
