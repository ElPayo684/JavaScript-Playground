// Arreglo de objetos

const kart = [
    { names : 'iPhone 13 Pro Max', price : 22000 },
    { names : 'iPad mini', price : 13000 },
    { names : 'Samsung Galaxy 10', price : 16000 },
    { names : 'Teclado HyperX en español', price : 5500 },
    { names : 'Tarjeta RAM 16GB RGB', price : 1200 },
    { names : 'CPU Intel i9', price : 2200 }
]

// kart.forEach( function(product) {
//     console.log(`${product.names} - Precio : $ ${product.price}`);
// } )

// kart.map( function(product) {
//     console.log(`${product.names} - Precio : $ ${product.price}`);
// } )

/* 
    .map y .forEach se arrojan la misma salida, lo cual se interpreta a que tiene el mismo funcionamiento. Sin embargo, .map crea un 
    array, mientras que .forEach no:
*/

const newArray = kart.forEach( function(product) {
    return`${product.names} - Precio : $ ${product.price}`;
} )

const newArray2 =kart.map( function(product) {
    return`${product.names} - Precio : $ ${product.price}`;
} )

console.log(newArray);
console.log(newArray2);