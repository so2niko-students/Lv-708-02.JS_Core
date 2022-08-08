//!створення масиву

//літеральний
const names = ['Nick', 'Max', 'Serg'];
//об'єктний
const names2 = Array('Bohdan', 'Nataliia', 'Volodymyr');
const el = Array(12);
console.log(el);

//!масив-то об'єкт
names2.age = 200;

console.log(names2);

//!Методи масиву

//forEach

//map

//filter

//reduce

//some

//every

//!delete
delete names[0];

console.log(names);

//! маніпулювання length
const n = [1,2,3,4,5,6,7,8,9,10];
console.log(n);
// n.length = 3;
// console.log(n);
// n.length = 10;
// console.log(n);

//! slice/splice
// const sp1 = n.splice(2, 3);//Вирізання елементів
// n.splice(2, 0, 77, 88);//додаю дані у середину масиву
// const sp1 = n.splice(2, 3, 22, 33, 44, 55, 66, 77);
const sl1 = n.slice(2, 6);//від 2 до 6 не включно
const sl2 = n.slice(3);//до кінця
const sl3 = n.slice(2, -2);
const sl4 = n.slice(-4);
console.log(sl4);

//! Заповнення
// n.fill('Hello', 2, 5);
// console.log(n);
// console.log(sp1);

//! join/split
// const s1 = n.join('собака');
// console.log(s1);
// const n2 = s1.split('собака');
// const n3 = s1.split('');
// console.log(n3);
// const s2 = 'додаю дані у середину масиву';
// const n4 = s2.split(' ');
// console.log(n4);
