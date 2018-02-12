	function AnimateFrameObject() {

		this.inifps = 0, this.elapsed, this.now;
		this.then, this.callback, this.aniTimeID;

	}

	AnimateFrameObject.prototype.run = function(callback, seconds) {
		
		var instance = this;
			
		function loop() {
		
			instance.aniTimeID = instance.__proto__.requestAnimFrame.call(window, loop);
			instance.now = Date.now();
			instance.elapsed = instance.now - instance.then;
			
			if (instance.elapsed > instance.inifps) {
				
				instance.then = instance.now - (instance.elapsed % instance.inifps);
				instance.callback();
				
			}
		
		}
		
		instance.inifps = (seconds) ? seconds : instance.inifps;
		instance.callback = (callback) ? callback : instance.callback;
		instance.then = Date.now();
		loop();
		
	}
	
	AnimateFrameObject.prototype.destroy = function(){
	
		var instance = this;
		clearTimeout(this.aniTimeID), cancelAnimationFrame(this.aniTimeID);
		Object.keys(instance).forEach(function(k){ instance[k] = null});
		instance = undefined;
		
	}
	
	AnimateFrameObject.prototype.requestAnimFrame = (function(){
		
		return  window.requestAnimationFrame       || 
				window.webkitRequestAnimationFrame || 
				window.mozRequestAnimationFrame    || 
				window.oRequestAnimationFrame      || 
				window.msRequestAnimationFrame     || 
				function(callback){
					return window.setTimeout(callback, 1000/60)
				};
	})();