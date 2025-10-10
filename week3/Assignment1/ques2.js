const jwt = require("jsonwebtoken");

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

console.log(decodeJwt("helkrgoiejgkgjo"));