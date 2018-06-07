<template>
    <div class="delegados">
        <div class="letrin">
            <p >Delegados Online</p>
        </div>
        <div class="icono">
             <img src="../assets/recursos/foto-01.png">
        </div>
        <div class="icono dos">
            <img src="../assets/recursos/foto-01.png">
        </div>
          <div class="icono tres">
            <img src="../assets/recursos/foto-01.png"> 
        </div>
        <div class="icono cuatro">
            <img src="../assets/recursos/foto-01.png">
        </div>
        <div class="punto"></div>
        <div class="punto uno"></div>
        <div class="punto dos"></div>
        <div class="punto tres"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris:#434B52;
$grisc:#D3D3D3;
$azul:#1F8EFA;
$verdea:#75EAFF;
$degradado:linear-gradient(to right, rgba(0,223,228,1) 0%, rgba(12,219,198,1) 85%, rgba(12,219,198,1) 100%); 
.delegados{
    text-align:  right;
    background: $blanco;
    font-family: Arial, Helvetica, sans-serif;
    //filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    height: 50px;
    display: flex;
}
.icono{
    display: flex;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    border-radius: 50px;
    overflow: hidden;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 15px;
    left: 15px;
      cursor: pointer;
    &.dos{
        left: 59px;
    }
     &.tres{
        left: 100px;
    }
     &.cuatro{
        left: 141px;
    }
}
.letrin{
    text-align: center;
    transform: translate(16%, -4px);
    width: 102px;
    height: 15px;
    text-align: center;
    font-size: 12px;
    font-weight:bold;
    color: $grisc;
}
.punto{
    height: 10px;
    width:10px;
    background: #00BD43;
    font-size: 100px;
    border-radius: 50px;
    transform: translate(40px, 40px);
    overflow: hidden;
    position: absolute;

     &.uno{
      transform: translate(85px, 40px);   
     }
      &.dos{
      transform: translate(127px, 40px);   
     }
      &.tres{
      transform: translate(167px, 40px);   
     }
}

</style>