<template>
    <h1 class="titulo">Lista de tiendas</h1>
    <div class="cuadro">
        <div class="titulo">
            <h2>El carrito lleno</h2>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0k-X7MfNiSsxTfiFCeuq9YUDRELt_LUdvBA&s"><br>
        <button class="boton" type="button">Vista</button>
        <button class="boton" type="button">Crear factura</button>
        <button class="boton" type="button">Editar</button>
    </div>
</template>

<script>
export default {
    name: 'Agregartienda'
}
</script>

<style>
.titulo {
    text-align: center;
}

.cuadro {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    padding: 20px 50px;
    background-color: #f0f0f0;
    position: absolute;
    top: 300px;
    left: center;
}

.boton {
  background-color: #4CAF50; 
  color: white; 
  padding: 10px 20px; 
  border: none; 
  cursor: pointer;
  margin: 2px 5px;
}

.cuadro img {
  width: 200px; /* Ajustar el ancho de la imagen */
  height: auto; /* Mantener la proporción de la imagen */
  margin: 10px auto; /* Centrar la imagen horizontalmente y agregar margen superior */
  display: block; /* Asegurar que la imagen se comporte como un bloque */
}
</style>