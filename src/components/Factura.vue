<template>
    <div class="invoice">
      <header>
        <div class="company-info">
          <h1>Nombre de la Empresa</h1>
          <p>Dirección de la Empresa</p>
          <p>Teléfono de la Empresa</p>
          <p>Email de la Empresa</p>
        </div>
        <div class="invoice-info">
          <h2>Factura</h2>
          <p><strong>Número de Factura:</strong> {{ invoiceNumber }}</p>
          <p><strong>Fecha:</strong> {{ invoiceDate }}</p>
        </div>
      </header>
      
      <section class="customer-info">
        <h3>Cliente</h3>
        <p><strong>Nombre:</strong> {{ customer.name }}</p>
        <p><strong>Dirección:</strong> {{ customer.address }}</p>
        <p><strong>Teléfono:</strong> {{ customer.phone }}</p>
        <p><strong>Email:</strong> {{ customer.email }}</p>
      </section>
  
      <section class="items">
        <table>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.description }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ formatCurrency(item.unitPrice) }}</td>
              <td>{{ formatCurrency(item.total) }}</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <footer>
        <div class="totals">
          <p><strong>Subtotal:</strong> {{ formatCurrency(subtotal) }}</p>
          <p><strong>IVA ({{ ivaPercentage }}%):</strong> {{ formatCurrency(tax) }}</p>
          <p><strong>Total:</strong> {{ formatCurrency(total) }}</p>
        </div>
        <div class="notes">
          <p><strong>Notas:</strong> {{ notes }}</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        invoiceNumber: '001',
        invoiceDate: new Date().toLocaleDateString(),
        customer: {
          name: 'Nombre del Cliente',
          address: 'Dirección del Cliente',
          phone: 'Teléfono del Cliente',
          email: 'Email del Cliente',
        },
        items: [
          { description: 'Producto 1', quantity: 2, unitPrice: 50, total: 100 },
          { description: 'Producto 2', quantity: 1, unitPrice: 150, total: 150 },
        ],
        ivaPercentage: 21,
        notes: 'Gracias por su compra',
      };
    },
    computed: {
      subtotal() {
        return this.items.reduce((acc, item) => acc + item.total, 0);
      },
      tax() {
        return this.subtotal * (this.ivaPercentage / 100);
      },
      total() {
        return this.subtotal + this.tax;
      },
    },
    methods: {
      formatCurrency(value) {
        return new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
        }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .invoice {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    border: 1px solid #ddd;
  }
  
  header, section, footer {
    margin-bottom: 20px;
  }
  
  header {
    display: flex;
    justify-content: space-between;
  }
  
  .company-info, .invoice-info, .customer-info, .totals, .notes {
    margin-bottom: 10px;
  }
  
  .items table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .items th, .items td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .totals {
    text-align: right;
  }
  </style>
  