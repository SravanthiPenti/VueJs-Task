import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import bootstrap from 'bootstrap-vue'
import {routes} from './routes/routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter);
Vue.use(bootstrap);
const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
