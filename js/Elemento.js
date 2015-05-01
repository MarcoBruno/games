function Elemento(posicao,tamanho,cor) {
	var posicao = posicao;
	var tamanho = tamanho;
	var cor = cor;

	var calculaGravidade = function ($canvas,forcaDaGravidade,colunas) {
		
		if(posicao.getY() < $canvas.height - (tamanho * colunas[posicao.getColuna()]) - 1) {
			var atual = posicao.getY();
			posicao.setY(atual + forcaDaGravidade);
		}else {
			var novoY = $canvas.height - tamanho * posicao.getIndice() - 1; 
			posicao.setY(novoY);
		};

	};

	this.desenha = function ($canvas,forcaDaGravidade,colunas) {

		calculaGravidade($canvas,forcaDaGravidade,colunas);
		var context = $canvas.getContext('2d');
		
		context.beginPath();

		context.rect(posicao.getX(), posicao.getY(), tamanho, tamanho);	
		context.fillStyle = cor;

		context.fill();

	};
};