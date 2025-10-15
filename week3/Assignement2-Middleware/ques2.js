//You have been given an express server which has a few endpoints.
//Your task is to create a global middleware (app.use) which will rate 
//limit the requests from a user to only 5 request per second, If a user send more 
//than 5 requests in a single second, the server should block them with a 404.
//user will be sending in their user id in the header as 'user id'
//You have been given a numberOfRequesForUSer object to start off with which 
//clear every one second.

const express = require('express');
const app = express();

let numberOfRequestForUser = {};
setInterval(() => {
    numberOfRequestForUser = {};
}, 1000)

app.use(function(req, res, next) {
    const userId = req.headers["user-id"];
    if (numberOfRequestForUser[userId]) {
        numberOfRequestForUser[userId] = numberOfRequestForUser[userId] + 1;
        if(numberOfRequestForUser[userId] > 5) {
            res.status(404).send("no-entry");
        } else {
            next();
        }
    } else {
        numberOfRequestForUser[userId] = 1;
        next();
    }
});

app.get('/user', function(req,res) {
    res.status(200).json({
        name: 'Admin'
    });
});

app.post('/user', function(req,res) {
    res.status(200).json({
        msg: 'created dummy user'
    });
});

app.listen(3000);