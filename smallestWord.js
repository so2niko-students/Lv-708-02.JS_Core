let line = prompt("Enter a sentence to get a length of smallest word:");
    let sentence = line.split(' ');//масив зі слів в реченні  
    let wordsLength = [];

    for(let i = 0; i < sentence.length; i++){//прохід по кожному слову
        let wordArr = Array.from(sentence[i]); //масив з букв з і-того слова     
        wordsLength.push(wordArr.length);//запис довжини масива зі слова в окремий масив для довжин слів
    }

    wordsLength.sort((a, b)=> a-b);//сортування по масиву з довжинами слів
    console.log(wordsLength);
    alert(wordsLength[0]);//результат undefined