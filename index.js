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
        let stringToReturn = "";

        switch (actionValue) {
            case "index":
                stringToReturn = indexString;
                break;
            case "show":
                stringToReturn = showString;
                break;
            case "store":
                stringToReturn = storeString;
                break;
            case "update":
                stringToReturn = updateString;
                break;
            case "delete":
                stringToReturn = deleteString;
                break;                
                
        }
        console.log(stringToReturn);
        rl.close();
    }); 
}


askAction(data);
