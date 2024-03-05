const user = true;
const ready2Pay = false;

if (user && ready2Pay){
    console.log('Si puedes comprar!')
}else if(!user){
    console.log('No es usuario')
}
else if(!ready2Pay){
    console.log('Fondos inexistentes')
}else{
    console.log('No puedes comprar')
}