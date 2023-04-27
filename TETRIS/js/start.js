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
    selectShape();
};

function selectShape () {
    let shapeRandomNumber = Math.floor(Math.random() * (6) + 1);
    console.log(shapeRandomNumber)
    switch (shapeRandomNumber){
        case 1:
        let newL = new ShapeL(x,y);
        obj.push(newL);
        break;
        case 2:
        let newLreverse = new ShapeLreverse(x,y);
        obj.push(newLreverse);
        break;
        case 3:
        let newS = new ShapeS(x,y);
        obj.push(newS);
        break;
        case 4:
        let newSreverse = new ShapeSreverse(x,y);
        obj.push(newSreverse);
        break;
        case 5:
        let newT = new ShapeT(x,y);
        obj.push(newT);
        break;
        case 6:
        let newI = new ShapeI(x,y);
        obj.push(newI);
        break;
        case 7:
        let newSquare = new ShapeSquare(x,y);
        obj.push(newSquare);
        break;
    }
}