
// const date = new Date(2021, 1, 28);
// let options = {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
// };
//console.log(date.toLocaleString("ru", options));

let current = new Array();
const start = Date.now();
for (let i = 20210128; i >= 20210101; i--) {
    let URL = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${i}&json`
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', URL, false);
    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        current.unshift(data);
    }
    xhr.send();
}
for (let j = 0; j < current.length; j++) {
    console.log(`Дата: ${current[j][0].exchangedate} Курс: ${current[j][0].rate}`);
}
const finish = Date.now();

console.log(finish - start, "ms");

