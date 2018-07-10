$(document).ready(function(){
	contador =1;
	$('#btn-menu').click(function(){
		if (contador==1){
			$ ('.btn-menu span').removeClass('icon-paragraph-justify').addClass('icon-paragraph-justify');
			$ ('.menu-link').css({'left': '0'});
			contador=0;
		}else{
			contador=1;
			$ ('.menu-link').css({'left': '-100%'});
		}
	})
})