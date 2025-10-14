const express = require('express');
const app = express();

//using middleware 
function isOldEnough(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else{
        res.json({
            msg: "Sorry you are not of age yet."
        });
    }
}

app.get("/ride3", function(req,res) {
    res.json({
        msg: "You have successfully riden the ride 3."
    })
});

app.get("/ride4", function(req,res){
    res.json({
        msg: "You have successfully riden the ride 4"
    })
});

app.listen(3001);