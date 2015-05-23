var Text = (function(text,color,x,y,world,alterable) {
	'use strict';

	var module = {
		texto : text,
		color: color,
		x: x,
		y: y,
		world : world,
		alterable : alterable || false
	}

	module.draw = function() {
		var context = module.world.getContext();
		context.beginPath();
		context.fillStyle = module.color;
		context.font = "18px serif";
		context.textBaseline = "top";
		context.fillText(module.texto, module.x, module.y);	
	};

	module.setText = function (text) {
		if(module.alterable) {
			module.texto = text;
		};
	};

	module.update = function(deltaTime) {

		// usa para animação

	};

	
	return {
		draw : module.draw,
		update : module.update,
		setText : module.setText	
	};

});