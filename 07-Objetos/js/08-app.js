"use strict"; // Modo estricto

const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true
}

Object.freeze(product); // No permite que se modifique ninguna propiedad del objeto

console.log(product);
console.log(Object.isFrozen(product));