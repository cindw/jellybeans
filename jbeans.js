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
//    console.log(images);
    console.log(images.length);
    for ( var i = 0; i < images.length; i++ ) {
	images[i].style.top = parseint(images[i].style.top - "px") + parseint(10) + "px";
    }
};

event = setInterval(gravity,1000);

