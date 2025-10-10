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
console.log("TestCase 1: ", case1);

const case2 = signJwt("asdfg", "13434523");
console.log("TestCase 2: ",case2);
