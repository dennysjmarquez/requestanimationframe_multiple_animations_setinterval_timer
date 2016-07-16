
var header_animate_d = function() {

	var canvas, ctx;
	var quotes = new Array();
	canvas=document.getElementById("myCanvas");
	ctx=canvas.getContext("2d");
	
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
		
		quotes.push("Dennys José Márquez Reyes");
		quotes.push("Programador Web");
		quotes.push("PHP");
		quotes.push("CSS3");
		quotes.push("HTML5");
		quotes.push("jQuery");
		quotes.push("JavaScript");
		quotes.push("Ajax");
		quotes.push("MySQL");
		quotes.push("Aprendiz de Dios...");
		
	animate();
	
	function clear() {
		
		ctx.clearRect(0,0,canvas.width, canvas.height);
		
	}
	
	function draw() {
		
		var randomIndex = Math.floor(Math.random()*quotes.length);
		var randomColor = Math.round(Math.random()*80);

		var randomX = Math.random()*canvas.width;
		var randomY = Math.random()*canvas.height*2 -canvas.width /2;
		var randomSize = Math.random()*60+10;
		var colorn = Math.floor(Math.random() * 3) + 1;
		
		switch(colorn) {
			
			case 1:
				color = "rgba(255,0,0,0.8)";
			break;
			
			case 2:
				color = "rgba(0,0,0,0.8)";
			break;
		
			case 3:
				color = "rgba(255,255,255,0.8)";
			break;
		
		} 

	 	ctx.fillStyle=color;
		ctx.font=randomSize+"px Arial Black, Gadget, sans-serif";
		ctx.fillText(quotes[randomIndex],randomX,randomY);
		ctx.lineWidth=1;
		ctx.strokeText(quotes[randomIndex],randomX,randomY);
		
	}

	function animate() {
		
		var anidraw = new AnimateFrameObject();
		var aniclear = new AnimateFrameObject();
		
		anidraw.run(draw, 300);
		aniclear.run(clear, 17000);
	
	}

};