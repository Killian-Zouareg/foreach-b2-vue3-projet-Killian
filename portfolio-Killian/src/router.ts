import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Card from './components/Card.vue'
import HomePage from './pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Card},
    { path: '/HomePage', component: HomePage}
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

export default router