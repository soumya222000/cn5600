
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

// Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

// Calling the function
EmployeeInfo(EmpName, EmpSalary);

 // Exercise 2: Arrow Functions

const EmpSkills = (skills, Name, LabGrp) => {
    console.log("Student ID:3211515 " + Name + " Expert in " + skills);
    console.log("Lab Group Name:19" + LabGrp);
};

EmpSkills("java", "3211515", "19");

// Exercise 3: Importing Local Modules

const student = require('./StudentInfo');
const Person = require('./Person');

console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade is " + student.Studentgrade(55));

const person1 = new Person("Jim", 25, "myemail@gmail.com");

console.log("Using Person Module", person1.getPersonInfo());
console.log("Programme ended");
