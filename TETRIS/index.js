
var img = document.getElementById("imagem");
img.width = this.width;
img.height = this.height;


const canvas = document.getElementById("tela");
const ctx = canvas.getContext('2d');

const canvas2 = document.getElementById("tela2");
const ctx2 = canvas2.getContext('2d');

const canvas3 = document.getElementById("tela2");
const ctx3 = canvas2.getContext('2d');

ctx3.width = this.width;
ctx3.height = this.height;

ctx.width = this.width;
ctx.height = this.height;

ctx2.width = this.width;
ctx2.height = this.height;

let x = 0;
let y = 0;
let cor = 'red';
let verificador = 0;
let index = 0;
const obj = [];
let allObj = [];
let col = 0;
let row = 0;
let colsFull = [];
let caneta = [];
let shapeNum = 0;
let rotateIndex = 1;
let collisionBorder = false;
let lowestNum = 0;

for (let z = 0; z < 20; z++){
    colsFull.push('',);
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
        ctx.fillRect(this.x, this.y, 40, 40);
        ctx.fillRect(this.x2, this.y2, 40, 40);
        ctx.fillRect(this.x3, this.y3, 40, 40);
        ctx.fillRect(this.x4, this.y4, 40, 40);
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
                this.shapeNum[2] = [];
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



// 
let i = 0;
let colIndex;
let collisionY = false;
let collisionYg = false;
let collisionXr = false;
let collisionXl = false;
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
        if (event.key === "ArrowUp") {
            obj[i].rotate();
        }
});
};



///////////////////////////////
// Função que "reseta" o move(), permitindo se aplicar a outro objeto

function stopMoving() {
    document.removeEventListener('keydown', event => {
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
        if (event.key === "ArrowUp") {
            checksCollision();
            obj[i].rotate();
        }});
};


///////////////////////////////
// Função que começa o jogo e continua adicionando cubos

function startGame () {
    let allObj = [];
    addNewCube();
    dropping();
    move();
};

function testing () {
    let allObj = [];
    addNewShape(80,80);
    dropping();
    move();
};

function addNewCube () {
    collisionY = false;
    collisionYg = false;
    collisionXr = false;
    collisionXl = false;
    let newCube = new Cubo ();
    obj.push(newCube);
};

function addNewShape (x,y) {
    rotateIndex = 1;
    collisionY = false;
    collisionYg = false;
    collisionXr = false;
    collisionXl = false;
    let newShape = new ShapeL(x,y);
    obj.push(newShape);
   
};

function checksBorderCollision () {

    if (obj[i].x > 360 || obj[i].x2 > 360 || obj[i].x3 > 360 || obj[i].x4 > 360) {
        collisionBorder = true;
    }
    if (obj[i].x < 0 || obj[i].x2 < 0 || obj[i].x3 < 0 || obj[i].x4 < 0 ) {
        collisionBorder = true;
    }
}

///////////////////////////////
// Função que checa a colisão
let actualObjectX = [];
let actualObjectY = [];
let objectsY = [];
let objectsX = [];

function checksCollision () {
    collisionXr = false;
    collisionXl = false;
    checksBorderCollision();

        let actualObjectX = [obj[i].x,obj[i].x2,obj[i].x3,obj[i].x4];
        let actualObjectY = [obj[i].y,obj[i].y2,obj[i].y3,obj[i].y4];

        
    

        for (let j = 0; j < allObj.length; j++){
            
            for (let count = 0; count < 4; count++){
                for (let count2 = 0; count2 < 4; count2++){
            let objectsY = [allObj[j].y,allObj[j].y2,allObj[j].y3,allObj[j].y4];
            let objectsX = [allObj[j].x,allObj[j].x2,allObj[j].x3,allObj[j].x4];

                if (keyPressed === true) {
                    if (actualObjectY[count] + 80 > objectsY[count2] && actualObjectX[count] == objectsX[count2]){
                        collisionYg = true;
                    } 
                }
                    
                    if (actualObjectY[count] + 40 == objectsY[count2] && actualObjectX[count] == objectsX[count2]){
                        collisionY = true;
                    } 
                    if (actualObjectX[count] + 40 == objectsX[count2] && actualObjectY[count] == objectsY[count2]){
                        collisionXr = true;
                    } 
                    if (actualObjectX[count] - 40 == objectsX[count2] && actualObjectY[count] == objectsY[count2]){
                        collisionXl = true;
                        console.log(actualObjectX[count] - 40, objectsX[count2], actualObjectY[count],objectsY[count2])
                    }

        } }
    }


}


function dropping () {

    const startDropping = setInterval(function() { drop()}, 400);

    // MEXER DURANTE A DESCIDA
    function drop () {
        
        checksCollision();
            if (obj[i].y <= 720 || obj[i].y2 <= 720 || obj[i].y3 <= 720 || obj[i].y4 <= 720 ) {
                if (collisionY === false && collisionYg === false) {
                    ctx.clearRect(obj[i].x, obj[i].y, canvas.width, canvas.height);
                    ctx.beginPath();
                    obj[i].y = obj[i].y + 40;
                    obj[i].y2 = obj[i].y2 + 40;
                    obj[i].y3 = obj[i].y3 + 40;
                    obj[i].y4 = obj[i].y4 + 40;
                    obj[i].draw();
                    checksCollision();
                }
            }

                if (obj[i].y > 720 || obj[i].y2 > 720 || obj[i].y3 > 720 || obj[i].y4 > 720 || collisionY === true) {
                    
                    if (obj[i].y >= lowestNum) {
                        lowestNum = obj[i].y;
                    }
                    if (obj[i].y2 >= lowestNum) {
                        lowestNum = obj[i].y2;
                    }
                    if (obj[i].y3 >= lowestNum) {
                        lowestNum = obj[i].y3;
                    }
                    if (obj[i].y4 >= lowestNum) {
                        lowestNum = obj[i].y4;
                    }

                    col = lowestNum / 40 + 1;
                    obj[i].write();
                    // Enviando valor para colunas
                    for(let cols = 0; cols < obj[i].shapeNum.length; cols++){
                        console.log(cols, col)
                        colsFull[col - cols - 1] += obj[i].shapeNum[cols];
                    }
                    allObj.push(obj[i]);
                    obj[i] = [];
                    clearInterval(startDropping);
                    checksCompletion();
                    addNewShape(40,40);
                    i++;
                    stopMoving();
                    console.log(colsFull)
                    dropping();

            }
    };

    
    function checksEnd () {
            verificador++;
    }


    function checksCompletion () {
        let colY = col * 40 - 40;

        for(let x = 0; x <= colsFull.length - 1; x++) {
            if(colsFull[x].length === 10){
                let toBeErased = x;
                toBeErased = toBeErased * 40;
                elementX = 800 - toBeErased;
                elementX = elementX + 40;
                
                
                colsFull[x] = '';
                eraseLine();
                clearArrayLine();

                    let imgData = ctx2.getImageData(0, 0, 400, toBeErased);

                    ctx2.putImageData(imgData, 0, 40, 0, 0, 400, 800);

            }
        }
        
        function clearArrayLine () {
            checksEnd();
            for (let g = 19; g > -1; g--) {
                let indexCols = colsFull[g];
                colsFull[g + 1] += indexCols;
                colsFull[g] = '';
            }
            
        }

        function eraseLine () {
        
            for(let f = 0; f <= allObj.length - 1; f++) {
                if (allObj[f].y === colY) {
                    allObj[f].y = -400;
                    allObj[f].y = -400;
                } else {
                    allObj[f].y =  allObj[f].y + 40;
                }

                if (allObj[f].y2 === colY) {
                    allObj[f].y2 = -400;
                    allObj[f].x2 = -400;
                } else {
                    allObj[f].y2 =  allObj[f].y2 + 40;
                }

                if (allObj[f].y3 === colY) {
                    allObj[f].y3 = -400;
                    allObj[f].x3 = -400;
                } else {
                    allObj[f].y3 =  allObj[f].y3 + 40;
                }

                if (allObj[f].y4 === colY) {
                    allObj[f].y4 = -400;
                    allObj[f].x4 = -400;
                } else {              
                    allObj[f].y4 =  allObj[f].y4 + 40;
                }

                console.log(allObj)
            }
                    
        }

     }
       
}
//ctx2.drawImage(img, 0,0,400,800);
//let imgData = ctx2.getImageData(0, 0, 400, 680);

//ctx2.putImageData(imgData, 0, 40, 0, 0, 400, 800);

testing();