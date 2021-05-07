const app = Vue.createApp({
    data() {
        return {
            inputINN: '',
            title: 'INN',
            isCorrect: false,
            correct: '',
            dateBirthday: '',
            male: '',
            yearAnimal: '',
            zodiac: 'fg',
        }
    },
    methods: {
        decodeINN() {
            let inputINNVal = this.inputINN.split('');
            let controlSum = 0;
            if (inputINNVal.length == 10) {
                controlSum = inputINNVal[0] * -1 + inputINNVal[1] * 5 + inputINNVal[2] * 7 + inputINNVal[3] * 9 + inputINNVal[4] * 4 + inputINNVal[5] * 6 + inputINNVal[6] * 10 + inputINNVal[7] * 5 + inputINNVal[8] * 7;

                if (inputINNVal[9] == (controlSum % 11 % 10)) {
                    isCorrect = true;
                    if (this.isCorrect = true) this.correct = 'Верифицирован'
                    let birthdayNum = inputINNVal.slice(0, 5).join('');
                    let d = new Date(1899, 12, 31);

                    let options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    };
                    let dayZ = d.setDate(d.getDate() + (birthdayNum - 31));
                    console.log(d);
                    this.dateBirthday = `Дата рождения: ${d.toLocaleString("ru", options)}`;

                    console.log();
                    let input = 2006;
                    let animals = ["Обезьяны", "Петуха", "Собаки", "Свиньи", "Крысы", "Быка", "Тигра", "Кролика", "Дракона", "Змеи", "Лошади", "Козы"];

                    let animalIndx = d.getFullYear() % 12;
                    this.yearAnimal = `Ваш год ${animals[animalIndx]}`;

                    if (inputINNVal[8] % 2 == 0) {
                        this.male = "ИНН принадлежит женщине";
                    } else {
                        this.male = "ИНН принадлежит мужчине";
                    }
                    let month = d.getMonth() + 1;
                    let day = d.getDay()+7;
                    console.log(month, day);
                    if (month == 1 && day >= 20 || month == 2 && day <= 18) this.zodiac = "Водолей";
                    else if (month == 2 && day >= 19 || month == 3 && day <= 20) this.zodiac = "Рыбы";
                    else if (month == 3 && day >= 21 || month == 4 && day <= 19) this.zodiac = "Овен";
                    else if (month == 4 && day >= 20 || month == 5 && day <= 20) this.zodiac = "Телец";
                    else if (month == 5 && day >= 21 || month == 6 && day <= 21) this.zodiac = "Близнецы";
                    else if (month == 6 && day >= 22 || month == 7 && day <= 22) this.zodiac = "Рак";
                    else if (month == 7 && day >= 23 || month == 8 && day <= 22) this.zodiac = "Лев";
                    else if (month == 8 && day >= 23 || month == 9 && day <= 22) this.zodiac = "Дева";
                    else if (month == 9 && day >= 23 || month == 10 && day <= 22) this.zodiac = "Весы";
                    else if (month == 10 && day >= 23 || month == 11 && day <= 21) this.zodiac = "Скорпион";
                    else if (month == 11 && day >= 22 || month == 12 && day <= 21) this.zodiac = "Стрелец";
                    else if (month == 12 && day >= 22 || month == 1 && day <= 19) this.zodiac = "Козерог";
                    else zodiac = "Неверная дата!";
                } else {
                    this.correct = 'Неверифицирован'
                }
            } else {
                this.correct = "ИНН некорректно введен(недостаточно цифер)";
            }
        },
        getZodiac() {

        }
    },
    computed: {

    }
}).mount('#app');