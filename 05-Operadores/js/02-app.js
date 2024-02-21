const num1 = 20,
      num2 = '20',
      num3 = 30;

// Revisar si 2 numeros son iguales

console.log(num1 == 20); // true
console.log(num1 == num3); // false
console.log(num1 == num2); // true

// Comparador estricto

console.log(num1 === num2); // false, porque uno numero y dos es int
console.log(num1 === parseInt(num2)); // true
console.log(typeof num1);
console.log(typeof num2);

// Diferente

const password1 = 'asdf123',
      password2 = 'Asdf123';

console.log(password1 != password2);
console.log(num1 != num2);
console.log(num1 !== num2);