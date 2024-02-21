<<<<<<< HEAD
const product = 'Book ';
const price = '13.99 USD ';

//Concatenar dos strings:
console.log(product.concat(price));
console.log(product.concat('90% OFF'));
console.log(product + 'con precio de: '+ price + '(10% OFF)');
console.log(product , 'con precio de: ', price , '(10% OFF)');

// Template literals (backtick ``) alt gr + }

=======
const product = 'Book ';
const price = '13.99 USD ';

//Concatenar dos strings:
console.log(product.concat(price));
console.log(product.concat('90% OFF'));
console.log(product + 'con precio de: '+ price + '(10% OFF)');
console.log(product , 'con precio de: ', price , '(10% OFF)');

// Template literals (backtick ``) alt gr + }

>>>>>>> 6bf77aa33676c734303da208b575774924d111c6
console.log(`El producto ${product}tiene un precio de: ${price}`);