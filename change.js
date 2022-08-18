const SPACE = '_';
const NO_SPACE = '';
const REG_DIG = /\d/;
const REG_LOW = /[a-zа-яїєё]/;
const REG_UPPER = /[A-ZА-ЯЇЄЁ]/;

export default function changeElemText(text) {
    const symbArr = text.split(NO_SPACE);
    const newElemText = [];

    for(let symb of symbArr){
        let stat = symb;

        if(REG_DIG.test(symb)) stat = SPACE;

        if(REG_LOW.test(symb)) stat = symb.toUpperCase();

        if(REG_UPPER.test(symb)) stat = symb.toLowerCase();
                
        newElemText.push(stat);
    }

    return newElemText.join(NO_SPACE);
}
