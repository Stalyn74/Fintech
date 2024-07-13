<template>
  <div id="app" :class="{ 'menu-open': isMenuOpen }">
    <aside class="menu" @mouseenter="isMenuOpen = true" @mouseleave="isMenuOpen = false">
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.section" :class="{ active: isActive(item.section) }">
            <template v-if="item.submenu">
              <a href="#" @click.prevent="toggleSubmenu(item.section)">
                <i :class="`fa ${item.icon}`"></i>
                <span>{{ item.name }}</span>
                <i class="fa fa-chevron-right" :class="{ 'rotate-180': isSubmenuOpen(item.section) }"></i>
              </a>
              <ul v-show="isSubmenuOpen(item.section)">
                <li v-for="subItem in item.submenu" :key="subItem.section">
                  <a href="#" @click.prevent="navigateTo(subItem.section)">
                    <span>{{ subItem.name }}</span>
                  </a>
                </li>
              </ul>
            </template>
            <template v-else>
              <a href="#" @click.prevent="navigateTo(item.section)">
                <i :class="`fa ${item.icon}`"></i>
                <span>{{ item.name }}</span>
              </a>
            </template>
          </li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <a href="#" @click.prevent="navigateTo('cerrar-sesion')">
          <i class="fa fa-sign-out-alt"></i>
          <span>Cerrar Sesión</span>
        </a>
      </div>
    </aside>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const menuItems = [
  { name: 'Inicio', icon: 'fa-home', section: 'inicio' },
  { name: 'Agregar Tienda', icon: 'fa fa-plus', section: 'agregar tienda' },
  { name: 'Listado de Tiendas', icon: 'fa fa-list', section: 'Listado de tiendas', submenu: [
      { name: 'Historial de Facturas', section: 'Historial de facturas' },
      { name: 'Agregar Clientes', section: 'Agregar Clientes' }
    ]
  },
  { name: 'Factura', icon: 'fa fa-book', section: 'factura', submenu: [
      { name: 'Historial de Factura', section: 'estadisticas-equipo' },
      
    ]
  },
  { name: 'Gestion de clientes', icon: 'fa-chart-bar', section: 'clientes', submenu: [
      { name: 'Lista de clientes', section: 'lista-clientes' },
      { name: 'Agregar Cliente', section: 'agregar-clientes' },    
    ]
  },

  { name: 'Cerrar Sesión', icon: 'fa-sign-out-alt', section: 'cerrar-sesion' }
];


const isMenuOpen = ref(false);
const openSubmenus = ref([]);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleSubmenu = (section) => {
  const index = openSubmenus.value.indexOf(section);
  if (index === -1) {
    openSubmenus.value.push(section);
  } else {
    openSubmenus.value.splice(index, 1);
  }
};

const isSubmenuOpen = (section) => {
  return openSubmenus.value.includes(section);
};

const navigateTo = (section) => {
  closeMenu();
  router.push({ name: section });
};

const isActive = (section) => {
  return route.name === section;
};
</script>

<style scoped>
#app {
  display: flex;
  transition: margin-left 0.3s ease;
}

.menu {
  width: 250px;
  background-color: #636363; /* Cambia el color de fondo a morado */
  color: #fff;
  padding: 20px;
  position: absolute;
  left: -250px;
  top: 0;
  height: 100%;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column; /* Asegúrate de que los elementos dentro del sidebar se coloquen en columna */
  justify-content: space-between; /* Espacia los elementos dentro del sidebar */
}

#app.menu-open .menu {
  left: 0;
}

#app.menu-open .content {
  margin-left: 250px;
}

.content {
  padding: 20px;
  width: 100%;
  transition: margin-left 0.3s ease;
}

.menu nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu nav ul li {
  margin-bottom: 10px;
}

.menu nav ul li a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.menu nav ul li a:hover {
  background-color: #1890ff;
}

.menu nav ul li a i {
  margin-right: 10px;
}

.menu nav ul li.active a {
  background-color: #1890ff;
  color: #fff;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu ul li {
  padding-left: 20px;
}

.menu ul li a {
  color: #fff;
  text-decoration: none;
}

.menu ul li a:hover {
  background-color: #1890ff;
}

.rotate-180 {
  transform: rotate(180deg);
}

.sidebar-footer {
  margin-top: auto; /* Coloca el footer al final del sidebar */
  padding-top: 20px;
  border-top: 1px solid #fff; /* Línea de separación */
}

.sidebar-footer a {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-footer a:hover {
  background-color: #1890ff;
}

.sidebar-footer a i {
  margin-right: 10px;
}
</style>
