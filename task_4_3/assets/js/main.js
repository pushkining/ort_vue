

let outputCard = document.querySelector('#outCard1');
const master_card = new Set(["51", "52", "53", "54", "55", "22", "23", "24", "25", "26", "27"]);
const visa = new Set(["4026", "4175", "4508", "4844", "4913", "4917", "4"]);
const maestro = new Set(["0604", "5018", "5020", "5038", "5893", "6304", "6759", "6761", "6762", "6763"]);

function detectCard() {
    let user = {};
    let inputCardValText = "";
    let inputCard = document.querySelector('#inputCard');
    inputCardValText = inputCard.value;
    
    inputCard =  inputCardValText.replace(/\D/g, '');
    //let inputCardVal1 = inputCard.split('');

    user.card = inputCard;
    let inputCardVal = [...inputCard].join('');


    let segment4 = inputCardVal.slice(0, 4);
    let segment2 = inputCardVal.slice(0, 2);
    let segment1 = inputCardVal.slice(0, 1);

    //inputCardVal.map(string => parseInt(string));
    let sum = 0;
    let bEven = false;
    //card = inputCardVal.replace(/\D/g, '');

    for (let n = inputCardVal.length - 1; n >= 0; n--) {
        let nDigit = parseInt(inputCardVal.charAt(n), 10);

        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }

        sum += nDigit;
        bEven = !bEven;
    }
    let correct = sum % 10 == 0;
    if (correct == true) {
        user.correct = true;
        if (visa.has(segment1)) {
            user.paymentSystem = 'visa';
            user.accepted = true;
        } else if (master_card.has(segment2)) {
            user.paymentSystem = 'master_card';
            user.accepted = true;
        } else if (maestro.has(segment4)) {
            user.paymentSystem = 'maestro'
            user.accepted = true;
        } else {
            user.paymentSystem = 'another'
        }
    } else {
        user.correct = false;
    }
    console.log(user);
}

function again() {
    window.location.reload();   // Удобно дебажить с ней
}