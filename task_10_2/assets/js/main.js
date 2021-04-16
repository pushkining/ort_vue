
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

Vue.createApp({

    data(){
        return {
            sortField: '',
            sortDirection: true,
            ratesList: [],
            search: '',
            selectedRate: null
        }
    },

    methods: {
        setSort(field){
            this.sortField = field;
            this.sortDirection = !this.sortDirection;
        },
        isOK(item){
            
            let s = this.search.toLowerCase();

            for(let key in item){
                if(item[key]
                    .toString()
                        .toLowerCase()
                            .includes(s)){
                    return true;
                }
            }
            return false;
            
        },
        show(item){
            this.selectedRate = item;
            rateDialog.showModal();
        },
        closeDailog(){
            rateDialog.close();
        }
    },

    computed: {
        showList(){
            let result = this.ratesList.filter(i => this.isOK(i));
            if(this.sortField){
                result.sort((a, b) => {
                    if(this.sortDirection){
                        return a[this.sortField] > b[this.sortField] ? 1 : -1;
                    }else {
                        return a[this.sortField] > b[this.sortField] ? -1 : 1;
                    }

                });

            }
            return result;
        }
    },

    async mounted(){
        let data = await fetch(URL);
            data = await data.json();

        console.log(data);

        this.ratesList = data;
    }

}).mount('#app');

