let age = prompt('Вкажіть ваш вік.','');
let pensionAge = prompt('Вкажіть вік виходу на пенсію.','');
let currentDate = new Date();

const yearsToPens = pensionAge - age;
const pensYear = currentDate.getFullYear() + yearsToPens;

alert(`До пенсії вам залишилося ${ yearToPens } років. Цу буде в ${ pensYear } році.`);