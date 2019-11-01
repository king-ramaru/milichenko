import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import prognoz from './components/Prognoz.vue'
import store from './store.js'
import prognozInfo from './components/PrognozInfo.vue'
const routes = [
   { path: '/', component: prognoz },
   { path: '/prognozInfo/:name', component: prognozInfo },
]

const router = new VueRouter({
   routes
})

Vue.use(VueRouter)
new Vue({
   render: h => h(App),
   el: '#app',
   router,
   store,
})
