(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var gravidade = 10;
	var quadrado = new Elemento(10,10,40);

	function gameLoop() {
		context.beginPath();
		context.clearRect(0, 0, $canvas.width, $canvas.height);

		quadrado.desenha($canvas,gravidade);

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);

	$canvas.addEventListener("click",function (ev) {
		quadrado.setX(ev.pageX);
	});
	
})(document, window);
