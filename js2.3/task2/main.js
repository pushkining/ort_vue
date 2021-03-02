let card = '4749388700048215';
let sum = 0;
card = [...card].reverse();
for (let i = 0; i < card.length; i++) {
    if (i % 2 == 0) {
        sum += +card[i];
    } else {
        let digit = +card[i] * 2;
        if (digit > 9) {
            digit -= 9;
        }
        sum += +card[i];
    }
}
let correct = sum % 10 == 0;

console.log(correct);

