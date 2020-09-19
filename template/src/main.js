import Vue from 'vue'
import App from './App.vue'
import "./components"
import router from './router'
import('./assets/icons/style.css');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')