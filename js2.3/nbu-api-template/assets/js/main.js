
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/ovdp?json';
const today = '2021-02-21';

let sum = 0;
let endPeriod = '2022-01-01'
let xhr = new XMLHttpRequest();

xhr.open('GET', URL);

xhr.onload = function () {

    let data = JSON.parse(xhr.responseText);

    console.log(data);

    for (let item of data) {
        let repayDate = item.repaydate.split('.').reverse().join('-');

        if (repayDate > today && repayDate < endPeriod) {
            if (data.valcode == 'USD') {
                sum += (item.attraction * 28);
            }else if(data.valcode == 'EUR'){
                sum += (item.attraction * 33);
            }else{
                sum += item.attraction;  
            }
        }
    }
    console.log(sum / 1e9);
    /* Далее, в этой функции, вам доступна переменная data с загруженными данными */

    /* Конец функции обработки события загрузки данных */
}
xhr.send();

