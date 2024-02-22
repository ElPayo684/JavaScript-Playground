"use strict"; // Modo estricto

const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true
}

Object.seal(product); // No permite que se agreguen propiedades, pero si permite modificar las existentes

product.available = false;

console.log(product);
console.log(Object.isSealed(product));