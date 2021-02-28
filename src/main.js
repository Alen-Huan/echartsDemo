import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import Vcomp from './components/index'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.min.js'

Vue.config.productionTip = false
// 使用粒子特效
Vue.use(VueParticles)

Vue.use(Vcomp)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
