import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
// define your routes here
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
