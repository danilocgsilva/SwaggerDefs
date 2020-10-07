const { indexString, showString } = require("./includes.js");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = {};

let askAction = function(data) {
    rl.question("What is the project action? ", function(actionValue) { 
        if (actionValue === "index") {
            console.log(indexString);
        } else if (actionValue === "show") {
            console.log(showString);
        }
        rl.close();
    }); 
}


askAction(data);
