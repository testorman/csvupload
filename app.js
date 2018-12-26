var app = require('express')();
var fileUpload = require('express-fileupload');
var mongoose = require('mongoose');
var path = require('path');

var server = require('http').Server(app);

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(fileUpload());

server.listen(80);

mongoose.connect('mongodb://localhost/moss');


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

});

var template = require('./template.js');
app.get('/template', template.get);

var upload = require('./upload.js');
app.post('/', upload.post);



 
