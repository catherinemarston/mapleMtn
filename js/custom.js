$(document).ready(function() {

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if (scroll > 1) {
	      $('body').addClass('scrolled');
	    } else if (scroll < 1) {
	      $('body').removeClass('scrolled');
	    }
  	});

});


var target = $('.foreground');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
    }
});
