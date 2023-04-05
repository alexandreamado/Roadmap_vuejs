new Vue({
    el: '#challenge',
    data: {
        valor: ''
    }, 
    methods: {
        exibirAlerta() {
            alert("Estou Alertando!!")
        },
        aletarValor(event) {
            this.valor = event.target.value
        }
    }
})