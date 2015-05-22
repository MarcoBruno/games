var COLLUMN = [];
COLLUMN[0] = 0;
COLLUMN[1] = 0;
COLLUMN[2] = 0;
COLLUMN[3] = 0;
COLLUMN[4] = 0;

(function(document) {
	'use strict';

	var $canvas = document.getElementById('canvas');
	var context = $canvas.getContext('2d');

	var animation = new Animation(context);
	
	document.addEventListener('click', function(event) {
		var square = new Square(100, 0, 50, 50, 50, 0.2, context);
		animation.newSprite(square);
	});

	animation.start();
})(document);