<template>
  <div class="editar-cliente">
    <h1>Editar Cliente</h1>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="cliente.nombre" required />
      </div>
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" v-model="cliente.apellido" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="cliente.email" required />
      </div>
      <div class="form-group">
        <label for="celular">Celular</label>
        <input type="text" id="celular" v-model="cliente.celular" required />
      </div>
      <div class="form-group">
        <label for="cedula">Cédula</label>
        <input type="text" id="cedula" v-model="cliente.cedula" required />
      </div>
      <button class="cancelar" type="button" @click="cancelar">Cancelar</button>
      <button class="agregar" type="button" @click="guardarCambios">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        id: null,
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        cedula: ''
      }
    };
  },
  created() {
    // Supongamos que pasamos el ID del cliente como un parámetro de ruta
    const clienteId = this.$route.params.id;
    this.cargarCliente(clienteId);
  },
  methods: {
    cargarCliente(id) {
      // Aquí puedes realizar una solicitud para obtener los datos del cliente por su ID
      // Por ahora, usaremos datos ficticios
      const clienteFicticio = {
        id: id,
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juan.perez@example.com',
        celular: '1234567890',
        cedula: '1234567890',
        direccion: 'Calle Principal #123',
        ciudad: 'Ciudad de Ejemplo',
        codigoPostal: '12345',
        notas: 'Cliente frecuente'
      };
      this.cliente = clienteFicticio;
    },
    guardarCambios() {
      // Mostrar alerta de confirmación para guardar cambios
      if (confirm('¿Seguro que desea guardar los cambios?')) {
        // Simulación de lógica para guardar los cambios del cliente
        console.log('Cambios guardados:', this.cliente);
        alert('Cambios guardados exitosamente');
        // Redirigir a la lista de clientes después de guardar los cambios
        this.$router.push({ name: 'listacliente' });
      }
    },
    cancelar() {
      // Mostrar alerta de confirmación para cancelar
      if (confirm('¿Seguro que desea cancelar los cambios?')) {
        // Simulación de lógica para cancelar los cambios del cliente
        console.log('Cambios cancelados:', this.cliente);
        alert('Cancelación exitosa');
        // Redirigir a la lista de clientes después de cancelar
        this.$router.push({ name: 'listacliente' });
      }
    }
  }
};
</script>

<style scoped>
.editar-cliente {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.editar-cliente h1 {
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
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cancelar {
  width: 100%;
  padding: 10px;
  background-color: #FF0000; /* Color rojo */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancelar:hover {
  background-color: #6c1616; /* Color rojo más claro */
}

.agregar {
  width: 100%;
  padding: 10px;
  background-color: #1F547E; /* Color azul */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.agregar:hover {
  background-color: #19374f; /* Color azul más claro */
}
</style>
