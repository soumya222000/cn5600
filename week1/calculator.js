// CN5006 - Week 1 Portfolio
// Basic Arithmetic Calculator

const prompt = require("prompt-sync")();

console.log("=================================");
console.log("       BASIC CALCULATOR");
console.log("=================================");

// Get numbers from the user
const input = prompt("Enter two or more numbers separated by commas: ");

const numbers = input.split(",").map(Number);

// Validate the numbers
if (numbers.length < 2 || numbers.some(num => !Number.isFinite(num))) {
    console.log("Please enter at least two valid numbers.");
} 
else {

    console.log("\nChoose an arithmetic operation:");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");

    const choice = prompt("Enter your choice (1-4): ");

    let result;

    switch (choice) {

        case "1":
            result = numbers.reduce((total, num) => total + num, 0);
            console.log("Addition Result: " + result);
            break;

        case "2":
            result = numbers.slice(1).reduce((total, num) => total - num, numbers[0]);
            console.log("Subtraction Result: " + result);
            break;

        case "3":
            result = numbers.reduce((total, num) => total * num, 1);
            console.log("Multiplication Result: " + result);
            break;

        case "4":
            if (numbers.slice(1).some(num => num === 0)) {
                console.log("Error: Cannot divide by zero.");
            } 
            else {
                result = numbers.slice(1).reduce((total, num) => total / num, numbers[0]);
                console.log("Division Result: " + result);
            }
            break;

        default:
            console.log("Invalid choice. Please select 1, 2, 3 or 4.");
    }
}

console.log("\nThank you for using the calculator!");