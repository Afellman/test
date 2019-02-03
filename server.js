var express = require("express");
var path = require('path');
var app = express();
var port = 80;

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, function() {
  console.log('listening on port' + port );
  console.log(path.join(__dirname, "index.html"))
})
