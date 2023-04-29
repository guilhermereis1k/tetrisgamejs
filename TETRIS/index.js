const canvas = document.getElementById("tela");
const ctx = canvas.getContext('2d');

const canvas2 = document.getElementById("tela2");
const ctx2 = canvas2.getContext('2d', {willReadFrequently: true});

const canvas3 = document.getElementById("tela2");
const ctx3 = canvas2.getContext('2d');

ctx3.width = this.width;
ctx3.height = this.height;

ctx.width = this.width;
ctx.height = this.height;

ctx2.width = this.width;
ctx2.height = this.height;

ctx2.willReadFrequently = true;

let going = true;
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

// 
let i = 0;
let colIndex;
let collisionY = false;
let collisionYg = false;
let collisionXr = false;
let collisionXl = false;

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
            obj[i].rotate();
        }
});
};


function dropping () {

    const startDropping = setInterval(function() { drop()}, 200);

    // MEXER DURANTE A DESCIDA
    function drop () {
        
            if (obj[i].y <= 720 || obj[i].y2 <= 720 || obj[i].y3 <= 720 || obj[i].y4 <= 720 || going == true) {
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
                    lowestNum = 0;
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
                        if (obj[i].shapeNum[cols] == 0){
                            console.log(obj[i].shapeNum[cols])
                        }
                        else {
                        colsFull[col - cols - 1] += obj[i].shapeNum[cols];
                        }
                    }
                    allObj.push(obj[i]);
                    console.log(rotateIndex);
                    obj[i] = [];
                    stopMoving();
                    clearInterval(startDropping);
                    checksCompletion();
                    addNewShape(40,40);
                    console.log(colsFull)
                    i++;
                    if (going == true) {
                        dropping();
                    }
                    

            }
    };

    let hasBeenErased = 0;

    function checksCompletion () {
        let colY = col * 40 - 40;

        for(let x = 0; x <= colsFull.length - 1; x++) {
            if(colsFull[x].length > 10){
                let toBeErased = x;
                toBeErased = toBeErased * 40;
                elementX = 800 - toBeErased;
                elementX = elementX + 40;
                colsFull[x] = '';
                
                hasBeenErased++;
                    let imgData = ctx2.getImageData(0, 0, 400, toBeErased);
                    ctx2.putImageData(imgData, 0, 40, 0, 0, 400, 800);
            }
            if(x == 19 && hasBeenErased > 0){
                for(let erasing = 0; erasing < hasBeenErased; erasing++){
                    clearArrayLine();
                    eraseLine();
                }   
            }
        }
        
        function clearArrayLine () {
            console.log("clearing")
            console.log(colsFull[x])
            for (let g = 19; g > -1; g--) {
                let indexCols = colsFull[g];
                if(colsFull[g].includes('1') === true){
                colsFull[g + 1] += indexCols;
                colsFull[g] = '';
                }
            }     
        }

        function eraseLine () {
            for(let f = 0; f <= allObj.length - 1; f++) {
                if (allObj[f].y === colY) {
                    allObj[f].y = 99999;
                    allObj[f].y = 99999;
                } else {
                    allObj[f].y =  allObj[f].y + 40;
                }

                if (allObj[f].y2 === colY) {
                    allObj[f].y2 = 99999;
                    allObj[f].x2 = 99999;
                } else {
                    allObj[f].y2 =  allObj[f].y2 + 40;
                }

                if (allObj[f].y3 === colY) {
                    allObj[f].y3 = 99999;
                    allObj[f].x3 = 99999;
                } else {
                    allObj[f].y3 =  allObj[f].y3 + 40;
                }

                if (allObj[f].y4 === colY) {
                    allObj[f].y4 = 99999;
                    allObj[f].x4 = 99999;
                } else {              
                    allObj[f].y4 =  allObj[f].y4 + 40;
                }
            }
                    
        }

     }
       
}
//ctx2.drawImage(img, 0,0,400,800);
//let imgData = ctx2.getImageData(0, 0, 400, 680);

//ctx2.putImageData(imgData, 0, 40, 0, 0, 400, 800);

testing();