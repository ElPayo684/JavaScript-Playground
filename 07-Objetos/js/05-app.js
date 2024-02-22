const product = {
    name : 'Monitor de 20 pulgadas',
    price : 300,
    available : true,
    // Otro objeto
    information : {
        dimentions : {
            weight : '1 Kg',
            size : '1 m'
        },
        manufacturing : {
            country : 'Mexico',
            distributor : 'Chamoy SA de CV'
        }
    }
}

console.log(product);
console.log(product.information);
console.log(product.information.dimentions);
console.log(product.information.manufacturing.distributor);