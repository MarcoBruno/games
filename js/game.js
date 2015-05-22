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

	var world = new World(context);
	
	world.start();
	
})(document);