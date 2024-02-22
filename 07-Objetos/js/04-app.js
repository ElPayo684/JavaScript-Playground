const product = {
    name : 'Monitor de 20 pulgadas',
    price : 300,
    available : true
} 

// const price = product.price;
// console.log(price);


// Destructing

// const { name } = product;
// const { price } = product;
// const { available } = product;

const {name, available, price} = product;

console.log(name);
console.log(price);
console.log(available);