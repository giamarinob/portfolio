$(document).ready(function(){
	
	//Basic jQuery to listen for mouse events on the navbar
	//Specifically enter leave or click
	$('.selectable').on("mouseenter", function(e) {
		$(e.currentTarget).addClass('highlighted');
	});

	$('.selectable').on('mouseleave', function(e) {
		$(e.currentTarget).removeClass('highlighted');
	});

	$('.selectable').on('click', function(e){
		$('.active').removeClass('active');
		$(e.currentTarget).addClass('active');
	});

	//Event listening for scrolling. Once user has scrolled passed the 'home' page
	//Then an alt navbar will appear to assist the user within the spa
	$(document).on('scroll', function(e)
	{
		var navbar = $('.alt');
		if($(window).scrollTop() > $(window).height())
		{
			if(navbar.hasClass('hidden'))
			{
				navbar.removeClass('hidden');
			}
		}
		else if($(window).scrollTop() < $(window).height())
		{
			if(!(navbar.hasClass('hidden')))
			{
				navbar.addClass('hidden');
			}
		}
	});
});