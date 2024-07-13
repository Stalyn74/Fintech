<template>
  <div class="cuadro">
    <div class="titulo"><h2>Crear tienda <i class="fa fa-cart-plus" aria-hidden="true"></i></h2></div>
    <p>Nombre de la tienda:</p>
    <input class="imput" type="text" placeholder="Nombre de la tienda">
    <p>N° de ruc:</p>
    <input class="imput" type="text" placeholder="Ruc de la tienda">
    <p>Dirección matriz:</p>
    <input class="imput" type="text" placeholder="Dirección de la tienda">
    <p>Dirección sucursal:</p>
    <input class="imput" type="text" placeholder="Sucursal de la tienda (opcional)">
    <p>Correo electronico:</p>
    <input class="imput" type="text" placeholder="Correo de la tienda">
    <p>Numero celular o de telefono:</p>
    <input class="imput" type="text" placeholder="Celular o telefono de la tienda"><br>
    <button class="boton" type="button">Guardar</button>
  </div>
</template>

<script>
 export default {
    name: 'Agregartienda'
 }
</script>

<style>
.cuadro {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  padding: 20px 50px;
  background-color: #f0f0f0;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: left;
  margin-bottom: 15px;
  font-weight: bold;
}

.imput {
  width: 350px; 
  background-color: #30acff;
  color: #ffffff;
}

.imput::placeholder {
  color: #ffffff; /* Ejemplo: color gris claro */
}

.boton {
  background-color: #4CAF50; 
  color: white; 
  padding: 10px 20px; 
  border: none; 
  cursor: pointer;
  margin: 20px 135px;
}
</style>