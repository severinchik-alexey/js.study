let balls = document.querySelectorAll('img');
for (let ball of balls) {
    ball.onmousedown = function(eo) {
        let shiftX = eo.clientX - ball.getBoundingClientRect().left;
        let shiftY = eo.clientY - ball.getBoundingClientRect().top;
    
        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        ball.style.cursor = 'pointer';
        document.body.append(ball);
    
        moveAt(eo.pageX, eo.pageY);
    
        function moveAt(pageX, pageY) {
            ball.style.left = pageX - shiftX + 'px';
            ball.style.top = pageY - shiftY + 'px';
        }
    
        function onMouseMove(eo) {
            moveAt(eo.pageX, eo.pageY);
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
            ball.style.cursor = 'default';
        };
    
    };
    
    ball.ondragstart = function() {
    return false;
    };
}

