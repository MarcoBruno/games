function Posicao(x,y,coluna,indice) {
	var x = x;
	var y = y;
	var coluna = coluna;
	var indice = indice;

	this.getX = function () {
		return x;
	}

	this.getY = function () {
		return y;
	}

	this.setY = function (novoY) {
		y = novoY;
	}

	this.getColuna = function () {
		return coluna;
	}

	this.getIndice = function () {
		return indice;
	}
}