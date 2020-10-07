const { indexString, showString } = require("./includes.js");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the project tags? ", function(tags) {
    console.log(indexString.replace('@tags', tags));
    console.log(showString.replace('@tags', tags));
    rl.close();
});



