import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import FontAwesomeIcon from "@/plugins/font-awesome";

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
