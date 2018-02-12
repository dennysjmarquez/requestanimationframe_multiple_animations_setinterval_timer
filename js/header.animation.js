$(document).ready(function () {

	var canvas, ctx;
	canvas = document.getElementById("myCanvas"), ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth, canvas.height = window.innerHeight;

	function clear() { ctx.clearRect(0, 0, canvas.width, canvas.height) }
	
	function destroyAll(){
	
		anidraw.destroy();
		aniclear.destroy();
	
	}

	function draw(texto) {
	
		if (typeof texto == typeof 'undefined' || !(texto instanceof Array)) return;

		var randomIndex = Math.floor(Math.random() * texto.length),
		randomColor = Math.round(Math.random() * 80),
		randomSize = (Math.random() * 60) + 10,
		randomX = (Math.random() * canvas.width / 2) + 1,
		
		
		randomY = Math.random() * canvas.height * 2 - canvas.width / 2,
		colorn = Math.floor(Math.random() * 3) + 1;

		switch (colorn) {

			case 1:
				color = "rgba(255,0,0,0.8)";
				break;
			case 2:
				color = "rgba(0,0,0,0.8)";
				break;
			case 3:
				color = "rgba(255,255,255,0.8)";

		}

		ctx.fillStyle = color, ctx.font = randomSize + "px Arial Black, Gadget, sans-serif";
		ctx.fillText(texto[randomIndex], randomX, randomY),
		ctx.strokeText(texto[randomIndex], randomX, randomY);

	}

	var anidraw = new AnimateFrameObject(), aniclear = new AnimateFrameObject(), destroy = new AnimateFrameObject();

	anidraw.run((function(){ 
		
		var texto = ["Dennys José Márquez Reyes","Desarrollador Web", "PHP", "CSS3", "HTML5", "JSON","jQuery", "JavaScript", "Ajax", "MySQL", "Aprendiz de Dios..."];
		draw(texto) 
	
	}), 200);
	
	
	aniclear.run(clear, 17000);
	destroy.run(destroyAll, 33900);

});
