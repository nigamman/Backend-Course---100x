const express = require('express');
const { Account } = require("../database/db");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const { default:mongoose } = require('mongoose'); 

router.get("/balance", async(req,res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authMiddleware, async (req,res) => {
    const session = await mongoose.startSesion();

    session.startTransaction();
    const {amount, to} = req.body;

    //fetch the account with the transaction
    const account = await Account.findOne({userId: req.userId}).session(session);
    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "insufficient balance"
        });
    }
    
    const toAccount = await Account.findOne({userId: to}).session(session);
    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "invalid user"
        });
    }

    //perform the transfer
    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);

    //commit the transaction 
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;