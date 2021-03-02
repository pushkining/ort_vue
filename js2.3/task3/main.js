let arr = [435, 72, 7, 2, 89, 3, 88, 3, 90, 21, 14]
console.dir(arr);
let g = 0;

// for(let j = 0; j < arr.length - 1; j++) {
//     for (let i = 0; i < arr.length - j - 1; i++) {
//         g++;
//         if (arr[i] > arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i+1] = temp;
//         }
//          if(data.repaydate[i] > data.repaydate[i + 1]  {
//              let temp = data.repaydate[i];
//              data.repaydate[i] = data.repaydate[i+1];
//              data.repaydate[i+1] = temp;
//            } 
//     }
// }
let ass = arr.sort((a, b) => a - b)

console.dir(arr);
console.dir(ass);