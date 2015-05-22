var Square = (function(positionX, positionY, width, height, velocityX, velocityY, context) {
	'use strict';

	var module = {
		context : context,
		positionX : positionX,
		positionY : positionY,
		width : width,
		height : height,
		velocityX : velocityX,
		velocityY : velocityY,
		line : 9,
		collumn : 2,
		colission : false
	};

	module._collisionY = function() {
		return module.positionY + module.height < module.context.canvas.height - (module.height * COLLUMN[module.collumn]);
	};

	module._collissionLeft = function() {
		return module.positionX != 0;
	}

	module._collissionRight = function() {
		return module.positionX < (module.width * 5) - module.width;
	}

	module.draw = function() {
		module.context.fillRect(module.positionX, module.positionY, module.width, module.height);	
	};

	module.update = function(deltaTime) {
		if (module._collisionY()) {
			module.positionY += module.velocityY * deltaTime;
		} else if (!module.colission) {
			COLLUMN[module.collumn]++;
			module.positionY = module.context.canvas.height - (module.height * COLLUMN[module.collumn]);
			module.colission = true;
		};
	};

	module.moveLeft = function() {
		if (module._collissionLeft() && module._collisionY()) {
			module.positionX -= module.velocityX;
			module.collumn--;
		};
	};

	module.moveRight = function() {
		if (module._collissionRight() && module._collisionY()) {
			module.positionX += module.velocityX;
			module.collumn++;
		};
	};

	module.moveDown = function() {
		module.velocityY *= 2;
	};

	return {
		draw : module.draw,
		update : module.update,
		moveLeft : module.moveLeft,
		moveRight : module.moveRight,
		moveDown : module.moveDown
	};
});