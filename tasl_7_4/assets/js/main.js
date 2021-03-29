let arr1 = [3, 6, 7, 9];
let arr2 = [56, 78, 34, 7, 89, -52, 1, 6, 45, 99, 3, -5, 0];


let tmp = arr2.slice(0); // чтобы не изменять порядок элементов в исходном массиве, если это критично
tmp.sort(new Function('x, y', 'return x - y')); // если не критично, то вместо tmp пропишите mas

console.log(tmp.slice(0, 2));
