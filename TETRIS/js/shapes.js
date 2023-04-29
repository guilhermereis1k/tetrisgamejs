let shapeIcolor = 'darkblue';
let shapeLreverseColor = 'deeppink';
let shapeTColor = 'yellow';
let shapeScolor = 'lime';

class ShapeBASE{
    constructor(x,y) {
        this.x = x;
        this.x2 = x;
        this.x3 = x;
        this.x4 = x + 40;

        this.y = y;
        this.y2 = y + 40;
        this.y3 = y + 80;
        this.y4 = y + 80;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 1;
        this.shapeNum[2] = 1;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = cor;
        ctx.strokeStyle = cor;
        ctx.fillrect(this.x, this.y, 40, 40);
        ctx.fillrect(this.x2, this.y2, 40, 40);
        ctx.fillrect(this.x3, this.y3, 40, 40);
        ctx.fillrect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = cor;
        ctx2.strokeStyle = cor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 111;
                obj[i].draw();
                rotateIndex++; 
                }
            break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            rotateIndex = 1;
            break;
        }
    }    
}


///////////////////////////////
// Construindo objeto que irá descer e se mexer
class Cubo {
    constructor() {
        this.x = Math.floor(Math.random() * 10) * 40;
        this.y = -40;
    }

    draw() {
        ctx.clearRect(this.x, this.y, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = cor;
        ctx.strokeStyle = cor;
        ctx.fillRect(this.x, this.y, 40, 40);
        ctx.closePath();
    }
}

class ShapeL{
    constructor(x,y) {
        this.x = x;
        this.x2 = x;
        this.x3 = x;
        this.x4 = x + 40;

        this.y = y;
        this.y2 = y + 40;
        this.y3 = y + 80;
        this.y4 = y + 80;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 1;
        this.shapeNum[2] = 1;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = cor;
        ctx.strokeStyle = cor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = cor;
        ctx2.strokeStyle = cor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 111;
                this.shapeNum[2] = 0;
                obj[i].draw();
                rotateIndex++; 
                }
                
            break;

            case 2: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            } 
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 11;
                obj[i].draw();
                rotateIndex++;
                }
                
            break;

            case 3: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2 ;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                obj[i].draw();
                collisionBorder = false;
            }
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 111;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 0;
                obj[i].draw();
                rotateIndex++;
            }
            break;

            case 4: 
            rotateIndex = 1;
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4;
            this.y = this.y - 40;
            this.y2 = this.y2 ;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                obj[i].draw();
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 11;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex = 1;
                }
                break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            rotateIndex = 1;
            break;

            case 2: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            rotateIndex = 2;
            break;

            case 3: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y + 40;
            this.y2 = this.y2 ;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            rotateIndex = 3;
            break;

            case 4: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4;
            this.y = this.y - 40;
            this.y2 = this.y2 ;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            rotateIndex = 4;
            break;
        }
    }    
}

class ShapeI{
    constructor(x,y) {
        this.x = x;
        this.x2 = x;
        this.x3 = x;
        this.x4 = x;

        this.y = y;
        this.y2 = y + 40;
        this.y3 = y + 80;
        this.y4 = y + 120;

        this.shapeNum = [];
        this.shapeNum[0] = 1;
        this.shapeNum[1] = 1;
        this.shapeNum[2] = 1;
        this.shapeNum[3] = 1;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = shapeIcolor;
        ctx.strokeStyle = shapeIcolor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = shapeIcolor;
        ctx2.fillStyle = shapeIcolor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2 + 40;
            this.x3 = this.x3;
            this.x4 = this.x4 + 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1111;
                this.shapeNum[1] = 0;
                this.shapeNum[2] = 0;
                this.shapeNum[3] = 0;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 2: 
            this.x = this.x + 40;
            this.x2 = this.x2 - 40;
            this.x3 = this.x3;
            this.x4 = this.x4 - 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 1;
                this.shapeNum[3] = 1;
                obj[i].draw();
                rotateIndex = 1; 
                }
            break;  
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 40;
            this.x2 = this.x2 - 40;
            this.x3 = this.x3;
            this.x4 = this.x4 - 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            rotateIndex = 1;
            break;
            
            case 2: 
            this.x = this.x - 40;
            this.x2 = this.x2 + 40;
            this.x3 = this.x3;
            this.x4 = this.x4 + 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 80;
            rotateIndex = 2;
            break; 
        }
    }    
}

class ShapeLreverse{
    constructor(x,y) {
        this.x = x + 40;
        this.x2 = x + 40;
        this.x3 = x + 40;
        this.x4 = x;

        this.y = y;
        this.y2 = y + 40;
        this.y3 = y + 80;
        this.y4 = y + 80;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 1;
        this.shapeNum[2] = 1;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = shapeLreverseColor;
        ctx.strokeStyle = shapeLreverseColor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = shapeLreverseColor;
        ctx2.strokeStyle = shapeLreverseColor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 111;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 0;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 2: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3+ 40;
            this.x4 = this.x4 + 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 11;
                obj[i].draw();
                rotateIndex++; 
                }
            break;
            
            case 3: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 111;
                this.shapeNum[2] = 0;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 4:
            rotateIndex = 1;
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 11;
                this.shapeNum[1] = 1;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex = 1; 
                }
            break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 80;
            rotateIndex = 1;
            break;

            case 2: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            rotateIndex = 2;
            break;

            case 3: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 80;
            rotateIndex = 3;
            break;

            case 4: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            rotateIndex = 4;
            break;
        }
    }    
}

class ShapeT{
    constructor(x,y) {
        this.x = x;
        this.x2 = x;
        this.x3 = x + 40;
        this.x4 = x;

        this.y = y;
        this.y2 = y + 40;
        this.y3 = y + 40;
        this.y4 = y + 80;

        this.shapeNum = [];
        this.shapeNum[0] = 1;
        this.shapeNum[1] = 11;
        this.shapeNum[2] = 1;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = shapeTColor;
        ctx.strokeStyle = shapeTColor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = shapeTColor;
        ctx2.strokeStyle = shapeTColor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 40;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 - 40;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 111;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 2:
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 + 40;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 40;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 11;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 3: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 + 40;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 111;
                this.shapeNum[1] = 1;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 4:
            rotateIndex = 1;
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 - 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 40;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 111;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex = 1; 
                }
            break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 + 40;
            rotateIndex = 1;
            break;

            case 2: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 - 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4 + 40;
            rotateIndex = 2;
            break;

            case 3: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 + 40;
            rotateIndex = 3;
            break;

            case 4: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 + 40;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4 - 40;
            rotateIndex = 4;
            break;
        }
    }    
}

class ShapeSreverse{
    constructor(x,y) {
        this.x = x;
        this.x2 = x + 40;
        this.x3 = x + 40;
        this.x4 = x + 80;

        this.y = y;
        this.y2 = y;
        this.y3 = y + 40;
        this.y4 = y + 40;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 11;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = shapeScolor;
        ctx.strokeStyle = shapeScolor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = shapeScolor;
        ctx2.strokeStyle = shapeScolor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x + 80;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 - 40;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 11;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex++; 
                }
            break;
            case 2:
            this.x = this.x - 80;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 + 40;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
                rotateIndex = 1;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 11;
                this.shapeNum[1] = 11;
                obj[i].draw();
                rotateIndex = 1; 
                }
            break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 80;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 + 40;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            rotateIndex = 1;
            break;

            case 2: 
            this.x = this.x;
            this.x2 = this.x2;
            this.x3 = this.x3;
            this.x4 = this.x4;
            this.y = this.y;
            this.y2 = this.y2;
            this.y3 = this.y3;
            this.y4 = this.y4;
            rotateIndex = 2;
            break;
        }
    }    
}

class ShapeS{
    constructor(x,y) {
        this.x = x + 80;
        this.x2 = x + 40;
        this.x3 = x + 40;
        this.x4 = x;

        this.y = y;
        this.y2 = y;
        this.y3 = y + 40;
        this.y4 = y + 40;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 11;
        this.shapeNum[2] = 0;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = cor;
        ctx.strokeStyle = cor;
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = cor;
        ctx2.strokeStyle = cor;
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 1;
                this.shapeNum[1] = 11;
                this.shapeNum[2] = 1;
                obj[i].draw();
                rotateIndex++; 
                }
            break;

            case 2: 
            this.x = this.x + 40;
            this.x2 = this.x2;
            this.x3 = this.x3 - 40;
            this.x4 = this.x4 - 80;
            this.y = this.y + 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            checksBorderCollision();
            if (collisionXl == true || collisionXr == true || collisionBorder == true){
                this.unrotate()
                collisionBorder = false;
                rotateIndex = 2; 
            }
            
            else {
                this.shapeNum = [];
                this.shapeNum[0] = 11;
                this.shapeNum[1] = 11;
                this.shapeNum[2] = 0;
                obj[i].draw();
                rotateIndex = 1; 
                }
            break;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 + 40;
            this.y4 = this.y4;
            rotateIndex = 1;
            break;

            case 2: 
            this.x = this.x - 40;
            this.x2 = this.x2;
            this.x3 = this.x3 + 40;
            this.x4 = this.x4 + 80;
            this.y = this.y - 40;
            this.y2 = this.y2;
            this.y3 = this.y3 - 40;
            this.y4 = this.y4;
            rotateIndex = 2;
        }
    }    
}

class ShapeSquare{
    constructor(x,y) {
        this.x = x;
        this.x2 = x + 40;
        this.x3 = x + 40;
        this.x4 = x;

        this.y = y;
        this.y2 = y;
        this.y3 = y + 40;
        this.y4 = y + 40;

        this.shapeNum = [];
        this.shapeNum[0] = 11;
        this.shapeNum[1] = 11;
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        ctx.rect(this.x, this.y, 40, 40);
        ctx.rect(this.x2, this.y2, 40, 40);
        ctx.rect(this.x3, this.y3, 40, 40);
        ctx.rect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx.closePath();
    }

    write() {
        ctx2.beginPath();
        ctx2.fillStyle = 'white';
        ctx2.strokeStyle = 'white';
        ctx2.fillRect(this.x, this.y, 40, 40);
        ctx2.fillRect(this.x2, this.y2, 40, 40);
        ctx2.fillRect(this.x3, this.y3, 40, 40);
        ctx2.fillRect(this.x4, this.y4, 40, 40);
        ctx.stroke();
        ctx2.closePath();
    }

    rotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x;
            this.x2 = this.x2;
            this.x3 = this.x3;
            this.x4 = this.x4;
            this.y = this.y;
            this.y2 = this.y2;
            this.y3 = this.y3;
            this.y4 = this.y4;
        }
    }

    unrotate() {
        switch (rotateIndex){
            case 1: 
            this.x = this.x;
            this.x2 = this.x2;
            this.x3 = this.x3;
            this.x4 = this.x4;
            this.y = this.y;
            this.y2 = this.y2;
            this.y3 = this.y3;
            this.y4 = this.y4;
            rotateIndex = 1;
            break;
        }
    }    
}