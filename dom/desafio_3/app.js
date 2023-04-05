new Vue({
    el: "#app",
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ?
                'valor igual' : 'valor diferente'
        }
    },

    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    }
})