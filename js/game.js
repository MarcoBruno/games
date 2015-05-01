(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var gravidade = 10;
	var elementos = [];

	function gameLoop() {
		context.beginPath();
		context.clearRect(0, 0, $canvas.width, $canvas.height);

		elementos.forEach(function (el) {
			el.desenha($canvas,gravidade,elementos);
		});

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);

	window.addEventListener("keyup",function (ev) {
		var tamanho = 40; 
		var teclas = [];
		teclas[49] = 0; //Tecla 1
		teclas[50] = 1; //Tecla 2
		teclas[51] = 2; //Tecla 3
		teclas[52] = 3; //Tecla 4
		teclas[53] = 4; //Tecla 5
		var novoElemento = new Elemento(teclas[ev.keyCode] * tamanho, (tamanho +20) * -1, tamanho);

		console.log(teclas[ev.keyCode]);

		elementos.push(novoElemento);
	});

})(document, window);
