const canvas = document.getElementById("tela");
const ctx = canvas.getContext('2d');

const canvas2 = document.getElementById("tela2");
const ctx2 = canvas2.getContext('2d');


ctx.width = this.width;
ctx.height = this.height;

ctx2.width = this.width;
ctx2.height = this.height;

let x = 0;
let y = 0;
let cor = 'white';
let verificador = 0;
let index = 0;
const obj = [];
let col = 0;
let row = 0;
let colsFull = [];
let caneta = [];


const shapes = 
[[[
[0,1,0,0],
[0,1,0,0],
[0,1,0,0],
[0,1,0,0],],
[
[0,0,0,0],
[1,1,1,1],
[0,0,0,0],
[0,0,0,0]]],




]

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

class Shape {
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


// 
let i = 0;
let colIndex;
let collisionY = false;
let collisionXr = false;
let collisionXl = false;

///////////////////////////////
// Função que move o objeto com as teclas do teclado

function move () {
    document.addEventListener('keydown', event => {
        if (event.key === "ArrowLeft" && obj[i].x > 0 && collisionXl === false) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].x = obj[i].x - 40;
            ctx.beginPath();
            ctx.fillStyle = cor;
            ctx.strokeStyle = cor;
            ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
            ctx.closePath();
            collisionXr = false;
            collisionY = false;
            checksCollision();
        }
        if (event.key === "ArrowRight" && obj[i].x < 360 && collisionXr === false) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].x = obj[i].x + 40;
            ctx.beginPath();
            ctx.fillStyle = cor;
            ctx.strokeStyle = cor;
            ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
            ctx.closePath();
            collisionXl = false;
            collisionY = false;
            checksCollision();
        }   
        if (event.key === "ArrowDown" && obj[i].y < 720 && collisionY === false) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            obj[i].y = obj[i].y + 40;
            ctx.beginPath();
            ctx.fillStyle = cor;
            ctx.strokeStyle = cor;
            ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
            ctx.closePath();
            checksCollision();
        }});
};



///////////////////////////////
// Função que "reseta" o move(), permitindo se aplicar a outro objeto

function stopMoving() {
    document.removeEventListener('keydown', event => {
         if (event.key === "ArrowLeft" && obj[i].x > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                obj[i].x = obj[i].x - 40;
                ctx.beginPath();
                ctx.fillStyle = cor;
                ctx.strokeStyle = cor;
                ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
                ctx.closePath();
        }
        if (event.key === "ArrowRight" && obj[i].x < 360) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                obj[i].x = obj[i].x + 40;
                ctx.beginPath();
                ctx.fillStyle = cor;
                ctx.strokeStyle = cor;
                ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
                ctx.closePath();
        }   
        if (event.key === "ArrowDown" && obj[i].y < 700) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                obj[i].y = obj[i].y + 40;
                ctx.beginPath();
                ctx.fillStyle = cor;
                ctx.strokeStyle = cor;
                ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
                ctx.closePath();
        }});
};

startGame();


///////////////////////////////
// Função que começa o jogo e continua adicionando cubos

function startGame () {
    addNewCube();
    dropping();
    move();
};

function addNewCube () {
    collisionY = false;
    collisionXr = false;
    collisionXl = false;
    let newCube = new Cubo (40);
    obj.push(newCube);
};

///////////////////////////////
// Função que checa a colisão

function checksCollision () {
    for (let j = 0; j < obj.length; j++){ 
        
        if (obj[i].y + 40 == obj[j].y && obj[i].x == obj[j].x){
            collisionY = true;
        } 

        if (obj[i].x + 40 == obj[j].x && obj[i].y == obj[j].y){
            collisionXr = true;
        } 

        if (obj[i].x - 40 == obj[j].x && obj[i].y == obj[j].y){
            collisionXl = true;
        }
    }
};


function dropping () {

    const startDropping = setInterval(function() { drop()}, 100);

    // MEXER DURANTE A DESCIDA
    
    function drop () {

            if (obj[i].y <= 720 && collisionY === false) {
                ctx.clearRect(obj[i].x, obj[i].y, canvas.width, canvas.height);
                ctx.beginPath();
                obj[i].y = obj[i].y + 40;
                ctx.fillStyle = cor;
                ctx.strokeStyle = cor;
                ctx.fillRect(obj[i].x, obj[i].y, 40, 40);
                ctx.closePath(); 
                checksCollision();
            }

                if (obj[i].y > 720 || collisionY === true) {
                    col = obj[i].y / 40 + 1;
                    colsFull[col - 1]+= 1;
                    ctx2.beginPath();
                    ctx2.fillStyle = cor;
                    ctx2.strokeStyle = cor;
                    ctx2.fillRect(obj[i].x, obj[i].y, 40, 40);
                    ctx2.closePath();
                    clearInterval(startDropping);
                    
                    checksCompletion();
                    i++;
                    stopMoving();
                    addNewCube();
                    dropping();
                }
    };

    function checksCompletion () {
        let colY = col * 40 - 40;
        

        for(let x = 0; x <= colsFull.length - 1; x++) {
            if(colsFull[x].length === 10){
                colsFull[x] = '';

                eraseLine();
                clearArrayLine();
                let imgData = canvas2.getContext('2d').getImageData(0, 0, 400, 800);
                canvas2.getContext('2d').putImageData(imgData, 0, 40);
            }
        }
        
        function clearArrayLine () {
            for (let g = 19; g > -1; g--) {
                console.log(g, colsFull[g], colsFull[g + 1])
                let indexCols = colsFull[g];
                colsFull[g + 1] += indexCols;
                colsFull[g] = '';
                
            }
            
        }

        function eraseLine () {
        
            for(let f = 0; f <= obj.length - 1; f++) {
    
                if (obj[f].y === colY) {
                    obj[f] = '';
                } else {
                    obj[f].y =  obj[f].y + 40;
                }
            }
                    
        }

     }
       
}



