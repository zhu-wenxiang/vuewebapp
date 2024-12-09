import { createApp } from "vue";
import App from "./App.vue";
console.log(process.env.VUE_APP_TEST);

createApp(App).mount("#app");
