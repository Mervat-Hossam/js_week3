// Assignments For Lessons 57 To 63

// Assignment 1
console.log("Assignment 1");
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`Hallo Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hallo Miss ${theName}`);
    } else {
        console.log(`Hallo ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/*----------------------------------------------------------------------------- */
// Assignment 2
console.log("Assignment 2");
function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if(secondNum === undefined){
        console.log("Second Number Not Found");
    } else if (operation === "add" || operation === undefined) {
        console.log(`${firstNum + secondNum}`);
    } else if (operation === "subtract") {
        console.log(`${firstNum - secondNum}`);
    } else if (operation === "multiply") {
        console.log(`${firstNum * secondNum}`);
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

/*----------------------------------------------------------------------------- */
// Assignment 3
console.log("Assignment 3");
function ageInTime(theAge) {
    // Your Code Here
    if(theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range");
    } else {
        let months = theAge * 12;
        let weeks = Math.round(theAge * (365 / 7));
        let days = theAge * 365;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        console.log(`Months => ${months}`);
        console.log(`Weeks => ${weeks}`);
        console.log(`Days => ${days}`);
        console.log(`Hours => ${hours}`);
        console.log(`Minutes => ${minutes}`);
        console.log(`Seconds => ${seconds}`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/*----------------------------------------------------------------------------- */
// Assignment 4
console.log("Assignment 4");
function checkStatus(a, b, c) {
    // Your Code Here
    let values = [a, b, c];
    let name;
    let age;
    let hire;
    for(let i = 0; i < values.length; i++) {
        typeof(values[i]) === "string"
            ? name = values[i]
            : typeof(values[i]) === "number"
            ? age = values[i]
            : hire = values[i];
    }
    console.log(`Hello ${name}, Your Age Is ${age}, ${hire ? "You Are Available For Hire" : "You Are Not Available For Hire"}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*----------------------------------------------------------------------------- */
// Assignment 5
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value="${i}"> ${i} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);

/*----------------------------------------------------------------------------- */
// Assignment 6
console.log("Assignment 6");
function multiply (...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) !== "string") {
            // result *= Math.floor(numbers[i]); another method
            result *= parseInt(numbers[i]);
        }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000