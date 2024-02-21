/* 
Math es un objeto y existe en la ventana global de JS 
*/

let result;

// Pi
result = Math.PI;

// Redondeo
result = Math.round(2.8);
result = Math.round(2.4);
result = Math.round(2.5);

// Redondeo hacia arriba

result = Math.ceil(2.1);

// Redondeo hacia abajo

result = Math.floor(2.9);

//Raiz Cuadrada

result = Math.sqrt(25);

// Valor Absoluto

result = Math.abs(-500);

// Potencia

result = Math.pow(2, 6);

// Minimo

result = Math.min(1, 2, 5, 0, -2);

//Maximo

result = Math.max(1, 2, 5, 0, -2);

// Random

result = Math.random();

// Aleatorio dentro de un rango

result = Math.floor( Math.random() * 30 );

console.log(result);