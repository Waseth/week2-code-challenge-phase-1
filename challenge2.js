function getArray(beginning, end) {
    let newArray = [];
    if (beginning <= end) {
        for (let x = beginning; x <= end; x++) {
            newArray.push(x);
        }
    } else {
        for (let x = beginning; x >= end; x--) {
            newArray.push(x);
        }
    }
    return newArray;
}
//input two numbers in the console.log below to generate an array containing numbers between them.
console.log(getArray());