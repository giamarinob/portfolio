$(document).ready(function()
{
	$('.home-contact').on('click', function(e)
	{
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
 		}, 600);
	})
})