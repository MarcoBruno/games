function Elemento(x, y, tamanho) {
	var x = x;
	var y = y;
	var tamanho = tamanho;

	var calculaGravidade = function ($canvas,forcaDaGravidade,elementos) {
		for(var i = 0; i < elementos.length ; i++) {
			var el = elementos[i];
		}

		if (y < $canvas.height-tamanho) {
			y+=5;
		} else {
			y = $canvas.height-tamanho;
		}	
	};

	this.desenha = function ($canvas,forcaDaGravidade,elementos) {

		calculaGravidade($canvas,forcaDaGravidade,elementos);
		var context = $canvas.getContext('2d');
		
		context.rect(x, y, tamanho, tamanho);	
		context.fillStyle = "#000";

		context.fill();
	};
};