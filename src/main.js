import { createApp } from 'vue'
import App from './App.vue'
// import './firebase'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Bootstrap-vue currently only supports vuejs 2.
// You need to include bootstrap via script in index.html

import router from './router.js'


const app = createApp(App)
// const router = new VueRouter({
//     routes // short for `routes: routes`
// })
app.use(router)
app.mount('#app')

