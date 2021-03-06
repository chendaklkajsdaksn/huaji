import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./assets/common.css"
import "regexp"
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
axios.defaults.baseURL='http://127.0.0.1:4000'
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")
