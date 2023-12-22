// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const app = createApp(App);
app.config.globalProperties.$Chart = Chart;
app.mount("#app");
