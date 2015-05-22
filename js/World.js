var WORLD = (function() {
	'use strict';
	
	var collumns = [];
	var gravity = 0.005;
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var interaction = new Interaction(document);
	var gameLoop = new GameLoop(context);

	this.newSquare = function () {
		var square = new Square(100, 0, 50, 50, 50, 0, this);
		gameLoop.addSprite(square);
	}

	this.getContext = function () {
		return context;
	}

	var _init = function () {

		for(var i = 0; i < 5; i++) {
			collumns[i] = 0;
		};

	};
	
	this.getGravity = function () {
		return gravity;
	}
	this.getCollumn = function (index) {
		return collumns[index];
	}
	this.updateCollumn = function (collumn) {
		collumns[collumn]++;
	}

	this.start = function () {
		_init();
		this.newSquare();
		gameLoop.start();
	};

});