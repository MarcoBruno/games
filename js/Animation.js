var Animation = (function(context) {
	'use strict';

	var module = {
		context : context,
		sprites : [],
		on : false,
		dateTime : Date.now()
	};

	module._requestAnimationFrame = function() {
		if (module.on) {
			var dateTimeNow = Date.now();
			var deltaTime = dateTimeNow - module.dateTime;
			module.dateTime = dateTimeNow;

			module._clearScreen();

			module.sprites.forEach(function(sprite) {
				sprite.update(deltaTime);
				sprite.draw();
			});

			requestAnimationFrame(module._requestAnimationFrame);
		};
	};

	module._clearScreen = function() {
		var context = module.context;
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	};

	module._lastSprite = function () {
		var sprites = module.sprites;
		var lastPosition = sprites.length - 1;

		return sprites[lastPosition];
	};

	module.newSprite = function(sprite) {
		module.sprites.push(sprite);
	};

	module.move = function(right) {
		var lastSprite = module._lastSprite();

		if (right) {
			lastSprite.moveRight();
		} else {
			lastSprite.moveLeft()
		};
	};

	module.start = function() {
		var interaction = new Interaction(document);

		interaction.presses(ARROWLEFT, function() {
			var lastSprite = module._lastSprite();

			lastSprite.moveLeft();
		});

		interaction.presses(ARROWRIGHT, function() {
			var lastSprite = module._lastSprite();

			lastSprite.moveRight();
		});

		interaction.presses(ARROWDOWN, function() {
			var lastSprite = module._lastSprite();

			lastSprite.moveDown();
		})

		interaction.start();

		module.on = true;
		module._requestAnimationFrame();
	};

	module.stop = function() {
		module.on = false;
	};

	return {
		newSprite : module.newSprite,
		start : module.start,
		stop : module.stop,
		move : module.move	
	};
});