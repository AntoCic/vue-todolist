const { createApp } = Vue;

createApp({
  data() {
    return {
      inputVal: "",
      btnHover: null,
      tasks: [
        {
          text: "Prova task 1",
          done: false,
        },
        {
          text: "Prova task 2",
          done: true,
        },
        {
          text: "Prova task 3",
          done: true,
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.tasks.push({ text: this.inputVal, done: false });
      this.inputVal = "";
    },
    remuveTask(i) {
      this.tasks.splice(i, 1);
    },
  },
}).mount("#app");
