$(document).ready(function() {
    window.addEventListener('mousemove', function(e) {
	var mouseX = e.pageX;
	var mouseY = e.pageY;
    });
    console.log("ok");
    console.log(mouseX + ", " +mouseY);
});
