
 // Week 3 - Portfolio Verification Task
 
 const studentName = "Soumya";
 const studentId = "3211515 ";
 const labGroup = "19";
 
 // Display student information
 console.log("Student Name: " + studentName);
 console.log("Student ID: " + studentId);
 console.log("Lab Group: " + labGroup);
 
 // Current date and time
 const currentDateTime = new Date();
 console.log("\nCurrent Date and Time:");
 console.log(currentDateTime.toLocaleString("en-GB", {
   timeZone: "Europe/London"
 }));
 
 // Arrow function
 const favouriteLanguage = (language) => {
   console.log("\nFavourite Programming Language: " + language);
 };
 
 favouriteLanguage("JavaScript");
 
 // Sum the last four digits of student ID
 const digits = studentId.replace(/\D/g, "");
 const lastFourDigits = digits.slice(-4);
 
 if (lastFourDigits.length !== 4) {
   throw new Error("Enter a valid student ID with at least 4 digits.");
 }
 
 const verificationNumber = [...lastFourDigits]
   .reduce((sum, digit) => sum + Number(digit), 0);
 
 console.log("\nVerification Number: " + verificationNumber);
