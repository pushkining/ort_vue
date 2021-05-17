const appConfig = {
    data() {
        return {
            appTitle: "Vue components App",
            uname: '',
        }
    },
    methods:{
        signalEvent(c) {
            console.log(c);
        }
    },
}
const app = Vue.createApp(appConfig);

/*============================*/
const componentConfig = {
    data() {
        return {
            counter: 0,
        }
    },
    props:['userName'],
    emits:['signal'],
    template: `<div @click="counter++; $emit('signal', counter)" class="alert alert-success"> Hello <b>{{userName}}</b><br>{{counter}}</div>`
}

app.component("user-component", componentConfig)

app.mount("#app");