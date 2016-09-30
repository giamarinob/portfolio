$(document).ready(function()
{
	$.get('/map', function(res) 
	{
		var url = "https://maps.googleapis.com/maps/api/js?key=" + res + "&callback=initMap"
  });
});