function sum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            totalSum += arr[i];
        }
    }
    return totalSum;
}

// Example:
const numbers = [10, 25, 30, 15, 5, 40];
const result = sum(numbers);
console.log("here "+result); // Output: 95 (25 + 30 + 40 = 95)
