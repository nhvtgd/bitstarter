var express = require('express'), path=require('path');
var fs = require('fs');
var buffer = fs.readFileSync('index.html');


var app = express.createServer(express.logger());
app.configure(function() {
    app.use(express.static(path.join(__dirname, '.')));
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
