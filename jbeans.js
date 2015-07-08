$(document).ready(function() {
    var mouseX = 0;
    var mouseY = 0;
});

window.addEventListener('mousemove', function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
    });

window.addEventListener('click', function(e) {
    if ( mouseY > 100 ) {
	$('#screen').append('<img id="bean" src="test.png" style="left:'+mouseX - 150+'px;top:'+mouseY - 150+'px;position=absolute" />');
	var audio = document.getElementById("testaudio");
	audio.play();
	images = document.getElementsByTagName('img');
    }
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

