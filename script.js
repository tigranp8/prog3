function matrixGenerator(l) {
    var m = [];
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            var rand = random(0, 100);
            if (rand <= 30) {
                // Xot
                m[i][j] = 1;
            } else if (rand > 30 && rand <= 50) {
                // Xotaker
                m[i][j] = 2;
            } else if (rand > 50 && rand <= 60) {
                // Gishatich
                m[i][j] = 3;
            } else if (rand > 60 && rand <= 70) {
                // Nor kerpar 1
                m[i][j] = 4;
            } else if (rand > 70 && rand <= 80) {
                // Nor kerpar 2
                m[i][j] = 5;
            } else {
                // Datarkutyun
                m[i][j] = 0;
            }
        }
    }
    // Veradarcnel matrix
    return m;
}

var matrix;

var grassArr = [];
var GrassEaterArr = [];
var PredatorArr = [];
var GreatPredatorArr = [];
var HyperPredatorArr = [];

var side = 20;


function setup() {
    matrix = matrixGenerator(20);
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    //   loop();
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let ge = new GrassEater(x, y, 2);
                GrassEaterArr.push(ge);
            }
            else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y, 3);
                PredatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                let Greatpre = new GreatPredator(x, y, 4);                            //  ujex gishatic | xot,xotaker,gishatic 
                GreatPredatorArr.push(Greatpre);
            }
            else if (matrix[y][x] == 5) {
                let Hyperpre = new HyperPredator(x, y, 5);                            //  anxot gishatic | xotaker,gishatic,ujex gishatic
                HyperPredatorArr.push(Hyperpre);


            }
        }
    }
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                // noStroke();
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }

    for (let i in GrassEaterArr) {
        GrassEaterArr[i].eat();
    }
    for (let i in PredatorArr) {
        PredatorArr[i].move();
    }
    for (let i in GreatPredatorArr) {
        GreatPredatorArr[i].move();
    }
    for (i in HyperPredatorArr) {
        HyperPredatorArr[i].move();
    }

}