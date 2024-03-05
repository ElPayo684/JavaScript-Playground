const efectivo = 300;
const credito = 800;
const available = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar){
    console.log('Pagando...');
}else{
    console.log('Fondos insuficientes!')
}
