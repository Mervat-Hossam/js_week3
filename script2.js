// Assignments For Lessons 64 To 70

// Assignment 1
console.log("Assignment 1");

function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let startOfSecond = zName.indexOf(" "); // get index of space in the name
        return `${zName.slice(0, startOfSecond)}${zName.slice(startOfSecond, startOfSecond + 2).toUpperCase()}.`;
    }
    function ageWithMessage(zAge) {
        let age = zAge.slice(0, 2);
        return `Your Age Is ${age}`;
    }
    function countryTwoLetters(zCountry) {
        let country = zCountry.slice(0, 2).toUpperCase();
        return `You Live In ${country}`;
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

/*----------------------------------------------------------------------------- */
// Assignment 2
console.log("Assignment 2");

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/*----------------------------------------------------------------------------- */
// Assignment 3
console.log("Assignment 3");

let checker = (zName) => {
    return (status) => {
        return (salary) => {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        }
    }
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

/*----------------------------------------------------------------------------- */
// Assignment 4
console.log("Assignment 4");

function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        let newData = parseInt(data[i]);
        if(isNaN(newData)) {
            continue;
        } else {
            result += newData;
        }
    }
    if (result === 0) {
        return `All Is Strings`;
    } else {
        return `${result}`;
    }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings