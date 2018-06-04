<template>
    <div class="destacado size">
       <div class="icono">
            <p>+</p>   
        </div> 
        <div class="icono int">
            <img src="../assets/recursos/logo-instagram-blanco.png"  >
        </div>
        <div class="icono tw">
            <img src="../assets/recursos/logo-twitter-blanco.png"  >
        </div>
        <div class="icono fb">
            <img src="../assets/recursos/logo-facebook-blanco.png"  >
        </div>
        <div class="icono pdf">
            <p>PDF</p>
        </div>
        <div class=" icono contenido">
               <p><img src="../assets/recursos/logo-facebook-blanco.png" width="18px" height="18 px"  > Contenido destacado</p>
        </div>
        <div class="icono conte">
               <p> Solo por esta semana tenemos el 20% de des</p>
        </div>
         <div class="icono cont">
               <p>230 reactions-45 shares-13 comments</p>
        </div>
         <div class=" icono img">
               <p><img src="../assets/recursos/logo-drive-blanco.png" width="18px" height="18 px"></p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'destacado',
  methods:{

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
.destacado{
    background-color: rgba(0,0,0,0.9);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4) ),url('../assets/recursos/foto-04.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    border-radius: 15px;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    text-align: center;
    position: relative;
}
.icono{
    width: 35px;
    height: 35px ;
    border-radius: 50%;
    font-size: 20px;
    background: $degradado;
    color: $blanco;
    font-size: 20px;
    font-weight:normal;
    transform: translate(-19px, 19px);
    opacity:1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.int{
        background: transparent;
        transform: translate(24px, -8px);
        width: 18px;
        height: 18px ;

    }
    &.tw{
        background: transparent;
        transform: translate(50px, -26px);
        width: 18px;
        height: 18px ;

    }
    &.fb{
        background: transparent;
        transform: translate(76px, -44px);
        width: 18px;
        height: 18px ;

    }
    &.pdf{
        background: $blanco;
        color: $negro;
        font-size: 10px;
        transform: translate(-17px, -62px);
        border-radius: 40px;
        width: 35px;
        height: 18px ;
        opacity: 0.6;
        float:right;

    }
    &.contenido{
    background: transparent;
    text-align: left;
    transform: translate(24px, 118px);
    width: 116px;
    height: 15px ;
    font-size:10px;
    font-weight: normal;

  }
  &.conte{
    background: transparent;
    text-align: left;
    transform: translate(24px, 131px);
    width: 160px;
    height: 15px ;
    font-size: 14px;
    color: $blanco;
    font-weight: bold;
  }
  &.cont{
    background: transparent;
    text-align: center;
    transform: translate(9px, 143px);
    width: 202px;
    height: 15px ;
    text-align: left;
    font-size: 10px;
    color: $blanco;
    font-weight: normal;
  }
  &.img{
      background: transparent;
      position: absolute;
      bottom: 34px;
      right: -5px;

  }
}

/*.cajita{
  top: 50%;
  left: 50%;
  border-radius: 10px;
  //position: absolute;
  background:$blanco;
  opacity:0.7 ;
  width: 50px;
  height: 25px ;
  transform: translate(205px, 11px);
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  font-weight: bold;
    
    &.icono{
        width: 25px;
        height: 25px ;
        border-radius: 50%;
        font-size: 20px;
        background: $degradado;
        color: $blanco;
        font-size: 20px;
        font-weight:normal;
        transform: translate(-53%, -14px);
        opacity:1;
    }
}*/

</style>


