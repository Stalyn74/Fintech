import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import Factura from '../components/Factura.vue';
import Inicio from '../components/Inicio.vue';
import Agregartienda from '../components/Agregartienda.vue';
import Listatiendas from '../components/Listatiendas.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/factura',
        name: 'factura',
        component: Factura
    },

    {
        path: '/inicio',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/agregartienda',
        name: 'agregartienda',
        component: Agregartienda
    },
    {
        path: '/listatienda',
        name: 'listatienda',
        component: Listatiendas
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
