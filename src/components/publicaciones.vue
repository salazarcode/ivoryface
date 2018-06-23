<template>
<div class="publicaciones size">   
        <div class="inicio">
            <p>Publicaciones</p>
        </div>
        <div>
            <a class="boton">+</a>
        </div>
         <div>
            <a class="boton s">Publicar nuevo articulo</a>
        </div>
          <div class="sub">
            <p>A publicar hoy</p>
        </div>
        <sliderpubli class="slider"></sliderpubli>
</div>
</template>
<script>
import sliderpubli from "./sliderpubli";
export default {
    components:{
        'sliderpubli':sliderpubli,
    }
}
</script>
<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris:#434B52;
$azul:#1F8EFA;
$verdea:#75EAFF;
$degradado:linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
.publicaciones{
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
.inicio{
    color:$degradado;
    font-weight: bold;
    transform: translate(38px, 24px);
    transform: translate(38px, 24px);
    position: absolute;
}
.boton{
    text-decoration: none;
    width: 35px;
    height: 35px ;
    border-radius: 40px;
    font-size: 20px;
    background: $degradado;
    color: $blanco;
    font-weight:normal;
    transform: translate(40px, 51px);
    opacity:1;
    display: flex;
    justify-content: center;
    align-items: center;
        &.s{
        width: 113px;
        height: 35px ;
        font-size: 10px;
        transform: translate(95px, 15px);
        border-radius: 40px;

    }
}
.sub{
        transform: translate(18px, 29px);
        color: $degradado;
        font-size: 12px;
        position: absolute;
       
}
.slider{
    transform: translate(0px, 50px);
}
</style>


