import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HelloWorld from './components/HelloWorld.vue'
import HomePage from './pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HelloWorld},
    { path: '/HomePage', component: HomePage}
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

export default router