import Person from "./game.js";

//ООП
const ser1 = {
    name: 'House of Dragon',
    startDate : '2022-08-15',
    count : 12,
    rating : 4.93
}

//Функція конструктор
function Serial(name, startDate, count, rating){
    this.name = name;
    this.startDate = startDate;
    this.count = count;
    this.rating = rating;
}

const ser2 = new Serial('House of Dragon', '2022-08-15', 12, 4.93);

class Series{
    constructor(name, startDate, count, rating){
        this.name = name;
        this.startDate = startDate;
        this.count = count;
        this.rating = rating;
    }
}

const ser3 = new Series('House of Dragon', '2022-08-15', 12, 4.93)

// console.log(ser1, ser2, ser3);
// console.table([ser1, ser2, ser3]);

const users = ['Mykola', 'Maksym', 'Bohdan', 'Serhii D', 'Anastasiia', 'Serhii L'];

const team = users.map(el => new Person(el));
// console.table(team);
console.log(Person.count)