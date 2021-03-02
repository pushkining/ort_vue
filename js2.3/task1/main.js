const sum = 1e5;
const term = 24;
const rate = 36;   // % year
const mRate = rate / 12 / 100; //Month rate in 0.03

let bodyPart = +(sum / term).toFixed(2);
let debt = sum;
let percentSum = 0;

for(let i =1; i <= term; i++) {
    if (i == term) { 
        bodyPart = debt;
    }
    let percentPart = +(debt * mRate).toFixed(2);
    let monthPayment = bodyPart + percentPart;
    debt -= bodyPart;
    debt = +debt.toFixed(2);
    console.log(`#${i} (${bodyPart} + ${percentPart} => ${monthPayment}) Долг:${debt}`)
    percentSum += percentPart;

}
console.log(`Сумма переплаты: ${percentSum}`);

