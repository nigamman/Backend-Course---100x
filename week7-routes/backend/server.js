const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const stats = {
    "notification": 9,
    "network": 3,
    "jobs": 16,
    "messaging": 43
};

app.get("/", function(req,res) {
    res.json(stats);
});

app.listen(3001);
