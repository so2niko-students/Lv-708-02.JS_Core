//! .forEach

function myForEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i], i, arr);
    }
}

const temps = [12, 33, 2, 67];

// myForEach(temps, (el, i, nums) => console.log(`${ i }: ${ el }, ${ nums }`));

// temps.forEach((el, j, nums) => console.log(`${ j }: ${ el }, ${ nums }`));

//! .map

function getSq(el){
    return el ** 2;
}

function getNiceStr(el, i){
    return `${ i } : ${ el }`;
}

function myMap(arr, func){
    const sqArr = [];
    for(let i = 0; i < arr.length; i++){
        const sq = func(arr[i], i, arr);
        sqArr.push(sq);
    }

    return sqArr;
}

// console.log(myMap(temps, getSq));
// console.log(myMap(temps, getNiceStr));

// console.log(temps.map(getNiceStr));

//! .filter

function getEven(el, i, arr){
    return !(el % 2);
}

function getOdd(el, i, arr){
    return el % 2;
}

function getDiv3(el, i, arr){
    return !(el % 3);
}

function myFilter(arr, func){
    const evN = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            evN.push(arr[i]);
        }
    }

    return evN;
}

// console.log(myFilter(temps, getOdd));
// console.log(myFilter(temps, getEven));
// console.log(myFilter(temps, getDiv3));

// console.log(temps.filter(getDiv3));

//! some/every

function mySome(arr, func){
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return true;
        }
    }

    return false;
}

// console.log(mySome(temps, getDiv3));
console.log(temps.some(getDiv3));