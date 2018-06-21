<template>
<div>
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
  </div>
  <router-view></router-view>

</div>

</template>

<script>
import selection from "./selection";
import user from "./user";
import delegados from "./delegados";
import navegacion from "./navegacion";
export default {
  name: 'home',
  methods:{

  },
  components:{
    'selection': selection,
    'user': user,
    'delegados': delegados,
    'navegacion': navegacion,
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
