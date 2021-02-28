import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component:()=> import('@/views/Login.vue'),
        meta: {
            title: '登录界面'
        }
    },
    {
        path: '/login',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  })
  
// 全局前置守卫
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})
  export default router