const n = prompt("Введіть номер квитка", "");

if (n.length !== 6) {
  alert("Помилка! Занадто мало символів");
}else{
    const num = Number(n);

    if (isNaN(num)) {
      alert("Помилка! Введено не коректне число");
    } else if (0 <= num && num <= 999999){
        const onePart = +n[0] + +n[1] + +n[2];
        const secPart = +n[3] + +n[4] + +n[5];

        if (onePart === secPart) {
          alert(`Ваш квиток щасливий`);
        } else {
          alert(`Ваш квиток, звичайний`);
        }
    }
}

