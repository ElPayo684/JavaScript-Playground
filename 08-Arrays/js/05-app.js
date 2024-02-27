// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

// month.push('December');

// console.table(month);   

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

cart.push(product);
cart.push(product2);

//Agregar un elemento al array en el indice 0

const product3 = {
    name : 'Tarjeta Grafica RTX 4600 TI',
    price : '3500'
}

cart.unshift(product3);

console.table(cart);