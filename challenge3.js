//Define a helper function"primeNum"" to check if a number is prime.
function primeNum(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function filterPrimeNumbers(numbers) {
    return numbers.filter(number => primeNum(number));
}

//input your array of numbers between the square brackets below and then run to return to return an array containing prime numbers.
const inputedArray = [];
const primeNumbers = filterPrimeNumbers(inputedArray);
console.log(primeNumbers);