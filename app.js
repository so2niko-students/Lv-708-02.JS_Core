//Оператори

//!По кількості операндів
//унарні
let a = 3;
+a;
++a;
a++;
--a;
a--;
-a;
typeof a;
new Date();
~a;
!a;
//...

//бінарні
a = 33;
a += 3;
a += 3;
a += 3;
a += 3;
a += 3;
a += 3;
a * 3;
a - 555;
a + 4;
a ** 3;
true || false;
true && false;

//...

//тернарні
if(a == 3){
    //alert('3');
    ///
}else{
    //alert('not 3');
}

// a == 3 ? //alert('3') : //alert('not 3');

let age = ~~(Math.random() * 100);
let ageName;

if(age <= 20){
    ageName = 'Падаван';
}

if(age > 20 && age <= 40){
    ageName = 'Джедай';
}

switch(age){
    case 5 :
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
    case 12 :
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 17 :
    case 18 : {
        //alert('sdlkfjasdl;kfjsd;');
        break;
    }
    case 30 : {
        //alert('Криза 1');
        break;
    }
    case 40 : {
        //alert('Криза 2');
        break;
    }
    case 65 : {
        //alert('Час купити мотоцикл');
        break;
    }
}

switch(true){
    case age <= 20 : {
        ageName = 'Падаван';
        break;
    }
    case age > 20 && age <= 40: {
        ageName = 'Джедай';
        break;
    }
}

//Значення за замовчуванням

function show(text){
    // text = text || 'Текст за замовчуванням';
    text && console.log(text);
}

show('hello');
show();