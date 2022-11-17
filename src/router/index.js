import { createRouter, createWebHashHistory } from 'vue-router'
import Mainpage from '../components/Mainpage.vue'
import Signup from '../components/Signup.vue'

const routes = [{
        path: '/',
        name: 'Mainpage',
        component: Mainpage
    },
    {
        path: '/Signup',
        name: 'products',
        component: Signup
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/Mainpage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router