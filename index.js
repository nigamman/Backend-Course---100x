const express = require("express");

const app = express();

//req, res => request and response
app.get('/', function(req, res){
    res.send('Hello World');
})      

app.listen(3000);