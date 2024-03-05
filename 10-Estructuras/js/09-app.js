const auth = true;
const canPay = false;

console.log( auth ? 'Si esta autenticado' : 'Usuario sin autenticar' );
console.log( auth && canPay ? 'Si puede pagar' : 'No puede pagar' );
console.log( auth ? canPay ? 'Si esta autenticado y puede pagar' : 'Autenticado, pero no puede pagar' : 'No puede pagar' ); //if anidado