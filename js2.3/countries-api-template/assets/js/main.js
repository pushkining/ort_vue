
    const URL = 'https://restcountries.eu/rest/v2/all';


    let xhr = new XMLHttpRequest();

    xhr.open('GET', URL);

    xhr.onload = function(){

        let data = JSON.parse(xhr.responseText);

        console.log(data);

        /* Далее, в этой функции, вам доступна переменная data с загруженными данными */

        /* Конец функции обработки события загрузки данных */
    }

    xhr.send();
  