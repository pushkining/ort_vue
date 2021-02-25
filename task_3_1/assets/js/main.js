

let form = document.forms.credit;
let term = form.elements.termCredit;
let sum = form.elements.sumCredit;
let rate = form.elements.rateCredit;
let outputData1 = document.querySelector('.outputCredit1');
let outputData2 = document.querySelector('.outputCredit2');
let outputData3 = document.querySelector('.outputCredit3');

function calcMoney() {
    rate = (rate.value);
    sum = sum.value;
    term = term.value;
    //let rateMonth = ((1 + rate)) ** (1 / 12) - 1;
    //let ratio = (rateMonth * ((1 + rateMonth) ** term)) / ((1 + rateMonth) ** term - 1);
    //let sumMonth = ratio * sum;
    let rateMonth = rate /12 /100;
    let sumMonth = (sum * (rate / (12 * 100))) / (1 - (1 + rate / (12 * 100)) ** (-term))
    let repay = sumMonth * term - sum;
    let balance = sum;

    outputData1.innerHTML = `Ежемесячный платёж: ${sumMonth.toFixed(2)} грн.`;
    outputData2.innerHTML = `Переплата: ${repay.toFixed(2)} грн.`;
    
    for (let i = 1; i <= term; i++) {
        let onRateMonth = 0;
        let onBodyMonth = 0;

        onRateMonth = balance * rateMonth;
        onBodyMonth = sumMonth - onRateMonth;
        balance = balance - onBodyMonth;
        
        outputData3.innerHTML += `<pre><td>${i}</td>     <td>${balance.toFixed(2)}</td>     <td>${onBodyMonth.toFixed(2)}</td>     <td>${onRateMonth.toFixed(2)}</td></br>` 
        console.log(balance.toFixed(2), onBodyMonth.toFixed(2), onRateMonth.toFixed(2));
    }

}

function again() {
    window.location.reload();
}