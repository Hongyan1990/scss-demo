import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'

import router from './routes/router.js'

Vue.use(Router)

new Vue({
	router,
	render: h => h(App)
}).$mount('#root')