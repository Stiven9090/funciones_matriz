/*
Name exercise:  Personalized Greetings 
Description: method to generate personalized greetings
Author: Stiven Lopez
Date: March 26th, 2025
*/







const people = [
    { name: "nicolas", age: 30 },
    { name: "stiven", age: 25 }
];


const greetings = people.map(person => `Hello, ${person.name}. You are ${person.age} years old.`);


console.log("Personalized Greetings:");
greetings.forEach(greeting => console.log(greeting));
