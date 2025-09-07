// //arrow => functions\\ 
// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// app.get("/", (req, res) => {

// })

// app.get("/", function(req, res) {

// })

// //map --function
// //traditional --approach
// const input = [2, 4, 6, 8, 10];
// const newArray = [];

// for(let i=0; i < input.length; i++) {
//     newArray.push(input[i] * 3);
// }
// console.log(newArray);

// //using --map
// const arr = [1, 2, 3, 4, 5];
// function transform(i) {
//     return i * 2;
// }
// const ans = arr.map(transform);
// console.log(ans);

// //filtering
// //traditional --way
// const arr = [1,2,3,4,5,6];
// const newArr = [];
// for (let i = 0; i<arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// //filter --way
// const arr = [1, 2, 3, 4, 5];
// function filterLogic(n) {
//     if(n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const ans = arr.filter(filterLogic);
// console.log(ans);