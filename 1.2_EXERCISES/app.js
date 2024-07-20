const app = Vue.createApp({
  data() {
    return {
      name: "Sara",
      age: 18,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s'
    };
  },
  methods: {
    getFavoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
