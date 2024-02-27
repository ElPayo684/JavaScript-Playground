
const cart = []; // Ejemplo carrito de compras

// Definir un producto

const product = {
    name : 'Teclado en español',
    price : '1500'
}

const product2 = {
    name : 'Tarjeta RAM 16 GB RGB',
    price : '800'
}

const product4 = {
    name : 'CPU intel i9',
    price : '1599'
}

cart.push(product);
cart.push(product2);
cart.push(product4);

//Agregar un elemento al array en el indice 0

const product3 = {
    name : 'Tarjeta Grafica RTX 4600 TI',
    price : '3500'
}

cart.unshift(product3);

console.table(cart);

// Eliminar ultimo elemento de un array

// cart.pop();

// console.table(cart);

// cart.pop();

// console.table(cart);

//Eliminar del inicio del arraglo

// cart.shift();

// console.table(cart);

// cart.shift();

// console.table(cart);

// Eliminar un elemento en el centro de la lista

// cart.splice(1,1); // Elimina un solo elemento desde el indice 1

cart.splice(1,2); // Elimina dos elementetos desde el indice 1

console.table(cart);
