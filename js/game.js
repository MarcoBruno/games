(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var gravidade = 10;
	var elementos = [];

	function gameLoop() {
		context.beginPath();
		context.clearRect(0, 0, $canvas.width, $canvas.height);

		elementos.forEach(function (el) {
			el.desenha($canvas,gravidade);
		});

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);

	$canvas.addEventListener("click",function (ev) {
		var tamanho = 20 + parseInt(Math.random() * 20); 
		var novoElemento = new Elemento(ev.pageX, -100, tamanho);
		elementos.push(novoElemento);
	});

})(document, window);
