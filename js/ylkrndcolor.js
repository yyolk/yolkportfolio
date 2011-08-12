//------------------------
// random color - requires jquery
// Original 
// apply a random color to class randomcolor, randombgcolor 
// version 1.2    
// date    2009.04.21
// author  erational <http://www.erational.org>
// url     http://www.erational.org/randomColor.html
//------------------------
//New edits by Yolk

// -----------------
// parameters
// -----------------
var rndc_ceiling = 255;   // color saturation - max 255
var rndc_speed = 10;     // refresh time  (ms)
var rndc_step = 50;       //  step (1 progressive, 50 quick) 


$(document).ready(function(){
    

    // color start
    var rndc_red   = Math.floor(Math.random() * rndc_ceiling);
    var rndc_green = Math.floor(Math.random() * rndc_ceiling);
    var rndc_blue  = Math.floor(Math.random() * rndc_ceiling);    
    // color target
    var rndc_red2   = Math.floor(Math.random() * rndc_ceiling);
    var rndc_green2 = Math.floor(Math.random() * rndc_ceiling);
    var rndc_blue2  = Math.floor(Math.random() * rndc_ceiling);
    
    randomColor();  
            
    function randomColor() {
        // R
        if (Math.abs(rndc_red2-rndc_red)>rndc_step) rndc_red += ((rndc_red2-rndc_red)/Math.abs(rndc_red2-rndc_red)) * rndc_step;
                                               else rndc_red = rndc_red2;
        // G 
        if (Math.abs(rndc_green2-rndc_green)>rndc_step) rndc_green += ((rndc_green2-rndc_green)/Math.abs(rndc_green2-rndc_green)) * rndc_step;
                                                   else rndc_green = rndc_green2;       
        // B 
        if (Math.abs(rndc_blue2-rndc_blue)>rndc_step) rndc_blue += ((rndc_blue2-rndc_blue)/Math.abs(rndc_blue2-rndc_blue)) * rndc_step;
                                                   else rndc_blue = rndc_blue2; 
        
        //$("#navbar").empty().append("red: "+rndc_red+" red2: "+rndc_red2); // debug
        // Reach new color ?
        if (rndc_red==rndc_red2  && rndc_green==rndc_green2 && rndc_blue==rndc_blue2) {
                // new color                 
                rndc_red2   = Math.floor(Math.random() * rndc_ceiling);
                rndc_green2 = Math.floor(Math.random() * rndc_ceiling);
                rndc_blue2  = Math.floor(Math.random() * rndc_ceiling);            
        }
        // apply color                
        if ($(".randomcolor"))   $(".randomcolor").css("color","rgb("+rndc_red+","+rndc_green+","+rndc_blue+")"); 
        if ($(".randombgcolor")) $(".randombgcolor").css("background-color","rgb("+rndc_red+","+rndc_green+","+rndc_blue+")");
		if ($(".rbordertop")) $(".rbordertop").css("border-top","3px solid rgb("+rndc_red+","+rndc_green+","+rndc_blue+")");
        var t = setTimeout(randomColor,rndc_speed);       
    }

    // #random color 

        
});

