let arr1 = [3, 6, 7, 9];
let arr2 = [56, 78, 34];

function sad() {
    return false;
}

function das() {
    console.log('yyyyyyyyyy');
}

arr2.__proto__ = das;
arr1.__proto__ = sad;

console.log(arr1);
console.log(arr2);

let a = sad();
console.log(a);