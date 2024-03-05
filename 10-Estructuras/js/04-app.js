const money = 300;
const totalPayment = 500;
const tarjeta = true;

if(money >= totalPayment){
    console.log('Fondos sufucientes!');
}else if(tarjeta){ // Comprueba si la variable tiene el valor real 
    console.log('Deuda posible de pagar con su tarjeta!');
}else{
    console.log('Fondos insufucientes!');
}