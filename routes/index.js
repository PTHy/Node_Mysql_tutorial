let mysql_dbc = require('../db/dbcon')();
let connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
let stmt;

module.exports() = (app) => {

  app.get('/api/books', (req, res) => {
    stmt = 'SELET * FROM BOOKS'
    connection.query(stmt,, (err, rows, fields) => {
      if(!err)
        console.log(rows);
      else
        console.log("Mysql Error "+err);
    });
  });

  //Get Book by Author
  app.get('/api/books/author/:author', (req, res) => {

  });

  //Get Single Book
  app.get('/api/books/:book_id', (req, res) => {

  });

  //Create Book
  app.post('/api/books', function(req, res){

  });

  //Update The Book
  app.put('/api/books/:book_id', (req, res) => {

  });

  //Delete Book
  app.delete('/api/books/:book_id', (req, res) => {

  });



}
