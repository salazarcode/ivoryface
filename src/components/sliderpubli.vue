<template>
<div class="slideshow">
  <ul class="slider">
		<li>
			<div class="sliderimagen">
				<img src="../assets/recursos/foto-02.png" class="img"  >
			</div>
    </li>
    <li>
        <div class="sliderimagen">
          <img src="../assets/recursos/foto-03.png" class="img" >
        </div>
    </li>
  </ul>
  <div class="left">
        <span class="fa fa-chevron-left"></span>
      </div>

      <div class="right">
        <span class="fa fa-chevron-right"></span>
  </div>
</div>
</template>
<script>
export default {
  
}
$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);



	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});

</script>

<style lang="scss" scoped>
ul,ol{
	list-style: none;
}

.slideshow{
	width: 100%;
	position: relative;
}

.slider  ul{
  width: 100%;
    position: absolute;
}


.sliderimagen{
    top: 17px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;


}
.img{
    height: 146px;
    width: 60%;
}
.left{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 64px;
    left: 11px;
}
.right{
  display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 64px;
    right: 11px;
}

</style>





