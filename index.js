'use strict'
var express = require('express');


var app = express();

app.use(require('connect-livereload')({
  port: 35729
}));

app.get("/",function(req,res){

  res.sendFile(  __dirname + "/dest/index.html");
});


app.listen(8000,"0.0.0.0",function(){
  console.log("listening");
})
