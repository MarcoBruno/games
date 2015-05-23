var StaticSquare = (function(id,positionX, positionY, width, height, color, world) {
	'use strict';

	var module = {
		id: id,
		world : world,
		positionX : positionX,
		positionY : positionY,
		width : width,
		height : height,
		color : color
	};

	module.setColor = function (color) {
		module.color = color;
	}

	module.draw = function() {
		var context = module.world.getContext();
		context.beginPath();
		context.fillStyle = module.color;
		module.world.getContext().fillRect(module.positionX, module.positionY, module.width, module.height);	
	};

	module.update = function(deltaTime) {
		
	};

	return {
		draw : module.draw,
		update : module.update,
		id : module.id,
		setColor : module.setColor
	};
});