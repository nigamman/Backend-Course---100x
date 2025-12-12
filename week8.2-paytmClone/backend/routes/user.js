const express = require("express");
const zod = require("zod");
const { User } = require("../database/db");
const { Account } = require("../database/db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupSchema = zod.object({
    username: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.post("/signup", async(req,res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success) {
        return res.json({
            msg: "Invalid input"
        });
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken. / Incorrect inputs"
        })
    }
    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })
    const userId = user._id;
    
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
});

router.post("/signin", async(req,res) => {
    const body = req.body;
    const {success} = signinSchema.safeParse(req.body);
    if(!success) {
        return res.json({
            message: "invalid"
        });
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }
    res.status(411).json({
        message: "error while logging in"
    })
});

router.put("/", authMiddleware, async(req,res) => {
    const {success} = updateSchema.safeParse(req.body) 
    if (!success) {
        res.status(411).json({
            message:"Error while updation info"
        })
    }
    await User.updateOne({_id: req.userId}, req.body);

    res.json({
        message: "Updated Successfully"
    })
});

router.get("/bulk", async(req,res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
});

module.exports = router;