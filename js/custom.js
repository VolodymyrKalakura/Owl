$(document).ready(function(){
	$(".burger").click(function(){
		$(".header__right").toggleClass("is-open");
		$(".burger__icon").toggleClass("open");
		if ($(".burger__icon").hasClass("open")) {
			$(".burger").css("background-color", "#fff");
		} else {
			$(".burger").css("background-color", "#fdd430");
		}
	});
	$('.slider').slick({
		// arrows: true,
		dots: true,
		infinite: true,
		speed: 300,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		adaptiveHeight: true
	});
	$(".btn").on("click", function () {
		$(".overlay").addClass("active");
	});
	$(".form").sendMail();
        // $(".form").on("success.sml", function () {
        //     $(".overlay").addClass("active");
        // });
	$(".popup__close").on("click", function () {
		$(".overlay").removeClass("active");
	});
	$(document).mouseup(function (e) {
		var o = $(".popup");
		e.target != o[0] && 0 === o.has(e.target).length && $(".overlay").removeClass("active");
	});
	$('a[href^="#"]').click(function () {
		var e = $(this).attr("href"),
		o = $(e).offset().top - 60;
		return jQuery("html:not(:animated), body:not(:animated)").animate({ scrollTop: o }, 800), !1;
	});
});