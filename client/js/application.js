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
});