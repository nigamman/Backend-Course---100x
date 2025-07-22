const fs = require("fs");

fs.readFile("ex.txt", "utf-8", function(err, data) {
    if (err) {
        console.error("❌ Error reading file:", err.message);
        return;
    }
    console.log("📄 File content:", data);
});

console.log("HI there");

let a = 0;
for (let i = 0; i < 100; i++) {
    a++;
}

console.log("Hi there is 2");
