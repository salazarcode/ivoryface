<template>
<div class="tarea size">
    <div class="inicio">
        <p>Notas</p>
    </div>
       <div >
        <a class="boton">+</a>
    </div>
    <div class="contenedor">
        <ul>
            <li>Recuerda compartir los articulos de ayer, José. </li>
            <li>Y recuerda decirle negro a jerinson </li>
            <li>Y antipatica peruana a Luz </li>
                        <li>Recuerda compartir los articulos de ayer, José. </li>
            <li>Y recuerda decirle negro a jerinson </li>
            <li>Y antipatica peruana a Luz </li>
                        <li>Recuerda compartir los articulos de ayer, José. </li>
            <li>Y recuerda decirle negro a jerinson </li>
            <li>Y antipatica peruana a Luz </li>
                        <li>Recuerda compartir los articulos de ayer, José. </li>
            <li>Y recuerda decirle negro a jerinson </li>
            <li>Y antipatica peruana a Luz </li>
        </ul>
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
.tarea{
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
.boton{
    width: 35px;
    height: 35px ;
    border-radius: 50%;
    font-size: 20px;
    background: $degradado;
    color: $blanco;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 16px;
    right: 35px;
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
</style>


