const app = Vue.createApp({
  data() {
    return {
      output: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World");
    },
    changeOutput(event) {
      this.output = event.target.value;
    },
  },
});

app.mount("#assignment");
