<template>
<div class="messages">
   <h1>Hola mundo</h1>
   <p class="foter">esto es un footer</p>
</div>

</template>

<script>
export default {
  name: 'messages',
  methods:{

  }
}
</script>
<style lang="scss">
$blanco:#fff;
.messages{
    background: linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
    height: 264px;
    border-radius: 15px;
    box-shadow: 4px 4px 34px rgba(0, 0, 0, 0.2);
}
.foter{
    background: transparent;
    position: relative;
    bottom: 0;
    top:190px;
    color: $blanco;
    text-align: center;
    border-top: dotted;
    border-top-width:2px;
}

</style>
