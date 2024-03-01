// Default Parameters

function hello(firstName = 'Sr', lastName = 'Snow'){
    console.log(`Hola! ${firstName} ${lastName}, es bueno tenerte de vuelta!`);
}

hello('Eddard', 'Stark'); //Output: Hola! Eddard Stark, es bueno tenerte de vuelta!
hello('Juan'); //Output: Hola! Juan Snow, es bueno tenerte de vuelta!