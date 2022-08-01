//!Типи даних 
/*
Number
String
Boolean

null
undefined

Object

Symbol
BigInt
*/


//? Копіювання по значенню
let n1 = 100;
let n2 = n1;
n1 = 200;

console.log(n1, n2);//200, 100

//? Копіювання по посиланню
const o1 = {
    name : 'Nick'
};

const o2 = o1;

o1.name = 'ne Nick';

console.log(o1, o2);
console.log(o1 === o2);

// let vs var
var1 = 'hello';
console.log(var1);
var var1 = 'jsdklfjsdfds';
console.log(var1);

// city = 'jjj';

// let city;

//let vs const
const o3 = {
    age : 100
};

o3.age = 34343;
o3.n = 55;
delete o3.age;

//Рядки
// "..." '...' `...`

const r = "Hello, it is////////////////// a \"ROBOT\"";
"Hello, it is a 'ROBOT'"

console.log(r);

//Шаблонні рядки
//Template strings

const greeting = `Hello ${ 5 * 6 - 9 + 22 }, my name is ${ o1.name }`;

console.log(greeting);

//Конкатенація 

const s1 = 'Hell';
const s2 = 'o';

console.log(s1 + s2 + s1 + s2 + s1 + s1);
console.log(`${ s1 + s2 }${ s2 }`);

console.log('%cHello', 'color: red; padding: 25px; background-color: white;');

// alert('Hello');
// const n = prompt('Enter your name', 'Ivan');
// const isHelp = confirm('Do you need a help?');