const jwt = require ("jsonwebtoken");
const jwtPassword = "secret";

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
    }
    catch(e) {
        return false;
    }
    return true;
}

const case1 = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTc2MDA3MDM2OH0.35NJKg6wAuoWkW0mOfWPeRtV3hov-99its-rJD97eQQ");
console.log("Test Case 1: ", case1);

const case2 = verifyJwt("dummmy");
console.log("Test Case 2: ", case2);
