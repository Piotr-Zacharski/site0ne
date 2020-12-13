const shop = Vue.createApp({
    data() {
        return {
            showTitle: false,
            title: 'SKLEP WKRÓTCE - wykonany w VUE.js'
        }
    },
    methods: {
        toggleShowTitle() {
            this.showTitle = !this.showTitle

        }
    }
})

shop.mount('#root')