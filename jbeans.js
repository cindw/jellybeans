
$(document).ready(function() {
    var mouseX = 0;
    var mouseY = 0;
});

var images = [];

window.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

window.addEventListener('click', function() { 
    var test = document.createElement('img');
    test.setAttribute('src', 'test.png')
    var width = 0;
    var height = 0;
    test.onload = function() {
	width = this.width;
	height = this.height;
    }
    test.style.left = mouseX - 150 + 'px';
    test.style.top = mouseY - 150 + 'px'; 
    test.style.position = 'absolute';
    document.getElementById('body').appendChild(test); 
    var audio = document.getElementById("testaudio");
    audio.play();
    images = document.getElementsByTagName('img');
});


var gravity = function() {

    var wwidth = $(body).width();
    var wheight = 102 + $(content).height() + 120;
    console.log(wheight);
    for ( var i = 0; i < images.length; i++ ) {
	var pix = images[i].style.top;
	var pixInt = parseInt( pix.substring(0, pix.length-2) );
	if ( pixInt + 300 < wheight ) {
	    images[i].style.top = pixInt + parseInt(10) + "px";
	}
    }
};

event = setInterval(gravity,100);

