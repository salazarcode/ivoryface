<template>
    <div class="world size">
        <div class="mundo">
            <img src="../assets/recursos/world.svg">
        </div>
        <div class="letra">
            <p>1225</p>
        </div>
           <div class=" letra gris">
            <p>visitas a su sitio web</p>
        </div>
          <div class=" letra gris-2">
            <p>con 23% de indice de rebote</p>
        </div>
           <div >
            <a class="cajita">+</a>
        </div>
        <div class="icono">
             <p><img src="../assets/recursos/logo-drive-azul.png" width="18px" height="18 px"></p>
        </div>
        <div >
            <a class="pdf">PDF</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$blanco:#fff;
$negro:#000;
$gris:#434B52;
$azul:#1F8EFA;
$verdea:#75EAFF;
$grisc:#D3D3D3;
$degradado:linear-gradient(45deg, rgba(77,166,254,1) 0%, rgba(0,228,253,1) 100%);
.world{
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
    width: 100%;
    height: 300px;
}
.mundo{
    width: 90%;
    height: 90%;
    margin:4px auto;
	display:block;
    position: relative;
    
}
.letra{
    text-align: center;
    transform: translate(16%, -92px);
    width: 118px;
    height: 15px;
    text-align: left;
    font-size: 50px;
   
    color: $negro;
    &.gris{
        transform: translate(13%, -48px);
        color: $grisc;
        font-size: 16px;
        width: 227px;
        font-weight: bold;
    }
    &.gris-2{
        transform: translate(13%, -41px);
        color: $grisc;
        font-size: 16px;
        width: 227px;
        font-weight:normal;
    }
    &.letra-2{
        transform: translate(100%, 102px);
        color: $negro;
        font-size: 15px;
        width: 227px;
        font-weight:bold;
        
    }
}
.cajita{
    float: right;
    background:#1F8EFA;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform: translate(-18px, -88px);
    border-radius: 50%;
    width: 25px;
    height: 25px ;
    font-size: 20px;
    color: $blanco;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.1));
}
.icono{
        border-radius: 4px;
        width: 25px;
        height: 25px ;
        justify-content: center;
        align-items: center;
        display: flex;
        //position: absolute;
        float: right;
        transform: translate(7px, -57px);
}
.pdf{
        background: $azul;
        color: $blanco;
        font-size: 10px;
        transform: translate(36PX, -290px);
        border-radius: 4px;
        width: 35px;
        height: 18px ;
        justify-content: center;
        align-items: center;
        display: flex;
        //position: absolute;
          float: right;
}
</style>

