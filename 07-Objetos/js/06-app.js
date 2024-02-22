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

const { name, information, information : { manufacturing }, information : { manufacturing : { distributor } } } = product;

console.log(name);
console.log(information);
console.log(manufacturing);
console.log(distributor);