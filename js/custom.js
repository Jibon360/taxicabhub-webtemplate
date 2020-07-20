

$(document).ready(function () {

	// collapse
	$(document).on("click", ".navbar-collapse.show", function (e) {
			$(e.target).is("a") && $(this).collapse("hide")
		}), // 


		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				$("nav").addClass("nav-bg");

			} else
				$("nav").removeClass("nav-bg");


		});

	// All animations will take exactly 500ms
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true
	});


});

