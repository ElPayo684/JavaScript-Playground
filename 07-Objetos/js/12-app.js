// Object literal

const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true,
    showInfo : function() { // showInfo es un método
        console.log(`El producto: ${this.name} tiene un precio de: ${this.price}`) // this es para especificar una propiedad dentro del objeto
    }
}

// Object Constructor (POO)

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.available = true;
}

const product2 = new Product('Laptop', 500);
console.log(product2);

const product3 = new Product('Xbox One', 250);
console.log(product3);