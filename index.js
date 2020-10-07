const { 
    indexString, 
    showString,
    storeString,
    updateString,
    deleteString
} = require("./includes.js");

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
        } else if (actionValue === "store") {
            console.log(storeString);
        } else if (actionValue === "update") {
            console.log(updateString);
        } else if (actionValue === "delete") {
            console.log(deleteString);
        }
        rl.close();
    }); 
}


askAction(data);
