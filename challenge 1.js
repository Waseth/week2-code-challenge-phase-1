function swapCaseOfString(inputedString) {
    let swappedString = "";
    for (let i = 0; i < inputedString.length; i++) {
        let char = inputedString.charAt(i);
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
  }
  //you can input the string you want swap its cases in the "stringInput" variable.
let stringInput = "";
let stringOutput = swapCaseOfString(stringInput);
console.log(stringOutput);