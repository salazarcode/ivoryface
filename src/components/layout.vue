<template>
  <div class="container">
    <div class="columns is-marginless is-12 header">
        <div class="column is-6">
          <p class="notification is-info">columna 1 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-warning ">columna 2 </p>
        </div>
        <div class="column">
          <navegacion></navegacion>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-6">
          <p class="notification is-info size">columna 4 </p>
        </div>
        <div class="column is-3">
         <div >
           <messages ></messages> 
         </div>
        </div>
        <div class="column">
          <tarea></tarea>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-3">
          <p class="notification is-info size">columna 1 </p>
        </div>
        <div class="column is-3">
          <destacado></destacado>
        </div>
        <div class="column">
          <p class="notification is-danger size">columna 3 </p>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-3">
          <p class="notification is-info size">columna 1 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-warning size">columna 2 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-danger size">columna 3 </p>
        </div>
         <div class="column">
          <p class="notification is-danger size">columna 3 </p>
        </div>
    </div>
</div>
</template>

<script>
import messages from "./messages";
import destacado from "./destacado";
import tarea from "./tarea";
import navegacion from "./navegacion";
export default {
  name: 'layout',
  methods:{

  },
  components:{
    'messages': messages,
    'destacado':destacado,
    'tarea':tarea,
    'navegacion':navegacion,
  }
}
</script>
<style lang="scss">
$blanco:#fff;
$negro:#000;
$gris_claro:#D3D3D3;
$column-gap:5px;

 .container{
        align-items: center;
        width: 100%;
    }
  .size{
    height: 300px;
  }
</style>
