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
    test.setAttribute('src', 'test.png');
    test.style.left = mouseX + 'px';
    test.style.top = mouseY + 'px';    
    console.log('good');
});
