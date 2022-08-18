const arrN = [1,2,3,4,5,6,7,78];
const arrN2 = [22,33,4,6565,76547,84,2];

function getCalcRessult(arr, func, defVal){
    let result = defVal ? defVal : arr[0];
    const start = defVal ? 0 : 1;

    for(let i = start; i < arr.length; i++){
        result = func(result, arr[i]);
    }

    return result;
}

console.log('*', getCalcRessult(arrN, (prev, el) => prev * el));
console.log('-', getCalcRessult(arrN, (prev, el) => prev - el));
console.log('+', getCalcRessult(arrN, (prev, el) => prev + el));
console.log('odd/even', getCalcRessult(arrN2, (prev, el) => {
    el % 2 ? prev.odd++ : prev.even++;
    return prev;
}, { even : 0, odd : 0}));

console.log('odd/even', arrN2.reduce((prev, el) => {
    el % 2 ? prev.odd++ : prev.even++;
    return prev;
}, { even : 0, odd : 0}));