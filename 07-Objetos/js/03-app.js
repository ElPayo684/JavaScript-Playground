const product = {
    name : 'Monitor de 20 pulgadas',
    price : '300',
    available :  true
}

// Agregar una propiedad despues de declarar el objeto

product.image = 'imagen.jpg';

// Eliminar una propiedad de un objeto 

delete product.available;

console.log(product);