let mysql_dbc = require('../db/dbcon')();
let connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
let stmt;

module.exports = (app) => {

  app.get('/api/books', (req, res) => {
    stmt = 'SELECT * FROM BOOKS';
    connection.query(stmt, (err, rows, fields) => {
      if(!err)
        console.log(rows);
      else
        console.log("Mysql Error "+err);
    });
  });

  //Get Book by Author
  app.get('/api/books/author/:input_author', (req, res) => {
    stmt = 'SELECT * FROM BOOKS WHERE author = '+req.params.input_author;
    connection.query(stmt, (err, rows, fields) => {
      if(!err)
        console.log(rows);
      else
        console.log("Mysql Error "+err);
    });
  });

  //Get Single Book
  app.get('/api/books/:book_id', (req, res) => {
    stmt = 'SELECCT * FROM BOOKS WHERE BOOK_ID = '+req.params.book_id;
    connection.query(stmt, (err, rows, fields) => {
      if(!err)
        console.log(rows);
      else
        console.log("Mysql Error "+err);
    });
  });

  //Create Book
  app.post('/api/books', function(req, res){

  });

  //Update The Book
  app.put('/api/books/:book_id', (req, res) => {

  });

  //Delete Book
  app.delete('/api/books/:book_id', (req, res) => {
    stmt = 'DELETE FROM BOOKS WHERE BOOK_ID = '+req.params.book_id;
    connection.query(stmt,(err, rows, fields) => {
      if(!err)
        console.log(rows);
      else
        console.log("Mysql Error "+err);
    });
  });
}
