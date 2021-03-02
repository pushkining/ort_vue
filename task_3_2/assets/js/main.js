
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/ovdp?json';
const today = '2021-02-25';

let sum = 0;
let endPeriod = '2022-01-01'
let xhr = new XMLHttpRequest();

xhr.open('GET', URL);

xhr.onload = function () {
    let outputPlace = document.querySelector('#outputPlace');

    let data = JSON.parse(xhr.responseText);

    let repayDate = '';


    for (let item of data) {
        repayDate = item.repaydate.split('.').reverse().join('-');
        item.repaydate = repayDate;
    }
    data.sort((a, b) => a.repaydate - b.repaydate);
    for (let item of data) {
        if (repayDate > today) {
            sum++;
            if (data.valcode == 'USD') {
                item.attraction = (item.attraction * 28);
            } else if (data.valcode == 'EUR') {
                item.attraction = (item.attraction * 33);
            } else {
                item.attraction = item.attraction;
            }

            //outputPlace.innerHTML += `<pre style="margin: 0;">Дата: ${repayDate} Сумма:  ${item.attraction} ${item.valcode}</br>`;
            console.log(`Дата: ${repayDate} Сумма: ${item.attraction} ${item.valcode}`)
        }

    }
    //console.log(data);
    /* Далее, в этой функции, вам доступна переменная data с загруженными данными */

    /* Конец функции обработки события загрузки данных */
}
xhr.send();

