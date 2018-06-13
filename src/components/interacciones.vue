<template>
    <div class="interacciones size">
        <div class="polygon">
            <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="MyGradient">
                        <stop offset="10%"  stop-color="#4DA6FE"/>
                        <stop offset="90%" stop-color="#05DFFE"/>
                    </linearGradient>
                </defs>
                <polygon fill="url(#MyGradient)" style="stroke:#05DFFE; stroke-width:1;"  points="-10,80 15,78 25,73 35,78 45,74 65,77 75,71 84,65 85,64 200,110 0,110" />
            </svg>
        </div>
        <div >
            <a class="pdf">PDF</a>
        </div>
        <div class="letra">
            <p>682</p>
        </div>
        <div class=" letra gris">
            <p>Interacciones en facebook</p>
        </div>
          <div class=" letra gris-2">
            <p>en la Semana</p>
        </div>
        <div class="letra letra-2">
            <p>200 reations</p>
            <p>3 comments</p>
            <p>25 shares</p>
        </div>
        <div >
            <a class="cajita">+</a>
        </div>
        <div class="icono">
             <p><img src="../assets/recursos/logo-drive-blanco.png" width="18px" height="18 px"></p>
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
.interacciones{
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
.pdf{
        background: $azul;
        color: $blanco;
        font-size: 10px;
        //transform: translate(480px, -268px);
        border-radius: 4px;
        width: 35px;
        height: 18px ;
        justify-content: center;
        align-items: center;
        display: flex;
        //position: absolute;
        float: right;
        margin: 25px;
}
.polygon{
  height:100%;
  width: 100%;
  position: absolute;
}
.letra{
    text-align: center;
    transform: translate(21%, 10px);
    width: 118px;
    height: 15px;
    text-align: left;
    font-size: 50px;
   
    color: $negro;
    &.gris{
        transform: translate(13%, 56px);
        color: $grisc;
        font-size: 16px;
        width: 227px;
    }
    &.gris-2{
        transform: translate(13%, 62px);
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
    top: 50%;
    left: 50%;
    position: absolute;
    background:#1F8EFA;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform: translate(228px, 65px);
    border-radius: 50%;
    width: 25px;
    height: 25px ;
    font-size: 20px;
    background: $blanco;
    color: $verdea;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.1));
}
.icono{
    top: 50%;
    left: 50%;
    transform: translate(227px, 111px);
    width: 25px;
    height: 25px ;
    cursor: pointer;
    position: absolute;
}
</style>
