const mongoose = require("mongoose");
const express =  require("express");
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://admin:jjRqQHpORG8xfZHu@cohort-100x.whvdweh.mongodb.net/newUsers")

const User = mongoose.model('Users', {name: String, email: String, password: String});

// const user = new User({
//     name:'Shivansh Nigam',
//     email:'admin@gmail.com',
//     password:'123'
// });
// user.save();

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    
    if(existingUser) {
        return res.status(400).send("Username already exists");
    }
    const user = new user({
        name: name,
        email: username,
        password: password
    })

    user.save();
    res.json({
        "msg": "User created successfully"
    });
});