import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import Factura from '../components/Factura.vue';
import Inicio from '../components/Inicio.vue';
import Agregartienda from '../components/Agregartienda.vue';
import agregarcliente from '../views/Gestor cliente/agregarcliente.vue';
import editarcliente from '../views/Gestor cliente/editarcliente.vue';
import listacliente from '../views/Gestor cliente/listacliente.vue';

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
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
