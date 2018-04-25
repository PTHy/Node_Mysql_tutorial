let mysql_dbc = require('../db/dbcon')();
let connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
