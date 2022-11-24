import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import SignUpView from "../views/SignUpView";

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/signup',
        name: 'SignUpView',
        component: SignUpView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router