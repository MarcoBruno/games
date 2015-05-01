function Elemento(x, y, tamanho , coluna , indice) {
	var x = x;
	var y = y;
	var tamanho = tamanho;
	var coluna = coluna;
	var indice = indice;

	var calculaGravidade = function ($canvas,forcaDaGravidade,colunas) {
		
		if(y < $canvas.height - (tamanho * colunas[coluna]) - 1) {
			y += forcaDaGravidade;
		}else {
			y = $canvas.height - tamanho * indice - 1;
		};

	};

	this.desenha = function ($canvas,forcaDaGravidade,colunas) {

		calculaGravidade($canvas,forcaDaGravidade,colunas);
		var context = $canvas.getContext('2d');
		
		context.rect(x, y, tamanho, tamanho);	
		context.fillStyle = "#000";

		context.fill();
	};
};