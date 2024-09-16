// 1) Function to calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2) Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3) Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Function to filter out only the even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a); // slice to avoid mutating the original array
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Function to count the number of vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Function to calculate the average of numbers in an array
function findAverage(arr) {
    if (arr.length === 0) return 0; // Avoid division by zero
    let sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

module.exports = {
    calculateDifference,
    isOdd,
    findMin,
    filterEvenNumbers,
    sortArrayDescending,
    lowercaseFirstLetter,
    countVowels,
    findAverage
};
