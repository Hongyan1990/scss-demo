import Router from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/scss'
	},
	{
		path: '/scss',
		component: () => import('../views/MyScss.vue')
	},
	{
		path: '/shadow',
		component: () => import('../views/BoxShadow.vue')
	},
	{
		path: '/gradients',
		component: () => import('../views/LinearGradients.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})