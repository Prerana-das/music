(function($) {
'use strict';

    $(document).ready(function() {


 // side_menu Modal
      $('.main_logo').click(function() {
              $(".side_menu").addClass("side_menu_modal_show");
              $(".side_menu_overlay").addClass("side_menu_modal_fadeIn");
          });

          $(".side_menu_close").click(function(e) {
              e.preventDefault();
              $(".side_menu").removeClass("side_menu_modal_show");
              $(".side_menu_overlay").removeClass("side_menu_modal_fadeIn");
          });




$(".single_videos_slider .col-md-12").hide();
 $('.single_videos_slider .videos_btn').click(function() {
 	$(".single_videos_slider .col-md-12").show(800);

 });

 $('.video_cross').click(function(){
 	$('.single_videos_slider .col-md-12').hide(800);
 });


$(".videos_slider").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:true,
		autoplay:false
	});


// $(".full_vlog_slider").owlCarousel({
// 		items:1,
// 		loop:true,
// 		dots:true,
// 		nav:true,
// 		autoplay:false
// 	});

$(".vlog_slider").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:true,
		autoplay:false
	});
	

	$(".single_vlog_slider").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:true,
		autoplay:false
	});

	//pagination
	$('#page').pagination_main({
            size: 100,
            pageShow: 5,
            page: 2,
            limit: 10,
    	}, function(obj){
            $('#info').html('Current page: ' + obj.page);
    	});

   });

    $(window).on('load', function() {
		$('#status').fadeOut();
		$('#preloader').delay(100).fadeOut('fast');
		$('body').delay(100).css({'overflow':'visible'});
		
		
		});


})(jQuery);