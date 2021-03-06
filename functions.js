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
})

const askSummaryDescription = function(string_to_forge) {
    rl.question("Type here the summary and description for the action: ", function(descriptionSummary) {
        let forged_string = string_to_forge.replace(/@summary-description/g, descriptionSummary)
        askPath(forged_string)
    })
}

const askTag = function(string_to_forge) {
    rl.question("Type here the swagger human-readable definition: ", function(humanReadableDefinition) {
        let forged_string = string_to_forge.replace('@tags', humanReadableDefinition);
        askSummaryDescription(forged_string);
    })
}

const askPath = function(string_to_forge) {
    rl.question("Path for api: ", function(apiPath) {
        string_to_forge = string_to_forge.replace(/@apiPath/g, apiPath)
        console.log(string_to_forge);
        rl.close();
    })
}

module.exports = {

    askAction: function(data) {
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
}