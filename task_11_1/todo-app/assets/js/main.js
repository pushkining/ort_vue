// let nameUser = localStorage.getItem('nameUser');

// if(!nameUser) {
//     nameUser=prompt("Как Вас зовут");
//     localStorage.setItem('nameUser', nameUser)
// }

const appConfig = Vue.createApp({
    data() {
        return {
            newTxt: '',
            taskList: [],           
        }
    },
    updated() {
        localStorage.setItem('taskList',JSON.stringify(this.taskList))
    },
    mounted() {
        let data = localStorage.getItem('taskList')
        if(data) {           
            this.taskList = JSON.parse(data)
        }
    },
    methods: {
        addTask() {
            if(!this.newTxt.trim()) return;
            this.taskList.unshift({
                txt: this.newTxt, completed:false
            });
            this.newTxt = '';
        },
        deleteTask(index) {
            if(!confirm(`Are you sure ${this.taskList[index].txt}?`)){
                return
            }
            this.taskList.splice(index,1); 
        }
    },

}).mount('#app');