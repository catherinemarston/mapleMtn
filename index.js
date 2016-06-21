var express = require('express');

var app = express();

var static_path = __dirname + '/static';
app.use('/views', express.static(static_path + '/views'));
app.use('/js', express.static(static_path + '/js'));
app.use('/styles', express.static(static_path + '/styles'));
app.use('/img', express.static(static_path + '/img'));

// API endpoints would need to go here

app.use('/*', function(req, res, next) {
  res.sendFile(static_path + '/index.html');
});


var port = 3000;
app.listen(port, function() {
  console.log('listening on port:', port);
});
