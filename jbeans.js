$(document).ready(function() {
    var mouseX = 0;
    var mouseY = 0;

    function mousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    $("#screen").bind('click', function(e) {
	if ( mouseY > 100 ) {
	    console.log("click");
	    var canvas = document.getElementById('screen');
	    var mouse = mousePos(canvas, e);

	    var context = canvas.getContext('2d');
	    var imageObj = new Image();

	    console.log(mouse.x);
	    console.log(mouse.y);
	    imageObj.onload = function() {
		context.drawImage(imageObj, mouse.x, mouse.y, 100, 50);
	    };
	    imageObj.src = 'test.png';

	    var audio = document.getElementById("testaudio");
	    audio.play();
	    images = document.getElementsByTagName('img');
	}
    });
});



var images = [];

var gravity = function() {

    var wwidth = $(body).width();
    var wheight = 650;
    for ( var i = 0; i < images.length; i++ ) {
	var pix = images[i].style.top;
	var pixInt = parseInt( pix.substring(0, pix.length-2) );
	if ( pixInt + 300 < wheight ) {
	    images[i].style.top = pixInt + parseInt(10) + "px";
	}
    }
};

event = setInterval(gravity,100);

