import Vue from 'vue'
import App from './App.vue'
import "./components"
import router from './router'
import store from './store'
import('./assets/icons/style.css');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
