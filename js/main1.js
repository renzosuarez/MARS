$(document).ready(function(){
	var imgItems = $('.slider li').length;// numero de slides
	var imgPos=1;
	//agregando paginacion
	for ( i = 1; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}
	//--------
	$('.slider li').hide();//se van a ocultar las imagenes
	$('.slider li:first').show();//aca solo se muestra la primera li dnd esta la imagen
	$('.pagination li:first').css({'color':'#CD6E2E'});//para darle efectos a los circulos del slid

	//ejecutamos las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	// slide automatico
	setInterval(function(){
		nextSlider();
	},6000);

	//funciones=========================
	function pagination(){

		var paginationPos=$(this).index() + 1 ;
		//console.log(paginationPos);
		$('.slider li').hide();//ocultamos
		$('.slider li:nth-child('+ paginationPos +')').fadeIn();//mostramos el correspondiente

		// dandoles estilos a los circulos

		$('.pagination li').css({'color':'#858585'});//se ponga gris cuando no se le da click
		$(this).css({'color':'#CD6E2E'});//se ponga naranja cuando no se le da click
		imgPos=paginationPos;
	}

	function nextSlider()
	{	
		if(imgPos>=imgItems){
			imgPos=1;
		}
		else{
			imgPos++;
		}
		
		//console.log(imgPos);
		$('.pagination li').css({'color':'#858585'});//se ponga gris cuando no se le da click
		$('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});//se ponga naranja cuando no se le da click
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();

		  clearInterval(interval);
            interval = setInterval(nextSlider,6000);
	}
	function prevSlider()
	{	
		if(imgPos<=1){
			imgPos=imgItems;
		}
		else{
			imgPos--;
		}
		
		//console.log(imgPos);
		$('.pagination li').css({'color':'#858585'});//se ponga gris cuando no se le da click
		$('.pagination li:nth-child('+ imgPos +')').css({'color':'#CD6E2E'});//se ponga naranja cuando no se le da click
		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();

		clearInterval(interval);
            interval = setInterval(nextSlider,6000);
	}
	interval = setInterval(nextSlider,6000);
});