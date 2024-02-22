const product = {
    name: 'Monitor de 20 pulgadas',
    price : 300,
    available : true,
    showInfo : function() { // showInfo es un método
        console.log(`El producto: ${this.name} tiene un precio de: ${this.price}`) // this es para especificar una propiedad dentro del objeto
    }
}

const product2 = {
    name: 'Tablet',
    price : 150,
    available : true,
    showInfo : function() { // showInfo es un método
        console.log(`El producto: ${this.name} tiene un precio de: ${this.price}`) // this es para especificar una propiedad dentro del objeto
    }
}

product.showInfo();
product2.showInfo();