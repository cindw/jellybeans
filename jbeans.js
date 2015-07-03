$(document).ready(function() {
    var mouseX;
    var mouseY;
    window.addEventListener('mousemove', function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
    });
    console.log("ok");
    console.log(mouseX + ", " +mouseY);
});

