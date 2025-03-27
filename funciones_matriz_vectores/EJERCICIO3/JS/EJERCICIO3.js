/*
Name exercise: Simulación de posición con MRUA
Description: Cálculo de la posición de un objeto con aceleración constante en varios segundos.
Author: Stiven Lopez
Date: March 26th, 2025
*/


const acceleration = [2, -1];  
const initialSpeed = [4, 0];    
const initialPosition = [0, 0]; 
const steps = 5;
  
let positions = [];


for (let time = 1; time <= steps; time++) {
    let x = initialPosition[0] + initialSpeed[0] * time + 0.5 * acceleration[0] * time * time;
    let y = initialPosition[1] + initialSpeed[1] * time + 0.5 * acceleration[1] * time * time;

    positions.push([x, y]); 
}


console.log("Posiciones del objeto en cada segundo:");

for (let iteration = 0; iteration < steps; iteration++) {
    console.log(`t = ${iteration + 1}s \u2192 Position: (${positions[iteration][0].toFixed(2)}, ${positions[iteration][1].toFixed(2)})`);


}
