const fs = require('fs');

//my own async fxn
function rishiReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("ex.txt", "utf-8", function(err,data) {
            resolve(data);
        });
    })
}

//callback function call 
function onDone(data) {
    console.log(data);
}

// rishiReadFile().then(onDone);

//=> pending, resolved
var d = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("fool")
    }, 1000)
});

function callback() {
    console.log(d);
}

console.log(d);
d.then(callback);

//await function 
function dummyAsyncFxn() {
    let p = new Promise(function(resolve) {
        //do some async logic here
        resolve("Hello!!")
    });
    return p;
}
async function main() {
    const value = await dummyAsyncFxn();
    console.log(value);
}
main();