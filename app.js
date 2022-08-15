const goods = [
    {
        name : 'Cup',
        price : 15,
        amount : 100
    },
    {
        name : 'Mug',
        price : 25,
        amount : 20
    },
    {
        name : 'Glass',
        price : 5,
        amount : 1000
    }
];

for(let good of goods){
    const out = `${ good['name'] }: $${ good['price'] }. In warehouse: ${ good.amount }`;
    console.log(out);
}

let array = [1.2, 3, "***"]  
     
let arithmeticOperations = {
    "-": function (a, b) {return a - b},
    "+": function (a, b) {return a + b},
    "*": function (a, b) {return a * b},
    "/": function (a, b) {return a / b},
}

let result = arithmeticOperations[array[2]](array[0], array[1]);

console.log(result);