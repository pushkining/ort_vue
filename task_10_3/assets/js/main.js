const URL = 'https://restcountries.eu/rest/v2/all';

Vue.createApp({
    data() {
        return {
            sortField: '',
            sortDirection: true,
            countriesList: [],
            search: '',
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
                if(!item[key])continue;
                if(item[key].toString()
                        .toLowerCase()
                            .includes(s)){
                    return true;
                }
            }
            return false;            
        },
        getFlags(code) {
             this.countriesList.alpha3Code = code;        
             let URL = `https://restcountries.eu/data/${code.toLowerCase()}.svg`;
             return URL;
        }        
    },

    computed: {
        showList() {
            let result = this.countriesList.filter(i => this.isOK(i));
            if (this.sortField) {
                result.sort((a, b) => {
                    if (this.sortDirection) {
                        return a[this.sortField] > b[this.sortField] ? 1 : -1;
                    } else {
                        return a[this.sortField] > b[this.sortField] ? -1 : 1;
                    }
                });
            }
            return result;
        },
        
    },

    async mounted() {
        let data = await fetch(URL);
        data = await data.json();


        this.countriesList = data;
        this.bordersList = this.countriesList.borders
    },

}).mount('#app');