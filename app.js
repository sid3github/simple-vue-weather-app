const app = Vue.createApp({
  data() {
    return {
      projectTitle: "Vue Weather App",
      inputValue: "",
      cityName: "",
      cityTemp: "",
      cityDesc: "",
      color: [
        "#f0f8ff",
        "#c6e3f7",
        "#c3e7e8",
        "#e5e8f2",
        "#efc5b5",
        "#e1d590",
        "#f3dfd4",
        "#fdee73",
        "#ecfcbd",
        "#98f6b0",
        "#b5cbbb",
        "#f3c775",
        "#efc0fe",
        "#f6dbd8",
        "#ffffe4",
        "#fef6be",
      ],
    };
  },
  methods: {
    async onSubmit() {
      let key = "d5b46d2bbe500860bf2bd3ad63f3c6fa";
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.inputValue +
          "&appid=" +
          key
      );
      const result = await res.json();
      console.log(result);
      this.cityName = result.name;
      this.cityTemp = Math.floor(result.main.temp - 273.15);
      this.cityDesc = result.weather[0].description;
      this.inputValue = "";
      let randomColor =
        this.color[Math.floor(Math.random() * this.color.length)];
      document.body.style.background = randomColor;
    },
  },
});

app.mount("#app");
