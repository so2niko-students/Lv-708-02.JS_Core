//!Як ми можемо створити функцію 
//function declaration -- hoisting
function show1(){

}
//function expression
const show2 = function(){

}

//!В чому різниця між звичаною функцією та arrow function
//Немає імені, тільки через function expression створюється
//Немає this - контексту
//Немає arguments
function show(){
    console.log(arguments);
}

show(1);
show(34, 44, 66, 22, 11, 'Hello', { name : 'Olaf' });

//!Що повертає функція, у якої нема return?
//undefined

//!Що таке IIFE?
//Immidiately Invoked Function Expression
(function(){
    console.log('I am anon!');
})();