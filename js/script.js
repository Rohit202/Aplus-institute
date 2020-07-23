$(document).ready(function() {
    $('#myCarousel').carousel({
	    interval: 10000
	})
    $('#myCarousel').bind('slide', function(e) {
        setTimeout(function () {
            var next_h = $(e.relatedTarget).outerHeight();
            $('.carousel').css('height', next_h);
        }, 10);
    });
});



