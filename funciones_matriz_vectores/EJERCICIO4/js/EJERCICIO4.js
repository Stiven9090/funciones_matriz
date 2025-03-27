 /*
Name exercise: Par o Impar
Description:  recorrer un array de números y determinar si cada uno es par o impar.
Author: Stiven Lopez
Date: March 27th, 2025
*/



const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);


const evenOdd = numbers.map(num => ({ number: num, type: num % 2 === 0 ? "even" : "odd" }));

console.log("Generated numbers and their classification:");
evenOdd.forEach(({ number, type }) => console.log(`${number} ${type}`));






