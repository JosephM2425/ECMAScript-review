// PARAMETROS POR DEFECTO
function newFunction(name, age, country) {
    var name = name || 'joseph';
    var age  = age || 32;
    var country = country || 'CR';

    console.log(name, age, country)
}

// ES6 | PARAMETROS POR DEFECTO
function newFunction2(name = 'joseph', age = 19, country = 'CR') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('pedro', 49, 'CO')

// Template Literal
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;


// ES6 TEMPLETE LITERAL
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea
let lorem = "Quiero escribir una frase epica para poder separarla y aprender ES6 \n"
+ "otra frase epica que necesitamos."

// ES6 multilinea
let lorem2 = `Otra frase epica que necesitamos
Mas contenido de la frase epica
`;
console.log(lorem);
console.log(lorem2);

// Multielementos - Destructurar elementos
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'COL'
}
console.log(person.name, person.age);

// Destructurar elementos ES6
let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagacion - expandir elementos
let team1 = ['Joseph', 'Gabriel', 'Ricardo'];
let team2 = ['Valery', 'Jessica', 'Camila'];

// Introducimos dentro de education los elementos que estan en el team1 y team2(...team1)
let education = ['David', ...team1, ...team2];
console.log(education); 

// Variables ES6 
// Scope Global con VAR
{
    var globalVar = 'Global Var';
}
// Scope especifico con LET
{
    let globalLet = 'Global let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
console.log(a);

// Propiedad de objetos mejorada ES6

let name = 'Joseph';
let age = 19;
// ES6
obj = { name : name, age: age};

// ES6
obj2 = { name, age };
console.log(obj2);

// Arrow function ES6
const names = [
    {name: 'Joseph', age: 20},
    {name: 'Jessica', age: 24}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    // More Code
}

const listOfNames4 = name => {
    // More code
}

const square = num => num * num;

// Promesas - Promises - JS no es sincronico
// Manejamos el Asincronismo con las promesas 

const helloPromise = () => {
    // resolve or reject
    return new Promise((resolve, reject) =>{
        if (false){
            resolve('Hey!');
        }else{
            reject('Ops!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


// Clases 

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

// Modules
import hello from './module';
hello();

// Generators

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);