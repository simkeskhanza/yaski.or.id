/**
	* Template Name: Eventoz
	* Version: 1.0
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS

	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION
	7. MOBILE MENU CLOSE


**/



(function( $ ){



	/* ----------------------------------------------------------- */
	/*  1. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 150) {
        $('.mu-navbar').addClass('mu-nav-show');

	    } else {
	        $('.mu-navbar').removeClass('mu-nav-show');
	    }
	});

	/* ----------------------------------------------------------- */
	/*  2. EVENT TIME COUNTER
	/* ----------------------------------------------------------- */

	$('#mu-event-counter').countdown('2019/04/03').on('update.countdown', function(event) {
	  var $this = $(this).html(event.strftime(''
	    + '<span class="mu-event-counter-block"><span>%D</span> Hari</span> '
	    + '<span class="mu-event-counter-block"><span>%H</span> Jam</span> '
	    + '<span class="mu-event-counter-block"><span>%M</span> Menit</span> '));
	});


	/* ----------------------------------------------------------- */
	/*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.mu-speakers-slider').slick({
		  slidesToShow: 4,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 1
		      }
		    }
		  ]
		});





	/* ----------------------------------------------------------- */
	/*  6. BOOTSTRAP ACCORDION
	/* ----------------------------------------------------------- */

		/* Start for accordion #1*/
		$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
		});

		//The reverse of the above on hidden event:

		$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
		});


	/* ----------------------------------------------------------- */
	/*  7. MOBILE MENU CLOSE
	/* ----------------------------------------------------------- */

	jQuery('.mu-menu').on('click', 'li a', function() {
	  $('.mu-navbar .in').collapse('hide');
	});


})( jQuery );
