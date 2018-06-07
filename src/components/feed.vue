<template>
<div class="feed size">
    <div class="inicio">
        <p>Feed de contenido</p>
    </div>
    <div class="contenedor">
        <p class="p">Recuerda compartir los articulos de ayer, José.
        Y recuerda decirle negro a jerinson 
        Y antipatica peruana a Luz </p>
        <a class="boton">+</a>
        <img src="../assets/recursos/logo-facebook-azul.png"  >
        <img src="../assets/recursos/logo-twitter-azul.png"  >
        <img src="../assets/recursos/logo-instagram-azul.png" > 
        <p class="p">Recuerda compartir los articulos de ayer, José.
        Y recuerda decirle negro a jerinson
        Y antipatica peruana a Luz </p>
        <a class="boton">+</a>
        <img src="../assets/recursos/logo-facebook-azul.png"  >
        <img src="../assets/recursos/logo-twitter-azul.png"  >
        <img src="../assets/recursos/logo-instagram-azul.png" > 

        <p class="p">Recuerda compartir los articulos de ayer, José.
        Y recuerda decirle negro a jerinson
        Y antipatica peruana a Luz </p>
        <a class="boton">+</a>
        <img src="../assets/recursos/logo-facebook-azul.png"  >
        <img src="../assets/recursos/logo-twitter-azul.png"  >
        <img src="../assets/recursos/logo-instagram-azul.png" > 
        <p class="p">Recuerda compartir los articulos de ayer, José.
        Y recuerda decirle negro a jerinson
        Y antipatica peruana a Luz </p>
        <a class="boton">+</a>
        <img src="../assets/recursos/logo-facebook-azul.png"  >
        <img src="../assets/recursos/logo-twitter-azul.png"  >
        <img src="../assets/recursos/logo-instagram-azul.png" > 
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
.feed{
    align-items: center;
    text-align: center;
    background: $blanco;
    border-radius: 15px;
    box-shadow: 4px 4px 34px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    overflow: hidden;
    

     &::after {
        content: '';
        height: 100%;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.0) 100%);
        pointer-events: none;
    }
}
.inicio{
    color: $gris;
    font-weight: bold;
    transform: translate(38px, 24px);
    position: absolute;

}
.contenedor{

    color: $azul;
    text-align: left;
    font-weight: bold;
    padding: 0px 10% 25px;
    height: 80%;
    right: -20px;
    position: absolute;
    bottom: 0;
    overflow-y: scroll;  
}
.p{
    margin-top: 23px;
}
img{
    width: 25px;
    height: 25px;
    float: right;
    padding: 5px;
    cursor: pointer;
}
.boton{
        border-radius: 50%;
        background: $degradado;
        color: $blanco;
        float: right;
        padding: 5px;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        display: flex;
        transform: translate(5px, 3px);
        cursor: pointer;
        }
</style>