
let ticketValue = prompt("Введите свой билет:");

let ticket = [...ticketValue];

let left = ticket.slice(0,3);
let right = ticket.slice(3);
console.log(left, right);

let x = 0;
let y = 0;

for(let i = 0; i < left.length; i++) {
    x += +left[i];
    y += +right[i];
}
console.log(x, y);
if( x == y ) {
    console.log("Happy");
}else{
    console.log("Usual");
}