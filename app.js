var express = require('express')
var app = express()
var port = process.env.PORT || 8000;
app.get('/', function (req, res) {
  res.sendfile(__dirname+'/index.html');
})

app.listen(port, function(){
	console.log("server started and running on port number "+ port);
});
