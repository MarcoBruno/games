(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var cont = 10;

	function gameLoop() {
		context.beginPath();
		context.clearRect(0, 0, $canvas.width, $canvas.height);

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);
})(document, window);
