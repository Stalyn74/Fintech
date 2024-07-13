<template>
    <div class="agregar-cliente">
      <h1>Agregar Nuevo Cliente</h1>
      <form @submit.prevent="agregarCliente">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="cliente.nombre" placeholder="Introduce tu nombre" required />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="cliente.apellido" placeholder="Introduce tu apellido" required />
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="cliente.correo" placeholder="Introduce tu correo electrónico" required />
        </div>
        <div class="form-group">
          <label for="celular">Celular:</label>
          <input type="tel" id="celular" v-model="cliente.celular" placeholder="Introduce tu número celular" required />
        </div>
        <div class="form-group">
          <label for="cedula">Cédula:</label>
          <input type="text" id="cedula" v-model="cliente.cedula" placeholder="Introduce tu número de cédula" required />
        </div>
        <button class="cancelar" type="button" @click="cancelar">Cancelar</button>
        <button class="agregar" type="submit">Agregar Cliente</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cliente: {
          nombre: '',
          apellido: '',
          correo: '',
          celular: '',
          cedula: ''
        }
      };
    },
    methods: {
        cancelar() {
  if (confirm('¿Estás seguro de que no deseas agregar este cliente?')) {
    alert('Cancelado con éxito');
    this.limpiarFormulario(); // Limpiar formulario solo si se confirma la cancelación
  } else {
    // Si el usuario cancela la confirmación, no hacemos nada
  }
},
agregarCliente() {
  // Aquí puedes realizar la lógica para agregar el cliente, por ejemplo, una petición a una API
  console.log('Cliente agregado:', this.cliente);
  alert('Cliente agregado con éxito');
  this.limpiarFormulario();
  this.$router.push({ name: 'listacliente' });
},
limpiarFormulario() {
  this.cliente.nombre = '';
  this.cliente.apellido = '';
  this.cliente.correo = '';
  this.cliente.celular = '';
  this.cliente.cedula = '';
}

    }
  };
  </script>
  
  <style scoped>
  .agregar-cliente {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .agregar-cliente h1 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .cancelar {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #FF0000; /* Color rojo */
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .cancelar:hover {
    background-color: #6c1616; /* Rojo más oscuro */
  }
  
  .agregar {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #1F547E; /* Color azul */
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .agregar:hover {
    background-color: #19374f; /* Azul más oscuro */
  }
  </style>
  