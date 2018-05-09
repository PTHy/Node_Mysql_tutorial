let express = require('express');
let bodyParser = require('body-parser');
let port = process.env.PORT || 3000;
let app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

let routes = require('./routes')(app)

let server = app.listen(port,() => {
  console.log("Express server is running on "+port);
});
