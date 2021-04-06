
    const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    document.addEventListener('DOMContentLoaded', async function(){

        let rates   = await fetch(URL);
        rates       = await rates.json();

        console.log(rates);

    });
