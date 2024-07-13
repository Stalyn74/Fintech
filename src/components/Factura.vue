<template>
  <div class="invoice">
    <header>
      <div class="company-info">
        <h1>FINTECH</h1>
        <p>Dirección de la Empresa</p>
        <p>Teléfono de la Empresa</p>
        <p>Email de la Empresa</p>
      </div>
      <div class="invoice-info">
        <h2>Factura</h2>
        <p><strong>Número de Factura:</strong> {{ invoiceData.invoiceNumber }}</p>
        <p><strong>Fecha de Emisión:</strong> {{ invoiceData.issueDate }}</p>
      </div>
    </header>
    
    <section class="customer-info">
      <h3>Adquiriente</h3>
      <div class="input-group">
        <label>Nombre / Razón Social:</label>
        <input v-model="customerData.name" placeholder="Nombre / Razón Social" class="half-input" />
      </div>
      <div class="input-group">
        <label>Dirección:</label>
        <input v-model="customerData.address" placeholder="Dirección" class="half-input" />
      </div>
      <div class="input-group">
        <label>Identificación:</label>
        <input v-model="customerData.identification" placeholder="Identificación" class="half-input" />
      </div>
      <div class="input-group">
        <label>Tipo de Identificación:</label>
        <input v-model="customerData.idType" placeholder="Tipo de Identificación" class="half-input" />
      </div>
      <div class="input-group">
        <label>Teléfono:</label>
        <input v-model="customerData.phone" placeholder="Teléfono" class="half-input" />
      </div>
      <div class="input-group">
        <label>Email:</label>
        <input v-model="customerData.email" placeholder="Email" class="half-input" />
      </div>
    </section>

    <section class="items">
      <h3>Detalle de la Factura</h3>
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in invoiceItems" :key="index">
            <td>{{ item.quantity }}</td>
            <td>{{ item.description }}</td>
            <td>{{ formatCurrency(item.unitPrice) }}</td>
            <td>{{ formatCurrency(item.total) }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="payment-methods">
      <h3>Formas de Pago</h3>
      <table>
        <thead>
          <tr>
            <th>Forma de Pago</th>
            <th>Valor</th>
            <th>Plazo</th>
            <th>Tiempo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in paymentMethods" :key="index">
            <td>{{ payment.method }}</td>
            <td>{{ formatCurrency(payment.value) }}</td>
            <td>{{ payment.term }}</td>
            <td>{{ payment.time }}</td>
            <td><button @click="removePaymentMethod(index)">Eliminar</button></td>
          </tr>
        </tbody>
      </table>
      <div class="input-group">
        <label>Forma de Pago:</label>
        <input v-model="newPayment.method" placeholder="Forma de Pago" class="half-input" />
      </div>
      <div class="input-group">
        <label>Valor:</label>
        <input v-model="newPayment.value" placeholder="Valor" class="half-input" />
      </div>
      <div class="input-group">
        <label>Plazo:</label>
        <input v-model="newPayment.term" placeholder="Plazo" class="half-input" />
      </div>
      <div class="input-group">
        <label>Tiempo:</label>
        <input v-model="newPayment.time" placeholder="Tiempo" class="half-input" />
      </div>
      <div class="input-group actions">
        <button @click="addPaymentMethod">Agregar</button>
      </div>
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
      invoiceData: {
        invoiceNumber: '001-001-000000001',
        issueDate: new Date().toISOString().substr(0, 10),
      },
      customerData: {
        name: 'Cliente S.A.',
        address: 'Av. Principal 123, Ciudad',
        identification: '1234567890',
        idType: 'RUC',
        phone: '+1234567890',
        email: 'cliente@empresa.com',
      },
      invoiceItems: [
        { quantity: 2, description: 'Producto 1', unitPrice: 50, total: 100 },
        { quantity: 1, description: 'Producto 2', unitPrice: 150, total: 150 },
      ],
      paymentMethods: [],
      newPayment: {
        method: '',
        value: '',
        term: '',
        time: '',
      },
      ivaPercentage: 21,
      notes: 'Gracias por su compra',
    };
  },
  computed: {
    subtotal() {
      return this.invoiceItems.reduce((acc, item) => acc + item.total, 0);
    },
    tax() {
      return (this.subtotal * this.ivaPercentage) / 100;
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
    addPaymentMethod() {
      this.paymentMethods.push({ ...this.newPayment });
      this.newPayment = { method: '', value: '', term: '', time: '' }; // Reset fields
    },
    removePaymentMethod(index) {
      this.paymentMethods.splice(index, 1); // Remove payment method
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
  border: 1px solid #ccc;
}

header, section, footer {
  margin-bottom: 20px;
}

header {
  display: flex;
  justify-content: space-between;
}

.company-info, .invoice-info, .customer-info, .items, .payment-methods, .totals, .notes {
  margin-bottom: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.half-input {
  width: 50%; /* Cuadros de entrada más cortos */
  padding: 8px;
  box-sizing: border-box;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.totals {
  text-align: right;
}
</style>
