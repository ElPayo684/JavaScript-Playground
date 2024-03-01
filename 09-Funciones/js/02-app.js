// Hoisting (poner las variables y funciones en top)
/*
JS realiza el código dos veces, la primera etapa (Creación) busca las variables y funciones,
 en la segunda vuelta (Ejecución) las ejecuta 
*/
// ------------------------ Primer ejemplo ------------------------

suma(); // Este comando se ignora en la primera vuelta, y en la segunda se ejecuta

function suma() {
    console.log(2+2);
}

// Salida: 4

// ------------------------ Segundo ejemplo ------------------------

suma2(); 

const suma2 = function(){ //La funcion no se declara como tal a comparacion del primer ejemplo, sino que es mas como una variable
    console.log(3+3);
} 

// Salida: Error 

// Equivalente a este ejemplo:

// const suma3; // Primero se declara como variable
// suma3(); // Luego se declara como funcion, por esta razon tira error el programa

