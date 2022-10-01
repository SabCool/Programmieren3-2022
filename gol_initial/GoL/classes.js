// Klasse Gras-Objekt
// Sicht auf Nachbarfelder
// Vermehrung nach 6 Runden
class Grass{

    constructor(x, y){
        // Position
        this.x = x;
        this.y = y;
        // Rundenzähler
        this.multiply = 0;
        this.directions = [
            // Positionen der Nachbarfelder
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    // Methoden - Verhalten
    chooseCell(){
        // alle leeren Nachbarfelder speichern in found-array
        let found = [];

        // for-Schleife durch directions-array
        for(let i in this.directions){
            // i - index
            // Position des Nachbarfeldes - Array
            let posCellArr = this.directions[i];
            let x = posCellArr[0];
            let y = posCellArr[1];
            // Spielfeldgrenzen festlegen
            if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[y].length){
                // überprüfen, ob 0 oder 1 als Wert in Matrix steht
                // Wert = 0 - leeres Feld
                if( matrix[y][x] == 0 ){
                    // leeres Feld wir speichern das
                    found.push(posCellArr);
                }
            }
        }
        return found;   
    }

    // vermehren
    mul(){
        this.multiply++;
        if(this.multiply >= 6){
            // nun wird sich vermehrt, wenn ein leeres Nachbarfeld vorhanden ist
            // console.log("gras objekt soll sich jetz vermehren");
            // leere Nachbarfelder finden
            let emptyCells = this.chooseCell();
            // console.log("Leere Nachbarfelder: ", emptyCells);
            
            // ein zufälliges leeres Nachbarfeld finden
            let theChosenField = random(emptyCells);
            // console.log("Gewähltes Nachbarfeld: ", theChosenField);

            if(theChosenField){
                // hole Position des Nachbarfeldes
                let newX = theChosenField[0];
                let newY = theChosenField[1];
                // neues Gras-Objekt erstellen an der Position des Nachbarfeldes
                let newGrassObj = new Grass(newX, newY);
                // console.log("Neues Grasobjekt erstellt: ", newGrassObj);
                
                // Grasobj. dem grassArr hinzufügen
                grassArr.push(newGrassObj);
                // matrix aktualisieren ... 
                //an der Stelle Nachbarfeld statt 0 eine 1 gespeichert
                matrix[newY][newX] = 1;    
                
            }
            // rundenzähler zurücksetzen
            this.multiply = 0;      
        }
    }
}


// Grasfresser Klasse
class Grazer{
// Attribute - Eigenschaften

// Position
// rundenzähler
// Sicht auf die Nachbarfelder

// neue Attribute
// Lebensenergie - energy

    constructor(x, y){
        // Position
        this.x = x;
        this.y = y;
        // Rundenzähler
        this.multiply = 0;
        // Lebensenergie
        this.energy = 8;
        this.directions = [];
    }

    getNewCoordinates(){
        this.directions = [
            // Positionen der Nachbarfelder
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }



// Methoden - Verhalten
    // Nachbarfelder ansehen
    chooseCell(symbol){
        // hole Positionen der aktuelle Nachbarfelder
        this.getNewCoordinates();
        


    }


// essen - eat()
// vermehren sich - mul()
// bewegen - move()
// sterben - die()

}

