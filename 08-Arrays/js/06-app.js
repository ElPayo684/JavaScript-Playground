const cart = [];

const product = {
    name : 'Teclado en español',
    price : '1500'
}

const product2 = {
    name : 'Tarjeta RAM 16 GB RGB',
    price : '800'
}

const product3 = {
    name : 'Tarjeta Grafica RTX 4600 TI',
    price : '3500'
}

let result;

result = [...cart, product];
result = [...result, product2];
result = [product3, ...result];

console.table(result);