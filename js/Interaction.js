var Interaction = (function(listen) {
	'use strict';

	var module = {
		listen : listen,
		keyboard : new Keyboard()
	};

	module._init = function() {


		module.listen.addEventListener('keydown', function(event) {

			var key = module.keyboard.getKey(event.keyCode);

			if (key) {
				key.turnOn();
				key.action();
			};
		});

		module.listen.addEventListener('keyup', function(event) {
			var key = module.keyboard.getKey(event.keyCode);

			if (key) {
				key.turnOff();
			};
		});
	};

	module.presses = function(name, callback) {
		var key = module.keyboard.getKey(name);

		key.action = callback;
	};

	module.start = function() {
		module._init();
	};

	return {
		start : module.start,
		presses : module.presses
	};
});