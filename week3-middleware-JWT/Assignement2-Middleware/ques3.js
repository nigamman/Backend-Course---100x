const express = require('express');
const app = express();
let errorCount = 0;

app.get('/user', function(req, res) {
    throw new Error("some error");
    res.status(200).json({name: 'john'});
});

//you have been given an express server which has a few endpoints.
//your task is to
//1. ensure that if there is ever an exception, the end user sees a status code 404.
//2. maintain the errorCount variable whose valuse should go up every time there is an 
//   exception in any endpoint

//error handling middleware
app.use(function(err, req, res, next) {
    res.status(404).send({})
    errorCount = errorCount + 1;
});

app.listen(3002);