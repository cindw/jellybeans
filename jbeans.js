$(document).ready(function() {
    var mouseX;
    var mouseY;
    console.log("ok");

});

window.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX + ", " +mouseY);
});
