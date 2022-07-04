import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap";
import "../src/assets/css/all.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
