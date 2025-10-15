//using middleware

const express = require("express");

const app = express();

function userMiddleware(req,res,next) {
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username != "admin" || password != "pass") {
        res.status(403).json({
            msg: "Incorrect user inputs",
        })
    }
    else {
        next();
    }
};
function kidneyMiddleware(req,res,next) {
    const kidneyId = parseInt(req.query.kidneyId);

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect kidney inputs"
        })
    }
    else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res){
    res.send("Your heart is healthy");
});


app.listen(3001);