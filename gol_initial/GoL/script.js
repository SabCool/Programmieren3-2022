let matrix = [];

matrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

let side = 50;

// Objektlisten
let grassArr = []; // Grasobjekte
let grazerArr = []; // Grasfresserobjekte

// function: randMatrix()
// parameter: länge und breite
// rückgabewert: array
function randomMatrix(width, height){
    let matrix = [];
    // doppelte for Schleife
    for(let y = 0; y < height; y++){
        // äußere Schleife: ein inneres Array erstellen
        matrix[y] = [];
        // innere Schleife: befüllen mit Zufallswert an der Stelle in Matrix
        for(let x = 0; x < width; x++){
            //Zufallswert
            let randomNumber = Math.round(Math.random() * 2);
            matrix[y][x] = randomNumber;
        }

    }
    return matrix;
}


function setup(){
    // matrix = randomMatrix(10, 20);
    frameRate(5);
    // width , height
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');

    // // Testen eines Gras-Objektes x = 1, y = 2;
    // let gras1 = new Grass(1, 2);
    // // für dieses Objekt herausfinden welche Nachbarfelder sind leer
    // let found = gras1.chooseCell();
    // console.log(found);

    // Hier alle Gras-Objekte mit der Matrix erstellen
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            // wenn wert 1, dann Gras-Objekt erstellen
            let wert = matrix[y][x];
            if(wert == 1){
                // nun gras-Objekt erstellen
                let gras = new Grass(x, y);
                // console.log(gras);
                grassArr.push(gras);
                
            }else if(wert == 2){
                let grazer = new Grazer(x, y);
                grazerArr.push(grazer);
            }
        }
    }
    // console.log("................");
    // console.log(grassArr);
    console.log(grazerArr);

}

function draw(){

    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            // Farbe festlegen
            if(matrix[y][x] == 0){ // leeres
                fill('#666666');
            }else if(matrix[y][x] == 1){ // Gras
                fill('#006600');
            }else if(matrix[y][x] == 2){ // Grasfresser
                fill('#666600');
            }

            // zeichne Rechteck
            rect(x * side, y * side, side, side);

            fill("white");
            // textSize(18);
            text(x +'/'+ y, x * side + side/2 , y * side + side/2);
   
        }
    }

    //für jedes Grasobjekt in der Grasliste 
    for(let i in grassArr){
        //grasObjekt holen
        let grObj = grassArr[i];
        // versuche dich zu vermehren
        grObj.mul();
    }
}