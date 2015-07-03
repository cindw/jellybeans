$(document).ready(function() {
    var mouseX = 0;
    var mouseY = 0;
    console.log("ok");

});

window.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

window.addEventListener('mousedown', function() { 
    var test = document.createElement('img');
    console.log(width);
    test.setAttribute('src', 'test.png')
    var width = 0;
    var height = 0;
    test.onload = function() {
	width = this.width;
	height = this.height;
    }
    test.style.left = mouseX - width/2 + 'px';
    test.style.top = mouseY - height/2 + 'px'; 
    test.style.position = 'absolute';
    console.log('good');
    document.getElementById('body').appendChild(test);
});

