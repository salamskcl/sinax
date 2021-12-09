(function ($) {
"use strict";

	// Preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})







	$('.bar-menu, .close-btn').on('click', function(){
	    $('.site-bar').toggleClass('dissmis-bar');
	});











	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "767"
	});


	// header-sticky
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 5) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


	// Slider Area
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 1000,
			dots: false,
			prevArrow: '<button type="button" class="slick-prev"> <span class="ti-shift-left"></span> </button>' ,
			nextArrow: '<button type="button" class="slick-next"> <span class="ti-shift-right"></span> </button>' ,
			fade: true,
			arrows: true,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, autoplay: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();


	// band-slider

	$('.band-active').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  arrows: false,
	  autoplay: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});


	// counter
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});




	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});




	/* magnificPopup video view */
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});



	$('.grid-item').imagesLoaded( function() {
	  // images have loaded
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    // use outer width of grid-sizer for columnWidth
		    columnWidth: '.grid-item',
		  }
		});
		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});










	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<span class="ti-angle-up"></span>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();


})(jQuery);