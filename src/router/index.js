import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index.vue"
import Login from "../views/log.vue"
import Store from "../views/store.vue"
import Order from "../views/order.vue"


Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index
	},
	{
		path:"/store",
		component:Store,
		props:true
	},
	{
		path: "/reg",
		name: "Reg",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "reg" */ "../views/Reg.vue")
	},
	{
		path:"/log",
		component:Login
	},
	{
		path:"/order",
		component:Order
	}
]

const router = new VueRouter({
	routes
})

export default router
