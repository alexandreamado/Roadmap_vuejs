new Vue({
  el: "#desafio",
  data: {
    name: "Alexandre Amado",
    age: 24,
    linkIMg: 'https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2020/06/cuidar-de-gato-capa.png&nocache=1'
  },

    methods: {
        idadeTreves() {
            return this.age * 3
            
    },
    ramdoAge() {
      return Math.random();
    },
  },
});
