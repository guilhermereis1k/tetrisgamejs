let keyPressed = false;

///////////////////////////////
// Função que move o objeto com as teclas do teclado

function move () {
    document.addEventListener('keydown', event => {
        if (event.key === "ArrowLeft" && obj[i].x > 0 && obj[i].x2 > 0 && obj[i].x3 > 0 && obj[i].x4 > 0 && collisionXl === false && collisionYg === false ) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].x = obj[i].x - 40;
            obj[i].x2 = obj[i].x2 - 40;
            obj[i].x3 = obj[i].x3 - 40;
            obj[i].x4 = obj[i].x4 - 40;
            obj[i].draw();
            collisionXr = false;
            collisionY = false;
            checksCollision();
        }
        if (event.key === "ArrowRight" && obj[i].x < 360 && obj[i].x2 < 360 && obj[i].x3 < 360 && obj[i].x4 < 360 && collisionXr === false && collisionYg === false ) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].x = obj[i].x + 40;
            obj[i].x2 = obj[i].x2 + 40;
            obj[i].x3 = obj[i].x3 + 40;
            obj[i].x4 = obj[i].x4 + 40;
            obj[i].draw();
            collisionXl = false;
            collisionY = false;
            checksCollision();
        }   
        if (event.key === "ArrowDown" && collisionYg == false && obj[i].y4 < 680 ) {
            keyPressed = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].y = obj[i].y + 40;
            obj[i].y2 = obj[i].y2 + 40;
            obj[i].y3 = obj[i].y3 + 40;
            obj[i].y4 = obj[i].y4 + 40;
            obj[i].draw();
            checksCollision();
            keyPressed = false;
        }
        if (event.key === "z" ) {
            going = false;
        }   
        if (event.key === "ArrowUp") {
            obj[i].rotate();
        }
});
};