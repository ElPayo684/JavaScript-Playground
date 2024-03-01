const funcionNormal = function(language){
    console.log(`Aprendiendo ${language}!`);
}
funcionNormal('JavaScript');

const ArrowFunction = language => `Aprendiendo ${language}!`; // Si el parametro unicamente es uno, se omiten los ()

console.log(ArrowFunction('Python'));

const ArrowFunction2 = (language, language2) => `Aprendiendo ${language} y ${language2}!`; 

console.log(ArrowFunction2('JavaScript', 'Node.js'));