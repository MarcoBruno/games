function Elemento(x, y, tamnho) {
	var x = x;
	var y = y;
	var tamanho = tamanho;

	var desenha = function ($canvas,forcaDaGravidade) {

		this.calculaGravidade($canvas,forcaDaGravidade);
		var context = $canvas.getContent('2d');

		context.rect(x, y, tamanho, tamanho);	
		context.fillStyle = "#000";

		context.fill();
	};

	var calculaGravidade = function ($canvas,forcaDaGravidade) {
		if (this.y < $canvas.height-30) {
			this.y+=5;
		} else {
			this.y = $canvas.height-30;
		}
	};
	

	
	
};