let mysql_dbc = require('../db/dbcon')();
let connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
let stmt;

module.exports = (app) => {

  app.get('/api/books', (req, res) => {
    stmt = 'SELECT * FROM BOOKS';
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows != 0)
        return res.send(rows);
      else if(rows == 0)
        return res.status(404).json({Error : "books are not found"});
      else
        return res.status(500).json({Error : err})
    });
  });

  //Get Book by Author
  app.get('/api/books/author/:input_author', (req, res) => {
    stmt = "SELECT * FROM BOOKS WHERE author = \'"+req.params.input_author+"\'";
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows != 0)
        return res.send(rows);
      else if(rows == 0)
        return res.status(404).json({Error : "book  is not found"});
      else
        return res.status(500).json({Error : err})
    });
  });

  //Get Single Book by title
  app.get('/api/books/:title', (req, res) => {
    stmt = 'SELECT * FROM books where title = \''+req.params.title+'\'';
    connection.query(stmt, (err, rows, fields) => {
      if(!err && rows != 0)
        return res.send(rows);
      else if(rows == 0)
        return res.status(404).json({Error : "book is not found"});
      else
        return res.status(500).json({Error : err})
    });
  });

  //Create Book
  app.post('/api/books', function(req, res){
    stmt = 'insert into books (title,author) values (\''+req.body.title+'\',\''+req.body.author+'\')';
    connection.query(stmt, (err, rows, fields) => {
      if(err) res.status(500).json({Error : err});
      res.send({message : "insert successful"});
    });
  });

  //Update The Book
  app.put('/api/books/:book_id', (req, res) => {
    stmt = "update books set";
    if(req.body.title) stmt += " title = \'"+req.body.title + "\'";
    if(req.body.author) {
      if(req.body.title)
        stmt += ",";
      stmt += " author = \'"+req.body.author + "\'";
    }

    stmt += "where book_id = \'"+req.params.book_id+"\'";

    connection.query(stmt,(err,rows,fields) => {
      if(err) res.status(500).json({Error : err});
      else res.json({message : "book is updated"})
    });
  });

  //Delete Book
  app.delete('/api/books/:book_id', (req, res) => {
    stmt = 'DELETE FROM BOOKS WHERE BOOK_ID = '+req.params.book_id;
    connection.query(stmt,(err, rows, fields) => {
      if(err) res.send({message : err});
      return res.status(203).end();
    });
  });
}
