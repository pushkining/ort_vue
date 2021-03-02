
let data = [
    {
        name: 'Ivan',
        rate: 189
    },

    {
        name: 'Ivan',
        rate: 161
    },
    {
        name: 'Elena',
        rate: 189
    },
    {
        name: 'Marina',
        rate: 177
    },
    {
        name: 'Olga',
        rate: 200
    },
    {
        name: 'Petr',
        rate: 167
    },
    {
        name: 'Sergey',
        rate: 154
    },
    {
        name: 'Igor',
        rate: 192
    },
    {
        name: 'Taras',
        rate: 176
    },
    {
        name: 'Semyon',
        rate: 145
    }

];
console.log(data);
// for (let j = 0; j < data.length - 1; j++) {
//     for (let i = 0; i < data.length - j - 1; i++) {
//         if (data[i].rate < data[i + 1].rate) {
//             let temp = data[i];
//             data[i] = data[i + 1];
//             data[i + 1] = temp;
//         }
//     }
// }
data = data.sort();

let a = data.slice(0, 3);
console.log(a, data)