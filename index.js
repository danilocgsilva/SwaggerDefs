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

let askTag = function(string_to_forge) {
    rl.question("Type here the swagger human-readable definition: ", function(humanReadableDefinition) {
        let forged_string = string_to_forge.replace('@tags', humanReadableDefinition);
        askSummaryDescription(forged_string);
    })
};

let askSummaryDescription = function(string_to_forge) {
    rl.question("Type here the summary and description for definition: ", function(descriptionSummary) {
        let forged_string = string_to_forge.replace(/@summary-description/g, descriptionSummary)
        console.log(forged_string);
        rl.close();
    })
}

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
        askTag(stringToReturn);
    }); 
}


askAction(data);
