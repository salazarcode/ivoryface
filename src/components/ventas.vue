<template>
<div class="ventas size-2">   
        <div class="letra">
            <p>Ventas de la semana</p>
        </div>
        <div class="letra grande">
            BSf 21.890.000
        </div>
           <div class="letra letras">
            <p>En un total de 42 ventas</p>
        </div>
        <sliderventa class="slider"></sliderventa>
         <div class="caja">
            <div class="letra grandecolor">12.500.000</div>
            <div class="letra color">Sábado 31 de marzo</div>
            <div class="letra color-2">13 ventas</div>
        </div>
         <div class="caja dos">
            <div class="letra grandecolor-2">12.500.000</div>
            <div class="letra color-3">Sábado 31 de marzo</div>
            <div class="letra color-4">13 ventas</div>
        </div>
         <div class="caja tres">
            <div class="letra grandecolor">12.500.000</div>
            <div class="letra color">Sábado 31 de marzo</div>
            <div class="letra color-2">13 ventas</div>
        </div>
</div>
</template>
<script>
import sliderventa from "./sliderventa";
export default {
    components:{
        'sliderventa':sliderventa,
    }
}
</script>
<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris:#434B52;
$azul:#1F8EFA;
$verdea:#75EAFF;
$grisc:#D3D3D3;
$degradado:linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
$degradado2:linear-gradient(45deg, rgba(99,150,255,1) 0%, rgba(5,223,254,1) 100%);
.ventas{
  align-items: center;
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
.caja{
    top: 52%;
    left: 5%;
    transform: translate(0px, 22px);
    border-radius: 5px;
    position: absolute;
    background:$blanco;
    width: 239px;
    height: 87px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.6em;
    font-weight: bold;
      filter:drop-shadow(0px 15px 20px rgba(0,0,0,0.3));
    &.dos{
          transform: translate(-1px, 115px);
          background: $degradado2;   
         
    }
     &.tres{
          transform: translate(0px, 208px);
    }
}
.slider{
    transform: translate(0px, 70px);
}
.letra{
    text-align: center;
    transform: translate(21%, 41px);
    width: 118px;
    height: 15px;
    text-align: left;
    font-size: 12px;
    font-weight:bold;
    color: $grisc;
    &.grande{
        transform: translate(15%, 42px);
        color: $negro;
        font-size: 18px;
        width: 132px;
    }
    &.letras{
        transform: translate(18%, 50px);
         width: 138px;
    }
    &.grandecolor{
        transform: translate(17%, 29px);
        color: $azul;
        font-size: 18px;
        width: 132px;
    }
     &.grandecolor-2{
        transform: translate(17%, 29px);
        color: $blanco;
        font-size: 18px;
        width: 132px;
    }
    &.color{
         transform: translate(21%, 41px);
          color: $azul;
          font-weight: normal;
          font-size: 10px;
    }
       &.color-2{
         transform: translate(129%, 27px);
          color: $azul;
          font-weight: normal;
          font-size: 10px;
    }
       &.color-3{
         transform: translate(21%, 41px);
          color: $blanco;
          font-weight: normal;
          font-size: 10px;
    }
      &.color-4{
         transform: translate(129%, 27px);
          color: $blanco;
          font-weight: normal;
          font-size: 10px;
    }
}
</style>

