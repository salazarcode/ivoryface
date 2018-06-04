<template>
    <div class="navegacion">
        <div class="icono">
            <img src="../assets/recursos/icon-support.png" width="18px" height="18px"  >
        </div>
         <div class="icono question">
            <img src="../assets/recursos/icon-question.png" width="18px" height="18px"  >
        </div>
         <div class="icono user">
            <img src="../assets/recursos/icon-user.png" width="18px" height="18px"  >
        </div>
        <div class="icono marca">
            <img src="../assets/recursos/icon-marcas.png" width="18px" height="18px"  >
        </div>
         <div class="icono config">
            <img src="../assets/recursos/icon-config.png" width="18px" height="18px"  >
        </div>
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
$azul:#1F8EFA;
$verdea:#75EAFF;
$degradado:linear-gradient(to right, rgba(0,223,228,1) 0%, rgba(12,219,198,1) 85%, rgba(12,219,198,1) 100%); 
.navegacion{
    align-items: center;
    text-align: center;
    background: $blanco;
    font-family: Arial, Helvetica, sans-serif;
    //filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    height: 62px;
    display: flex;
    justify-content:space-around;
   
}
.icono{
    width: 35px;
    height: 35px ;
    border-radius: 50%;
    background: $degradado;
    font-weight:normal;
   
    opacity:1;
    display: flex;
    justify-content: center;
    align-items: center;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    
}

</style>


