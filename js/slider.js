var slider=$("#slider");
var siguiente=$("btn-next");
var anterior=$("btn-prev");


$("#slider section:last"). insertBefore("#slider section:first");
slider.css("margin-left", "-"+100+"%");

function moverD(){
	slider.animate({marginleft: "-"+200+"%"}, 700, function(){
	$("#slider section:first"). insertAfter("#slider section:last");	
	});
}

siguiente.on("click", function(){
	moverD();
});

anterior.on("click", function(){
	moverI();
});

function autoplay(){
	interval = setInterval(function(){
	moverD();	
	}, 5000);
}

autoplay();