$(document).ready(function() {
    var mouseX = 0;
    var mouseY = 0;

    window.addEventListener('mousemove', function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
    });

    document.getElementById('content').addEventListener('click', function() { 
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
    });
});

console.log('bitch');
