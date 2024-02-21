<<<<<<< HEAD
const product = 'Monitor de 20 pulgadas';

// Método para reemplazar
console.log(product);
console.log(product.replace(' pulgadas', '"'));
console.log(product.replace('Monitor', 'Monitor curvo'));

// Método para cortar
console.log(product.slice(0, 10));
console.log(product.slice(8));

// Alternativa a slice
console.log(product.substring(0,10));

/* 
La diferencia entre .slice y .substring es que en slice se tiene un orden donde el primer dígito tiene que forzasamente ser menor 
al segundo, en cambio, .substring le es indiferente la posición del dígito mayor 
*/

console.log(product.slice(7,0)); //No hace nada
console.log(product.substring(7,0)); //Es indiferente la posición del numero mayor y menor

// Letra de usuario nuevo

const user = 'Eduardo';
console.log(user.substring(0,1));
=======
const product = 'Monitor de 20 pulgadas';

// Método para reemplazar
console.log(product);
console.log(product.replace(' pulgadas', '"'));
console.log(product.replace('Monitor', 'Monitor curvo'));

// Método para cortar
console.log(product.slice(0, 10));
console.log(product.slice(8));

// Alternativa a slice
console.log(product.substring(0,10));

/* 
La diferencia entre .slice y .substring es que en slice se tiene un orden donde el primer dígito tiene que forzasamente ser menor 
al segundo, en cambio, .substring le es indiferente la posición del dígito mayor 
*/

console.log(product.slice(7,0)); //No hace nada
console.log(product.substring(7,0)); //Es indiferente la posición del numero mayor y menor

// Letra de usuario nuevo

const user = 'Eduardo';
console.log(user.substring(0,1));
>>>>>>> 6bf77aa33676c734303da208b575774924d111c6
console.log(user.charAt(0));