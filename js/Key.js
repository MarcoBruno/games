var Key = (function() {
	'use strict'

	var module = [];

	module[37] = function() {
		var name = 'arrowRight';
		var on = false;
	};
	
	module[39] = function() {
		var name = 'arrowLeft';
		var on = false;
	};
	
	module[].prototype.keyOn = function() {
		return this.on;
	};

	return module;
});