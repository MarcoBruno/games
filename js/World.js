var WORLD = (function() {
	'use strict';
	
	var collumns = [];
	var gravity = 0.005;
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var interaction = new Interaction(document);
	var gameLoop = new GameLoop(context);
	var colors = ['red','green','blue'];
	var idSquare = 1;
	var points = 0;
	var pointCounter;
	var instance = this;

	this.newSquare = function () {
		var random = parseInt(Math.random() * colors.length);
		var square = new Square(idSquare++,100, 0, 50, 50, 50, 0, colors[random], this);
		gameLoop.addSprite(square);
	}

	this.getContext = function () {
		return context;
	}

	var _init = function () {

		for(var i = 0; i < 5; i++) {
			collumns[i] = [];
		};

		var pointLabel = new Text("Pontos","black",260, 375 , instance);
		gameLoop.addSprite(pointLabel);

		pointCounter = new Text(points,"black",280, 400, instance, true);
		gameLoop.addSprite(pointCounter);

	};
	
	this.getGravity = function () {
		return gravity;
	}
	this.getCollumn = function (index) {
		return collumns[index].length;
	}
	this.updateCollumn = function (square) {
		collumns[square.collumn].push(square);
	}

	this.calcPoints = function () {

		// verifica colisao na vertical

		collumns.forEach(function (el) {

			var seguidos = 1;

			for(var i = 0; i < el.length - 1; i++) {
				if(el[i].color == el[i + 1].color) seguidos++;
				else seguidos = 1;
			}

			if(seguidos == 3) {
				
				gameLoop.removeSprite(el[el.length -1]);
				gameLoop.removeSprite(el[el.length -2]);
				gameLoop.removeSprite(el[el.length -3]);

				el.pop();
				el.pop();
				el.pop();
				
				points+= 10;
				pointCounter.setText(points);
			}

		});

		for(var i = 1; i < collumns.length - 1 ; i++) {

			for(var j = 0; j < collumns[i].length; i++) {
				
			}
		}

	}

	this.start = function () {
		_init();
		this.newSquare();
		gameLoop.start();
	};

});