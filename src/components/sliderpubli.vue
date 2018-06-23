<template>

<carousel :mouse-drag="true" :Touch-friendly="true" :paginationEnabled="false">
  <slide>
    <div class="contenedorbotones">
    <img src="../assets/recursos/logo-instagram-degradado.png">
    <img src="../assets/recursos/logo-twitter-degradado.png">
    <img src="../assets/recursos/logo-facebook-degradado.png">
    <a class="mas">+</a>
    </div>
    <div class="contenedorimagen">
   <img src="../assets/recursos/foto-03.png" class="img">
    </div>
  </slide>
  <slide>
    <div class="contenedorbotones dos">
    <img src="../assets/recursos/logo-instagram-degradado.png">
    <img src="../assets/recursos/logo-twitter-degradado.png">
    <img src="../assets/recursos/logo-facebook-degradado.png">
    <a class="mas dos">+</a>
    </div>
      <div class="contenedorimagen">
        <img src="../assets/recursos/foto-03.png" class="img">
      </div>
  </slide>
   <slide>
        <div class="contenedorbotones tres">
    <img src="../assets/recursos/logo-instagram-degradado.png">
    <img src="../assets/recursos/logo-twitter-degradado.png">
    <img src="../assets/recursos/logo-facebook-degradado.png">
    <a class="mas tres">+</a>
    </div>
     <div class="contenedorimagen">
        <img src="../assets/recursos/foto-02.png" class="img">
     </div>
  </slide>
   <slide>
    <div class="contenedorbotones cuatro">
    <img src="../assets/recursos/logo-instagram-degradado.png">
    <img src="../assets/recursos/logo-twitter-degradado.png">
    <img src="../assets/recursos/logo-facebook-degradado.png">
    <a class="mas cuatro">+</a>
    </div>
     <div class="contenedorimagen">
        <img src="../assets/recursos/foto-03.png" class="img">
     </div>
  </slide>
   <slide>
     <div class="contenedorbotones cinco">
    <img src="../assets/recursos/logo-instagram-degradado.png">
    <img src="../assets/recursos/logo-twitter-degradado.png">
    <img src="../assets/recursos/logo-facebook-degradado.png">
    <a class="mas cinco">+</a>
    </div>
      <div class="contenedorimagen">
        <img src="../assets/recursos/foto-02.png" class="img">
      </div>
  </slide>
</carousel>
</template>

<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris:#434B52;
$azul:#1F8EFA;
$verdea:#75EAFF;
$degradado:linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);

  .VueCarousel-inner {
    //flex-basis: 327px !important;
    position: relative;
    height: 168px;;
  }
.VueCarousel-slide{
  position: relative;
}
  .VueCarousel-slide .contenedorimagen {
    margin: 15px 10px 10px 2.1%;
    //position: absolute;
    transform: translate(18px, 4px);
    width: 116px;
    overflow: hidden;
    height: 153px;
    filter:drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.15));
     border-radius: 5px;
     padding: 0;

  }

.VueCarousel-slide .img {
    height: 100%;
    width: auto !important;
    max-width: none;
}
.VueCarousel-dot-container{
top: -25px;
position: relative;
}

.contenedorbotones {
    top: 12px;
    position: absolute;
    left: 49px;
    height: 15px;
    width: 15px;
    z-index: 9999999;
    display: flex;
    cursor: pointer;
    &.dos{
      left: 49px;
      position: absolute;
    }
     &.tres{
      left: 49  px;
      position: absolute;
    }
    &.cuatro{
      left: 49px;
      position: absolute;
    }
      &.cinco{
      left: 49px;
      position: absolute;
    }
}
.contenedorbotones img {
    margin-right: 5px;
}
.mas{
    top: 33px;
    left: 37px;
    border-radius: 5px;
    position: absolute;
    width: 25px;
    height: 25px;
    transform: translate(87%, -153%);
    justify-content: center;
    align-items: center;
    font-size: 0.6em;
    filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.1));
    border-radius: 50%;
    font-size: 15px;
    background:$degradado;
    color: #fff;
    display: flex;
    }
    

</style>





