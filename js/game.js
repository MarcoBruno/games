(function (doc, win) {
	var $canvas = doc.querySelector('#canvas');
	var context = $canvas.getContext('2d');
	var gravidade = 10;
	var elementos = [];
	var colunas = [0,0,0,0,0];
	var cores = ['#000','#f00', '#00f'];
	var teclas = [];
	teclas[49] = 0; //Tecla 1
	teclas[50] = 1; //Tecla 2
	teclas[51] = 2; //Tecla 3
	teclas[52] = 3; //Tecla 4
	teclas[53] = 4; //Tecla 5


	function gameLoop() {

		context.clearRect(0, 0, $canvas.width, $canvas.height);

		elementos.forEach(function (el) {
			el.desenha($canvas,gravidade,colunas);
		});

		win.requestAnimationFrame(gameLoop);
	};

	win.requestAnimationFrame(gameLoop);

	window.addEventListener("keyup",function (ev) {
		var corAleatoria = parseInt(Math.random() * 3) 
		var novaCor = cores[corAleatoria];

		var tamanhoBase = 40; 

		var novoX = teclas[ev.keyCode] * tamanhoBase;
		var novoY = (tamanhoBase + 20) * -1;
		var coluna = teclas[ev.keyCode];
		var indice = ++colunas[teclas[ev.keyCode]];

		var posicao = new Posicao(novoX,novoY,coluna,indice);
		

		var novoElemento = new Elemento(posicao,tamanhoBase, novaCor);

		elementos.push(novoElemento);

	});

})(document, window);
