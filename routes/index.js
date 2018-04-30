let mysql_dbc = require('../db/dbcon')();
let connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
let stmt;

module.exports = (app) => {

  app.get('/api/books', (req, res) => {
    stmt = 'SELECT * FROM BOOKS';
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows.length != 0)
        return res.send(rows);
      else if(rows.length == 0)
        return res.status(404).json({Error : "books are not found"});
      else
        return res.status(500).json({Error : err})
    });
  });

  //Get Book by Author
  app.get('/api/books/author/:input_author', (req, res) => {
    stmt = "SELECT * FROM BOOKS WHERE author = \'"+req.params.input_author+"\'";
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows.length != 0)
        return res.send(rows);
      else if(rows.length == 0)
        return res.status(404).json({Error : "book  is not found"});
      else
        return res.status(500).json({Error : err})
    });
  });

  //Get Single Book
  app.get('/api/books/:book_id', (req, res) => {
    stmt = 'SELECT * FROM BOOKS WHERE BOOK_ID = '+req.params.book_id;
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows.length != 0)
        return res.send(rows);
      else if(rows.length == 0)
        return res.status(404).json({Error : "book is not found"});
      else
        return res.status(500).json({Error : err})
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
      return res.status(203)
    });
  });
}
