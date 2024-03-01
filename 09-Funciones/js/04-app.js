const num1 = 20;
const num2 = '20';

console.log( parseInt(num2) ); // Esto es una funcion, cuyo ARGUMENTO es num2

console.log( num1.toString() ); // Esto es un método

/*
Ambas trabajan de la misma manera, nada mas que se escriben de una manera distinta
*/

function summ(){ // Esto es una funcion, cuyo PARÁMETRO es 2+2
    console.log(2+2); 
}

summ();