
function movimientoder1(){
	$(this).append("<div id='proyectilder1'><img src='img/bala-derecha.png' width='50'></div>");
	setInterval(function(){
		$("#proyectilder1").css("left",parseInt($("#proyectilder1").css("left").slice(0, -2))-1 + "px");
	},10)
	if ("left"<= 360 + "px"){
		$("#proyectilder1").remove();
	}
}
function movimientoder2(){
	$(this).append("<div id='proyectilder2'><img src='img/bala-derecha.png' width='50'></div>");
	setInterval(function(){
		$("#proyectilder2").css("left",parseInt($("#proyectilder2").css("left").slice(0, -2))-1 + "px");
	},10)
	if ("left"<= 360 + "px"){
		$("#proyectilder2").remove();
	}
}
function movimientoder3(){
	$(this).append("<div id='proyectilder3'><img src='img/bala-derecha.png' width='50'></div>");
	setInterval(function(){
		$("#proyectilder3").css("left",parseInt($("#proyectilder3").css("left").slice(0, -2))-1 + "px");
	},10)
	if ("left"<= 360 + "px"){
		$("#proyectilder3").remove();
	}
}
function movimientoder4(){
	$(this).append("<div id='proyectilder4'><img src='img/bala-derecha.png' width='50'></div>");
	setInterval(function(){
		$("#proyectilder4").css("left",parseInt($("#proyectilder4").css("left").slice(0, -2))-1 + "px");
	},10)
	if ("left"<= 360 + "px"){
		$("#proyectilder4").remove();
	}
}
function movimientoder5(){
	$(this).append("<div id='proyectilder5'><img src='img/bala-derecha.png' width='50'></div>");
	setInterval(function(){
		$("#proyectilder5").css("left",parseInt($("#proyectilder5").css("left").slice(0, -2))-1 + "px");
	},10)
	if ("left"<= 360 + "px"){
		$("#proyectilder5").remove();
	}
}
// ------------------------------------------------------------------------------------------------------------
function movimientoizq1(){
	$(this).append("<div id='proyectilizq1'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq1").css("left",parseInt($("#proyectilizq1").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq1").remove();
	}
}
function movimientoizq2(){
	$(this).append("<div id='proyectilizq2'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq2").css("left",parseInt($("#proyectilizq2").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq2").remove();
	}
}
function movimientoizq3(){
	$(this).append("<div id='proyectilizq3'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq3").css("left",parseInt($("#proyectilizq3").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq3").remove();
	}
}
function movimientoizq4(){
	$(this).append("<div id='proyectilizq4'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq4").css("left",parseInt($("#proyectilizq4").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq4").remove();
	}
}
function movimientoizq5(){
	$(this).append("<div id='proyectilizq5'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq5").css("left",parseInt($("#proyectilizq5").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq5").remove();
	}
}
function movimientoizq6(){
	$(this).append("<div id='proyectilizq6'><img src='img/bala-izquierda.png' width='50'></div>");
	setInterval(function(){
	$("#proyectilizq6").css("left",parseInt($("#proyectilizq6").css("left").slice(0, -2))+250 + "px");
	},1)
	if ("left" <= 1000 + "px"){
		$("#proyectilizq6").remove();
	}
}

//---------------------------------------------------------------------------------------------------------------

function move(move,increment){
	var actual = parseInt($(".jugador").css(move).slice(0, -2));
	var new_val = actual+increment;
	$(".jugador").css(move, new_val+"px");
}


$(document).ready(function(){
	$("#contenedor-canon-der1").on("click",movimientoder1);
	$("#contenedor-canon-der2").on("click",movimientoder2);
	$("#contenedor-canon-der3").on("click",movimientoder3);
	$("#contenedor-canon-der4").on("click",movimientoder4);
	$("#contenedor-canon-der5").on("click",movimientoder5);
	$("#contenedor-canon-izq1").on("click",movimientoizq1);
	$("#contenedor-canon-izq2").on("click",movimientoizq2);
	$("#contenedor-canon-izq3").on("click",movimientoizq3);
	$("#contenedor-canon-izq4").on("click",movimientoizq4);
	$("#contenedor-canon-izq5").on("click",movimientoizq5);
	$("#contenedor-canon-izq6").on("click",movimientoizq6);
	$(document).on("keydown", function(e){
		var speed = 8;
		switch(e.keyCode){
			case 37: // Tecla left
				move('left',-speed);
				break;
			case 38: // Tecla up
				move('top',-speed);
				break;
			case 39: // Tecla right
				move('left',+speed);
				break;
			case 40: // Tecla down
				move('top',+speed); 
				break;
		}
	});
});

//------------------------------------------------------------Colisión


function detectar (){
//------------------------------------------------------------Jugador
   console.log(detectar);
      var jugadorPositionx = $(".jugador").position().left;
      var jugadorPositiony = $(".jugador").position().top;

      var proyectilizq6Positionx = $("#proyectilizq6").position().left;
      var proyectilizq6Positiony = $("#proyectilizq6").position().top;

var distance6izq = Math.sqrt (((jugadorPositionx - proyectilizq6Positionx) * (jugadorPositionx - proyectilizq6Positionx)) + ((jugadorPositiony - proyectilizq6Positiony) * (jugadorPositiony - proyectilizq6Positiony)));


     distance6izq = distance6izq.toFixed(2);//Convertir a numero con dos decimales
      var jugadorWidth = $(".jugador").css().width;
      var proyectilizq6Width =  $(".proyectilizq6").css().width;
if (distance6izq < jugadorWidth + proyectilizq6Width){
      //HAY COLISION!!!!
      alert("El jugador 1 ha perdido");
   }
}

setInterval(detectar(),50);
