// Switch case

const paymentMethod = 'credito';

switch(paymentMethod){
    case 'efectivo':
        console.log(`Pagaste con ${paymentMethod}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${paymentMethod}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${paymentMethod}`);
        break;
    default:
        console.log('Aun no selecionas un metodo de pago');
        break;
}