//-------------------------------------------- jQuery Waypoints v2.0.3

$("li").waypoint(function(){
		$(this).toggleClass('seen');
	}, { 
		offset: 'bottom-in-view'
});