function Jugador (){
	this.vx = 40;
	this.vy = 40;
	this.adelante = function (){
		
	}
	this.atras = function (){
		var izquierda = false;
		$(document).on("keypress", function(){
			if (e.keyCode === 37){
				izquierda = true;
			} 
		});
	}
	this.izquierda = function (){
		var derecha = false;
		$(document).on("keypress", function(){
			if (e.keyCode === 39){
				derecha = true;
			} 
		});
	}
	this.derecha = function (){
		var abajo = false;
		$(document).on("keypress", function(){
			if (e.keyCode === 40){
				abajo = true;
			} 
		});
	}
}


