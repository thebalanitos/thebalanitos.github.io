$(window).scroll(function(){
	parallax();
})
function parallax(){
	
	var wScroll = $(window).scrollTop();

	if($(window).width() > 1024)
		$('.parallax').css('background-position','center '+(wScroll)*0.42+'px');
	
}
