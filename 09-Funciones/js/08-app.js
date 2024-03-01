function summ(a, b){
    // console.log( a + b );
    return a + b; // Devuelve el valor de la sumatoria 
}

const result = summ(15, 30); // Se le asigna el resultado de la funcion summ() a la variable result

console.log(result);

// Ejemplo:

let total = 0;

function add2Cart(price){
    return total += price;
}
function addTax(total){
    return total * 1.15;
}

total = add2Cart(300);
total = add2Cart(100);
total = add2Cart(600);

const totalPayment = addTax(total);

console.log(total);
console.log(`El total a pagar es de: ${totalPayment}`);