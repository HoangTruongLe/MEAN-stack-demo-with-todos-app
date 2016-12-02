var express = require("express");
var bodyParser = require("body-parser");
var todos = require('./routes/todos');
var index = require('./routes/index');
var path = require('path');
var app = express();


//Set view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, function () {
    console.log('server started on port 3000....');
})
