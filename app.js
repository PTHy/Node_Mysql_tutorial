let express = require('express');
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
let app = express();
let routes = require('./routes')(app)

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser);


let server = app.listen(port,() => {
  console.log("Express server is running on "+port);
});
