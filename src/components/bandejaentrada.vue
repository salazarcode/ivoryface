<template>
    <div class="bandeja">
        <div>
            <a class="boton s">Nuevo mensaje</a>
        </div>
        <div class="icono img">
             <p><img src="../assets/Mensajes/icon-usuarios.png" width="18px" height="18 px"></p>
        </div>
        <div class="icono busqueda">
             <p><img src="../assets/Mensajes/icon-busqueda.png" width="18px" height="18 px"></p>
        </div>
        <div class="icono letra">
            <p> Todo</p>
        </div>
        <div class="icono letra-2">
            <p>Bandeja de entrada</p>
        </div>
        <div class="mensajes">
            <div class="caja">
                <img src="../assets/recursos/foto-01.png" class="foto">
                <div class="punto"></div>
            </div>
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
$degradado:linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
.bandeja{
    position: relative;
    width: 100%;
    
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
    position: absolute;
        &.s{
        width: 113px;
        height: 35px ;
        font-size: 10px;
         transform: translate(22px, 15px);
         border-radius: 6px;
    }
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
    cursor: pointer;
      &.img{
        background: transparent;
        position: absolute;
        top: 49px;
        left: 35px;
     }
     &.busqueda{
        background: transparent;
        transform: translate(49px, 78px);
        width: 18px;
        height: 18px ;
     }
     &.letra{
        position: absolute;
        background: transparent;
        //transform: translate(210px, 50px);
        color: #D3D3D3;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        top: 48px;
        right: -12px;
     }
      &.letra-2{
        position: absolute;
        background: transparent;
        //transform: translate(-232px, 85px);
        color:$gris;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        width: 139px;
        top: 80px;
        left: 33px;
        font-weight: bold;
     }
}
.mensajes{
    transform:translate(0px,127px);
    height: 350px;
}
.foto{
    display: flex;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    border-radius: 50px;
    overflow: hidden;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 15px;
    left: 15px;
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
}
.caja{
    height: 100px;
    width: 100%;
    border:solid;
    //transform: translate(-4px,127px);
    margin-top: 23px;
}
</style>


