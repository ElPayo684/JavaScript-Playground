iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');
    segundaApp();
}

function segundaApp(){
    console.log('Hola desde la segunda funcion');
    userAutenticado('Eddard_Stark684');
}

function userAutenticado(user){
    console.log('Verificando usuario... espere...');
    console.log(`Usuario autenticado exitosamente! Bienvenido: ${user}`);
}