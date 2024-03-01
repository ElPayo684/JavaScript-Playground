function summ(a, b){ // Dos parámetros
    console.log( a + b ); 
}

summ(2, 3); // 2 y 3 son argumentos

summ(200, 184);
summ(124, 321);

// Ejemplo

function hello(firstName, lastName){
    console.log(`Hola! ${firstName} ${lastName}, es bueno tenerte de vuelta!`);
}

hello('Eddard', 'Stark'); //Output: Hola! Eddard Stark, es bueno tenerte de vuelta!
hello('Juan'); //Output: Hola! Juan undefined, es bueno tenerte de vuelta!