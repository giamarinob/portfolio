$(document).ready(function()
{
	$('#about-contact').on('click', function(e)
	{
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
 		}, 600);
	})
})