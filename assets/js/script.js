
function changeBtnNav(id){
	let elementActived = document.getElementsByClassName('active');
	if(id != elementActived[0].id){
		elementActived[0].classList.remove('active');
		document.getElementById(id).classList.add('active');
	}
}
$(window).scroll(function (event) {
	if($(window).scrollTop() <= 30){//caso o topo barra de navegacao seja menor do que 30px remove o background
		if($("#nav-cv").hasClass('nav-white'))
			$("#nav-cv").removeClass('nav-white');
		
	}else{
		if(!$("#nav-cv").hasClass('nav-white'))
			$("#nav-cv").addClass('nav-white');
	}

	if($(window).scrollTop() > $('#about').scrollTop() + 150 && $(window).scrollTop() < $('#portfolio').scrollTop() + 500){
		if(!$("#about").hasClass('show-about'))
			$("#about").addClass('show-about');
		changeBtnNav('btn-about')
	}

	if($(window).scrollTop() > $('#portfolio').scrollTop() + 500 && $(window).scrollTop() < $('#skills').scrollTop() + 1000){
		if(!$("#portfolio").hasClass('show-portfolio'))
			$("#portfolio").addClass('show-portfolio');
		changeBtnNav('btn-portfolio')
	}

	if($(window).scrollTop() > $('#skills').scrollTop() + 1000 && $(window).scrollTop() < $('#experience').scrollTop() + 1900){
		$('.chart__title').css({'display':'block'});
		$('.chart__bar').css({'display':'flex'});
		changeBtnNav('btn-skills')
	}

	if($(window).scrollTop() > $('#experience').scrollTop() + 1900 && $(window).scrollTop() < $('#formation').scrollTop() + 2300){
		if(!$("#experience").hasClass('show-experience'))
			$("#experience").addClass('show-experience');
		changeBtnNav('btn-experience')
	}

	if($(window).scrollTop() > $('#formation').scrollTop() + 2300 && $(window).scrollTop() < $('#certificates').scrollTop() + 2600){
		if(!$("#formation").hasClass('show-formation'))
			$("#formation").addClass('show-formation');
		changeBtnNav('btn-formation')
	}

	if($(window).scrollTop() > $('#certificates').scrollTop() + 2600){
		if(!$("#certificates").hasClass('show-certificates'))
			$("#certificates").addClass('show-certificates');
		changeBtnNav('btn-certificate')
	}

	
});
$(document).ready(function(){
	/*function closeNavByClickingItemMobile(){
		if($("#nav-cv ul").css("display") != "none" && $(window).width() <= 640)
			$("#nav-cv ul").css({"display":"none"});
	}*/

	

	$("#btn-about").click(function(){
		$('html, body').animate({scrollTop: $('#about').offset().top - 200}, 500);
		//closeNavByClickingItemMobile();
	});

	$("#btn-portfolio").click(function(){
		$('html, body').animate({scrollTop: $('#portfolio').offset().top - 120}, 500);
		//closeNavByClickingItemMobile();
	});

	$("#btn-skills").click(function(){
		$('html, body').animate({scrollTop: $('#skills').offset().top - 50}, 500);
		//closeNavByClickingItemMobile();
	});

	$("#btn-experience").click(function(){
		$('html, body').animate({scrollTop: $('#experience').offset().top - 250}, 500);
		//closeNavByClickingItemMobile();
	});

	$("#btn-formation").click(function(){
		$('html, body').animate({scrollTop: $('#formation').offset().top - 340}, 500);
		//closeNavByClickingItemMobile();
	});

	$("#btn-certificate").click(function(){
		$('html, body').animate({scrollTop: $('#certificates').offset().top  - 150}, 500);
		//closeNavByClickingItemMobile();
	});
	

	$("#btn-toogle-nav").click(function(){
		$("#nav-cv ul").toggle(500);
	});

	$("#btn-nav-close").click(function(){
		$("#nav-cv ul").toggle(500);
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

particlesJS("header",
		{
			"particles": {
				"number":{
					"value":40,"density":{
						"enable":true,"value_area":800
					}
				},
				"color": {
					"value":"#ffffff"
				},
				"shape": {
					"type":"circle",
					"stroke": {
						"width": 0, "color":"#000000"
					},
					"polygon": {
						"nb_sides":5
					},
					"image": {
						"src":"img/github.svg",
						"width":100,
						"height":100
					}
				},
				"opacity": {
					"value":0.5,"random":false,"anim": {
						"enable":false,
						"speed":1,
						"opacity_min":0.1,
						"sync":false
					}
				},
				"size": {
					"value":3,
					"random":true,
					"anim": {
						"enable":false,
						"speed":40,
						"size_min":0.1,
						"sync":false
					}
				},
				"line_linked": {
					"enable":true,
					"distance":150,
					"color":"#ffffff",
					"opacity":0.4,
					"width":1
				},
				"move": {
					"enable":true,
					"speed":6,
					"direction":"none",
					"random":false,
					"straight":false,
					"out_mode":"out",
					"bounce":false,
					"attract": {
						"enable":false,
						"rotateX":600,
						"rotateY":1200
					}
				}
			},
			"interactivity": {
				"detect_on":"canvas",
				"events": {
					"onhover": {
						"enable":true,
						"mode":"repulse"
					},
					"onclick": {
						"enable":true,
						"mode":"push"
					},
					"resize":true
				},
				"modes": {
					"grab": {
						"distance":400,
						"line_linked": {
							"opacity":1
						}
					},
					"bubble": {
						"distance":400,
						"size":40,
						"duration":2,
						"opacity":8,
						"speed":3
					},
					"repulse": {
						"distance":200,
						"duration":0.4
					},
					"push": {
						"particles_nb":4
					},
					"remove": {
						"particles_nb":2
					}
				}
			},
			"retina_detect":true
		}
	);

	var count_particles, stats, update;
	stats = new Stats;
	stats.setMode(0);
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
	count_particles = document.querySelector('.js-count-particles');
	update = function() {
		stats.begin(); stats.end();
		if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
			count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
		}
		requestAnimationFrame(update);
	};
	requestAnimationFrame(update);