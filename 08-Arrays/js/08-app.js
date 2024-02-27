// Destructuring

const product = {
    name : 'Monitor de 20 pulgadas',
    price : 300,
    available : true
} 

const {name, available, price} = product;

// console.log(name);

// Destructuring con arreglos

const numbers = [0, 1, 2, 3, 4, 5];

// A diferencia de un objeto, un arreglo se puede destruir y asignar el nombre que se desee a la variable que se le asigne
// const [zero, first, second, tres, pato, almendra] = numbers;
// const [zero, first, , , pato] = numbers; // Optimizando codigo

// console.log(zero, first, pato);

const [first, , ,...tercero] = numbers; // Almacena el primer elemento en la variable first y los demas elementos en un array llamado tercero

console.log(tercero);
