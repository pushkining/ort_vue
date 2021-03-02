
let inputINN = document.querySelector('#inputINN');
let outputINN1 = document.querySelector('#outINN1');
let outputINN2 = document.querySelector('#outINN2');
let outputINN3 = document.querySelector('#outINN3');
let d = new Date(1899, 12, 31);

let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
//console.log(d.toLocaleString("ru", options));

function detectINN() {

    let inputINNVal = inputINN.value.split('');
    let controlSum = 0;
    if (inputINNVal.length == 10) {
        controlSum = inputINNVal[0] * -1 + inputINNVal[1] * 5 + inputINNVal[2] * 7 + inputINNVal[3] * 9 + inputINNVal[4] * 4 + inputINNVal[5] * 6 + inputINNVal[6] * 10 + inputINNVal[7] * 5 + inputINNVal[8] * 7;
        // console.log(controlSum);
        // console.log(controlSum % 11);
        if (inputINNVal[9] == (controlSum % 11 % 10)) {
            outputINN1.innerHTML = "ИНН верифицирован";
            let birthdayNum = inputINNVal.slice(0, 5).join('');

            d.setDate(d.getDate() + (birthdayNum - 31));    //Почему то считает на месяц вперед, пришлось перехитрить
            outputINN2.innerHTML = `Дата рождения: ${d.toLocaleString("ru", options)}`;

            if (inputINNVal[8] % 2 == 0) {
                outputINN3.innerHTML = "ИНН принадлежит женщине";
            } else {
                outputINN3.innerHTML = "ИНН принадлежит мужчине";
            }
        } else {
            outputINN1.innerHTML = "ИНН некорректный"
        }
    } else {
        outputINN1.innerHTML = "ИНН некорректно введен(недостаточно цифер)"
    }
}

function again() {
    window.location.reload();
}