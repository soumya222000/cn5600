// CN5006 - Week 1
// Exercise 1: First JavaScript Program

console.log("This is my first program");
console.log("Welcome John, your monthly salary is 500000");

// Exercise 2: Addition of two numbers

const num1 = 5;
const num2 = 3;

const sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Exercise 3: Check whether a number is positive, negative or zero

const prompt = require("prompt-sync")();

console.log("\nNumber Checking Program");

const name = prompt("Enter your name: ");

console.log(`Hello, ${name}`);

const number = parseInt(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is positive");
} 
else if (number === 0) {
    console.log("The number is zero");
} 
else {
    console.log("The number is negative");
}