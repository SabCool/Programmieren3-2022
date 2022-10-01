class Grass extends LivingCreature{

    mul(){
        this.multiply++;
        // wenn 5 Runden vorbei 
        if(this.multiply >= 5){
            let emptyFields = this.chooseFields(0);
            if(emptyFields.length > 0){
                let newPos = random(emptyFields);
                let newX = newPos[0];
                let newY = newPos[1];
                let grasObj = new Grass(newX, newY);
                grassArr.push(grasObj);
                matrix[newY][newX] = 1;
            }
            this.multiply = 0;
        }
    }
}