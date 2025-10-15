//JSON- SIGN

const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({username}, jwtPassword);
    return signature;
}

//test case
const case1 = signJwt("admin@gmail.com", "123455667");
console.log("Test Case 1: ", case1);

const case2 = signJwt("asdfg", "13434523");
console.log("Test Case 2: ",case2);


//JSON- DECODE

function decodeJwt(token) {
    //true, false
    const decoded = jwt.decode(token);

    if(decoded) {
        return true;
    }
    else {
        return false;
    }
}
//test case
const case5 = decodeJwt("dummmmy");
console.log("Test Case 1 : ",case5);

const case6 = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTc2MDA3MDM2OH0.35NJKg6wAuoWkW0mOfWPeRtV3hov-99its-rJD97eQQ");
console.log("Test Case 2 : ",case6);

// JSON - VERIFY

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
    }
    catch(e) {
        return false;
    }
    return true;
}
//test case
const case3 = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTc2MDA3MDM2OH0.35NJKg6wAuoWkW0mOfWPeRtV3hov-99its-rJD97eQQ");
console.log("Test Case 1: ", case3);

const case4 = verifyJwt("dummmy");
console.log("Test Case 2: ", case4);