<template>
    <div class="entradas size">
        <div class="inicio">
            <p>Entradas</p>
        </div>
        <div class="boton">
            <a>+</a>
        </div>
         <div class="boton s">
            <a>Publicar nuevo articulo</a>
        </div>
          <div class="sub">
            <p>Borradores</p>
        </div>
        <div class="contenido">
            <p class="p">Recuerda compartir los articulos de ayer, José.
            Y recuerda decirle negro a jerinson 
            Y antipatica peruana a Luz </p>
            <a class="boton ss">Publicar</a>
            <p class="p">Recuerda compartir los articulos de ayer, José.
            Y recuerda decirle negro a jerinson
            Y antipatica peruana a Luz </p>
            <a class="boton ss">Publicar</a>

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
.entradas{
  align-items: center;
    text-align: center;
    background: $degradado;
    border-radius: 15px;
    box-shadow: 4px 4px 34px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    filter:drop-shadow(0px 15px 10px rgba(0,0,0,0.3));
    position: relative;
    overflow: hidden;
    font-size: 15px;

     &::after {
        content: '';
        height: 100%;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        background: linear-gradient(45deg, rgba(69,158,255,1) 0%, rgba(255,255,255,0.0) 60%);
        pointer-events: none;
    }
}
.inicio{
    color:$blanco;
    font-weight: bold;
    -webkit-transform: translate(38px, 24px);
    transform: translate(38px, 24px);
    position: absolute;
}
.boton{
    width: 35px;
    height: 35px ;
    border-radius: 40px;
    font-size: 20px;
    background: $blanco;
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
        color: $azul;

    }
    &.ss{
        width: 60px;
        height: 23px ;
        font-size: 10px;
        transform: translate(0px, 0px);
        border-radius: 40px;
        color: $azul;
        float: left;
        margin: 5px;
    
    }

}
.sub{
        transform: translate(18px, 29px);
        color: $blanco;
        font-size: 12px;
        position: absolute
}
.contenido{
    color: $blanco;
    text-align: left;
    font-weight: bold;
    padding: 0px 13% 0px;
    height: 60%;
    right: -20px;
    position: absolute;
    bottom: 0;
    overflow-y: scroll;  
}
.p{
    margin-top: 35px;
}
img{
    width: 25px;
    height: 25px;
    float: right;
    padding: 5px;
}

</style>


