
(async function () {

    const URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    let rates = await fetch(URL);
    rates = await rates.json();

    // const re = /[A-Z]{3} *\d+/g;
    // phones_ul.innerHTML = phones_ul.innerHTML.replace(re, function (item) {
    //     item = item.split(' ');
    //     let code = item[0];
    //     let price = +item[1];
    //     let rate = rates.filter(i => i.cc == code)[0].rate;
    //     //rate = rate;

    //     return (price * rate).toFixed(2) + ' грн';
    // });

    let prices = document.querySelectorAll('ul li span');
    for (let item of prices) {
        let price = item.innerHTML.split(' ');
        
        let code = price[0];
        price = +price[1];
        let rate = rates.filter(i => i.cc == code)[0].rate;    
        item.innerHTML = (rate*price).toFixed(2) + ' грн.';
    }
})()