/*global $*/

$(function () {
	
	'use strict';
	
	// header height
	
	//$("header").height($(window).height());
	
	$(".head i").click(function () {
		
		$("body").animate({
			
			scrollTop: $(".features").offset().top
			
		}, 1000);
	});
});






/*var mycomment = document.getElementById("main-color2"),
	i = 0;
window.onload = function () {
	"use strict";
	var mydiv = setInterval(function () {
		var myText = "WELCOME WOODER";
		mycomment.textContent += myText[i];
		i++;
		if (i > myText.length - 1) {
			clearInterval(mydiv);
			$("#but").fadeIn(1000);
			$("#but2").fadeIn(1000);
	    }
	}, 200);
};*/






