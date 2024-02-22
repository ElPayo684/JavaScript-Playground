const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true
}

const measures = {
    weight : '1Kg',
    size : '1m'
}

console.log(product);
console.log(measures);

const result = Object.assign(product, measures); // Une estos dos objetos en uno

// Spread operator o Rest operator

const resultado = { ...product, ...measures }; // ... significa copia

console.log(result);
console.log(resultado);