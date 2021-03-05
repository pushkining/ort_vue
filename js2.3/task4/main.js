function luhnAlgorithm(value) {
    value = value.replace(/\D/g, '');

    var nCheck = 0;
    var bEven = false;

    for (var n = value.length - 1; n >= 0; n--) {
        var nDigit = parseInt(value.charAt(n), 10);

        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }
    console.log(typeof nDigit);
    return (nCheck % 10) == 0;
}
let card = "2221-0038-8501- 3006";
console.log(typeof card)
console.log(luhnAlgorithm(card));