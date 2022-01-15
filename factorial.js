
function factorial(x) {

    
    if (x == 0) {
        return 1;
    }

    
    else {
        return x * factorial(x - 1);
    }
}

"use strict";
const ps =require("prompt-sync");
const prompt = ps();
const num = prompt ("enter number:");
//const prompt = require('prompt-sync')()
//const num = prompt('Enter a positive number: ');

if (num >= 0) {
    const result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
else {
    console.log('Enter a positive number.');
}