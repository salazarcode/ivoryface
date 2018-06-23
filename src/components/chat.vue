<template>
    <div class="container">
      <router-link to="/">Volver</router-link>
      <div class="columns is-marginless is-12 chat size">
          <div class="column is-3 size ">
            <bandejaentrada></bandejaentrada>
          </div>
          <div class="column is-6 ">
            hola mundo 2
          </div>
          <div class="column is-3 ">
            hola mundo 3 
          </div>
      </div>
    </div>
</template>
<script>
import bandejaentrada from "./bandejaentrada";
export default {
  name: 'chat',
  methods:{

  },
  components:{ 
    'bandejaentrada':bandejaentrada,
  }
}
</script>
<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris_claro:#D3D3D3;
.chat{
    text-align: center;
    background: $blanco;
    border-radius: 15px;
    box-shadow: 4px 4px 34px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    overflow: hidden;
    font-size: 15px;
}
  .size{
    height: 550px;
    border: solid;
  }
</style>


