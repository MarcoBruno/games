var GameLoop = (function(context) {
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

				if(sprite != null) {
					sprite.update(deltaTime);
					sprite.draw();
				}

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

	module.addSprite = function(sprite) {
		module.sprites.push(sprite);
	};

	module.removeSprite = function (sprite) {

		for(var i = 0; i < module.sprites.length ; i++) {
			var el = module.sprites[i];
			if(!(el == null) && el.id == sprite.id) {
				module.sprites[i] = null;
				
			}
		}

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
		});

		interaction.start();

		module.on = true;
		module._requestAnimationFrame();
	};

	module.stop = function() {
		module.on = false;
	};

	return {
		addSprite : module.addSprite,
		start : module.start,
		stop : module.stop,
		removeSprite : module.removeSprite
	};
});