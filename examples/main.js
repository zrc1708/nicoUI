import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import niUI from '../packages/index'
import './assets/global.css'

Vue.config.productionTip = false

Vue.use(niUI)

import './assets/atom-one-dark.css'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
