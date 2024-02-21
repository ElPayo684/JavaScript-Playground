// Undefined

let numero;

console.log(numero);
console.log(typeof numero);

// Null

let numero2 = null;

console.log(numero2);
console.log(typeof numero2);

console.log(numero == numero2); // true, a pesar de que numero sea undefined y numero2 es null
console.log(numero === numero2); // false