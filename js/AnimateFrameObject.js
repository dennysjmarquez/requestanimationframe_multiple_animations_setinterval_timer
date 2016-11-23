var AnimateFrameObject = function() {
	
	var requestAnimFrame = (function(){
  
		return  window.requestAnimationFrame       || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function(/* function */ callback, /* DOMElement */ element){
					window.setTimeout(callback, 1000/60)
				};
	})();

	function run(callback, seconds) {
		
		new Interval().run(callback, seconds)
		
	}
	
	var Interval = function() {
		
		var inifps = 0;
		var elapsed, now, then;
		var call;
		
		function loop() {
		
			requestAnimFrame(loop);
			now = Date.now();
			elapsed = now - then;
		
			if (elapsed > inifps) {

				then = now - (elapsed % inifps);
				call();
			
			}
	
		}		
		
		function run(callback, fps){
			
			inifps = (fps) ? fps : inifps;
			call = (callback) ? callback : call;
			then = Date.now();
			
			loop();
			
		}
		
		return {
		
			"run": run
			
		};
		
	
	}
	
	return {
		
		"run": run
			
	};

}
