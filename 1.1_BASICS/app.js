// 1 - CREATING AN APP
const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn vue",
    };
  },
});

app.mount("#user-goal");
