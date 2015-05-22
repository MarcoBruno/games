var World = (function(context,gameLoop) {
	'use strict';

	var module = {
		collumns : [],
		gravity: 10,
		context : context,
		interaction : new Interaction(document),
		gameLoop : new GameLoop(context)
	};

	document.addEventListener('click', function(event) {
		var square = new Square(100, 0, 50, 50, 50, 0.2, module.context);
		module.gameLoop.newSprite(square);
	});

	module.start = function () {
		module.gameLoop.start();
	};


	return {
		start : module.start
	};
});