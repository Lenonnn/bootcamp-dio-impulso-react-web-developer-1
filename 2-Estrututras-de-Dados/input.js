var readline = require('readline');
var resp = "";

var readTxt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readTxt.question("Digite algo?\n", function(answer) {
    var resp = answer;
    console.log("\nO Texto digitado foi '" + resp + "' e esse valor está armazenado na variável 'resp' !");
    readTxt.close();
});