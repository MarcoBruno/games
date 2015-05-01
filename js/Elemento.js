var Elemento = (function (x, y, tamanho) {
	var x = x;
	var y = y;
	var tamanho = tamanho;

	var calculaGravidade = function ($canvas,forcaDaGravidade) {
		if (y < $canvas.height-tamanho) {
			y+=5;
		} else {
			y = $canvas.height-tamanho;
		}
	};

	var desenha = function ($canvas,forcaDaGravidade) {

		calculaGravidade($canvas,forcaDaGravidade);
		var context = $canvas.getContext('2d');
		
		context.rect(x, y, tamanho, tamanho);	
		context.fillStyle = "#000";

		context.fill();
	};

	

	return {
		desenha: desenha
	}
});