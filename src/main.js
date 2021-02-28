import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
// import '@/assets/styles/base.scss'
// import '@/assets/styles/common.scss'

Vue.config.productionTip = false
// 使用粒子特效
Vue.use(VueParticles)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
