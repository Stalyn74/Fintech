<template>
    <div class="lista-clientes">
      <h1>Listado de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Cédula</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clientes in clientes" :key="clientes.id">
            <td>{{ clientes.nombre }}</td>
            <td>{{ clientes.apellido }}</td>
            <td>{{ clientes.email }}</td>
            <td>{{ clientes.celular }}</td>
            <td>{{ clientes.cedula }}</td>
            <td>
              <i class="fa fa-eye" @click="verclientes(clientes)"></i>
              <i class="fa fa-edit" @click="editarclientes(clientes)"></i>
              <i class="fa fa-trash" @click="borrarclientes(clientes.id)"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="nuevo" @click="agregarNuevoCliente">Agregar Nuevo Cliente</button>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clientes: [
          { id: 1, nombre: 'Juan', apellido: 'Perez', email: 'Jp@example.com', celular: '1234567890', cedula: '1234567890' },
          { id: 2, nombre: 'Maria', apellido: 'Lopez', email: 'Ml@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 3, nombre: 'Ronny', apellido: 'Villa', email: 'Rv@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 4, nombre: 'Julian', apellido: 'Samuesa', email: 'Js@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 5, nombre: 'Liz', apellido: 'Llinin', email: 'Ll@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 6, nombre: 'Melanie', apellido: 'Zambrano', email: 'Mz@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 7, nombre: 'Alex', apellido: 'Sol', email: 'As@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 8, nombre: 'Jhonatan', apellido: 'Paez', email: 'Jp@example.com', celular: '0987654321', cedula: '0987654321' },
          { id: 9, nombre: 'Anthony', apellido: 'Cruz', email: 'Ac@example.com', celular: '0987654321', cedula: '0987654321' }
          // Añade más clientes aquí
        ]
      };
    },
    methods: {
      verclientes(clientes) {
        alert(`Ver detalles de ${clientes.nombre} ${clientes.apellido} ${clientes.email} ${clientes.celular} ${clientes.cedula}`);
        // Aquí puedes agregar la lógica para ver los detalles del clientes
      },
      editarclientes(cliente) {
  if (confirm('¿Desea editar este cliente?')) {
    // Aquí puedes agregar la lógica para editar el cliente
    console.log('Cliente a editar:', cliente);
    // Redirige a la ruta de edición del cliente
    this.$router.push({ name: 'editarcliente', params: { id: cliente.id } });
  } else {
    // Si el usuario cancela la edición, redirige a la lista de clientes
    this.$router.push({ name: 'listacliente' });
  }
},
      borrarclientes(id) {
        if (confirm('¿Estás seguro de que deseas borrar este clientes?' )) {
          this.clientes = this.clientes.filter(clientes => clientes.id !== id);
          alert('cliente borrado');
        }
      },
      agregarNuevoCliente() {
        if (confirm('¿Desea agregar otro cliente?' )) {
            this.clientes = this.clientes
        this.$router.push({ name: 'agregarcliente' }); }
      }
    }
  };
  </script>
  
  <style scoped>
  .lista-clientes {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .lista-clientes h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #CDCDCD; /* Color morado */
    color: #000000;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    text-align: center;
  }
  
  td i {
    margin: 0 5px;
    cursor: pointer;
  }
  
  td i.fa-eye {
    color: #007bff; /* Color azul para ver */
  }
  
  td i.fa-edit {
    color: #ffc107; /* Color amarillo para editar */
  }
  
  td i.fa-trash {
    color: #dc3545; /* Color rojo para borrar */
  }
  
  button.nuevo {
    display: block;
    margin-left: auto;
    margin-top: 20px; /* Añade un margen superior para el salto de línea */
    padding: 10px;
    background-color: #FF0000; /* Color rojo */
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button.nuevo:hover {
    background-color: #9f0808; /* Color rojo más claro */
  }
  </style>
  