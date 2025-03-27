// 
let filas = 4;
let columnas = 6;
let minimo = 5, maximo = 20;

let matriz = [];
let sumaFilas = new Array(filas).fill(0);
let sumaColumnas = new Array(columnas).fill(0);

// 
for (let i = 0; i < filas; i++) {
    let fila = [];
    
    for (let j = 0; j < columnas; j++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        
        fila.push(numeroAleatorio);
        
        sumaFilas[i] += numeroAleatorio;
        sumaColumnas[j] += numeroAleatorio;
    }
    
    matriz.push(fila);
}

// 
console.log("Matriz generada:");
console.table(matriz);

// 
let tablaFilas = sumaFilas.map((suma, indice) => ({ Fila: indice, Suma: suma }));
console.log("Suma por fila:");
console.table(tablaFilas);

//
let tablaColumnas = sumaColumnas.map((suma, indice) => ({ Columna: indice, Suma: suma }));
console.log("Suma por columna:");
console.table(tablaColumnas);
 


