
var Quad = function(canvas, p1, p2, p3, p4, rl){
	this.canvas = canvas;
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	this.p4 = p4;
	this.rest_length = rl || p1.getCurrent().subtract(p2.getCurrent()).length();
	this.squared_rest_length = this.rest_length * this.rest_length;
	this.color = 255;
};

Quad.prototype = {
	draw: function(){

		this.canvas.quad(this.p1.getCurrent(), this.p2.getCurrent(),
						this.p3.getCurrent(), this.p4.getCurrent(), this.color);
	},
	
	satisfy: function(){
		var p1 = this.p1.getCurrent();
		var p2 = this.p2.getCurrent();
		var p3 = this.p3.getCurrent();
		var p4 = this.p4.getCurrent();
		
		var delta = p2.subtract(p1);
		var delta2 = p4.subtract(p3);
		
		var p1_im = this.p1.inv_mass;
		var p2_im = this.p2.inv_mass;
		var p3_im = this.p3.inv_mass;
		var p4_im = this.p4.inv_mass;
		
		
		var d = delta.squaredLength();
		var d2 = delta2.squaredLength();
		
		var diff = (d - this.squared_rest_length) / ((this.squared_rest_length + d) * (p1_im + p2_im));
		var diff2 = (d - this.squared_rest_length) / ((this.squared_rest_length + d) *(p3_im + p4_im));
		
		if (p1_im != 0){
			this.p1.setCurrent(p1.add(delta.multiply(p1_im * diff)));
		}
		
		if (p2_im != 0){
			this.p2.setCurrent( p2.subtract(delta.multiply(p2_im*diff)) );
		}
		
		if (p3_im != 0){
			this.p3.setCurrent( p3.subtract(delta2.multiply(p3_im*diff2)) );
		}
		
		if (p4_im != 0){
			this.p4.setCurrent( p4.subtract(delta2.multiply(p4_im*diff2)) );
		}
	},
	
	setcolor: function(){
// 		var c = Math.random() * 25;
 
		var c = (this.p2.getPrevious().subtract(this.p2.getCurrent()).x) *8888;
		c = (c < 0) ? 0 : ((c >255) ? 255 : c);

		this.color = c.floor();
	}
};
