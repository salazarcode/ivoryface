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
          <p class="notification is-danger ">columna 3 </p>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-6">
          <p class="notification is-info tamaño">columna 4 </p>
        </div>
        <div class="column is-3">
         <div class="tamaño">
           <messages ></messages> 
         </div>
        </div>
        <div class="column">
          <p class="notification is-danger tamaño">columna 6 </p>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-3">
          <p class="notification is-info tamaño">columna 1 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-warning tamaño">columna 2 </p>
        </div>
        <div class="column">
          <p class="notification is-danger tamaño">columna 3 </p>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-3">
          <p class="notification is-info tamaño">columna 1 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-warning tamaño">columna 2 </p>
        </div>
        <div class="column is-3">
          <p class="notification is-danger tamaño">columna 3 </p>
        </div>
         <div class="column">
          <p class="notification is-danger tamaño">columna 3 </p>
        </div>
    </div>
</div>
</template>

<script>
import messages from "./messages";
export default {
  name: 'layout',
  methods:{

  },
  components:{
    'messages': messages
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
  .tamaño{
    height: 264px;
  }
</style>
