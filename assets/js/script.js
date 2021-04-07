$(document).ready(function(){
	function closeNavByClickingItemMobile(){
		if($("#nav-cv ul").css("display") != "none" && $(window).width() <= 640)
			$("#nav-cv ul").css({"display":"none"});
	}


	$("#btn-abstract").click(function(){
		$('html, body').animate({scrollTop: $("#abstract").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-portfolio").click(function(){
		$('html, body').animate({scrollTop: $("#portfolio").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-experience").click(function(){
		$('html, body').animate({scrollTop: $("#experience").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-formation").click(function(){
		$('html, body').animate({scrollTop: $("#formation").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-premiations").click(function(){
		$('html, body').animate({scrollTop: $("#premiations").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-activities").click(function(){
		$('html, body').animate({scrollTop: $("#activities").offset().top-100}, 500);
		closeNavByClickingItemMobile();
	});

	$("#btn-toogle-nav").click(function(){
		$("#nav-cv ul").toggle(500);
	});

	$("#toggle-skills-cvmg").click(function(){
		if(!$("#skills").hasClass("effect-show-skills")){
			$("#skills").addClass("effect-show-skills");
			$("#skills").removeClass("effect-hide-skills");
		}else{
			$("#skills").addClass("effect-hide-skills");
			$("#skills").removeClass("effect-show-skills");
		}
	});

	$("#toggle-data-cvmg").click(function(){
		if(!$("#data-mg").hasClass("effect-show-data-mg")){
			$("#data-mg").addClass("effect-show-data-mg");
			$("#data-mg").removeClass("effect-hide-data-mg");
		}else{
			$("#data-mg").addClass("effect-hide-data-mg");
			$("#data-mg").removeClass("effect-show-data-mg");
		}
	});
});