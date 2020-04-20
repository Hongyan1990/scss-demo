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
	},
	{
		path: '/2d',
		component: () => import('../views/Css2D.vue')
	},
	{
		path: '/3d',
		component: () => import('../views/Css3D.vue')
	},
	{
		path: '/transition',
		component: () => import('../views/Transition.vue')
	}
]

export default new Router({
	routes,
	mode: 'history'
})