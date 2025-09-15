//dumb way of input validation and authentication
const express = require('express');
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "admin" || password != "pass") {
        res.status(400).json({
            msg: "Something went wrong"
        });
        return;
    }
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "Something went wrong"
        });
        return;
    }
    //do something with kidney here
    res.json({
        msg: "Kidney is fine."
    });
});

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});