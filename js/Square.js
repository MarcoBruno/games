var Square = (function(id,positionX, positionY, width, height, velocityX, velocityY, color, world) {
	'use strict';

	var module = {
		id: id,
		world : world,
		positionX : positionX,
		positionY : positionY,
		width : width,
		height : height,
		velocityX : velocityX,
		velocityY : velocityY,
		line : 9,
		color : color,
		collumn : 2,
		colission : false
	};

	module._collisionY = function() {
		return !(module.positionY + module.height < module.world.getContext().canvas.height - (module.height * module.world.getCollumn(module.collumn)));
	};

	module._collissionLeft = function() {
		return module.positionX != 0;
	};

	module._collissionRight = function() {
		return module.positionX < (module.width * 5) - module.width;
	};

	module.setColor = function (color) {
		module.color = color;
	}

	module.draw = function() {
		var context = module.world.getContext();
		context.beginPath();
		context.fillStyle = color;
		module.world.getContext().fillRect(module.positionX, module.positionY, module.width, module.height);	
	};

	module.update = function(deltaTime) {
		if (!module._collisionY()) {
			module.velocityY += module.world.getGravity();
			module.positionY += module.velocityY * deltaTime;
		} else if (!module.colission) {	

			world.updateCollumn(module);
			module.positionY = module.world.getContext().canvas.height - (module.height * module.world.getCollumn(module.collumn));
			module.colission = true;
			// criar um novo quadrado
			module.world.newSquare();
			module.world.calcPoints();
		};
	};

	module.moveLeft = function() {
		if (module._collissionLeft() && !module._collisionY()) {
			module.positionX -= module.velocityX;
			module.collumn--;
		};
	};

	module.moveRight = function() {
		if (module._collissionRight() && !module._collisionY()) {
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
		moveDown : module.moveDown,
		id : module.id,
		setColor : module.setColor
	};
});