import Vue from "vue";
import App from "./App.vue";
// import Vconsole from "vconsole";

// let vConsole = new Vconsole();
// Vue.use(vConsole);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
