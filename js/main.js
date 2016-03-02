/////////////////////////////////
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			minSlides: 5,
			maxSlides: 5,
			captions: true,
			slideWidth: 300,
			controls: false,
			auto: true
		});
	});
/////////////////////////////////
 $('#button').on('click', function(){
 	$('#email').addClass('test')
 	if ( $('#mail:invalid').length ) return false;
 	var data = {
 		email: $('#mail').val()
 	}
 	console.log(data);
 	alert(JSON.stringify(data));
 });
