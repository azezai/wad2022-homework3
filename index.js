import { createRouter, createWebHashHistory } from 'vue-router'
import TheMainpage from '../components/TheMainpage.vue'
import TheSignup from '../components/TheSignup.vue'

const routes = [{
        path: '/',
        name: 'TheMainpage',
        component: TheMainpage
    },
    {
        path: '/TheSignup',
        name: 'products',
        component: TheSignup
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/TheMainpage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router