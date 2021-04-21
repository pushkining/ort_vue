const URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"

const appConfig = {
    data() {
        return {
            appTitle: 'Калькулятор NBU',
            ratesList: []
        }
    },
    methods: {

    },
    async mounted() {
        let data = await fetch(URL);
        data = await data.json();
        data = data.map(i => ({ quantity: 0, ...i }));
        this.ratesList = data;
    },
    computed: {
        totalCost() {
            let sum = this.ratesList.reduce((acc, i) => acc + i.rate * i.quantity, 0);
            return sum.toFixed(2);
        }
    },
}
const app = Vue.createApp(appConfig);

/*============================*/
const componentConfig = {
    props: ['rateInfo'],
    template: `<div class="m-1">
    {{rateInfo.txt}} <input type="number" v-model="rateInfo.quantity" min="0">  x {{rateInfo.rate}}
     = {{(rateInfo.rate*rateInfo.quantity).toFixed(2)}} грн.</div>`
}

app.component("nbu-item", componentConfig)

app.mount("#app");