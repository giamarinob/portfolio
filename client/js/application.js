$(document).ready(function(){
	
	//Basic jQuery to listen for mouse events on the navbar
	//Specifically enter leave or click
	$('.highlightable').on("mouseenter", function(e) {
		$(e.currentTarget).addClass('highlighted');
	});

	$('.highlightable').on('mouseleave', function(e) {
		$(e.currentTarget).removeClass('highlighted');
	});

	$('.highlightable-inverse').on("mouseenter", function(e) {
		$(e.currentTarget).addClass('highlighted-inverse');
	});

	$('.highlightable-inverse').on('mouseleave', function(e) {
		$(e.currentTarget).removeClass('highlighted-inverse');
	});

	$('.selectable').on('click', function(e){
		$('.active').removeClass('active');
		$(e.currentTarget).addClass('active');

		var hash = $(this).children('a').attr('href');

		$('html, body').animate({
			scrollTop: $(hash).offset().top
 		}, 600);

	});

	//Event listening for scrolling. Once user has scrolled passed the 'home' page
	//Then an alt navbar will appear to assist the user within the spa
	$(document).on('scroll', function(e)
	{
		//Grab the alternate navbar from the dom
		var navbar = $('.alt');

		//Check if the page has been scrolled past the height of the window
		//Then we know the page has been scrolled past the 'home' section
		if($(window).scrollTop() > $(window).height())
		{
			//Only do this one time once the condition has been met so it doesn't happen on every scroll
			if(navbar.hasClass('hidden'))
			{
				navbar.removeClass('hidden');
			}
		}
		//User has scrolled back into the 'home' section
		else if($(window).scrollTop() < $(window).height())
		{
			//Just add the class once not every scroll within the home section
			if(!(navbar.hasClass('hidden')))
			{
				navbar.addClass('hidden');
			}
		}
	});
});

// <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
//   	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>