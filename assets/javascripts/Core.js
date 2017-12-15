$(document).ready(function () {

	$('.tp-banner').revolution({
		delay:9000,
		startwidth:1583,
		startheight:700,
		hideThumbs:10
	});
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
 		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		items:1
	   
	})
	$("#header #search #searchButton").click(function () {
		if ($("#header #search #input").hasClass("searchActive")) {
			$("#header #search #input").removeClass("searchActive")
		}
		else {
			$("#header #search #input").addClass("searchActive")
		}
	})
	$("#slider").width($(window).width())
	$("#disBG").height($(document).height() -500)

	$('.tp-banner').revolution({
		delay:9000,
		startwidth:1170,
		startheight:800,
		hideThumbs:10
	});
	
	$("#toogels .toogle").eq($("#toogels #homeCategory a.activeCategory").index()).addClass("toogleActive")

	$("#toogels #homeCategory a").click(function () {
		$("#toogels #homeCategory a").removeClass("activeCategory")
		$("#toogels .toogle").removeClass("toogleActive")
		$(this).addClass("activeCategory")
		$("#toogels .toogle").eq($(this).index()).addClass("toogleActive")
		return false
	})

	$("#header #navButton").click(function() {
		if ($("#header #navButton").hasClass("navButtonActive")) {
			$("#header #navButton").removeClass("navButtonActive")
			$("#nav").removeClass("navActive")
			$("body").removeAttr("style")
		}
		else {
			$("#header #navButton").addClass("navButtonActive")
			$("#nav").addClass("navActive")
			$("body").css("overflow","hidden")
		}
	})
	$(".SideNav").click(function() {
		if ($("#sidebar").hasClass("active")) {
			$("#sidebar").removeClass("active")
		}
		else {
			$("#sidebar").addClass("active")
		}
	})

	$("#teamSlider #teamTitle a").click(function() {
		$("#teamSlider #teamTitle a").removeClass("active")
		$(this).addClass("active")
		var a = $("#teamSlider #teamTitle a.active").index()

		$(".doctorAssistant > div").removeClass("active")
		$(".doctorAssistant > div").eq(a).addClass("active")
	})

	$(".soru").click(function() {
		$("#questionPopUp").addClass("active")
	})
	$(".soruDoctor").click(function() {
		$("#doctorQuestionPopUp").addClass("active")
	})

	$(".close").click(function() {
		$("#questionPopUp").removeClass("active")
		$("#doctorQuestionPopUp").removeClass("active")
	})

	var pageTitle= $("#pageTitle").data("img")
	$("#pageTitle").css('background', 'url('+pageTitle+') no-repeat center center') 

	$("#header .navIcon").click(function() {
		if ($("#header .navIcon").hasClass("navIconActive")) {
			$("#header .navIcon").removeClass("navIconActive")
			$("#header #navs").removeClass("active")
		}
		else {
			$("#header .navIcon").addClass("navIconActive")
			$("#header #navs").addClass("active")
		}
	})
	if ($(window).width() < 768) {
		$("#slider #call").css("top",$("#slider").height())

		$(window).resize(function() {
			
			$("#slider #call").css("top",$("#slider").height())
		})
	}

})

$(document).mouseup(function(e)  {
    var container = $(".searchActive");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#search #input").removeClass("searchActive");
    }
});

$(document).ready(function() {
	$(".soruDoctor").click(function() {
		$(".doctorQuestion div.popup figure img").remove()
		$(this).parent().parent().parent().find( "figure" ).find("img").clone().appendTo($(".doctorQuestion div.popup figure"))
		$("div.popup .popupTitle strong").remove()
		$(this).parent().parent().find( "strong" ).clone().appendTo($("div.popup .popupTitle"))
	})
})