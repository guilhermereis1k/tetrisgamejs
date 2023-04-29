

let actualObjectX = [];
let actualObjectY = [];
let objectsY = [];
let objectsX = [];

///////////////////////////////
// Função que checa a colisão com a borda do canvas

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
                    }

        } }
    }


}