import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Styles from './styles/style.scss'
import axios from 'axios'


Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
