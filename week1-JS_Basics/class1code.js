//array of objects

const allUsers = [{
    firstName: "aruhi",
    gender: "female"
}, {
    firstName: "kabir",
    gender: "male"
},  {
    firstName: "raju",
    gender: "male"
}]

for (let i=0; i< allUsers.length; i++) {
    if (allUsers[i]["gender"] == "female") {
        console.log(allUsers[i]["firstName"])
    }
}
//calling a function 

function findSum (a,b) {
    return a + b;
}
const value = findSum(1,3);
console.log(value);

const val = "hi my name is khan";
const words = val.split(" ");

console.log(words);
