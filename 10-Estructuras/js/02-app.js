const score = 1000;
const scoreString = '1000';

/* 
 == Operador no estricto
 === Operador estricto
*/

console.log(typeof score);
console.log(typeof scoreString);

if(score ==! "1000"){
    console.log('El puntaje es igual!');
}else{
    console.log('El puntaje es distinto!');
}