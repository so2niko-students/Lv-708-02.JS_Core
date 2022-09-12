import move from './move.js';

export default class Person{
    static count = 0;
    #races = ['Human', 'Elf', 'Dwarf', 'Dragon', 'Halfling', 'Nord', 'Orc', 'Verewolf'];
    #classes = ['Paladin', 'Mage', 'Warrior', 'Hunter', 'Rogue', 'Wizard', 'Druid', 'Trader', 'Pirate'];
    #colors = ['white', 'red', 'lightblue', 'yellow', 'green', 'black'];
    #ages = {
        Human : [18, 80],
        Elf : [18, 1000],
        Dwarf : [50, 300],
        Dragon : [100, 1000],
        Halfling : [50, 300],
        Nord : [18, 80],
        Orc : [5, 20],
        Verewolf : [50, 300]
    };
    race;
    class;
    age;
    hp;
    mp;
    power;
    #top;
    #left;
    constructor(name){
        Person.count++;
        this.name = name;
        this.color = this.#ranArr(this.#colors);
        this.#generateRace();
        this.#generateClass();
        this.#generateAge();
        this.#generateHPMPPW();

        this.info();
        this.#generateDOM();

        this.id = setInterval(this.#tick.bind(this), 1000);
    }

    #tick(){
        // console.log(this);
        const [t, l] = move(this.#top, this.#left);
        this.#top = t;
        this.#left = l;
        this.#move();
    }

    #move(){
        this.link.style.top = `${ this.#top }%`;
        this.link.style.left = `${ this.#left }%`;
    }

    #generateDOM(){
        this.link = document.createElement('div');
        this.link.classList.add('person');

        this.#top = this.#random(0, 100);
        this.#left = this.#random(0, 100);

        this.#move();
        this.link.style.backgroundColor = this.color;
        this.link.style.width = `${ this.age }px`;
        this.link.style.height = `${ this.age }px`;
        this.link.title = this.name;

        this.link.addEventListener('click', () => this.info());

        document.body.append(this.link);
    }

    info(){
        const style = `color:${ this.color }`;

        const info = `%c${ this.name } : ${ this.race } ${ this.class } ${ this.age } ${ this.hp }HP ${ this.mp }MP Power--${ this.power }`;

        console.log(info, style);
    }

    #generateRace(){
        this.race = this.#ranArr(this.#races);
    }

    #generateClass(){
        this.class = this.#ranArr(this.#classes);
    }

    #generateAge(){
        const [from , to] = this.#ages[this.race];
        this.age = this.#random(from, to);
    }

    #generateHPMPPW(){
        this.hp = this.#random(100, 1000);
        this.mp = this.#random(100, 1000);
        this.power = this.#random(100, 1000);
    }

    #ranArr(arr){
        return arr[this.#random(0, arr.length)];
    }

    #random(from = 0, to = 10){
        return Math.floor(Math.random() * (to - from) + from);
    }
}