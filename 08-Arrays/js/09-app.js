// Arreglo de objetos

const kart = [
    { names : 'iPhone 13 Pro Max', price : 22000 },
    { names : 'iPad mini', price : 13000 },
    { names : 'Samsung Galaxy 10', price : 16000 },
    { names : 'Teclado HyperX en español', price : 5500 },
    { names : 'Tarjeta RAM 16GB RGB', price : 1200 },
    { names : 'CPU Intel i9', price : 2200 }
]

// for(let i = 0; i < kart.length; i++) {
//     // console.log(i);
//     console.log(`${kart[i].names} - Precio : $ ${kart[i].price}`);
// }

// array method

kart.forEach( function(product) {
    console.log(`${product.names} - Precio : $ ${product.price}`);
} );