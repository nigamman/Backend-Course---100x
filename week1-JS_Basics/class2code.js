//convert val to int
console.log(parseInt("12fe"));
console.log(parseInt("34.24"));
console.log(parseInt("df53")); //it must be start with integer 

const arr = [1,2,3];
const arr1 = [4,3,2];
arr.unshift(4);
arr.shift();
arr.push(9);
console.log(arr);
console.log(arr.concat(arr1));

//for each loop
const arr3 = [5,3,2];

function logThing(str) {
    console.log(str);
}
arr3.forEach(logThing);

//map, filter, find, sort
class Animal {
    constructor(name, leg, voice) {
        this.name = name;
        this.leg = leg;
        this.voice = voice;
    }
    speak() {
        console.log("hello I am " + this.voice);
    }
}
//creating a function
let dog = new Animal("dog", 4, "bhow-bhow");
//calling a function
dog.speak();

function dateMethods() {
    const currDate = new Date();
    console.log("Current Date: ", currDate);
    console.log("hours: " + currDate.getHours());
    console.log("minutes: " + currDate.getMinutes());
    console.log("seconds: " + currDate.getSeconds());
    console.log("time in miliseconds since 1970:  " +  currDate.getTime());
}
dateMethods(); 

function calculateSum(n) {
    let a = 0;
    for(let i = 0; i < 100000000; i++) {
        a += i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();
const afterDate = new Date();
const afterDateInMs = afterDate.getTime();

console.log(afterDateInMs - beforeTimeInMs);

//JSON parse
const users = '{"name": "Harkirat", "Age": "24", "Gender": "Male"}'

const user = JSON.parse(users);
console.log(user["name"]);

//JSON.stringify
const user1 = {
    names: "rishi",
    genders: "male"
}
user1["name"]
const finalStr = JSON.stringify(user1);
console.log(finalStr);

console.log(Math.random());