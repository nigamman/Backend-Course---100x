const jwt = require("jsonwebtoken");

//sign, decode, verify

const value = {
    name: "Admin",
    accountNumber: 123456
}

//sign
const token = jwt.sign(value, "secret");
console.log(token);

//this token has been generated using this secret, and hence this token can only be
//verified using this secret

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTc2MDA3MDM2OH0.35NJKg6wAuoWkW0mOfWPeRtV3hov-99its-rJD97eQQ