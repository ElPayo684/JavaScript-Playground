// Arreglo de objetos

const kart = [
    { names : 'iPhone 13 Pro Max', price : 22000 },
    { names : 'iPad mini', price : 13000 },
    { names : 'Samsung Galaxy 10', price : 16000 },
    { names : 'Teclado HyperX en español', price : 5500 },
    { names : 'Tarjeta RAM 16GB RGB', price : 1200 },
    { names : 'CPU Intel i9', price : 2200 }
]

const newArray = kart.forEach( product => {
    return `${product.names} - Precio : $ ${product.price}`;
} )

const newArray2 =kart.map( product => {
    console.log(`${product.names} - Precio : $ ${product.price}`);
} )

console.log(newArray);
console.log(newArray2);