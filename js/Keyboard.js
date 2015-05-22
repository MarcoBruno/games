var ARROWLEFT = 37;
var ARROWRIGHT = 39;
var ARROWDOWN = 40;

var Keyboard = (function() {
	'use strict';

	var module = {};
	var Key = [];

	Key[ARROWLEFT] = {
		on : false
	};
	
	Key[ARROWRIGHT] = {
		on : false
	};

	Key[ARROWDOWN] = {
		on : false
	};

	module.getKey = function(name) {
		var key = Key[name];

		if (key) {
			key.turnOn = function() {
				this.on = true;
			};

			key.turnOff = function() {
				this.on = false;
			};

			return key;
		};
	};

	return {
		getKey : module.getKey
	}
});	
	