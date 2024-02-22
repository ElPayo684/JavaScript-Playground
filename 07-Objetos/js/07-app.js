const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true
}

/*
A diferencia de una variable declarada como const, una propiedad perteneciente a un objeto de tipo const si se le puede ser reasignado 
un valor
*/

product.available = false;

console.log(product);