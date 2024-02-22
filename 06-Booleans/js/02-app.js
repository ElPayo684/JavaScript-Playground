const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1 == boolean2); // False, A pesar de ser la misma variable, no tiene el mismo valor

console.log(boolean1 == true); // true
console.log(boolean1 == 'true'); // false, es un Boolean comparandose con un String 