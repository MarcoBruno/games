(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var cont = 10;

	function gameLoop() {
		context.beginPath();

		context.clearRect(0, 0, $canvas.width, $canvas.height);

		context.rect(10, cont, 30, 30);
		if (cont < $canvas.height-30) {
			cont+=5;
		} else {
			cont = $canvas.height-30;
		}
		context.fillStyle = "#000";
		context.fill();

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);
})(document, window);
