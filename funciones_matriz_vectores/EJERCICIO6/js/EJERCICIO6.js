

/*
Name exercise: Summing Nested Arrays 
Description:  calculate the sum of each sub-array within a nested array.
Author: Stiven Lopez
Date: March 26th, 2025
*/




const numberArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const sums = numberArrays.map(arr => arr.reduce((acc, num) => acc + num, 0));


console.log("Exercise three - Sum of Arrays:", sums);

sums.forEach((sum, index) => console.log(`Array ${index + 1}: ${sum}`));
