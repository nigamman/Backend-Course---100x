const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("You have " +  kidney.length + " kidnys");
});

//global catches
app.use(function(err, req, res, next) {
    res.status(500).send({
        msg: "Sorry, Something went wrong"
    });
});

app.listen(3001);