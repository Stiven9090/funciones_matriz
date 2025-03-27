let matriz1 = [
  [1, 2],
  [3, 4]
];

let matriz2 = [
  [5, 6],
  [7, 8]
];

let suma = matriz1.map((fila, i) =>
  fila.map((valor, j) => valor + matriz2[i][j])
);

console.log(suma);

										