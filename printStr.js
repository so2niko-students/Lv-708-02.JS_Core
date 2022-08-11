//return [width : integer, symbol : string]
function getUserInput(){
    let width;
    let symbol;
    let isWrongData = true;

    do{
        width = Number(prompt('Enter a width (an integer, greater than 0)', 1));
        symbol = prompt('Enter a symbol', '*');

        // isWrongData = width <= 0 || !Number.isInteger(width);
        isWrongData = width <= 0 || width % 1;
    }while(isWrongData);

    return [width, symbol];
}

function getStringByWidthAndSymb(width, symb){
    const arrOfSymbols = [];

    for (let i = 0; i < width; i++) {
        arrOfSymbols[i] = symb;
    }

    return arrOfSymbols.join('');
}

function showInConsole(){
    //Введення даних користувачем
    const [width, symb] = getUserInput();

    //Формування рядка
    const outputString = getStringByWidthAndSymb(width, symb);

    //Консоль ряда
    console.log(outputString);
}


showInConsole();