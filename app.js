//BOM - Browser Object Model
//DOM - Document Object Model

//Пошук елемента
//getElementById -- 1 елемент, шукає по його id
const lessonName = document.getElementById('lesson-name');
//Зміна стилю
lessonName.style.color = 'red';
lessonName.style.fontFamily = 'Arial';
lessonName.style.textDecoration = 'underline';
//getElementsByClassName -- список елементів по імені класу
// const headersList = [...document.getElementsByClassName('headers')];
const headersList = Array.from(document.getElementsByClassName('headers'));
//Зміна того, що усередині
// headersList[0].innerText = 'EronDOMDOM';
headersList[0].textContent = 'EronDOMDOM';
console.log(headersList[0].textContent);
headersList[0].innerHTML = 'Eron<sup>DOM</sup>DOM<script>alert("Hello");</script>';
headersList[0].insertAdjacentHTML('afterend', '<strong>Hello</strong>');
//getElementsByTagName - список лементів по імені тегу
const metaList = document.getElementsByTagName('meta');
console.log(metaList);
const title = document.getElementsByTagName('title')[0];
title.innerText = 'Hohoho';

setTimeout(() => {
    document.body.style.backgroundColor = 'wheat';
}, 3000);


setInterval(() => {
    const t = title.textContent;
    title.textContent = t.slice(1)+t[0];
    generateRandomElement();
}, 1000);

//querySelector
//querySelectorAll
const strong = document.querySelector('h2+strong');
strong.style.border = '1px solid black';

const BODY_WIDTH = document.body.clientWidth;
const BODY_HEIGHT = document.body.clientHeight;

function r(from = 0, to = 100){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function rC(){
    return `rgb(${r(0, 255)},${r(0, 255)},${r(0, 255)})`;
}

function generateRandomElement(){
    const wh = r(10, 40);
    const rad = r(0, 50);
    const t = r(0, BODY_HEIGHT);
    const l = r(0, BODY_WIDTH);
    const styles = `position: absolute;
    width : ${wh}px; 
    height : ${wh}px;
    border: 1px solid black; 
    border-radius: ${rad}%; 
    top : ${t}px; 
    left : ${l}px;
    background-color: ${rC()};`;
    const div = `<div style="${styles}"></div>`;
    document.body.insertAdjacentHTML('beforeend', div);
}