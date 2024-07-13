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
    {
        path: '/Agregartienda',
        name: 'Agregartienda',
        component: Agregartienda
    },

    {
        path: '/agregarcliente',
        name: 'agregarcliente',
        component: agregarcliente
    },
    {
        path: '/editarcliente',
        name: 'editarcliente',
        component: editarcliente
    },
    {
        path: '/listacliente',
        name: 'listacliente',
        component: listacliente
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
