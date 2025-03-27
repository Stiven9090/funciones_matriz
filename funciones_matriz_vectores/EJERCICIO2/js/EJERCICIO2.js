/*
Name exercise: Segunda Ley de Newton
Description: Cálculo de la fuerza neta y aceleración de un objeto con fuerzas aplicadas
Author: Stiven Lopez
Date: March 26th, 2025
*/

const forces = [
    [5, 0],   
    [-2, 3],
    [1, -1]   
];

const mass = 2; // kg
let forceTotal = [0, 0];


for (let iteration = 0; iteration < forces.length; iteration++) {
    forceTotal[0] += forces[iteration][0]; 
    forceTotal[1] += forces[iteration][1]; 
}


let acceleration = [
    forceTotal[0] / mass,  
    forceTotal[1] / mass   
];


console.log("Fuerza total:", forceTotal);
console.log("Acceleration:", acceleration);


