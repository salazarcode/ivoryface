<template>
  <div class="container">
    <div class="columns is-marginless is-12 header">
        <div class="column is-6">
          <user></user>
        </div>
        <div class="column is-3">
          <delegados></delegados>
        </div>
        <div class="column">
          <navegacion></navegacion>
        </div>
    </div>
    <div class="columns is-marginless is-12 ">
        <div class="column is-6">
         <!-- <subsliderventa></subsliderventa>-->
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
          <ventas></ventas>
        </div>

        <div class="column is-9">
          <div class="columns is-multiline">
        <div class="column is-4">
          <destacado></destacado>
        </div>
        <div class="column is-8">
          <p class="notification is-danger size">columna 3 </p>
        </div>

        <div class="column is-4">
          <publicaciones></publicaciones>
        </div>
        <div class="column is-4">
         <entradas></entradas>        
        </div>
         <div class="column is-4">
          <feed></feed>
        </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import messages from "./messages";
import destacado from "./destacado";
import tarea from "./tarea";
import navegacion from "./navegacion";
import feed from "./feed";
import entradas from "./entradas";
import publicaciones from "./publicaciones";
import user from "./user";
import delegados from "./delegados";
import ventas from "./ventas";
import subsliderventa from "./subsliderventa";
export default {
  name: 'layout',
  methods:{

  },
  components:{
    'messages': messages,
    'destacado':destacado,
    'tarea':tarea,
    'navegacion':navegacion,
    'feed':feed,
    'entradas':entradas,
    'publicaciones':publicaciones,
    'user':user,
    'delegados':delegados,
    'ventas':ventas,
    'subsliderventa':subsliderventa,
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

  .size-2{
    height: 625px;
  }
</style>
