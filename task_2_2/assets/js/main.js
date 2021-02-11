//import {arr} from './ikao.js';

let arr = new Map
arr.set('A','Альфа')
    .set('B','Браво')
    .set('C','Чарлі')
    .set('D','Дельта')
    .set('E','Еко')
    .set('F','Фокстрот')
    .set('G','Ґольф')
    .set('H','Говтел')
    .set('I','Індія')
    .set('J','Джульєтт')
    .set('K','Кіло')
    .set('L','Ліма')
    .set('M','Майк')
    .set('N','Новембер')
    .set('O','Оскар')
    .set('P','Папа')
    .set('Q','Квебек')
    .set('R','Ромео')
    .set('S','Сьєрра')
    .set('T','Танґо')
    .set('U','Юніформ')
    .set('V','Віктор')
    .set('W','Віскі')
    .set('X','Ікс-рей')
    .set('Y','Янкі')
    .set('Z','Зулу')
    .set('1','Один')
    .set('2','Два')
    .set('3','Три')
    .set('4','Чотири')
    .set('5','П\'ять')
    .set('6','Шість')
    .set('7','Сім')
    .set('8','Вісім')
    .set('9','Дев\'ять')
    .set('0','Нуль');
//let regexp = new RegExp(/[A-Za-z0-9]/, "i");

let ikaoValue = prompt("Введите код ИКАО:");
//ikaoValue = ikaoValue.match(regexp);

let ikao = [...ikaoValue];
ikao = ikao.map((x)=> {return x.toUpperCase()});

for(let i = 0; i <= ikao.length-1; i++) {   
    if(arr.has(ikao[i])) {
        console.log( arr.get(ikao[i]))
    }
}

//console.log(ikao);