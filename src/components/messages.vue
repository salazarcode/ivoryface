<template>
<div class="messages size">
   <div class="carta">
     <img src="../assets/recursos/barra-inferior.png" width="100px" height="100px" style="position: absolute; top:50%; left:50%; transform:translate(-50%, -50%); filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));">
     <img src="../assets/recursos/icon-mensaje.png" width="35px" height="25px" style="position: absolute; transform: translate(-7%, -7%);">
     <p class="p">35</p>
     <div class="cajita wp">
        <img src="../assets/recursos/logo-wordpress-blanco.png" >
        <p>5</p>
     </div>
     <div class="cajita fb">
        <img src="../assets/recursos/logo-twitter-blanco.png"  >
        <p>20</p>
     </div>
      <div class="cajita tw">
        <img src="../assets/recursos/logo-facebook-blanco.png"  >
        <p>3</p>
     </div>
     <div class="cajita chat">
        <p>17</p>
     </div>
     <div class="cajita icono">
        <p>+</p>
     </div>
      <div class="cajita chatabierto">
        <p>Chats Abiertos</p>
      </div>
      <div class="cajita chatactivo">
        <p>Chats Activos</p>
      </div>
      <div class="cajita panel">
        <p>Ir al panel de mensajes</p>
      </div>
  </div>
   <div class="foter">
      <div class="image-footer">
        <img src="../assets/recursos/foto-01.png" width="30px" height="15px">
      </div>
      <div class="image-footer s">
        <img src="../assets/recursos/foto-01.png" width="30px" height="15px">
      </div>
      <div class="image-footer ss">
        <img src="../assets/recursos/foto-01.png" width="30px" height="15px">
      </div>
      <div class="image-footer sss">
        <p>+</p>
     </div>
      
   </div>
</div>

</template>

<script>
export default {
  name: 'messages',
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
.messages{
    align-items: center;
    text-align: center;
    color: $blanco;
    background: linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
    border-radius: 15px;
    box-shadow: 4px 4px 34px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    .p{
        position: absolute; top:50%; left:50%; transform:translate(-6%, -117%);
        color: $gris;
        font-weight: bold;
    }
}
.carta{
    position: relative;
    height: 80%;
    display:  flex;
    align-items:  center;
    justify-content:  space-evenly;
}
.foter{
    width: 100%;
    margin: 0 auto;
    background: transparent;
    position: relative;
    height: 20%;
    color: $blanco;
    border-top: dotted; 
  	border-width: 1px; 
    border-color: rgba(255, 255, 255, 0.3);
    padding: 15px;
    align-self: center;
    
}
.image-footer{
   border-radius: 137px;
   overflow: hidden;
   height: 30px;
   width: 30px;
   display: inline-block;

   &.sss{
    border-radius: 50%;
    font-size: 20px;
    background: $blanco;
    color: $verdea;
    font-size: 20px;
    font-weight: bold;
   }
}


.cajita{
  top: 50%;
  left: 50%;
  border-radius: 5px;
  position: absolute;
  background:#1F8EFA;
  width: 50px;
  height: 25px ;
  transform: translate(87%, -153%);
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
  font-weight: bold;
  filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.1));
 
  &.fb {
    transform: translate(64%, -33%);

  }

  &.tw {
    transform: translate(38%, 86%);
  }
  &.chat{
    transform: translate(-197%, -167%);;
    border-radius: 50%;
    width: 30px;
    height: 30px ;

  }
  &.icono{
    transform: translate(-412%, -340%);
    border-radius: 50%;
    width: 25px;
    height: 25px ;
    font-size: 20px;
    background: $blanco;
    color: $verdea;

  }
   &.chatabierto{
    background: transparent;
    transform: translate(-200%, -267%);
    width: 30px;
    height: 30px ;
    text-align: left;
    
  }
   &.chatactivo{
    background: transparent;
    text-align: left;
    transform: translate(-48%, 75px);
    width: 100px;
    height: 15px ;
    text-align: left;
    font-size: 0.9em;
    font-weight: normal;

  }
  &.panel{
    background: transparent;
    text-align: left;
    transform: translate(-48%, 95px);
    width: 160px;
    height: 15px ;
    text-align: left;
    font-size: 0.9em;
    color: $azul;
    font-weight: normal;
  }

  img {
    height: 15px; margin: 3px 3px 2px 0px;
  }

}
</style>
