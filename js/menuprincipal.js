$(document).ready(function(){
	$(document).on("keydown", function(e){
		e.preventDefault();
		if (e.keyCode === 32){
			$(".background-disabled").hide();
			$(".jugador").css("display","block");
			$(".canonizq").css("display","block");
			$(".canonder").css("display","block");	
			$(".laser").css("display","block");
			$(".proyectil-laser").css("display","block");
			setTimeout(function(){
				$(".mensajes-60").css("visibility","visible");
			},1000);
			setTimeout(function(){
				$(".mensajes-60").css("visibility","hidden");
			},3000);
			setTimeout(function(){
				$(".mensajes-30").css("visibility","visible");
			},31000);
			setTimeout(function(){
				$(".mensajes-30").css("visibility","hidden");
			},33000);
			setTimeout(function(){
				$(".mensajes-10").css("visibility","visible");
			},51000);
			setTimeout(function(){
				$(".mensajes-10").css("visibility","hidden");
			},53000);
			$(".mensajes-10").css("color","red");
			$(".mensajes-10").css("font-size","20px");
			var counter = 60;
			var interval = setInterval(function(){
              $(".timer2").html(counter);
              counter--;

              if (counter <= 30) {
              	$(".laser").mouseover(function(){
              		setInterval(function(){
              		$(".proyectil-laser").css("left",parseInt($(".proyectilizq").css("left").slice(0, -2))+100 + "px");
              	    },10)
              	})
              }

              if (counter < 0) {
                  clearInterval(interval);
                  alert("Player one won!");
              }
			}, 1000);
		}
	});
});