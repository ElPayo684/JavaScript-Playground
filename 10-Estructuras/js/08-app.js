const auth = true;

if(auth){
    console.log('Usuario Auntenticado!');
}else{
    console.log('Usuario no reconocido');
}

const score = 500;

function revisarPuntaje(){
    if(score > 400){
        console.log('Flawless!!')
        return; // Si se omite este return, tambien se ejecuta el if de abajo, lo cual no es deseable
    }
    if(score > 300){
        console.log('Good!!')
        return;
    }
}

revisarPuntaje();