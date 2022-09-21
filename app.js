const t = 'ІЇХ2334452341235123451234514351345143';
const regPasport = /^\p{L}{2}\d{6}$/u;
const regMistPhone = /[\s\(\)\-\+]/g;
const regPhone = /^\d{12}$/;
const errors = ['Hello', 'this', 'is'];

const mResult = regPasport.test(t);
// console.log(mResult);
// console.log(errors.toString());

let a = 0;
let b = 33;
b &&= a;
// console.log(b);
let c = 3;
let d = 0;
d ||= c;
// console.log(d);
let e = 6;
let f = 0;
f ??= e;
// console.log(f);

const user = {
    name : 'Nick',
    // sayHi : {}
}

// console.log(user.age);
// if(user.sayHi && typeof user.sayHi == 'object'){
//     console.log(user.sayHi());
// }
// console.log(user.sayHi?.());
// console.log('Some code!!!!!!!!!!!!!!!');

function hello(){
    const user = {
        name : 'inner User'
    };

    console.log(user);
    console.log(globalThis.user);
}

hello();