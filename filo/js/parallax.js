$(window).scroll(function(){
	parallax();
})
function parallax(){
	
	var wScroll = $(window).scrollTop();

	if($(window).width() > 1024)
		{
			$('.parallax').css('background-position','center '+(wScroll)*0.48+'px');
			$('.second').css('background-position','center '+(wScroll)*0.28+'px');
		}
}
function calcVH() {
    $('.jumbotron').innerHeight( $(this).innerHeight() );
}
calcVH();
$(window).on('resize orientationchange', function() {
  calcVH();
});