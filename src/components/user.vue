<template>
    <div class="user">
        <div class="icono">
            <img src="../assets/recursos/ivory-iso.png">
        </div>
        <div class="icono foto">
        <img src="../assets/recursos/foto-01.png" class="foto">
        </div>
        <div class="letra">
            <p>Gerente General</p>
        </div>
         <div class="letra grande">
            <p>José Rivero</p>
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
$grisc:#D3D3D3;
$azul:#1F8EFA;
$verdea:#75EAFF;
$degradado:linear-gradient(to right, rgba(0,223,228,1) 0%, rgba(12,219,198,1) 85%, rgba(12,219,198,1) 100%); 
.user{
    text-align:  right;
    background: $blanco;
    font-family: Arial, Helvetica, sans-serif;
    //filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    height: 50px;
    display: flex;
}
.icono{
    width: 62px;
    height: 62px ;
    display: flex;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    &.foto{
        border-radius: 50px;
        overflow: hidden;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 6px;
        left: 81px;
    }
}
.letra{
    text-align: center;
    transform: translate(82%, 6px);
    width: 100px;
    height: 15px;
    text-align: left;
    font-size: 12px;
    font-weight:bold;
    color: $grisc;
    &.grande{
        transform: translate(-18%, 20px);
        color: $negro;
        font-size: 18px;
        width: 110px;
    }

}

</style>

